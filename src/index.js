
import 'babel-polyfill'
import express from 'express'
import imageSearch from './image-search'
import { PORT } from './config'


const app = express()


app
  .get('/', (req, res) => res.send('hello world'))
  .get('/api/imagesearch/:term', imageSearch)
  .listen(PORT, _ => console.log(`listening on ${PORT}`))
