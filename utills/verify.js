// const { run } = require("hardhat")
const verify = async (contractAddress, args) => {
    try {
        console.log(`Verifying Contract ${contractAddress}`)
        await hre.run("verify:verify",
            {
                address: contractAddress,
                constructorArguments: args,
            })
        console.log('Congratulations !!!!!    Verify Sucessfully')
    }
    catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        }
        else {
            console.log('Something Error in Verify Contract on Chain.............')
            console.error(error)
        }
    }
}


module.exports = {
    verify
}