const sql = require("mssql");
const config = require("../config");

async function connectToSqlServer() {
  console.log(config.DB_CONFIG, "oooo");
  try {
    const pool = await sql.connect(config.DB_CONFIG);
    console.log("Database Connection Established");
    
    // Perform your database operations using the 'pool' object if needed

    // Don't forget to close the connection when done
    await pool.close();
  } catch (err) {
    console.error("Error connecting to SQL Server:", err);
    if (err.originalError) {
      console.error("Detailed error information:", err.originalError);
    }
  }
}

module.exports = connectToSqlServer;
