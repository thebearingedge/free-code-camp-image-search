
import wrap from 'express-async-wrap'


const logger = knex => wrap(async ({ params }, res, next) => {

  const { term } = params

  await knex('searches').insert({ term })

  next()
})


export default logger
