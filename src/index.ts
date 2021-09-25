import express, { Application } from 'express'
import { default as routers } from './routers/index'
import { database } from '@/database/db'

const app: Application = express()

app.use(express.json({strict: false}))
app.use(express.urlencoded({extended: true, limit: '50mb'}))
database.connect()
app.use(routers)

app.listen(8080, ():void => {
  console.log(`The server is on in localhost:${8080}/`)
})
