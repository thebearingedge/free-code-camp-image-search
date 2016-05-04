
import 'babel-polyfill'
import express from 'express'
import imageSearch from './image-search'
import { search as searchConfig, port } from './config'


const app = express()


app
  .get('/', (req, res) => res.send('hello world'))
  .get('/api/imagesearch/:term', imageSearch(searchConfig))
  .listen(port, _ => console.log(`listening on ${port}`))
