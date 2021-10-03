import 'dotenv/config'
import { createConnection, Connection } from 'typeorm'
class Database {
  /**
   * @description Try to create a database connection and 
   * define entities of tables
   * @return {*}  {Promise<Connection | void>}
   * @memberof Database
   */
  async connect(): Promise<Connection|void>{
    try {
      return await createConnection()
    } catch (err) {
      console.error(err)
    }
  }
}

export default new Database().connect()
