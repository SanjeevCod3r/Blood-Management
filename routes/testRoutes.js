const express = require('express')
const { testController } = require('../controllers/testController')

//<-----------------------Router Object---------------------->
const router = express.Router()

//<-----------------------Routes---------------------->
router.get('/', testController)

//<-----------------------export---------------------->
module.exports = router