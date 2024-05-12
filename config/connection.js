const Sequelize = require('sequelize');
require('dotenv').config();

// Create a connection to the database
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL) // If the DB_URL environment variable is present, use it to connect to the database
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );

module.exports = sequelize;
