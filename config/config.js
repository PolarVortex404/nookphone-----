require('dotenv').config()
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env
module.exports = 
{
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "nookphone_db_dev",
    host: DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "nookphone_db_test",
    host: DB_HOST,
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "nookphone_db_prod",
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
