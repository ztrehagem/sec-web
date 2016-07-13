modules.app

.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.when('', '/');
}])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('top', {
      url: '/',
      templateUrl: 'top.html'
    })
    .state('activity', {
      url: '/activity',
      templateUrl: 'activity.html'
    })
    .state('member', {
      url: '/member',
      templateUrl: 'member.html'
    });
}]);
