'use strict'

const authorsDB = [
   {
      "id":1,
	  "name":"JRR Tolkien"
   },
   {
	  "id":2,
	  "name":"CS Lewis"
   },
   {
	  "id":3,
	  "name":"Goh Sin Tub"
   },
   {
	  "id":4,
	  "name":"Catherine Lee"
   },
     {
	  "id":5,
	  "name":"Wong Hong Keat"
   }

]

const Author= use('App/Models/Author')

class AuthorController {
  create({view}){
    return view.render('books/create')
  }

  async processCreate({request,response}){
    let body = request.post()
    console.log(body)
    let newAuthor = new Author()
    newAuthor.firstName = body.firstName;
    newAuthor.lastName = body.lastName;
    newAuthor.date = body.date;
    // step 3: save
    await newAuthor.save();
    response.route('show_all_authors')
  }



  author({view,params}){
    let authorSelected = params.author_id
    let authorID = authorsDB.find(a => a.id === parseInt(authorSelected))
    return view.render('books/authorid',{
      authorID
    })
  }

  index ({view}){
    return view.render('books/authors',{
      authorsDB
    })
  }
}

module.exports = AuthorController



