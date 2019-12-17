import Navigo from 'navigo';
import PostPage from './views/post';
import Canvas from './views/canvas';

var root = null;
var useHash = false;
var hash = '#';
var router = new Navigo(root, useHash, hash);

router
  .on('/input', function () {
    const postPage = new PostPage();
    postPage.render();
  })
  .on('/', function () {
    const canvas = new Canvas()
    canvas.draw();
  })
  .resolve();
