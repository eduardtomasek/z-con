const BaseController = require('./BaseController')

class ApiCommandsController extends BaseController {
	constructor (req, res, next) {
		super(req, res, next)
	}

	reboot () {
		return this.renderRaw({
			data: {
				ok: true,
			}
		})
	}
}

module.exports = ApiCommandsController