import View from './b/views/bview';
import {PersonCollection} from './b/models/person';

(function() {
  'use strict';

  $(document).ready(function(){

    var person = new PersonCollection();
    var index = new View({collection: person});

    $('.app-container').html(index.el);
  });

})();
