import router from './router';

(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());
    Backbone.history.start();
  });
})();
