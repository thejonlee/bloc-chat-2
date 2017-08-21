(function() {

  function Room($firebaseArray) {

    var Room = {};
    // Creates reference to rooms database
    var ref = firebase.database().ref().child("rooms");
    // rooms uses $firebaseArray service to make ref an array
    var rooms = $firebaseArray(ref);

    //append rooms to the Room object as Room.all
    Room.all = rooms;

    Room.add = function (room) {
        //Use the firebase method $add here
        rooms.$add(room);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
