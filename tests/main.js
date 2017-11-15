describe('Sliding Tags', function() {
  beforeEach(module('sliding.tags'));
  
  var $controller, $rootScope;
  
  beforeEach(inject(function(_$compile_, _$controller_, _$rootScope_){
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));
  
  
  
  describe('$scope.tags', function(){
    it("dummy", function(){
      var $scope = $rootScope.$new();
      var controller = $controller('slidingTagsCtrl', { $scope: $scope });
    })
  })
  
  describe('slidingTagsInput', function(){
    it('Replace the element with appropriate content', function(){
      var element = $compile("<sliding-tags-input><sliding-tags-input>")($rootScope);
      $rootScope.$digest();
    })
  })
});