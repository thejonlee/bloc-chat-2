(function() {

  function BlocChatCookies($cookies, $uibModal) {

    var currentUser = $cookies.get('blocChatCurrentUser');

    console.log(currentUser);

    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/login.html',
        size: 'sm',
        controller: 'CookiesCtrl as cookies'
      });
    }
  };

  angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
