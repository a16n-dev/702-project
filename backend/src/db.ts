import dotenv from 'dotenv'
dotenv.config()

import * as Mongo from 'mongodb'
import Logger from './util/logger'

let client: Mongo.MongoClient | null = null

const dbLogger = Logger.getLogger('db')

export default async () => {
  if (!client) {
    if (!process.env.DB_URL) {
      dbLogger.error('Environment variable "DB_URL" not found')
      process.exit(1)
    }
    client = new Mongo.MongoClient(process.env.DB_URL)
    try {
      await client.connect()
    } catch (error) {
      dbLogger.error(error)
    }
  }
  return client.db('application')
}
