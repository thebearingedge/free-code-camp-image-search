
import 'babel-polyfill'
import express from 'express'
import imageSearch from './image-search'
import logger from './search-logger'
import { search as searchConfig, port } from './config'
import knex from './db'

const app = express()


app
  .get('/', (req, res) => res.send('hello world'))
  .get('/api/imagesearch/:term', logger(knex), imageSearch(searchConfig))
  .listen(port, _ => console.log(`listening on ${port}`))
