modules.app

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

.controller('memberController', ['$scope', '$resource', '$uibModal', 'assetPath', function($scope, $resource, $uibModal, assetPath) {
    var c = this;

    this.list = null;

    this.modal = function(target) {
        $uibModal.open({
            templateUrl: assetPath.template('member-modal'),
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
