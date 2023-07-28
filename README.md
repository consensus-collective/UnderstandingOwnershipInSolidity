# UnderstandingOwnershipInSolidity

In this assignment, we'll try to dig deep into ownership in Solidity,and how the `msg.owner` global variable along with modifiers can be used to create Ownable Contracts. We'll also demonstrate transferring the ownership, using Etherscan as well as Hardhat

## Some Background

1. `msg` : msg is a global object in Solidity. It contain properties which allow access to the blockchain.
2. `msg.sender`: It stores the address of the account which executes a function call. When a contract is deployed for the first time, the account executing the deployment is set as msg.sender, subsequently, any account interacting with the contract becomes msg.sender
3. Owner: Although there's no official spec to maintain ownership of a contract, the standard way to do this is to use a state variable e.g `owner`, and set it to `msg.sender` within the constructor. Then we can use a modifier to check ownership and create functions with access restricted to the owner. A standardized example by OpenZeppelin : https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

### Group member list

- Deepto
- Ken
- Abdul
- Sergey
- maksym
- Corey (0xb66c6D8d96fAa683A4eb2Cb4b854f7bB2295e01E)

### Overview:

ContractAddress on Sepolia testnet: [`0x0Ba095a975f1544061E1c9fc9a15D0aADa6D533C`](https://sepolia.etherscan.io/address/0x0ba095a975f1544061e1c9fc9a15d0aada6d533c)

Contract interface: [here](contracts/interfaces/IHelloWorld.sol)

Transactions: [here](transactions.md)

## Pre-work:

1. Add Sepolia testnet to Metamask

2. Get some Sepolia ETH from [faucet](https://sepoliafaucet.com/)

## Method 1: [Remix](https://remix.ethereum.org)

[details](remix.md)

## Method 2: Hardhat

Alt solution using hardhat-deploy and hardhat tasks

[details](hh.md)

## Method 3: Blockchain explorer

1. Verify the contract

2. Visit `https://sepolia.etherscan.io/address/<CONTRACT_ADDRESS>`
