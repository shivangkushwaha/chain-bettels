const { ethers } = require("hardhat")

const networkConfig = {
    80001: {
        name: 'mumbai',
        interval: "30"
    },
    31337: {
        name: 'hardhat',
        interval: "30"
    }
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    developmentChains, networkConfig
}