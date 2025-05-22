const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config();

console.log(process.env.DB, process.env.CURRENT_USER, process.env.PASSWORD)
const sequelize = new Sequelize(process.env.DB, process.env.CURRENT_USER, process.env.PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;