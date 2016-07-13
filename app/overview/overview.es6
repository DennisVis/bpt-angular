angular.module('bpt.overview', ['ngRoute']).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'overview/overview.html',
    controller: 'OverviewCtrl',
    controllerAs: 'ctrl'
  });
}]).

controller('OverviewCtrl', ['QuestionsResource', function(QuestionsResource) {
  this.questions = QuestionsResource.query();
}]);
