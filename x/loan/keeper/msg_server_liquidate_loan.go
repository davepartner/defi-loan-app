package keeper

import (
	"context"
	"strconv"

	"loan/x/loan/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) LiquidateLoan(goCtx context.Context, msg *types.MsgLiquidateLoan) (*types.MsgLiquidateLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//retrieve the loan from the blockchain state by ID
	loan, found := k.GetLoan(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "key %d doesnt exist", msg.Id)
	}

	//Ensure that the message sender is the lender
	if loan.Lender != msg.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Cannot liquidate: not the lender")
	}

	//Ensure that the loan is in the  "approved" state for liquidation
	if loan.State != "approved" {
		return nil, errorsmod.Wrapf(types.ErrWrongLoanState, "%v", loan.State)
	}

	//convert the lender's address from bech32 format to an SDK-Compartible accAddress
	lender, _ := sdk.AccAddressFromBech32(loan.Lender)

	//Parse the collateral from a string to a coins object
	collateral, _ := sdk.ParseCoinsNormalized(loan.Collateral)

	//Parse the loan's deadline from string format to an integer
	deadline, err := strconv.ParseInt(loan.Deadline, 10, 64)
	if err != nil {
		//An error should be handled gracefully in production
		panic(err)
	}

	//Check if the current block height is past the loan's deadline
	if ctx.BlockHeight() < deadline {
		//Return an error if liquidation is atempted before the deadline
		return nil, errorsmod.Wrap(types.ErrDeadline, "Cannot liquidate before deadline")
	}

	//Transfer collateral from the module account to the ledner's account
	err = k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, lender, collateral)
	if err != nil {
		//An error should be handled gracefully in production
		return nil, err
	}

	//Update the loan state to "liquidated" to mark the loan as liquidated
	loan.State = "liquidated"

	//Save the updated loan information to the blockchain
	k.SetLoan(ctx, loan)



	//return a response indicatiing successfully liquidation of the loan
	return &types.MsgLiquidateLoanResponse{}, nil
}
