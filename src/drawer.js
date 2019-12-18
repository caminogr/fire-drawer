function Drawer() {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.ctx.font = "24px Arial";
  this.ctx.strokeStyle = "#323232";
  this.ctx.lineWidth = 2; 
}

Drawer.prototype = {
  drawText: function (text) {
    const self = this;
    let posX = this.canvas.width;
    const posY = Math.random() * this.canvas.height;
    const intervalId = setInterval(function () {
      self.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      self.ctx.fillText(text, posX, posY)
      posX -= 10
    }, 20 )
    // todo: calculate text width
    if (posX < -1000) {
      this.clearInterval(intervalId)
    }
  }
}

export default Drawer;
