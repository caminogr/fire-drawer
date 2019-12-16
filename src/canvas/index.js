import $ from 'jquery';
import Drawer from '../drawer';

function Canvas() {
  this.templateIndex = require('./index.html');
}

Canvas.prototype = {
  index: function () {
    const self = this;
    $("#app-container").html(self.templateIndex)

    this.drawer = new Drawer();
    this.drawer.drawText()
  },
}

export default Canvas;
