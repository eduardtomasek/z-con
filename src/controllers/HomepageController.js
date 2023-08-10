const BaseController = require('./BaseController')
const configFileModel = require('../models/configFile')

class HomepageController extends BaseController {
	constructor (req, res, next) {
		super(req, res, next)
	}

	homepage () {
		if (this.request.method == "POST") {
			const response = configFileModel.storeConfigFile(this.request.body)
			return this.renderRaw(response)
		 }

		const configFile = configFileModel.getConfigFile()

		return this.renderView('main', {layout : 'index', ...configFile})
	}
}

module.exports = HomepageController