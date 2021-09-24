import 'dotenv/config'

const config = {
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    dialect: process.env.DB_TYPE,
    port: process.env.DB_PORT
  }
}

export { config }
