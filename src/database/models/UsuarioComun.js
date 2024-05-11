const { DataTypes } = require('sequelize');

const sequelize = require('../index');

let alias = 'UsuarioComun';

let cols = {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    }
};

let config = {
    timestamps: false,
    tableName: "usuario_comun"
}

const UsuarioComun = sequelize.define(alias, cols, config);

module.exports = UsuarioComun;