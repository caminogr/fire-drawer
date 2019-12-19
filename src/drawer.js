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
  drawText: function(text, speed) {
    const self = this;
    window.requestAnimationFrame(function() {
      self._drawText(text, speed)
    })
  },
  _drawText: function (text, speed) {
    console.log(speed)
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.counter += 2 * speed;
    const offsetX = this.posX - this.counter;
    this.ctx.fillText(text, offsetX, this.posY);
    // todo: calculate text width
    if (offsetX < -400) {
      return;
    }
    this.drawText(text, speed);
  }
}

export default Drawer;
