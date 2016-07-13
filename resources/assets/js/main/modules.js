var modules = {};

modules.app = angular.module('app', [
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'common'
]);

modules.common = angular.module('common', []);
