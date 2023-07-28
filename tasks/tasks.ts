import { task } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { setText, transferOwnership } from '../scripts'

task('setText', 'set the text')
  .addParam('text', 'text to be changed')
  .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
    await setText(hre, taskArgs.text)
  })

task('transferOwnership', 'transfer ownership of the contract to new owner')
  .addParam('address', 'newOwner address')
  .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
    await transferOwnership(hre, taskArgs.address)
  })
