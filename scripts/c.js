import Router from './router';

(function() {
  'use strict';

  window.router = new Router();

  $(document).ready(function() {
    Backbone.history.start();
});
});
