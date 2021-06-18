const ApiError = require('../error/ApiError')
const { ADMIN_PASSWORD } = process.env

class UserController {
    async login(req, res, next) {
        const { password } = req.body
        if (ADMIN_PASSWORD !== password) {
            return next(ApiError.badRequest('В доступе отказано'))
        }
        return res.json({ status: 200 })
    }
}

module.exports = new UserController()
