const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER ' },
})

const Order = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    phone: { type: DataTypes.INTEGER, unique: true, allowNull: false },
})

const Device = sequelize.define('device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    count: { type: DataTypes.INTEGER, defaultValue: 1 },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

User.hasOne(Order)
Order.belongsTo(User)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Order)
Order.belongsTo(Device)

module.exports = {
    User,
    Order,
    Device,
    Brand,
}
