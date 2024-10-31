import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePermanentLockedAccount } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { BaseVestingAccount } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { ContinuousVestingAccount } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { DelayedVestingAccount } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { PeriodicVestingAccount } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { PermanentLockedAccount } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { Period } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePermanentLockedAccountResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccountResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccount } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccountResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/vesting/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", MsgCreatePermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.BaseVestingAccount", BaseVestingAccount],
    ["/cosmos.vesting.v1beta1.ContinuousVestingAccount", ContinuousVestingAccount],
    ["/cosmos.vesting.v1beta1.DelayedVestingAccount", DelayedVestingAccount],
    ["/cosmos.vesting.v1beta1.PeriodicVestingAccount", PeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.PermanentLockedAccount", PermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.Period", Period],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse", MsgCreatePermanentLockedAccountResponse],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", MsgCreatePeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse", MsgCreatePeriodicVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse", MsgCreateVestingAccountResponse],
    
];

export { msgTypes }