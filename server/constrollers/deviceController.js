const { Device } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId } = req.body
            const { image } = req.files
            let fileName = uuid.v4() + '.jpg'
            await image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({ name, price, brandId, typeId, img: fileName })

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { brandId } = req.query
        const devices = await Device.findAndCountAll({ where: { brandId } })
        return res.json(devices)
    }
}

module.exports = new DeviceController()
