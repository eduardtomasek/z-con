
const fs = require('fs')
const toml = require('toml')

const { CONFIGURATION_FILE } = require('./src/constants')

const config = toml.parse(fs.readFileSync(CONFIGURATION_FILE, 'utf-8'))

/**
 * 
 * @returns {import('./src/types').Config}
 */
function get () {
    return config
}

/**
 * 
 * @returns {import('./src/types').ConfigServer}
 */
function server () {
    return config.server
}

/**
 * @returns {import('./src/types').ConfigFiles}
 */
function files () {
    return config.files
}

/**
 * @returns {import('./src/types').AuthCredentials}
 */
function auth () {
    return config.auth
}


module.exports = {
    get,
    server,
    files,
    auth,
}