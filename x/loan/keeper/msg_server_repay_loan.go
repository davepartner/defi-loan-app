package keeper

import (
	"context"

	"loan/x/loan/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) RepayLoan(goCtx context.Context, msg *types.MsgRepayLoan) (*types.MsgRepayLoanResponse, error) {
	//unwrap the generic context into SDK-specific context for the state interactions
	ctx := sdk.UnwrapSDKContext(goCtx)

	//Retrieve the loan from the state storage using the loan ID
	loan, found := k.GetLoan(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Key %d doesnt exist", msg.Id)
	}

	//Ensure that the loan is in the "approved" state before repayment
	if loan.State != "approved" {
		//return an error
		return nil, errorsmod.Wrapf(types.ErrWrongLoanState, "%v", loan.State)
	}

	//Convert lender's bech32 address into a sdk.AccAddress
	lender, err := sdk.AccAddressFromBech32(loan.Lender)

	//Convert borrower's bech32 address into a sdk.AccAddress
	borrower, err := sdk.AccAddressFromBech32(loan.Borrower)

	//verify that the message creator is the borrower
	if msg.Creator != loan.Borrower {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Cannot repay: not the borrower")
	}

	//Parse the loan amount string into a Coins object for fund transfer
	amount, err := sdk.ParseCoinsNormalized(loan.Amount)

	//Parse the loan fee into a COins object for fund transfer
	fee, err := sdk.ParseCoinsNormalized(loan.Fee)

	//parse the loan collateral into a COins object for returning collateral
	collateral, _ := sdk.ParseCoinsNormalized(loan.Collateral)

	//Transfer the loan amount from the borrower to the lender
	err = k.bankKeeper.SendCoins(ctx, borrower, lender, amount)
	if err != nil {
		return nil, err

	}

	//Transfer the loan fee from borrower to lender
	err = k.bankKeeper.SendCoins(ctx, borrower, lender, fee)
	if err != nil {
		return nil, err
	}

	//return the collateral from the modle account to the borrower
	err = k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, borrower, collateral)
	if err != nil {
		return nil, err
	}

	//set the loan state to "repaid"
	loan.State = "repaid"

	//update the loan in the Blockchain state
	k.SetLoan(ctx, loan)

	//return a response indicating successful repayment of the loan
	return &types.MsgRepayLoanResponse{}, nil
}
