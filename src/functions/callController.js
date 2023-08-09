module.exports = function callController (Controller, method) {
	return function (req, res, next) {
		const c = new Controller(req, res, next)
		c[method](req.body, req.query, req.params)
	}
}