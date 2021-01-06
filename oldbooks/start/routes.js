'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/main','BookController.index')
Route.get('/authors', 'AuthorController.index')

Route.get('/authors/create', 'AuthorController.create')
Route.post('/authors/create', 'AuthorController.processCreate')
Route.get('authors/:author_id', 'AuthorController.author')

Route.get('publishers/:publisher_id/update', 'PublisherController.update')
Route.post('publishers/:publisher_id/update', 'PublisherController.processUpdate')
Route.get('publishers/:publisher_id/delete', 'PublisherController.delete')
Route.post('publishers/:publisher_id/delete', 'PublisherController.processDelete')


