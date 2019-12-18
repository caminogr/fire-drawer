import Navigo from 'navigo';
import PostPage from './views/post';
import Canvas from './views/canvas';

const root = null;
const useHash = false;
const hash = '#';
const router = new Navigo(root, useHash, hash);

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
