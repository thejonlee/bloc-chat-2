(function() {
  function BlocChatCookies($cookies, $uibModal) {

    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
        templateUrl: '/templates/cookies.html',
        size: 'sm',
        controller: 'CookiesCtrl as cookies'
      });
    }
  };

  angular
  .module('blocChat')
  .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
