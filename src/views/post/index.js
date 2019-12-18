import './index.css'
import $ from 'jquery';
import databaseService from '../../services/db';

function PostPage() {
  this.template = require('./index.html');
}

PostPage.prototype = {
  render: function() {
    $('#app-container').html(this.template)
    $('#text-input').on('keydown', (e) => {
        // temporarily code
        if (e.keyCode !== 13) return
        const ajustedText = e.target.value.trim();
        if (ajustedText === '') return

        databaseService.post(ajustedText);
        e.target.value = '';
    })
  }
}
export default PostPage;
