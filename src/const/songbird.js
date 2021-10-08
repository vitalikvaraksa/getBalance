export const contractRPCUrl = "https://songbird.towolabs.com/rpc";
export const priceSubmitterContractAddr = "0x1000000000000000000000000000000000000003";
export const ftsoRegistryContractAddr = "0x6D222fb4544ba230d4b90BA1BfC0A01A94E6cB23";
export const ftsoRegistryContractAbi = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_governance","internalType":"address"}]},{"type":"event","name":"GovernanceProposed","inputs":[{"type":"address","name":"proposedGovernance","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"GovernanceUpdated","inputs":[{"type":"address","name":"oldGovernance","internalType":"address","indexed":false},{"type":"address","name":"newGoveranance","internalType":"address","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"_ftsoIndex","internalType":"uint256"}],"name":"addFtso","inputs":[{"type":"address","name":"_ftsoContract","internalType":"contract IIFtso"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimGovernance","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IIFtsoManager"}],"name":"ftsoManager","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[]","name":"_ftsos","internalType":"contract IIFtso[]"}],"name":"getAllFtsos","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_price","internalType":"uint256"},{"type":"uint256","name":"_timestamp","internalType":"uint256"}],"name":"getCurrentPrice","inputs":[{"type":"string","name":"_symbol","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_price","internalType":"uint256"},{"type":"uint256","name":"_timestamp","internalType":"uint256"}],"name":"getCurrentPrice","inputs":[{"type":"uint256","name":"_assetIndex","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"_activeFtso","internalType":"contract IIFtso"}],"name":"getFtso","inputs":[{"type":"uint256","name":"_assetIndex","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"_activeFtso","internalType":"contract IIFtso"}],"name":"getFtsoBySymbol","inputs":[{"type":"string","name":"_symbol","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[5]","name":"_ftsoAddressHistory","internalType":"contract IIFtso[5]"}],"name":"getFtsoHistory","inputs":[{"type":"uint256","name":"_assetIndex","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_assetIndex","internalType":"uint256"}],"name":"getFtsoIndex","inputs":[{"type":"string","name":"_symbol","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"_symbol","internalType":"string"}],"name":"getFtsoSymbol","inputs":[{"type":"uint256","name":"_assetIndex","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[]","name":"_ftsos","internalType":"contract IFtsoGenesis[]"}],"name":"getFtsos","inputs":[{"type":"uint256[]","name":"_assetIndices","internalType":"uint256[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[]","name":"_ftsos","internalType":"contract IIFtso[]"}],"name":"getSupportedFtsos","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"_supportedIndices","internalType":"uint256[]"}],"name":"getSupportedIndices","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"_supportedIndices","internalType":"uint256[]"},{"type":"address[]","name":"_ftsos","internalType":"contract IIFtso[]"}],"name":"getSupportedIndicesAndFtsos","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"_supportedIndices","internalType":"uint256[]"},{"type":"string[]","name":"_supportedSymbols","internalType":"string[]"}],"name":"getSupportedIndicesAndSymbols","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"_supportedIndices","internalType":"uint256[]"},{"type":"string[]","name":"_supportedSymbols","internalType":"string[]"},{"type":"address[]","name":"_ftsos","internalType":"contract IIFtso[]"}],"name":"getSupportedIndicesSymbolsAndFtsos","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string[]","name":"_supportedSymbols","internalType":"string[]"}],"name":"getSupportedSymbols","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string[]","name":"_supportedSymbols","internalType":"string[]"},{"type":"address[]","name":"_ftsos","internalType":"contract IIFtso[]"}],"name":"getSupportedSymbolsAndFtsos","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"governance","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialise","inputs":[{"type":"address","name":"_governance","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"proposeGovernance","inputs":[{"type":"address","name":"_governance","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"proposedGovernance","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"removeFtso","inputs":[{"type":"address","name":"_ftso","internalType":"contract IIFtso"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFtsoManagerAddress","inputs":[{"type":"address","name":"_ftsoManager","internalType":"contract IIFtsoManager"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferGovernance","inputs":[{"type":"address","name":"_governance","internalType":"address"}]}];
export const priceProviderPrivateKey = "0xc5e8f61d1ab959b397eecc0a37a6517b8e67a0e7cf1f4bce5591f3ed80199122";
export const priceSubmitterContractAbi = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"GovernanceProposed","inputs":[{"type":"address","name":"proposedGovernance","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"GovernanceUpdated","inputs":[{"type":"address","name":"oldGovernance","internalType":"address","indexed":false},{"type":"address","name":"newGoveranance","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"PriceHashesSubmitted","inputs":[{"type":"address","name":"submitter","internalType":"address","indexed":true},{"type":"uint256","name":"epochId","internalType":"uint256","indexed":true},{"type":"address[]","name":"ftsos","internalType":"contract IFtsoGenesis[]","indexed":false},{"type":"bytes32[]","name":"hashes","internalType":"bytes32[]","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"PricesRevealed","inputs":[{"type":"address","name":"voter","internalType":"address","indexed":true},{"type":"uint256","name":"epochId","internalType":"uint256","indexed":true},{"type":"address[]","name":"ftsos","internalType":"contract IFtsoGenesis[]","indexed":false},{"type":"uint256[]","name":"prices","internalType":"uint256[]","indexed":false},{"type":"uint256[]","name":"randoms","internalType":"uint256[]","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimGovernance","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getFtsoManager","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IFtsoRegistryGenesis"}],"name":"getFtsoRegistry","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[]","name":"","internalType":"address[]"}],"name":"getTrustedAddresses","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getVoterWhitelister","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"governance","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[],"name":"initialise","inputs":[{"type":"address","name":"_governance","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"initialiseFixedAddress","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"proposeGovernance","inputs":[{"type":"address","name":"_governance","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"proposedGovernance","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"revealPrices","inputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"},{"type":"uint256[]","name":"_ftsoIndices","internalType":"uint256[]"},{"type":"uint256[]","name":"_prices","internalType":"uint256[]"},{"type":"uint256[]","name":"_randoms","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setContractAddresses","inputs":[{"type":"address","name":"_ftsoRegistry","internalType":"contract IFtsoRegistryGenesis"},{"type":"address","name":"_voterWhitelister","internalType":"address"},{"type":"address","name":"_ftsoManager","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTrustedAddresses","inputs":[{"type":"address[]","name":"_trustedAddresses","internalType":"address[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"submitPriceHashes","inputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"},{"type":"uint256[]","name":"_ftsoIndices","internalType":"uint256[]"},{"type":"bytes32[]","name":"_hashes","internalType":"bytes32[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferGovernance","inputs":[{"type":"address","name":"_governance","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"voterWhitelistBitmap","inputs":[{"type":"address","name":"_voter","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"voterWhitelisted","inputs":[{"type":"address","name":"_voter","internalType":"address"},{"type":"uint256","name":"_ftsoIndex","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"votersRemovedFromWhitelist","inputs":[{"type":"address[]","name":"_removedVoters","internalType":"address[]"},{"type":"uint256","name":"_ftsoIndex","internalType":"uint256"}]}];
export const childContractAbi = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"_symbol","internalType":"string"},{"type":"address","name":"_priceSubmitter","internalType":"contract IPriceSubmitter"},{"type":"address","name":"_wNat","internalType":"contract IIVPToken"},{"type":"address","name":"_ftsoManager","internalType":"contract IIFtsoManager"},{"type":"uint256","name":"_initialPriceUSD","internalType":"uint256"},{"type":"uint256","name":"_priceDeviationThresholdBIPS","internalType":"uint256"},{"type":"uint256","name":"_cyclicBufferSize","internalType":"uint256"}]},{"type":"event","name":"LowTurnout","inputs":[{"type":"uint256","name":"epochId","internalType":"uint256","indexed":true},{"type":"uint256","name":"natTurnout","internalType":"uint256","indexed":false},{"type":"uint256","name":"lowNatTurnoutThresholdBIPS","internalType":"uint256","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"PriceEpochInitializedOnFtso","inputs":[{"type":"uint256","name":"epochId","internalType":"uint256","indexed":true},{"type":"uint256","name":"endTime","internalType":"uint256","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"PriceFinalized","inputs":[{"type":"uint256","name":"epochId","internalType":"uint256","indexed":true},{"type":"uint256","name":"price","internalType":"uint256","indexed":false},{"type":"bool","name":"rewardedFtso","internalType":"bool","indexed":false},{"type":"uint256","name":"lowRewardPrice","internalType":"uint256","indexed":false},{"type":"uint256","name":"highRewardPrice","internalType":"uint256","indexed":false},{"type":"uint8","name":"finalizationType","internalType":"enum IFtso.PriceFinalizationType","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"PriceHashSubmitted","inputs":[{"type":"address","name":"submitter","internalType":"address","indexed":true},{"type":"uint256","name":"epochId","internalType":"uint256","indexed":true},{"type":"bytes32","name":"hash","internalType":"bytes32","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"PriceRevealed","inputs":[{"type":"address","name":"voter","internalType":"address","indexed":true},{"type":"uint256","name":"epochId","internalType":"uint256","indexed":true},{"type":"uint256","name":"price","internalType":"uint256","indexed":false},{"type":"uint256","name":"random","internalType":"uint256","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false},{"type":"uint256","name":"votePowerNat","internalType":"uint256","indexed":false},{"type":"uint256","name":"votePowerAsset","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"ASSET_PRICE_USD_DECIMALS","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"activateFtso","inputs":[{"type":"uint256","name":"_firstEpochStartTime","internalType":"uint256"},{"type":"uint256","name":"_submitPeriod","internalType":"uint256"},{"type":"uint256","name":"_revealPeriod","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"active","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IIFtso"}],"name":"assetFtsos","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IIVPToken"}],"name":"assets","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"averageFinalizePriceEpoch","inputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"configureEpochs","inputs":[{"type":"uint256","name":"_maxVotePowerNatThresholdFraction","internalType":"uint256"},{"type":"uint256","name":"_maxVotePowerAssetThresholdFraction","internalType":"uint256"},{"type":"uint256","name":"_lowAssetUSDThreshold","internalType":"uint256"},{"type":"uint256","name":"_highAssetUSDThreshold","internalType":"uint256"},{"type":"uint256","name":"_highAssetTurnoutThresholdBIPS","internalType":"uint256"},{"type":"uint256","name":"_lowNatTurnoutThresholdBIPS","internalType":"uint256"},{"type":"address[]","name":"_trustedAddresses","internalType":"address[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deactivateFtso","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_maxVotePowerNatThresholdFraction","internalType":"uint256"},{"type":"uint256","name":"_maxVotePowerAssetThresholdFraction","internalType":"uint256"},{"type":"uint256","name":"_lowAssetUSDThreshold","internalType":"uint256"},{"type":"uint256","name":"_highAssetUSDThreshold","internalType":"uint256"},{"type":"uint256","name":"_highAssetTurnoutThresholdBIPS","internalType":"uint256"},{"type":"uint256","name":"_lowNatTurnoutThresholdBIPS","internalType":"uint256"},{"type":"address[]","name":"_trustedAddresses","internalType":"address[]"}],"name":"epochsConfiguration","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"address[]","name":"_eligibleAddresses","internalType":"address[]"},{"type":"uint256[]","name":"_natWeights","internalType":"uint256[]"},{"type":"uint256","name":"_natWeightsSum","internalType":"uint256"}],"name":"finalizePriceEpoch","inputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"},{"type":"bool","name":"_returnRewardData","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"forceFinalizePriceEpoch","inputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IIFtsoManager"}],"name":"ftsoManager","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IIVPToken"}],"name":"getAsset","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[]","name":"","internalType":"contract IIFtso[]"}],"name":"getAssetFtsos","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getCurrentEpochId","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_price","internalType":"uint256"},{"type":"uint256","name":"_timestamp","internalType":"uint256"}],"name":"getCurrentPrice","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getCurrentRandom","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getEpochId","inputs":[{"type":"uint256","name":"_timestamp","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getEpochPrice","inputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getEpochPriceForVoter","inputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"},{"type":"address","name":"_voter","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_firstEpochStartTime","internalType":"uint256"},{"type":"uint256","name":"_submitPeriod","internalType":"uint256"},{"type":"uint256","name":"_revealPeriod","internalType":"uint256"}],"name":"getPriceEpochConfiguration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"},{"type":"uint256","name":"_epochSubmitEndTime","internalType":"uint256"},{"type":"uint256","name":"_epochRevealEndTime","internalType":"uint256"},{"type":"uint256","name":"_votePowerBlock","internalType":"uint256"},{"type":"bool","name":"_fallbackMode","internalType":"bool"}],"name":"getPriceEpochData","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getRandom","inputs":[{"type":"uint256","name":"_epochId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[]","name":"_assets","internalType":"contract IIVPToken[]"},{"type":"uint256[]","name":"_assetMultipliers","internalType":"uint256[]"},{"type":"uint256","name":"_totalVotePowerNat","internalType":"uint256"},{"type":"uint256","name":"_totalVotePowerAsset","internalType":"uint256"},{"type":"uint256","name":"_assetWeightRatio","internalType":"uint256"},{"type":"uint256","name":"_votePowerBlock","internalType":"uint256"}],"name":"getVoteWeightingParameters","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initializeCurrentEpochStateForReveal","inputs":[{"type":"uint256","name":"_circulatingSupplyNat","internalType":"uint256"},{"type":"bool","name":"_fallbackMode","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"priceDeviationThresholdBIPS","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"priceEpochCyclicBufferSize","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IPriceSubmitter"}],"name":"priceSubmitter","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"revealPriceSubmitter","inputs":[{"type":"address","name":"_voter","internalType":"address"},{"type":"uint256","name":"_epochId","internalType":"uint256"},{"type":"uint256","name":"_price","internalType":"uint256"},{"type":"uint256","name":"_random","internalType":"uint256"},{"type":"uint256","name":"_voterWNatVP","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setAsset","inputs":[{"type":"address","name":"_asset","internalType":"contract IIVPToken"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setAssetFtsos","inputs":[{"type":"address[]","name":"_assetFtsos","internalType":"contract IIFtso[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setVotePowerBlock","inputs":[{"type":"uint256","name":"_votePowerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"submitPriceHashSubmitter","inputs":[{"type":"address","name":"_sender","internalType":"address"},{"type":"uint256","name":"_epochId","internalType":"uint256"},{"type":"bytes32","name":"_hash","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateInitialPrice","inputs":[{"type":"uint256","name":"_initialPriceUSD","internalType":"uint256"},{"type":"uint256","name":"_initialPriceTimestamp","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IIVPToken"}],"name":"wNat","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"wNatVotePowerCached","inputs":[{"type":"address","name":"_owner","internalType":"address"},{"type":"uint256","name":"_epochId","internalType":"uint256"}]}];