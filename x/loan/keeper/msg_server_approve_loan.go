package keeper

import (
	"context"

	"loan/x/loan/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveLoan(goCtx context.Context, msg *types.MsgApproveLoan) (*types.MsgApproveLoanResponse, error) {
	//unwrap
	ctx := sdk.UnwrapSDKContext(goCtx)
	//get loan
	loan, found := k.GetLoan(ctx, msg.Id)
	//check if loan exists
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "key %d doesn't exist", msg.Id)
	}

	//daveozoalor@gmail.com
	//udemy.com/user/davepartner

	//check if the loan is in the correct state ("requested") for approval
	if loan.State != "requested" {
		//return error
		return nil, errorsmod.Wrapf(types.ErrWrongLoanState, "%v", loan.State)
	}

	//convert the lenders Bech32 address from string format to an SDK account address
	borrower, _ := sdk.AccAddressFromBech32(loan.Borrower)
	//convert the lenders Bech32 address from string format to an SDK account address
	lender, _ := sdk.AccAddressFromBech32(msg.Creator)

	//parse the loan amount from a string to a coins object
	amount, err := sdk.ParseCoinNormalized(loan.Amount)
	if err != nil {
		//return an error if the loan amount is not a valid coin
		return nil, errorsmod.Wrap(types.ErrWrongLoanState, "Cannot parse coins in loan amount")

	}

	// Wrap amount in sdk.Coins to match the SendCoins parameter type
	amountCoins := sdk.NewCoins(amount)

	//Transfer the loan amount from the lender's account to the borrower's account
	err = k.bankKeeper.SendCoins(ctx, lender, borrower, amountCoins)
	if err != nil {
		//return an error if the fund transfer fails
		return nil, err
	}

	//Set the lenders addres in the loan details
	loan.Lender = msg.Creator

	//update the loan state to "approved" to indicate it has been successfully approved
	loan.State = "approved"

	//update the loan information bck to the blockchain state
	k.SetLoan(ctx, loan)

	//reurn a response confirming that the loan was successfully approved
	return &types.MsgApproveLoanResponse{}, nil
}
