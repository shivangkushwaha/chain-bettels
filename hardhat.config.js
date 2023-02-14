require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("hardhat-gas-reporter")

const TEST_NET_RPC = process.env.TEST_NET_RPC
const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY
const COIN_MARKET_API_KEY = process.env.COIN_MARKET_API_KEY
module.exports = {
  solidity: {
    compilers: [{ version: "0.8.17" }, { version: "0.8.7" }]
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockconfirmations: 1
    },
    mumbai: {
      chainId: 80001,
      blockconfirmations: 10,
      url: TEST_NET_RPC,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY
    }
  },
  namedAccounts: {
    deployer: 0,
  },
  mocha: {
    timeout: 80000000 //200 sec
  }
};
