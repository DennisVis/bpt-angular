angular.module('bpt.edit', ['ngRoute']).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:id/edit', {
    templateUrl: 'edit/edit.html',
    controller: 'EditCtrl',
    controllerAs: 'ctrl'
  });
}]).

controller('EditCtrl', ['QuestionsResource', '$routeParams', '$location', function(QuestionsResource, $routeParams, $location) {
  const isNew = $routeParams.id === 'new';
  const id = isNew ? undefined : $routeParams.id;

  this.question = isNew ? {labels: {}} : QuestionsResource.get({id});

  this.save = () => {
    if (isNew) {
      QuestionsResource.save({id}, this.question, q => $location.path(q.id));
    } else {
      QuestionsResource.update({id}, this.question, () => $location.path(id));
    }
  };

  this.addLabel = () => {
    if (this.newLanguage) {
      this.question.labels[this.newLanguage] = this.newValue;
      delete this.newLanguage;
      delete this.newValue;
    }
  };

  this.removeLabel = language => delete this.question.labels[language];
}]);
