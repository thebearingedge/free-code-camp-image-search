
export const up = ({ schema, raw }) =>

  schema
    .createTable('searches', tb => {
      tb.increments('id')
      tb.string('term')
        .notNullable()
      tb.timestamp('when')
        .notNullable()
        .defaultTo(raw('now()'))
    })


export const down = ({ raw }) =>

  raw('drop table "searches"')
