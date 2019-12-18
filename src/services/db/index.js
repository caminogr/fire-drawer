import firebase from '../../config/firebase';
import eventEmitter from '../eventEmitter';

function DatabaseService() {
  this.database = firebase.database();
  this.postRef = firebase.database().ref('post/')
  this._initialDataLoaded = false;
  this._localPost = false;
}

DatabaseService.prototype = {
  init: function() {
    const self = this;
    this.listen();
    this.postRef.once('value', function() {
      self._initialDataLoaded = true;
    });
  },

  listen: function() {
    const self = this;
    this.postRef.on('child_added', function(snapshot) {
      if (!self._initialDataLoaded) return;
      if (self._localPost) {
        self._localPost = false
        return;
      }
      eventEmitter.emit('post', snapshot.val());
    })
  },

  post: function(message, direction, speed) {
    this.database.ref('post/').push({
      message,
      direction,
      speed,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
    this._localPost = true;
  }
}

const databaseService = new DatabaseService;
export default databaseService;
