package types

// DONTCOVER

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/loan module sentinel errors
var (
	ErrInvalidSigner  = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrSample         = sdkerrors.Register(ModuleName, 1101, "sample error")
	ErrWrongLoanState = sdkerrors.Register(ModuleName, 1001, "invalid loan state")
	ErrDeadline       = sdkerrors.Register(ModuleName, 1010, "deadline not reached")
)
