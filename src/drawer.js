function Drawer() {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.ctx.font = "24px Arial";
  this.ctx.strokeStyle = "#323232";
  this.ctx.lineWidth = 2; 

  this.posX = this.canvas.width;
  this.posY = Math.random() * this.canvas.height;
  this.counter = 0;
}

Drawer.prototype = {
  drawText: function(text) {
    const self = this;
    window.requestAnimationFrame(function() {
      self._drawText(text)
    })
  },
  _drawText: function (text) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.counter += 10;
    const offsetX = this.posX - this.counter;
    this.ctx.fillText(text, offsetX, this.posY);
    // todo: calculate text width
    if (offsetX < -400) {
      return;
    }
    this.drawText(text);
  }
}

export default Drawer;
