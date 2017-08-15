(function() {
    function HomeCtrl(Room) {
        // Assign Room array retrieved by all method to $scope variable
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
