# UnderstandingOwnershipInSolidity
In this assignment, we'll try to dig deep into ownership in Solidity,and how the `msg.owner` global variable along with modifiers can be used to create Ownable Contracts. We'll also demonstrate transferring the ownership, using Etherscan as well as Hardhat
## Some Background
1. `msg` : msg is a global object in Solidity. It contain properties which allow access to the blockchain.
2. `msg.sender`: It stores the address of the account which executes a function call. When a contract is deployed for the first time, the account executing the deployment is set as msg.sender, subsequently, any account interacting with the contract becomes msg.sender
3. Owner: Although there's no official spec to maintain ownership of a contract, the standard way to do this is to use a state variable e.g `owner`, and set it to `msg.sender` within the constructor. Then we can use a modifier to check ownership and create functions with access restricted to the owner. A standardized example by OpenZeppelin : https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol
