
import wrap from 'express-async-wrap'


export const logger = knex => wrap(async ({ params }, res, next) => {

  const { term } = params

  await knex('searches').insert({ term })

  next()
})


export const getLogs = knex => wrap(async ({ params }, res, next) => {

  const searches = await knex
    .select('term', 'when')
    .from('searches')
    .orderBy('when', 'desc')
    .limit(10)

  res.json(searches)
})


export default logger
