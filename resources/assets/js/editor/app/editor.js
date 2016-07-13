modules.app

.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(blob):/);
}])

.controller('editorController', ['$resource', function($resource) {
  var that = this;

  this.list = null;

  this.create = function(article) {
    return {
      data: article || {},
      toggle: function() { this.open = !this.open; },
      isOpen: function() { return this.open; },
      isClose: function() { return !this.open; }
    };
  };

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
    target.splice(index - 1, 2, target[index], target[index - 1]);
  };

  this.down = function(target, index) {
    if( target.length < 2 || index == target.length - 1 ) return;
    target.splice(index, 2, target[index + 1], target[index]);
  };
}])

.controller('activityEditorController', ['$resource', '$controller', '$window', 'downloader', function($resource, $controller, $window, downloader) {
  angular.extend(this, $controller('editorController'));

  var that = this;

  this.load = function() {
    $resource('json/activity.json').query(function(jsonObj) {
      that.list = decode(jsonObj);
    });
  };

  this.download = downloader.create('activity.json', function() {
    return angular.toJson(encode(that.list), true);
  });

  function decode(jsonObj) {
    return jsonObj.map(function(article) {
      article.description = convertArrayToText(article.description);
      return that.create(article);
    });
  }

  function encode(displayObj) {
    return displayObj.map(function(article) {
      article.data.description = convertTextToArray(article.data.description);
      return article.data;
    });
  }

  function convertArrayToText(array) {
    return array && array.map(function(paragraph) {
      return paragraph.join('\n');
    }).join('\n\n');
  }

  function convertTextToArray(text) {
    return text && text.split('\n\n').map(function(paragraph) {
      return paragraph.split('\n');
    });
  }
}])

.controller('memberEditorController', ['$resource', '$controller', '$window', 'downloader', function($resource, $controller, $window, downloader) {
  angular.extend(this, $controller('editorController'));

  var that = this;

  this.load = function() {
    $resource('json/member.json').query(function(jsonObj) {
      that.list = decode(jsonObj);
    });
  };

  this.download = downloader.create('member.json', function() {
    return angular.toJson(encode(that.list), true);
  });

  function decode(jsonObj) {
    return jsonObj.map(function(article) {
      return that.create(article);
    });
  }

  function encode(displayObj) {
    return displayObj.map(function(article) {
      return article.data;
    });
  }
}]);
