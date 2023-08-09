const path = require('path')
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const hpp = require('hpp')
// const csrf = require('csurf')
const { engine } = require('express-handlebars')

const { DEFAULT_APP_PORT } = require('./src/constants')

const app = express()

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

app.listen(DEFAULT_APP_PORT, () => {
  console.log(`Example app listening on port ${DEFAULT_APP_PORT}`)
})