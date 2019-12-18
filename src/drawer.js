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
    const intervalId = setInterval(function () {
      let posX = this.canvas.width;
      self.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      self.ctx.fillText(text, posX, this.canvas.height / 2)
      posX -= 10
      // todo: calculate text width
      if (posX < -1000) {
        this.clearInterval(intervalId)
      }
    }, 20 )
  }
}

export default Drawer;
