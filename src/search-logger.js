
import wrap from 'express-async-wrap'


export const logSearches = knex => wrap(async ({ params }, _, next) => {

  const { term } = params

  await knex
    .insert({ term })
    .into('searches')

  next()
})


export const getSearches = knex => wrap(async (_, res) => {

  const searches = await knex
    .select('term', 'when')
    .from('searches')
    .orderBy('when', 'desc')
    .limit(10)

  res.json(searches)
})
