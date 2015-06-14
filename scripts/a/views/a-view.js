export default Backbone.View.extend ({
  template: JST.a-form,

  events: {
    'click button' : 'submitPost',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  submitPost: function(e) {
    e.preventDefault();
    this.collection.create ({
      title: this.$('title-post').val(),
      body: this.$('blog-post').val()
    });
  }

});
