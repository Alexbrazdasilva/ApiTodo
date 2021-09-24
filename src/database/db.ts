import { Sequelize, Dialect } from 'sequelize'
import { config } from './config'

const { database } = config

function createConnectionWithDB () {
  const {
    name,
    user,
    pass,
    host,
    dialect,
    port
  } = database

  function connect () {
    return new Sequelize(name as string, user as string, pass as string, {
      host: host as string,
      dialect: dialect as Dialect,
      port: port as unknown as number
    })
  }

  async function isConnected (): Promise<boolean|void> {
    try {
      await connect().authenticate()
      return true
    } catch (err) {
      console.error(err)
      throw new Error(err as string)
    }
  }
  return {
    connect,
    isConnected
  }
}
export { createConnectionWithDB }
