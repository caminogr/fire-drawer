import $ from 'jquery';
import Drawer from '../../drawer';
import eventEmitter from '../../services/eventEmitter';

function Canvas() {
  this.template = require('./index.html');
  $("#app-container").html(this.template)

  this.drawer = new Drawer();
}

Canvas.prototype = {
  init: function() {
    const self = this;
    eventEmitter.on('post', function(data) {
      self.showText(data)
    })
  },

  showText: function(postData) {
    this.drawer.drawText(postData.message)
  }
}

export default Canvas;
