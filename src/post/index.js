import $ from 'jquery';

function PostPage() {
  this.template = require('./index.html');
  $("#app-container").html(this.template)
}

export default PostPage;
