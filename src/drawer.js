function Drawer() {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.ctx.strokeStyle = "#323232";
  this.ctx.lineWidth = 2; 
}

Drawer.prototype = {
  drawText: function (text) {
    this.ctx.font = "24px Arial";
    this.ctx.fillText(text, this.canvas.width / 2, this.canvas.height / 2)
  }
}

export default Drawer;
