package keeper

import (
	"context"

	"loan/x/loan/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// CancelLoan() handles the cancellationof a loan
func (k msgServer) CancelLoan(goCtx context.Context, msg *types.MsgCancelLoan) (*types.MsgCancelLoanResponse, error) {
	//UnwrapSDKContext unwraps the SDK context.
	ctx := sdk.UnwrapSDKContext(goCtx)

	//Retrieve the loan from the Blockchain state using the loan id
	loan, found := k.GetLoan(ctx, msg.Id)
	if !found {
		//If the loan is not found, return an error
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "loan with id %d not found", msg.Id)
	}

	//check if the message creator is the borrower of the loan
	if loan.Borrower != msg.Creator {
		//If the message creator is not the borrower of the loan, return an error
		return nil, errorsmod.Wrapf(sdkerrors.ErrUnauthorized, "Cannot canel: you are not the borrower")
	}

	//Ensure that the loan is in the "requested" state, meaning it hasnt been approved or repaid yet
	if loan.State != "requested" {
		//Return an error if the loan is not in the "requested" state
		return nil, errorsmod.Wrapf(types.ErrWrongLoanState, "%v", loan.State)
	}

	//Convert the borrower's Bech32 address to a sdk.AccAddress (account address)
	borrower, _ := sdk.AccAddressFromBech32(loan.Borrower)

	//Parse the collateral string into a coins object to represent the amount of the collateral
	collateral, _ := sdk.ParseCoinsNormalized(loan.Collateral)

	//Return the collateraal to the borrower by transfering coins from the module to the borrower's account
	err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, borrower, collateral)
	if err != nil {
		//Return an error if the coins could not be transferred
		return nil, err
	}

	//update the loan state to "canceled" to indicate that the loan has been cancelled
	loan.State = "canceled"

	//Save the update loan back to the Blockchain state
	k.SetLoan(ctx, loan)

	//return a response indidcating that the loan has been cancelled
	return &types.MsgCancelLoanResponse{}, nil
}
