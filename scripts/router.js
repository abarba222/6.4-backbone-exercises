import IndexView from './views/index';
import PostShowView from './views/show';
import {PostCollection} from './models/post';


export default Backbone.Router.extend ({
  routes: {
    '': 'index',
    ':id': 'show'
  },

  intialize: function(){

    this.posts = new PostCollection();
    this.fetchPostsPromise = this.posts.fetch();

    this.indexView = new indexView({collection: this.posts});
    $('#sidebar').html(this.indexView.el);

},

  index: function() {

  },

  show: function(id) {
    this.fetchPostsPromise.then(function() {
      var post = this.posts.get(id);
      this.showView(new PostShowView({model: post}));
    }.bind(this));
  },

  showView: function(view) {
    if(this.currentView)this.currentView.remove();
    this.currentView = view;
    $('#app-container').html(view.el);
    return view;
  }

});
