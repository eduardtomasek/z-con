const fs = require('fs')

function storeConfigFile ({ zelloUser, zelloPassword, zelloChannel, zelloIssuerKey }) {
    if (! zelloUser || ! zelloPassword || ! zelloChannel || ! zelloIssuerKey) {
        throw new Error('storeConfigFile: all parameters must be provided')
    }
    const rawData = fs.readFileSync(process.env.CONFIG_FILE_PATH)

    if (! rawData) {
        throw new Error('storeConfigFile: cannot read zello project config file')
    }

    const configData = JSON.parse(rawData)

    configData.username = zelloUser
    configData.password = zelloPassword
    configData.zello_channel = zelloChannel
    configData.issuer = zelloIssuerKey

    fs.writeFileSync(process.env.CONFIG_FILE_PATH, JSON.stringify(configData, null, 2))

    return configData
}

function getConfigFile () {
    const rawData = fs.readFileSync(process.env.CONFIG_FILE_PATH)

    if (! rawData) {
        throw new Error('getConfigFile: cannot read zello project config file')
    }

    return JSON.parse(rawData)
}

module.exports = {
    storeConfigFile,
    getConfigFile,
}