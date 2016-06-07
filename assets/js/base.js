angular.module('app',[
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
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
}])

.filter('parseParagraph', ['$sce', function( $sce ) {
	return function( input ) {
		return $sce.trustAsHtml(input.join('<br>'));
	};
}])

.controller('activityController', ['$resource', function($resource) {
    var c = this;

    this.list = null;

    $resource('json/activity.json').query(function(data) {
        c.list = data;
    });
}])

.controller('memberController', ['$scope', '$resource', '$uibModal', function($scope, $resource, $uibModal) {
    var c = this;

    this.list = null;

    this.modal = function(target) {
        $uibModal.open({
            templateUrl: 'member_modal.html',
            controller: 'memberModalController as modal',
            resolve: {data: target}
        });
    }

    $resource('json/member.json').query(function(data) {
        c.list = shuffle(data);

        function shuffle(array) {
            var n = array.length, t, i;

            while (n) {
                i = Math.floor(Math.random() * n--);
                t = array[n];
                array[n] = array[i];
                array[i] = t;
            }

            return array;
        }
    });
}])

.controller('memberModalController', ['$uibModalInstance', 'data', function($uibModalInstance, data) {
    this.data = data;
    this.close = $uibModalInstance.close
}])

;
