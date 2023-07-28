import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const result = await deploy('HelloWorld', {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
  })

  deployments.log(`Deployed HelloWorld: ${result.address}, Deployer: ${deployer}, network: ${hre.network.name}`)
}

export default func
func.tags = ['HelloWorld']
