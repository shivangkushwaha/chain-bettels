const { network, ethers } = require("hardhat");
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { verify } = require("../utills/verify");
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const args = []


    const ChainBattles = await deploy("ChainBattles", {
        from: deployer,
        args: args,
        log: true,
        waitconfirmations: network.config.blockconfirmations
    })

    if (!developmentChains.includes(network.name) && process.env.POLYGONSCAN_API_KEY) {
        console.log()
        log("verifying contract On chain wait a minute...")

        await verify(ChainBattles.address, args)
    }
    log("************************ Script Ended *************************")
}

module.exports.tags = ["all", "ChainBattles"]