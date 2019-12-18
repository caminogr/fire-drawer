import $ from 'jquery';
import Drawer from '../../drawer';
import eventEmitter from '../../services/eventEmitter';

function Canvas() {
  this.template = require('./index.html');
  $("#app-container").html(this.template)
}

Canvas.prototype = {
  init: function() {
    eventEmitter.on('post', function(snapshot) {
      console.log('canvas on', snapshot)
    })
  }
}

export default Canvas;
