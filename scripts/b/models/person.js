var Person = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    'first_name': '',
    'last_name': '',
    'address': '',
    'phone_number': ''
  },

});

var PersonCollection = Backbone.Collection.extend ({
  model: Person,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/MLD',
});

export default {PersonCollection};
