import 'dotenv/config'
import { createConnection, Connection } from 'typeorm'
import { Notes, Users } from '@/models/index'

class Database {
  /**
   * @description Try to create a database connection and 
   * define entities of tables
   * @return {*}  {Promise<Connection | void>}
   * @memberof Database
   */
  async connect(): Promise<Connection|void>{
    try {
      return await createConnection({
        type: 'mysql',
        url: process.env.DB_URL as string,
        synchronize: true,
        entities: [Notes, Users]
      })
    } catch (err) {
      console.error(err)
    }
  }
}

const database = new Database()
export { database }
