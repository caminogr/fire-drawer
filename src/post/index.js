import $ from 'jquery';

function PostPage() {
  this.template = require('./index.html');
}

PostPage.prototype = {
  render: function() {
    $('#app-container').html(this.template)
    $('#text-input').on('keydown', () => {
      console.log('input')
    })
  }
}
export default PostPage;
