const Router = require('express')
const router = new Router()
const deviceController = require('../constrollers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)

module.exports = router
