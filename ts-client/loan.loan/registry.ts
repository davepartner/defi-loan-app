import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRequestLoan } from "./types/loan/loan/tx";
import { MsgUpdateParamsResponse } from "./types/loan/loan/tx";
import { MsgApproveLoanResponse } from "./types/loan/loan/tx";
import { MsgLiquidateLoanResponse } from "./types/loan/loan/tx";
import { MsgLiquidateLoan } from "./types/loan/loan/tx";
import { QueryParamsRequest } from "./types/loan/loan/query";
import { QueryAllLoanResponse } from "./types/loan/loan/query";
import { GenesisState } from "./types/loan/loan/genesis";
import { QueryGetLoanRequest } from "./types/loan/loan/query";
import { MsgCancelLoan } from "./types/loan/loan/tx";
import { MsgApproveLoan } from "./types/loan/loan/tx";
import { QueryAllLoanRequest } from "./types/loan/loan/query";
import { MsgCancelLoanResponse } from "./types/loan/loan/tx";
import { QueryParamsResponse } from "./types/loan/loan/query";
import { QueryGetLoanResponse } from "./types/loan/loan/query";
import { Loan } from "./types/loan/loan/loan";
import { MsgRepayLoan } from "./types/loan/loan/tx";
import { MsgRepayLoanResponse } from "./types/loan/loan/tx";
import { MsgUpdateParams } from "./types/loan/loan/tx";
import { MsgRequestLoanResponse } from "./types/loan/loan/tx";
import { Params } from "./types/loan/loan/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/loan.loan.MsgRequestLoan", MsgRequestLoan],
    ["/loan.loan.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/loan.loan.MsgApproveLoanResponse", MsgApproveLoanResponse],
    ["/loan.loan.MsgLiquidateLoanResponse", MsgLiquidateLoanResponse],
    ["/loan.loan.MsgLiquidateLoan", MsgLiquidateLoan],
    ["/loan.loan.QueryParamsRequest", QueryParamsRequest],
    ["/loan.loan.QueryAllLoanResponse", QueryAllLoanResponse],
    ["/loan.loan.GenesisState", GenesisState],
    ["/loan.loan.QueryGetLoanRequest", QueryGetLoanRequest],
    ["/loan.loan.MsgCancelLoan", MsgCancelLoan],
    ["/loan.loan.MsgApproveLoan", MsgApproveLoan],
    ["/loan.loan.QueryAllLoanRequest", QueryAllLoanRequest],
    ["/loan.loan.MsgCancelLoanResponse", MsgCancelLoanResponse],
    ["/loan.loan.QueryParamsResponse", QueryParamsResponse],
    ["/loan.loan.QueryGetLoanResponse", QueryGetLoanResponse],
    ["/loan.loan.Loan", Loan],
    ["/loan.loan.MsgRepayLoan", MsgRepayLoan],
    ["/loan.loan.MsgRepayLoanResponse", MsgRepayLoanResponse],
    ["/loan.loan.MsgUpdateParams", MsgUpdateParams],
    ["/loan.loan.MsgRequestLoanResponse", MsgRequestLoanResponse],
    ["/loan.loan.Params", Params],
    
];

export { msgTypes }