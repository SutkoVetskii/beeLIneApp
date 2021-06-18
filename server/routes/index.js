const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router
