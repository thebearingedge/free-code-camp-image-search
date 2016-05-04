
const client = 'postgresql'


export const development = {
  client,
  connection: {
    user: 'image-search',
    password: 'image-search',
    database: 'image-search'
  }
}


export const production = {
  client,
  connection: process.env.DATABASE_URL,
  ssl: true
}


export const PORT = process.env.PORT || 3000
