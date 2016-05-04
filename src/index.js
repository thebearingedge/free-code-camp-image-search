
import 'babel-polyfill'
import express from 'express'
import searchImages from './image-search'
import { logSearches, getSearches } from './search-logger'
import { search as searchConfig, port } from './config'
import knex from './db'


const app = express()


app
  .get('/', (req, res) => res.send('hello world'))
  .get('/api/imagesearch/:term', logSearches(knex), searchImages(searchConfig))
  .get('/api/latest/imagesearch', getSearches(knex))
  .listen(port, _ => console.log(`listening on ${port}`))
