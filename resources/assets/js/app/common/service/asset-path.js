modules.common

.service('assetPath', [function() {
  this.template = function(name) {
    return '/template/' + name + '.html';
  };
}]);
