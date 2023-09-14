const fs = require('fs')
const config = require('../../config')
const files = config.files()

/**
 * 
 * @param {object} param0
 * @property {string} param0.zelloUser
 * @property {string} param0.zelloPassword
 * @property {string} param0.zelloChannel
 * @property {string} param0.zelloIssuerKey 
 * @returns {import('../types').ZelloStreamConfig}
 */
function storeConfigFile ({ zelloUser, zelloPassword, zelloChannel, zelloIssuerKey }) {
    if (! zelloUser || ! zelloPassword || ! zelloChannel || ! zelloIssuerKey) {
        throw new Error('storeConfigFile: all parameters must be provided')
    }
    // const rawData = fs.readFileSync(process.env.CONFIG_FILE_PATH)
    const rawData = fs.readFileSync(files.configFilePath)

    if (! rawData) {
        throw new Error('storeConfigFile: cannot read zello project config file')
    }

    const configData = JSON.parse(rawData)

    configData.username = zelloUser
    configData.password = zelloPassword
    configData.zello_channel = zelloChannel
    configData.issuer = zelloIssuerKey

    // fs.writeFileSync(process.env.CONFIG_FILE_PATH, JSON.stringify(configData, null, 2))
    fs.writeFileSync(files.configFilePath, JSON.stringify(configData, null, 2))

    return configData
}

/**
 * 
 * @returns {import('../types').ZelloStreamConfig}
 */
function getConfigFile () {
    // const rawData = fs.readFileSync(process.env.CONFIG_FILE_PATH)
    const rawData = fs.readFileSync(files.configFilePath)

    if (! rawData) {
        throw new Error('getConfigFile: cannot read zello project config file')
    }

    return JSON.parse(rawData)
}

/**
 * 
 * @param {object} param0
 * @property {string} param0.path
 * @property {string} param0.data 
 * @returns {void}
 */
function saveFile ({ path, data }) {
    return fs.writeFileSync(path, data.toString('utf-8'))
}

/**
 * 
 * @param {object} param0 
 * @param {string} param0.path
 * @returns {string}
 */
function readFile ({ path }) {
    if (! fs.existsSync(path)) {
        return ''
    }
    
    return fs.readFileSync(path, 'utf-8')
}


module.exports = {
    storeConfigFile,
    getConfigFile,
    saveFile,
    readFile,
}