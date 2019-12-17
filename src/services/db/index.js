import firebase from '../../config/firebase';

function DatabaseService() {
  this.database = firebase.database();
}

DatabaseService.prototype = {
  post: function(message) {
    this.database.ref('post/').push({
      message,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
  }
}

const databaseService = new DatabaseService;
export default databaseService;
