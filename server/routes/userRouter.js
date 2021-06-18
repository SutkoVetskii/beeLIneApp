const Router = require('express')
const router = new Router()
const userController = require('../constrollers/userController')

router.post('/login', userController.login)

module.exports = router
