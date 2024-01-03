require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4001,
  DB_CONFIG: {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DB_NAME,
    driver: 'msnodesqlv8',
    port: 1433,
    options: {
        trustedConnection: true, 
        encrypt: true,
      }
  },
};
