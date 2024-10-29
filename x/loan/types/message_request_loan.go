package types

import (
	"strconv"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRequestLoan{}

func NewMsgRequestLoan(creator string, amount string, fee string, collateral string, deadline string) *MsgRequestLoan {
	return &MsgRequestLoan{
		Creator:    creator,
		Amount:     amount,
		Fee:        fee,
		Collateral: collateral,
		Deadline:   deadline,
	}
}

//ValidateBasic(): checks whether the message fields  from MsgRequestLoan are valid
func (msg *MsgRequestLoan) ValidateBasic() error {
	//Validate the creator address using Bech32 format
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	//Parse the amount into a coins object, normalized for any validation
	amount, _ := sdk.ParseCoinsNormalized(msg.Amount)
	//Check if the amount is valid
	if !amount.IsValid() {
		//Return an error if the amount is invalid
		return errorsmod.Wrap(sdkerrors.ErrInvalidCoins, "Amount is not a valid Coins object")
	}

	//Parse the fee into a coins object, normalized for any validation
	fee, _ := sdk.ParseCoinsNormalized(msg.Fee)
	//Check if the fee is valid
	if !fee.IsValid() {
		//Return an error if the fee is invalid
		return errorsmod.Wrap(sdkerrors.ErrInvalidCoins, "Fee is not a valid Coins object")
	}

	//Parse the deadline string to an integer (base 10, 64 bit)
	deadline, err := strconv.ParseUint(msg.Deadline, 10, 64)

	if err != nil {
		//Return an error if the deadline is invalid
		return errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "Deadline is not an integer")
	}

	//Check if the deadline is valid
	if deadline <= 0 {
		//return an error if the deadline is invalid
		return errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "Deadline should be a positive integer")
	}

	//Parse the collaterla into a Coins object
	collateral, _ := sdk.ParseCoinsNormalized(msg.Collateral)
	//check if the collateral is valid
	if !collateral.IsValid() {
		//Return an error if the collateral is invalid	
		return errorsmod.Wrap(sdkerrors.ErrInvalidCoins, "Collateral is not a valid Coins object")
	}

	//check if collateral is empty
	if collateral.Empty() {
		//Return an error if the collateral is empty
		return errorsmod.Wrap(sdkerrors.ErrInvalidCoins, "Collateral is empty")
	}

	//if all validations pass return a nil
	return nil
}
