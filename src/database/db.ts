import { Sequelize } from 'sequelize'
import 'dotenv/config'

class Database {
  /**
   * @description Try to create a database connection
   * @return {*}  {Promise<Sequelize>}
   * @memberof Database
   */
  async connect(): Promise<Sequelize>{
    return new Sequelize(process.env.DB_URL as string)
  }
  /**
   *
   * @description Verify status of connection with database
   * @return {*}  {Promise<boolean>}
   * @memberof Database
   */
  async verifyConnectionStatus(): Promise<boolean> {
    try {
      (await this.connect()).authenticate
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}

const database = new Database()

export { database }
