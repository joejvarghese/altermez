const sql = require('mssql')
const config = require('../config')


async function connectToSqlServer() {
  console.log(config.DB_CONFIG)
    try {
    sql.connect(config.DB_CONFIG)
    .then(() => {
        console.log('Connected to MSSQL');
    })
    .catch((err) => {
        console.error('Error connecting to MSSQL:', err);
    });
    } catch (err) {
        console.error('Error connecting to SQL Server:', err);
        console.error('Detailed error information:', err.originalError);
    }
  }


  module.exports = connectToSqlServer