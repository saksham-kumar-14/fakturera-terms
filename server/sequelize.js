const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config();

const sequelize = new Sequelize(process.env.DB, process.env.CURRENT_USER, process.env.PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  
    dialect: 'postgres',
    dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
        }
    },
    logging: false,
});

module.exports = sequelize;