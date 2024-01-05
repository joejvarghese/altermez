const sql = require("mssql");
const config = require("../config");

async function connectToSqlServer() {
  console.log(config.DB_CONFIG, "oooo");
  try {
    const pool = await sql.connect(config.DB_CONFIG);
    console.log("Database Connection Established");
    let employee= await pool.request().query("SELECT * FROM   employeedemographic")
    console.log(employee);
        return employee
    

    await pool.close();
  } catch (err) {
    console.error("Error connecting to SQL Server:", err);
    if (err.originalError) {
      console.error("Detailed error information:", err.originalError);
    }
  }
}

module.exports = connectToSqlServer;
