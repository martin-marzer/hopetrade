const { DataTypes } = require('sequelize');

const sequelize = require('../index');

let alias = 'Usuario'; // esto debería estar en singular
let cols = {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    mail: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING(20),
    }
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: "updated_at",
    tableName: "usuario"
}

const Usuario = sequelize.define(alias, cols, config);

module.exports = Usuario;