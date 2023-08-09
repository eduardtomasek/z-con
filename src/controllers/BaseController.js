class BaseController {
	constructor (req, res, next) {
		this.request = req
		this.response = res
		this.nextRoute = next
	}

	renderView (view, data) {
		return this.response.render(view, data)
	}
}

module.exports = BaseController