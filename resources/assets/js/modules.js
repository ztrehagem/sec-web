var modules = {};

modules.app = {};

modules.app.main = angular.module('app.main', [
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
]);

modules.app.editor = angular.module('editor', [
  'ngResource',
  'ngSanitize'
]);
