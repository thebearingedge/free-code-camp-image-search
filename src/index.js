
import express from 'express'


const PORT = process.env.PORT || 3000


const app = express()


app
  .get('/', (req, res) => res.send('hello world'))
  .listen(PORT, _ => console.log(`listening on ${PORT}`))
