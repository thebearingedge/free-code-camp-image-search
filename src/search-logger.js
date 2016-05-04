
import wrap from 'express-async-wrap'


export const logSearches = knex => wrap(async ({ params }, res, next) => {

  const { term } = params

  await knex('searches').insert({ term })

  next()
})


export const getSearches = knex => wrap(async ({ params }, res, next) => {

  const searches = await knex
    .select('term', 'when')
    .from('searches')
    .orderBy('when', 'desc')
    .limit(10)

  res.json(searches)
})
