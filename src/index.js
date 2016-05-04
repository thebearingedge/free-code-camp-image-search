
import 'babel-polyfill'
import express from 'express'
import imageSearch from './image-search'
import { logger, getLogs } from './search-logger'
import { search as searchConfig, port } from './config'
import knex from './db'

const app = express()


app
  .get('/', (req, res) => res.send('hello world'))
  .get('/api/imagesearch/:term', logger(knex), imageSearch(searchConfig))
  .get('/api/latest/imagesearch', getLogs(knex))
  .listen(port, _ => console.log(`listening on ${port}`))
