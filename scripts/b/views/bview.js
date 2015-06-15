export default Backbone.View.extend({

  template: JST.bindex,

  events: {
    'click button': 'submitPerson',
  },

  initialize: function(){
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  submitPerson: function(e) {
    e.preventDefault();
    this.collection.create({
      first_name: this.$('.first_name').val(),
      last_name: this.$('.last_name').val(),
      address: this.$('.address').val(),
      phone_name: this.$('.phone_number').val()
    });
  }


});
