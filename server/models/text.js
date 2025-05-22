const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Text = sequelize.define('Text', {
    content: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    language: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    btn: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    terms: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nav: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue: []
    }
},
{
    timestamps: false
}
);

module.exports = Text;