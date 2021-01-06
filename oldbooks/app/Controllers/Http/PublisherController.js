'use strict'

class PublisherController {


// to update
async update({view,params}){
  let publisher = await PublisherController.find(params.publisher_id);
  return view.render('publishers/update',{
    publisher: publisher.toJSON()
  })
}

  async processUpdate({request, response,params}){
    let publisher = await PublisherController.find(params.publisher_id);
    let formData = request.post();
    publisher.name = formData.name;
    publisher.email = formData.email;
    publisher.save()
    response.route('')
  }

// to delete
async delete({view,params}){
  let publisher = await Publisher.find(params.publisher_id);
  return view.render('publishers/delete',{
    publisher:publisher.toJSON()
  })
}
async processDelete({response,params}){
  let publisher = await Publisher.find(params.publisher_id);
  await publisher.delete();
  response.route('')
}

}
module.exports = PublisherController
