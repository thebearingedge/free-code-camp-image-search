

export const database = {
  development: {
    client: 'postgresql',
    connection: {
      user: 'image-search',
      password: 'image-search',
      database: 'image-search'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    ssl: true
  }
}


export const search = {
  key: process.env.CSE_KEY,
  cx: process.env.CSE_ID,
  num: 10,
  safe: 'medium',
  searchType: 'image',
  fields: 'items(link,snippet,image/contextLink,image/thumbnailLink)'
}


export const appName = process.env.APP_NAME || 'localhost:3000'


export const searchEndpoint = '/api/imagesearch/:term'


export const logEndpoint = '/api/latest/imagesearch'


export const port = process.env.PORT || 3000
