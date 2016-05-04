
export const up = ({ schema }) =>

  schema
    .createTable('searches', tb => {
      tb.increments('id')
      tb.string('term')
      tb.timestamp('when')
    })


export const down = ({ raw }) =>

  raw('drop table if exists "searches" cascade')
