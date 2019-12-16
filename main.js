import Navigo from 'navigo';
import Drawer from './drawer.js';
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
    console.log('show canvas')
    const drawer = new Drawer();
    drawer.drawText();
  })
  .resolve();
