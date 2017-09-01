(function() {

  function CookiesCtrl(Room, $uibModalInstance, $cookies) {

    this.createUsername = function() {
      // console.log("click works");
      // console.log(this.username);
      if (!this.username || this.username == ''){
        return;
      }
        // console.log("conditional works");
        $cookies.put('blocChatCurrentUser', this.username);
        $uibModalInstance.close();

        window.location.reload(true);
    };
  }

  angular
  .module('blocChat')
  .controller('CookiesCtrl', ['Room', '$uibModalInstance', '$cookies', CookiesCtrl]);
})();
