
import googleImages from 'google-images'
import wrap from 'express-async-wrap'


const { CSE_ID, CSE_KEY } = process.env


const api = googleImages(CSE_ID, CSE_KEY)


const imageSearch = wrap(async ({ params, query }, res) => {

  const { term } = params

  const images = await api.search(term)

  res.json(images)
})


export default imageSearch
