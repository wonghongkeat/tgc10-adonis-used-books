'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublisherSchema extends Schema {
  up () {
    this.create('publishers', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 254).notNullable()

    })
  }

  down () {
    this.drop('publishers')
  }
}

module.exports = PublisherSchema
