const express = require('express')
const { callController } = require('../functions/index')

const HomepageController = require('../controllers/HomepageController')
const ApiCommandsController = require('../controllers/ApiCommandsController')

const app = module.exports = express.Router()

app.get('/', callController(HomepageController, 'homepage'))

app.post('./reboot-server', callController(ApiCommandsController, 'reboot'))