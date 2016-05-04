
import knex from 'knex'
import { database } from './config'


const connection = process.env.NODE_ENV || 'development'


export default knex(database[connection])
