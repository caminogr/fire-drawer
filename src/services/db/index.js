import firebase from '../../config/firebase';
import eventEmitter from '../eventEmitter';

function DatabaseService() {
  this.database = firebase.database();
  this.postRef = firebase.database().ref('post/')
  this._localPost = false;
}

DatabaseService.prototype = {
  init: function() {
    this.listen();
  },

  listen: function() {
    const self = this;
    this.postRef.on('value', function(snapshot) {
      if (self._localPost) {
        self._localPost = false
        return;
      }
      eventEmitter.emit('post', snapshot);
    })
  },

  post: function(message) {
    this.database.ref('post/').push({
      message,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
    this._localPost = true;
  }
}

const databaseService = new DatabaseService;
export default databaseService;
