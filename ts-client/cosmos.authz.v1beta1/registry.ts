import { GeneratedType } from "@cosmjs/proto-signing";
import { EventGrant } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/event";
import { QueryGrantsRequest } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/query";
import { QueryGrantsResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/query";
import { MsgRevoke } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/tx";
import { EventRevoke } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/event";
import { Grant } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/authz";
import { QueryGranterGrantsRequest } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/query";
import { MsgGrant } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/tx";
import { MsgGrantResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/tx";
import { GenesisState } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/genesis";
import { GrantQueueItem } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/authz";
import { MsgExecResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/tx";
import { MsgRevokeResponse } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/tx";
import { GenericAuthorization } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/authz";
import { GrantAuthorization } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/authz";
import { MsgExec } from "./types/../../../../../Users/mac/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/authz/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.authz.v1beta1.EventGrant", EventGrant],
    ["/cosmos.authz.v1beta1.QueryGrantsRequest", QueryGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGrantsResponse", QueryGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", QueryGranteeGrantsResponse],
    ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],
    ["/cosmos.authz.v1beta1.EventRevoke", EventRevoke],
    ["/cosmos.authz.v1beta1.Grant", Grant],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsRequest", QueryGranterGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsResponse", QueryGranterGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", QueryGranteeGrantsRequest],
    ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],
    ["/cosmos.authz.v1beta1.MsgGrantResponse", MsgGrantResponse],
    ["/cosmos.authz.v1beta1.GenesisState", GenesisState],
    ["/cosmos.authz.v1beta1.GrantQueueItem", GrantQueueItem],
    ["/cosmos.authz.v1beta1.MsgExecResponse", MsgExecResponse],
    ["/cosmos.authz.v1beta1.MsgRevokeResponse", MsgRevokeResponse],
    ["/cosmos.authz.v1beta1.GenericAuthorization", GenericAuthorization],
    ["/cosmos.authz.v1beta1.GrantAuthorization", GrantAuthorization],
    ["/cosmos.authz.v1beta1.MsgExec", MsgExec],
    
];

export { msgTypes }