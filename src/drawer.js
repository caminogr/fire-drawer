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
      self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
      self.counter += 1.5 * speed;
      const offsetX = self.posX - self.counter;
      self.ctx.fillText(text, offsetX, self.posY);
      // todo: calculate text width
      if (offsetX < -400) {
        return;
      }
      self.drawText(text, speed);
    })
  },
}

export default Drawer;
