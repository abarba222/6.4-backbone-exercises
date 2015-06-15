import View from './a/views/a-view';
import {PostCollection} from './a/models/a-post';

(function() {
  'use strict';

$(document).ready(function(){

  var posts = new PostCollection();
  var index = new View ({collection: posts});

  $('.app-container').html(index.el);
});

})();
