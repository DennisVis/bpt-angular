angular.module('bpt', [
  'ngRoute',
  'ngResource',
  'bpt.overview',
  'bpt.detail',
  'bpt.edit'
]).
config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

