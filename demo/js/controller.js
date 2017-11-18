slideingtagsapp.controller('sTagsCtrl', ['$scope', function($scope){
  console.log('Controller intializing...');
  $scope.tags=[
    {name: 'example', count: 1}
  ]
  
  $scope.tagInput = '';
}]);