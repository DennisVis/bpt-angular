angular.module('bpt').factory('QuestionsResource', ['$resource', function($resource) {
  return $resource('http://localhost:3000/questions/:id', {}, {
    update: {
      method: 'PUT'
    }
  });
}]);
