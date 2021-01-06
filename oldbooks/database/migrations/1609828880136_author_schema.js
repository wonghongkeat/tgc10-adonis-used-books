'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorSchema extends Schema {
  up () {
    this.create('authors', (table) => {
      table.increments()
      table.timestamps()
      table.string('first_name', 100).notNullable();
      table.string('last_name', 100).notNullable();
      table.date('date')

    })
  }

  down () {
    this.drop('authors')
  }
}

module.exports = AuthorSchema
