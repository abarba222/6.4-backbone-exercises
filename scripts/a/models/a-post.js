var Post = Backbone.Model.extend ({
  idAttribute: '_id',

  defaults: {
    'title' : '',
    'body' : ''
  },

});

var PostCollection = Backbone.Collection.extend ({
  model: Post,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/MLD",
});

export default {PostCollection};
