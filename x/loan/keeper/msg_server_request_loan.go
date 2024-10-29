package keeper

import (
	"context"

	"loan/x/loan/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RequestLoan(goCtx context.Context, msg *types.MsgRequestLoan) (*types.MsgRequestLoanResponse, error) {
	//unwrap the context into an SDK-specific context
	ctx := sdk.UnwrapSDKContext(goCtx)

	//Create a new loan object using the data from the MsgRequestLoan message
	var loan = types.Loan{
		Amount: msg.Amount, //loan amount is set from the message
		Fee:    msg.Fee, //Loan fee is set from the message
		Collateral: msg.Collateral, //Loan collateral is set from the message
		Deadline: msg.Deadline, //Loan deadline is set from the message
		State: "requested", //Loan state is set to "requested" as the initial state
		Borrower: msg.Creator, //Loan borrower is set from the message
	}
	//Convert the borrower's Bech32 address string into a AccAddress (account address)
	borrower, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		//Panic if the creator address is invalid
		//In production code, avoid panics.
		panic(err)
	
	}

	//Parse the collateral string into a coins object to represent the amount of collateral
	collateral, err := sdk.ParseCoinsNormalized(msg.Collateral)
	if err != nil {
		//Panic if the collateral is invalid
		//In production code, avoid panics.
		panic(err)
	}

	//Transfer the collateral from the borrower's account to the loan module account
	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, borrower, types.ModuleName, collateral)
	if sdkError != nil {
		//Panic if the collateral transfer fails
		//In production code, avoid panics.
		return nil, sdkError
	}

	//Append the loan to the state, effectively storing the new loan in the blockchain
	k.AppendLoan(
		ctx,
		loan,
	)

	//Return an empty response if everything was successful
	//In production code, you would return the loan ID instead of an empty response
	return &types.MsgRequestLoanResponse{}, nil
}
