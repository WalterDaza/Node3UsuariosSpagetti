// {
//     id: 1,
//     first_name: 'string',
//     last_name: 'string',
//     email: 'string',
//     password: 'string',
//     birthday: 'YYYY/MM/DD'
// }

const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', { // creación de tabla
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
         type: DataTypes.STRING,
         allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: { 
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Users
