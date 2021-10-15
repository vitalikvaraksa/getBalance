import { ethers } from "ethers";

const getFtsoManagerContract = (provider, address) => {
    const abi = [
        "function rewardManager() public view returns (address)",
        "function getCurrentRewardEpoch() public view returns (uint256)",
        "function rewardEpochDurationSeconds() public view returns (uint256)",
        "function rewardEpochsStartTs() public view returns (uint256)",
        "function rewardEpochs(uint256 epoch) public view returns (uint256 votepowerBlock, uint256 startBlock, uint256 startTimestamp)"
    ];

    return new ethers.Contract(address, abi, provider)
}

const getFtsoRewardManagerContract = (provider, address) => {

    const abi = [
        "function wNat() public view returns (address)",

        // claim reward
        "function claimReward(address payable _recipient, uint256[] memory _rewardEpochs) external returns (uint256 _rewardAmount)",
        "function claimRewardFromDataProviders(address payable _recipient, uint256[] memory _rewardEpochs, address[] memory _dataProviders) external returns (uint256 _rewardAmount)",

        // state of rewards
        "function getStateOfRewards(address _beneficiary, uint256 _rewardEpoch) external view returns (address[] memory _dataProviders, uint256[] memory _rewardAmounts, bool[] memory _claimed, bool _claimable)",
        "function getStateOfRewardsFromDataProviders(address _beneficiary, uint256 _rewardEpoch, address[] memory _dataProviders) external view returns (uint256[] memory _rewardAmounts, bool[] memory _claimed, bool _claimable)",

        "function getEpochsWithUnclaimedRewards(address _beneficiary) external view returns (uint256[] memory _epochIds)",
        "function getUnclaimedReward(uint256 _rewardEpoch, address _dataProvider) external view returns (uint256 _amount, uint256 _weight)",

        "function getDataProviderCurrentFeePercentage(address _dataProvider) external view returns (uint256)",

        // events
        "event RewardClaimed(address indexed dataProvider, address indexed whoClaimed, address indexed sentTo, uint256 rewardEpoch, uint256 amount)"
    ];

    return new ethers.Contract(address, abi, provider)
}

const getPriceSubmitterContract = (provider) => {

    const abi = [
        "function getFtsoManager() external view returns (address)",
        "function getVoterWhitelister() external view returns (address)"
    ];

    return new ethers.Contract("0x1000000000000000000000000000000000000003", abi, provider)
}

const getVoterWhitelisterContract = (provider, address) => {

    const abi = [
        "function getFtsoWhitelistedPriceProvidersBySymbol(string memory _symbol) external view returns (address[] memory)"
    ];

    return new ethers.Contract(address, abi, provider)
}


const getWNatContract = (provider, address) => {

    const abi = [
        "function symbol() public view returns (string)",
        "function decimals() public view returns (uint8)",

        // wrap/unwrap
        "function deposit() public payable",
        "function withdraw(uint256 amount) external",

        // balance
        "function balanceOf(address account) public view returns (uint256)",

        // delegate
        "function delegationModeOf(address _who) external view returns (uint256)",
        "function delegate(address _to, uint256 _bips) external",
        "function delegateExplicit(address _to, uint _amount) external",
        "function delegatesOf(address _owner) external view returns (address[] memory _delegateAddresses, uint256[] memory _bips, uint256 _count, uint256 _delegationMode)",

        // events
        "event Deposit(address indexed dst, uint amount)",
        "event Withdrawal(address indexed src, uint amount)"
    ];

    return new ethers.Contract(address, abi, provider)
}

export {
    getFtsoManagerContract,
    getWNatContract,
    getVoterWhitelisterContract,
    getPriceSubmitterContract,
    getFtsoRewardManagerContract
}