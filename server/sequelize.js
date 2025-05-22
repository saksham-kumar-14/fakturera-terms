const pg = require('pg');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL, {
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
        }
    },
});

module.exports = sequelize;