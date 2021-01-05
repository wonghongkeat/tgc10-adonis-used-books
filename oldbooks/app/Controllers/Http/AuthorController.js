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

class AuthorController {
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



