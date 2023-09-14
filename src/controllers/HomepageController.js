const BaseController = require('./BaseController')
const configFileModel = require('../models/configFile')

const config = require('../../config')
const files = config.files()

class HomepageController extends BaseController {
	constructor (req, res, next) {
		super(req, res, next)
	}

	homepage () {
		const configFile = configFileModel.getConfigFile()
		// const privateKeyFile = configFileModel.readFile({ path: process.env.PRIVATE_KEY_PATH })
		const privateKeyFile = configFileModel.readFile({ path: files.privateKeyPath })
		// const runScriptFile = configFileModel.readFile({ path: process.env.RUN_SCRIPT_PATH })
		const runScriptFile = configFileModel.readFile({ path: files.runScriptPath })

		return this.renderView('main', {layout : 'index', ...configFile, privateKeyFile, runScriptFile })
	}

	saveFiles () {
		const { zelloUser, zelloPassword, zelloChannel, zelloIssuerKey, zelloSecretKey, rtlFmPrompt } = this.request.body
		
		const config = configFileModel.storeConfigFile({ zelloUser, zelloPassword, zelloChannel, zelloIssuerKey })
		// const privateKey = configFileModel.saveFile({ path: process.env.PRIVATE_KEY_PATH, data: zelloSecretKey })
		const privateKey = configFileModel.saveFile({ path: files.privateKeyPath, data: zelloSecretKey })
		// const runScript = configFileModel.saveFile({ path: process.env.RUN_SCRIPT_PATH, data: rtlFmPrompt })
		const runScript = configFileModel.saveFile({ path: files.runScriptPath, data: rtlFmPrompt })
		
		return this.renderRaw({
			config,
			privateKey,
			runScript,
		})
	}
}

module.exports = HomepageController