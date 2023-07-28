# Method 2: Hardhat

1. Setup

```bash
# install dep
$ yarn

# setup env
$ cp .env.template .env
```

2. Deploy contract

```bash
 $ npx hardhat deploy --tags HelloWorld --network sepolia
 > Generating typings for: 17 artifacts in dir: typechain-types for target: ethers-v6
 Successfully generated 42 typings!
 Compiled 18 Solidity files successfully
 deploying "HelloWorld" (tx: 0xe34c62491fa8738202f38abda2274eea24c2a4875bed67d240be8a8a27d192de)...: deployed at 0x0Ba095a975f1544061E1c9fc9a15D0aADa6D533C with 430268 gas
 Deployed HelloWorld: 0x0Ba095a975f1544061E1c9fc9a15D0aADa6D533C, Deployer: 0xb66c6D8d96fAa683A4eb2Cb4b854f7bB2295e01E, network: sepolia
```

3. Verify contract

```bash
$ npx hardhat --network sepolia etherscan-verify
> verifying HelloWorld (0x0Ba095a975f1544061E1c9fc9a15D0aADa6D533C) ...
waiting for result...
=> contract HelloWorld is now verified
```

4. Calling `setText`

```bash
$ npx hardhat setText --text <NEW_TEXT>  --network sepolia
```

5. Transferring ownership

```bash
$ npx hardhat transferOwnership --address <NEW_OWNER> --network sepolia
```
