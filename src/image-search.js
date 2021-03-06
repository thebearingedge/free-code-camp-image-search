
import { format } from 'url'
import wrap from 'express-async-wrap'
import request from 'request-promise'


const protocol = 'https'
const host = 'www.googleapis.com'
const pathname = '/customsearch/v1'
const json = true


const searchImages = searchConfig => wrap(async (req, res) => {

  const { term: q } = req.params
  const { offset } = req.query
  const start = Number(offset || searchConfig.num) + 1
  const query = { ...searchConfig, q, start }

  const uri = format({ protocol, host, pathname, query })

  const { items: images } = await request({ uri, json })

  res.json(images.map(formatImage))
})


const formatImage = ({ link, snippet, image }) => ({
  url: link,
  snippet,
  thumbnail: image.thumbnailLink,
  context: image.contextLink
})


export default searchImages
