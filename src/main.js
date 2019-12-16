import Navigo from 'navigo';
import Canvas from './canvas';

var root = null;
var useHash = false;
var hash = '#';
var router = new Navigo(root, useHash, hash);

router
  .on('/input', function () {
    console.log('show input')
  })
  .on('/', function () {
    const canvas = new Canvas()
    canvas.drawText();
    console.log('show canvas')
  })
  .resolve();
