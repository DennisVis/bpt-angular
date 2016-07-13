angular.module('bpt.detail', ['ngRoute']).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:id', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl',
    controllerAs: 'ctrl'
  });
}]).

controller('DetailCtrl', ['QuestionsResource', '$routeParams', function(QuestionsResource, $routeParams) {
  const id = $routeParams.id;
  this.question = QuestionsResource.get({id});
  this.remove = () => QuestionsResource.delete({id});
}]);
