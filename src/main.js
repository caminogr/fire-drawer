import Navigo from 'navigo';
import PostPage from './views/post';
import Canvas from './views/canvas';
import databaseService from './services/db';

const root = null;
const useHash = false;
const hash = '#';
const router = new Navigo(root, useHash, hash);

databaseService.init();

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
