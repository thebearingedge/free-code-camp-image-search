
import express from 'express'
import { PORT } from './config'


const app = express()


app
  .get('/', (req, res) => res.send('<meta name="google-site-verification" content="01Gg77g4krecLRBSmFFivbCAgctlY13exV7B3gGc6RE" />'))
  .listen(PORT, _ => console.log(`listening on ${PORT}`))
