angular.module('app',[
    'ngResource',
    'ngSanitize'
])

.filter('parseParagraph', ['$sce', function( $sce ) {
	return function( input ) {
		return $sce.trustAsHtml(input.join('<br>'));
	};
}])

.controller('activityController', ['$resource', function($resource) {
    var c = this;

    this.list = null;

    $resource('/json/activity.json').query(function(data) {
        c.list = data;
    });
}])

.controller('memberController', ['$resource', function($resource) {
    var c = this;

    this.list = null;

    $resource('/json/member.json').query(function(data) {
        c.list = data;
    });
}])

;
