import $ from 'jquery';
import Drawer from '../drawer';

function Canvas() {
  this.template = require('./index.html');
  $("#app-container").html(this.template)
}

Canvas.prototype = {
  draw: function () {
    this.drawer = new Drawer();
    this.drawer.drawText()
  },
}

export default Canvas;
