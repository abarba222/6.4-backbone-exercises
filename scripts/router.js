var Router = Backbone.router.extend({
  routes: {
    '': 'index'
  },

  initializa: function() {

  },


});


var Burger = Backbone.Model.extend ({
  idAttribute: "_id",
  urlRoot: "tiny-lasagna"
});

var BurgersCollection = Backbone.Collection.extend ({
  url: "tiny-lasagna",
  model: Burger
});
