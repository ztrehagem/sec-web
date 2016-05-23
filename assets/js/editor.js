angular.module('editor',[
    'ngResource',
    'ngSanitize'
])

.controller('editorController', ['$resource', function($resource) {
    var c = this;

    this.list = null;

    this.load = function(target) {
        $resource(target).query(function(data) {
            c.list = data;
        });
    };

    this.insertBefore = function(target) {
        target.unshift({});
    };

    this.insertAfter = function(target) {
        target.push({});
    };

    this.delete = function(target, index) {
        target.splice(index, 1);
    };

    this.generate = function() {
        // FileAPI
    };
}])

;
