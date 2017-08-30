(function () {
    function ModalCtrl(Room, $uibModalInstance) {

        this.submit = function () {
          Room.add(this.newRoom.name);
          $uibModalInstance.close();
        };

        this.cancel = function () {
          $uibModalInstance.dismiss();
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
