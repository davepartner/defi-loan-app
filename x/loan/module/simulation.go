package loan

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"loan/testutil/sample"
	loansimulation "loan/x/loan/simulation"
	"loan/x/loan/types"
)

// avoid unused import issue
var (
	_ = loansimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgApproveLoan = "op_weight_msg_approve_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApproveLoan int = 100

	opWeightMsgCancelLoan = "op_weight_msg_cancel_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelLoan int = 100

	opWeightMsgRepayLoan = "op_weight_msg_repay_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRepayLoan int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	loanGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&loanGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgApproveLoan int
	simState.AppParams.GetOrGenerate(opWeightMsgApproveLoan, &weightMsgApproveLoan, nil,
		func(_ *rand.Rand) {
			weightMsgApproveLoan = defaultWeightMsgApproveLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApproveLoan,
		loansimulation.SimulateMsgApproveLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancelLoan int
	simState.AppParams.GetOrGenerate(opWeightMsgCancelLoan, &weightMsgCancelLoan, nil,
		func(_ *rand.Rand) {
			weightMsgCancelLoan = defaultWeightMsgCancelLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelLoan,
		loansimulation.SimulateMsgCancelLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRepayLoan int
	simState.AppParams.GetOrGenerate(opWeightMsgRepayLoan, &weightMsgRepayLoan, nil,
		func(_ *rand.Rand) {
			weightMsgRepayLoan = defaultWeightMsgRepayLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRepayLoan,
		loansimulation.SimulateMsgRepayLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgApproveLoan,
			defaultWeightMsgApproveLoan,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				loansimulation.SimulateMsgApproveLoan(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCancelLoan,
			defaultWeightMsgCancelLoan,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				loansimulation.SimulateMsgCancelLoan(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgRepayLoan,
			defaultWeightMsgRepayLoan,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				loansimulation.SimulateMsgRepayLoan(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
