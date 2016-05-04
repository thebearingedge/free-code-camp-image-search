
import { format } from 'url'
import wrap from 'express-async-wrap'
import request from 'request-promise'


const { CSE_KEY: key, CSE_ID: cx } = process.env
const searchType = 'image'
const safe = 'medium'
const num = 10

const parameters = { key, cx, searchType, safe, num }

const protocol = 'https'
const host = 'www.googleapis.com'
const pathname = '/customsearch/v1'


const imageSearch = wrap(async ({ params }, res) => {

  const { term: q } = params
  const query = { ...parameters, q }
  const uri = format({ protocol, host, pathname, query })

  const { items: images } = await request({ uri, json: true })
  res.json(images.map(formatImageData))
})


const formatImageData = ({ image, snippet, link }) => ({
  url: link,
  snippet,
  thumbnail: image.thumbnailLink,
  context: image.contextLink
})


export default imageSearch
