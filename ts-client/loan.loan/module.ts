// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
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


export { MsgRequestLoan, MsgUpdateParamsResponse, MsgApproveLoanResponse, MsgLiquidateLoanResponse, MsgLiquidateLoan, QueryParamsRequest, QueryAllLoanResponse, GenesisState, QueryGetLoanRequest, MsgCancelLoan, MsgApproveLoan, QueryAllLoanRequest, MsgCancelLoanResponse, QueryParamsResponse, QueryGetLoanResponse, Loan, MsgRepayLoan, MsgRepayLoanResponse, MsgUpdateParams, MsgRequestLoanResponse, Params };

type sendMsgRequestLoanParams = {
  value: MsgRequestLoan,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgApproveLoanResponseParams = {
  value: MsgApproveLoanResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgLiquidateLoanResponseParams = {
  value: MsgLiquidateLoanResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgLiquidateLoanParams = {
  value: MsgLiquidateLoan,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryAllLoanResponseParams = {
  value: QueryAllLoanResponse,
  fee?: StdFee,
  memo?: string
};

type sendGenesisStateParams = {
  value: GenesisState,
  fee?: StdFee,
  memo?: string
};

type sendQueryGetLoanRequestParams = {
  value: QueryGetLoanRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgCancelLoanParams = {
  value: MsgCancelLoan,
  fee?: StdFee,
  memo?: string
};

type sendMsgApproveLoanParams = {
  value: MsgApproveLoan,
  fee?: StdFee,
  memo?: string
};

type sendQueryAllLoanRequestParams = {
  value: QueryAllLoanRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgCancelLoanResponseParams = {
  value: MsgCancelLoanResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryGetLoanResponseParams = {
  value: QueryGetLoanResponse,
  fee?: StdFee,
  memo?: string
};

type sendLoanParams = {
  value: Loan,
  fee?: StdFee,
  memo?: string
};

type sendMsgRepayLoanParams = {
  value: MsgRepayLoan,
  fee?: StdFee,
  memo?: string
};

type sendMsgRepayLoanResponseParams = {
  value: MsgRepayLoanResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendMsgRequestLoanResponseParams = {
  value: MsgRequestLoanResponse,
  fee?: StdFee,
  memo?: string
};

type sendParamsParams = {
  value: Params,
  fee?: StdFee,
  memo?: string
};


type msgRequestLoanParams = {
  value: MsgRequestLoan,
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
};

type msgApproveLoanResponseParams = {
  value: MsgApproveLoanResponse,
};

type msgLiquidateLoanResponseParams = {
  value: MsgLiquidateLoanResponse,
};

type msgLiquidateLoanParams = {
  value: MsgLiquidateLoan,
};

type queryParamsRequestParams = {
  value: QueryParamsRequest,
};

type queryAllLoanResponseParams = {
  value: QueryAllLoanResponse,
};

type genesisStateParams = {
  value: GenesisState,
};

type queryGetLoanRequestParams = {
  value: QueryGetLoanRequest,
};

type msgCancelLoanParams = {
  value: MsgCancelLoan,
};

type msgApproveLoanParams = {
  value: MsgApproveLoan,
};

type queryAllLoanRequestParams = {
  value: QueryAllLoanRequest,
};

type msgCancelLoanResponseParams = {
  value: MsgCancelLoanResponse,
};

type queryParamsResponseParams = {
  value: QueryParamsResponse,
};

type queryGetLoanResponseParams = {
  value: QueryGetLoanResponse,
};

type loanParams = {
  value: Loan,
};

type msgRepayLoanParams = {
  value: MsgRepayLoan,
};

type msgRepayLoanResponseParams = {
  value: MsgRepayLoanResponse,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type msgRequestLoanResponseParams = {
  value: MsgRequestLoanResponse,
};

type paramsParams = {
  value: Params,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgRequestLoan({ value, fee, memo }: sendMsgRequestLoanParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRequestLoan: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgRequestLoan({ value: MsgRequestLoan.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRequestLoan: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgApproveLoanResponse({ value, fee, memo }: sendMsgApproveLoanResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgApproveLoanResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgApproveLoanResponse({ value: MsgApproveLoanResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgApproveLoanResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgLiquidateLoanResponse({ value, fee, memo }: sendMsgLiquidateLoanResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgLiquidateLoanResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgLiquidateLoanResponse({ value: MsgLiquidateLoanResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgLiquidateLoanResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgLiquidateLoan({ value, fee, memo }: sendMsgLiquidateLoanParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgLiquidateLoan: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgLiquidateLoan({ value: MsgLiquidateLoan.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgLiquidateLoan: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAllLoanResponse({ value, fee, memo }: sendQueryAllLoanResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAllLoanResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAllLoanResponse({ value: QueryAllLoanResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAllLoanResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.genesisState({ value: GenesisState.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryGetLoanRequest({ value, fee, memo }: sendQueryGetLoanRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryGetLoanRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryGetLoanRequest({ value: QueryGetLoanRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryGetLoanRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCancelLoan({ value, fee, memo }: sendMsgCancelLoanParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelLoan: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgCancelLoan({ value: MsgCancelLoan.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelLoan: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgApproveLoan({ value, fee, memo }: sendMsgApproveLoanParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgApproveLoan: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgApproveLoan({ value: MsgApproveLoan.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgApproveLoan: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAllLoanRequest({ value, fee, memo }: sendQueryAllLoanRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAllLoanRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAllLoanRequest({ value: QueryAllLoanRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAllLoanRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCancelLoanResponse({ value, fee, memo }: sendMsgCancelLoanResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelLoanResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgCancelLoanResponse({ value: MsgCancelLoanResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelLoanResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryGetLoanResponse({ value, fee, memo }: sendQueryGetLoanResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryGetLoanResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryGetLoanResponse({ value: QueryGetLoanResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryGetLoanResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendLoan({ value, fee, memo }: sendLoanParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendLoan: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.loan({ value: Loan.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendLoan: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRepayLoan({ value, fee, memo }: sendMsgRepayLoanParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRepayLoan: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgRepayLoan({ value: MsgRepayLoan.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRepayLoan: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRepayLoanResponse({ value, fee, memo }: sendMsgRepayLoanResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRepayLoanResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgRepayLoanResponse({ value: MsgRepayLoanResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRepayLoanResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRequestLoanResponse({ value, fee, memo }: sendMsgRequestLoanResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRequestLoanResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgRequestLoanResponse({ value: MsgRequestLoanResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRequestLoanResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.params({ value: Params.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgRequestLoan({ value }: msgRequestLoanParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgRequestLoan", value: MsgRequestLoan.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRequestLoan: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		msgApproveLoanResponse({ value }: msgApproveLoanResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgApproveLoanResponse", value: MsgApproveLoanResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgApproveLoanResponse: Could not create message: ' + e.message)
			}
		},
		
		msgLiquidateLoanResponse({ value }: msgLiquidateLoanResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgLiquidateLoanResponse", value: MsgLiquidateLoanResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgLiquidateLoanResponse: Could not create message: ' + e.message)
			}
		},
		
		msgLiquidateLoan({ value }: msgLiquidateLoanParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgLiquidateLoan", value: MsgLiquidateLoan.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgLiquidateLoan: Could not create message: ' + e.message)
			}
		},
		
		queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.QueryParamsRequest", value: QueryParamsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryAllLoanResponse({ value }: queryAllLoanResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.QueryAllLoanResponse", value: QueryAllLoanResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAllLoanResponse: Could not create message: ' + e.message)
			}
		},
		
		genesisState({ value }: genesisStateParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.GenesisState", value: GenesisState.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisState: Could not create message: ' + e.message)
			}
		},
		
		queryGetLoanRequest({ value }: queryGetLoanRequestParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.QueryGetLoanRequest", value: QueryGetLoanRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryGetLoanRequest: Could not create message: ' + e.message)
			}
		},
		
		msgCancelLoan({ value }: msgCancelLoanParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgCancelLoan", value: MsgCancelLoan.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelLoan: Could not create message: ' + e.message)
			}
		},
		
		msgApproveLoan({ value }: msgApproveLoanParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgApproveLoan", value: MsgApproveLoan.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgApproveLoan: Could not create message: ' + e.message)
			}
		},
		
		queryAllLoanRequest({ value }: queryAllLoanRequestParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.QueryAllLoanRequest", value: QueryAllLoanRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAllLoanRequest: Could not create message: ' + e.message)
			}
		},
		
		msgCancelLoanResponse({ value }: msgCancelLoanResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgCancelLoanResponse", value: MsgCancelLoanResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelLoanResponse: Could not create message: ' + e.message)
			}
		},
		
		queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.QueryParamsResponse", value: QueryParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		queryGetLoanResponse({ value }: queryGetLoanResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.QueryGetLoanResponse", value: QueryGetLoanResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryGetLoanResponse: Could not create message: ' + e.message)
			}
		},
		
		loan({ value }: loanParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.Loan", value: Loan.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Loan: Could not create message: ' + e.message)
			}
		},
		
		msgRepayLoan({ value }: msgRepayLoanParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgRepayLoan", value: MsgRepayLoan.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRepayLoan: Could not create message: ' + e.message)
			}
		},
		
		msgRepayLoanResponse({ value }: msgRepayLoanResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgRepayLoanResponse", value: MsgRepayLoanResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRepayLoanResponse: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		msgRequestLoanResponse({ value }: msgRequestLoanResponseParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.MsgRequestLoanResponse", value: MsgRequestLoanResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRequestLoanResponse: Could not create message: ' + e.message)
			}
		},
		
		params({ value }: paramsParams): EncodeObject {
			try {
				return { typeUrl: "/loan.loan.Params", value: Params.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Params: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			LoanLoan: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;