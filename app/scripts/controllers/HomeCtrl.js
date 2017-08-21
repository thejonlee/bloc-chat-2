(function() {
    function HomeCtrl(Room, $uibModal) {
        // Assign Room array retrieved by all method to $scope variable
        var room = this;

        room.rooms = Room.all;

        room.newRoom = function () {
            $uibModal.open({
              templateUrl: '/templates/modal.html',
              size: 'sm',
              controller: 'ModalCtrl as modal'
            });
        }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
