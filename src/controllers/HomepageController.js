const BaseController = require('./BaseController')

class HomepageController extends BaseController {
	constructor (req, res, next) {
		super(req, res, next)
	}

	homepage () {
		return this.renderView('main', {layout : 'index'})
	}
}

module.exports = HomepageController