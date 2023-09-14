const path = require('path')
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const hpp = require('hpp')
// const csrf = require('csurf')
const config = require('./config')
const { engine } = require('express-handlebars')
const basicAuth = require('express-basic-auth')

require('dotenv').config()

const server = config.server() 
const auth = config.auth()

const app = express()

app.use(basicAuth({
	users: {
		[auth.userName]: auth.userPassword,
	},
	challenge: true,
}))

app.use(express.static('public'))

app.use(helmet())
app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(hpp())
// app.use(csrf())

app.set('views', path.join(__dirname, 'src', 'views'))
app.set('view engine', 'handlebars')

app.engine('handlebars', engine({
	layoutsDir: __dirname + '/src/views/layouts',
}));

app.use(require('./src/routes/main'))

app.listen(server.port, () => {
  console.log(`Example app listening on port ${server.port}`)
})