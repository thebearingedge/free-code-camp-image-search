
import 'babel-polyfill'
import { join } from 'path'
import express from 'express'
import { renderFile } from 'jade'
import searchImages from './image-search'
import { logSearches, getSearches } from './search-logger'
import { search, port, appName, searchEndpoint, logEndpoint } from './config'
import knex from './db'


const locals = { appName, searchEndpoint, logEndpoint }

const indexHtml = renderFile(join(__dirname, '/index.jade'), locals)


express()
  .get('/', (_, res) => res.send(indexHtml))
  .get('/api/imagesearch/:term', logSearches(knex), searchImages(search))
  .get('/api/latest/imagesearch', getSearches(knex))
  .listen(port, _ => console.log(`listening on ${port}`))
