
import knex from 'knex'
import * as config from './config'


const connection = process.env.NODE_ENV || 'development'


export default knex(config[connection])
