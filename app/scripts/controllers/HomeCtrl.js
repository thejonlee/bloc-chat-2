(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        // Assign Room array retrieved by all method to $scope variable
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.newMessage = {
          content: null,
          roomId: null,
          sentAt: null,
          username: null
        }

        this.newRoom = function() {
            $uibModal.open({
              templateUrl: '/templates/modal.html',
              size: 'sm',
              controller: 'ModalCtrl as modal'
            });
        };

        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        };

        this.sendMessage = function(newMessage) {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            console.log(this.currentUser);
            console.log(this.currentRoom.$id);
            Message.send(this.newMessage);
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
