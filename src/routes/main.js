const express = require('express')
const { callController } = require('../functions/index')

const HomepageController = require('../controllers/HomepageController')

const app = module.exports = express.Router()

app.get('/', callController(HomepageController, 'homepage'))