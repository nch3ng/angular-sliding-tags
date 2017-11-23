describe('Sliding Tags', function() {
  beforeEach(module('sliding.tags'));
  
  var $controller, $rootScope, $ctrl;
  
  beforeEach(inject(function(_$compile_, _$controller_, _$rootScope_){
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));
  
  
  /*it('dummy ng should be binded', function(){
    var scope = $rootScope.$new();
    var html = "<input ng-model='name' />";
    var inputelem = angular.element(html);
    var compiled = $compile(inputelem)(scope)
    
    scope.$apply(function(){
      scope.name='nate';
    })  
    expect(inputelem.val()).toBe('nate');
  })*/
  
  it('placeholder default should be add tag', function(){
    var scope = $rootScope.$new();
    scope.tags = [{name: 'test data 1', count: 2}];
    scope.tagInput = '';
    var html = "<sliding-tags-input tag-sets='tags' tag-input='tagInput'><sliding-tags-input>";
    
    var element = angular.element(html);
    var compiled = $compile(element)(scope);
    var ctrl = element.controller('slidingTagsInput');
    scope.$digest();
    
    var elemInput = element.find('input');
    
    expect(elemInput.attr('placeholder')).toBe('Add tag');
  })
  
  it('set placeholder', function(){
    var scope = $rootScope.$new();
    scope.tags = [{name: 'test data 1', count: 2}];
    scope.tagInput = '';
    var html = "<sliding-tags-input tag-sets='tags' tag-input='tagInput' placeholder='Add some tags'><sliding-tags-input>";
    
    var element = angular.element(html);
    var compiled = $compile(element)(scope);
    var ctrl = element.controller('slidingTagsInput');
    scope.$digest();
    
    var elemInput = element.find('input');
    
    expect(elemInput.attr('placeholder')).toBe('Add some tags');
  })
  
  it('Add new input', function() {
    // Compile a piece of HTML containing the directive
    var scope = $rootScope.$new();
    scope.tags = [{name: 'test data 1', count: 2}];
    scope.tagInput = '';
    var html = "<sliding-tags-input tag-sets='tags' tag-input='tagInput'><sliding-tags-input>";
    
    var element = angular.element(html);
    var compiled = $compile(element)(scope);
    var ctrl = element.controller('slidingTagsInput');
    scope.$digest();
    
    var dirScope = element.isolateScope();
    spyOn(dirScope, 'onKD').and.callThrough();;
    spyOn(dirScope, 'addTag').and.callThrough();
    expect(dirScope.tagSets).toBeDefined();
    
    var elemInput = element.find('input');
    angular.element(elemInput).val('abc').triggerHandler('input');
   
    angular.element(elemInput).triggerHandler({ type: 'keydown', which: 13});   
    angular.element(elemInput).triggerHandler("blur");
    

    expect(ctrl).toBeDefined();
    expect(dirScope.onKD).toHaveBeenCalled();
    expect(dirScope.addTag).toHaveBeenCalled();
    
    dirScope.tagSets.forEach(function (o) { delete o.$$hashKey });
    
    expect(dirScope.tagSets).toEqual([{name: 'test data 1', count: 2}, {name:'abc', count: 0}])
  });
  
  it('Add same input count+1', function(){
    var scope = $rootScope.$new();
    scope.tags = [{name: 'test data 1', count: 2}];
    scope.taginput = '';
    var html = "<sliding-tags-input tag-sets='tags' tag-input='taginput'><sliding-tags-input>";
    
    var element = angular.element(html);
    var compiled = $compile(element)(scope);
    scope.$digest();
    var dirScope = element.isolateScope();
    spyOn(dirScope, 'onKD').and.callThrough();;
    spyOn(dirScope, 'addTag').and.callThrough();
    expect(dirScope.tagSets).toBeDefined();
    expect(dirScope.tagInput).toBeDefined();
    
    var elemInput = element.find('input');
    angular.element(elemInput).val('test data 1').triggerHandler('input');
   
    angular.element(elemInput).triggerHandler({ type: 'keydown', which: 13});   
    angular.element(elemInput).triggerHandler("blur");
    dirScope.tagSets.forEach(function (o) { delete o.$$hashKey });
    expect(dirScope.tagSets).toEqual([{name: 'test data 1', count: 3}])
  });
  
  it('add new tag count should start with init-count', function() {
    var scope = $rootScope.$new();
    scope.tags = [{name: 'test data 1', count: 2}];
    scope.taginput = '';
    var html = "<sliding-tags-input tag-sets='tags' tag-input='taginput' init-count='30'><sliding-tags-input>";
    
    var element = angular.element(html);
    var compiled = $compile(element)(scope);
    scope.$digest();
    var dirScope = element.isolateScope();
    spyOn(dirScope, 'onKD').and.callThrough();;
    spyOn(dirScope, 'addTag').and.callThrough();
    expect(dirScope.tagSets).toBeDefined();
    expect(dirScope.tagInput).toBeDefined();
    
    var elemInput = element.find('input');
    angular.element(elemInput).val('new data').triggerHandler('input');
    
    angular.element(elemInput).triggerHandler({ type: 'keydown', which: 13});   
    angular.element(elemInput).triggerHandler("blur");
    dirScope.tagSets.forEach(function (o) { delete o.$$hashKey });
    expect(dirScope.tagSets).toEqual([{name: 'test data 1', count: 2}, {name: 'new data', count: 30}])
  });
});