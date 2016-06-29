var modules = {};

modules.app = {};

modules.app.main = angular.module('app.main', [
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'common'
]);

modules.app.editor = angular.module('app.editor', [
  'ngResource',
  'ngSanitize'
]);

modules.common = angular.module('common', []);
