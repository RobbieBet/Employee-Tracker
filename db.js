
const mysql = require('mysql');
const fs = require('fs');

//MySql connection pool
const pool = mysql.createPool({
  host: 'your-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database',
  connectionLimit: 10,
});

//Reads schema file
const schema = fs.readFileSync('./schema.sql', 'utf8');
pool.query(schema, (error) => {
  if (error) throw error;
  console.log('Schema executed successfully');
});

module.exports = pool;
