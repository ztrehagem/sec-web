angular.module('editor',[
    'ngResource',
    'ngSanitize'
])

.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(blob):/);
}])

.controller('editorController', ['$resource', function($resource) {
    var c = this;

    this.list = null;

    this.insertBefore = function(parent, propname, obj) {
        parent[propname] = parent[propname] || [];
        parent[propname].unshift(obj);
    };

    this.insertAfter = function(parent, propname, obj) {
        parent[propname] = parent[propname] || [];
        parent[propname].push(obj);
    };

    this.delete = function(target, index) {
        target.splice(index, 1);
    };

    this.up = function(target, index) {
        if( target.length < 2 || index == 0 ) return;
        console.log(target);
        var temp = target.splice(index, 1);
        console.log(temp);
        console.log(target);
        target.splice(index - 1, 0, temp);
        console.log(target);
    };

    this.down = function(target, index) {
        if( target.length < 2 || index == target.length - 1 ) return;
        var temp = target.splice(index, 1);
        target.splice(index, 0, temp);
    };
}])

.controller('activityEditorController', ['$resource', '$controller', '$window', function($resource, $controller, $window) {
    angular.extend(this, $controller('editorController'));

    var c = this;

    this.load = function() {
        $resource('json/activity.json').query(function(data) {
            angular.forEach(data, function(article) {
                var paragraphs = article.description.map(function(paragraph) {
                    return paragraph.join('\n');
                });
                article.description = paragraphs.join('\n\n');
            });
            c.list = data;
        });
    };

    this.download = (function () {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        return function () {
            var data = angular.copy(this.list);
            angular.forEach(data, function(article) {
                if( !article.description ) return;
                var paragraphs = article.description.split('\n\n');
                article.description = paragraphs.map(function(paragraph) {
                    return paragraph.split('\n');
                });
            });

            var json = angular.toJson(data, true);
            var blob = new Blob([json], {type: "octet/stream"});
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'activity.json';
            a.click();
            window.URL.revokeObjectURL(url);
        };
    }());
}])

.controller('memberEditorController', ['$resource', '$controller', '$window', function($resource, $controller, $window) {
    angular.extend(this, $controller('editorController'));

    var c = this;

    this.load = function() {
        $resource('json/member.json').query(function(data) {
            c.list = data;
        });
    };

    this.download = (function () {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        return function () {
            var data = angular.copy(this.list);
            var json = angular.toJson(data, true);
            var blob = new Blob([json], {type: "octet/stream"});
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'member.json';
            a.click();
            window.URL.revokeObjectURL(url);
        };
    }());
}])

;
