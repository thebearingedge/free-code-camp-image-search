
import { format } from 'url'
import wrap from 'express-async-wrap'
import request from 'request-promise'


const { CSE_KEY: key, CSE_ID: cx } = process.env

const num = 10
const safe = 'medium'
const searchType = 'image'
const fields = 'items(link,snippet,image/contextLink,image/thumbnailLink)'

const parameters = { key, cx, num, safe, searchType, fields }

const protocol = 'https'
const host = 'www.googleapis.com'
const pathname = '/customsearch/v1'

const json = true


const imageSearch = wrap(async (req, res) => {

  const { term: q } = req.params
  const { offset } = req.query
  const start = (offset || 0 * num) + 1
  const query = { ...parameters, q, start }

  const uri = format({ protocol, host, pathname, query })

  const { items: images } = await request({ uri, json })

  res.json(images.map(formatImageData))
})


const formatImageData = ({ link, snippet, image }) => ({
  url: link,
  snippet,
  thumbnail: image.thumbnailLink,
  context: image.contextLink
})


export default imageSearch
