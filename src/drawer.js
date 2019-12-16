function Drawer() {
  this.canvas = document.getElementById('canvas');
  this.ctx = canvas.getContext('2d');
  this.ctx.strokeStyle = "#323232";
  this.ctx.lineWidth = 2; 
}

Drawer.prototype = {
  drawText: function () {
    this.ctx.font = "24px Arial";
    this.ctx.fillText('ほげーーーーーーーーーーー', canvas.width / 2, canvas.height / 2)
  }
}

export default Drawer;
