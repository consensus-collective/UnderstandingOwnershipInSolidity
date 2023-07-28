import { HardhatRuntimeEnvironment } from 'hardhat/types'

export async function setText(hre: HardhatRuntimeEnvironment, newText: string) {
  const { deployments } = hre

  const [owner] = await hre.ethers.getSigners()

  // // get contract from deployments
  const deployment = await deployments.get('HelloWorld')
  const contract = await hre.ethers.getContractAt('HelloWorld', deployment.address, owner)
  // // get prev text
  const prevText = await contract.helloWorld()
  const txn = await contract.setText(newText)
  await txn.wait()

  // // log changes
  console.log(`text: ${prevText} => ${newText} by ${owner.address}, txHash: ${txn.hash}`)
}

export async function transferOwnership(hre: HardhatRuntimeEnvironment, newOwner: string) {
  const { deployments } = hre

  const [owner] = await hre.ethers.getSigners()

  // // get contract from deployments
  const deployment = await deployments.get('HelloWorld')
  const contract = await hre.ethers.getContractAt('HelloWorld', deployment.address, owner)
  // // get prev owner
  const prevOwner = await contract.owner()
  const txn = await contract.transferOwnership(newOwner)
  await txn.wait()

  // // log changes
  console.log(`previousOwner: ${prevOwner}, newOwner: ${newOwner}, txHash: ${txn.hash}`)
}
