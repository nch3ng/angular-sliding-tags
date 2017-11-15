var SLIDING_TAGS_INPUT = '<div class="tags">\
                            <ul class="tag">\
                              <li ng-repeat="tag in tags"><a href="#">{{tag.name}} <span>{{tag.count}}</span></a> </li>\
                              <li class="hidden"><a href="#"></a></li>\
                            </ul>\
                            <input placeholder="Add tag" type="text"\
                              ng-focus="onInputFocus($event)" \
                              ng-model="tagInput" \
                              ng-blur="onInputBlur()" \
                              ng-keydown="onKeyDown($event)" />\
                          </div>'

angular.module('sliding.tags', []).service("slidingTags", [function(){
}]).directive('slidingTagsInput', ['$timeout', function($timeout){
  return {
    restrict: 'E',
    replace: false,
    controller: "slidingTagsCtrl",
    template: function(element, attrs) {
   
      return SLIDING_TAGS_INPUT;
    },
    require: "?ngModel",
    scope: {
      ngModel: '=',
      initCount: '@'
    },
    link: function (scope, element, attrs) {
      console.log(scope.initCount);
      scope.onInputFocus = function(event){
        scope.focus = true;
      };
      
      scope.addTag = function(tag){
        var match = false;
        var count = 0;
        var idx = 0;
        angular.forEach(scope.tags, function(obj, key){
          
          if (tag == obj.name) {
            match = true;
            count = obj.count + 1;
            obj.count = count;
            var x = element[0].querySelectorAll('ul li:not(.hidden)');
            var el = angular.element(x[idx]).find('a');
            el.addClass('hover')
            $timeout(function () {
              el.removeClass('hover');
            }, 1000);
            
          }
          idx = idx + 1;
        });
        if(!match) {
          scope.tags.push({name: tag, count: parseInt(scope.initCount)})
        }
      }
      scope.onKeyDown = function(e){
        if(e.which == 13) {
          //Enter
          scope.addTag(scope.tagInput);
          scope.tagInput = '';
        }
      };
      
      scope.onInputBlur = function(event) {
        scope.focus = false;
      }
      
      //console.log(scope);
    }
  }
}]).controller("slidingTagsCtrl", ['$scope', function($scope){
  $scope.tagInput = '';
  $scope.focus = false;
  $scope.tags = $scope.ngModel;
  $scope.initCount = 0;
  $scope.$watch('focus', function(newvalue, oldvalue){
  })
}]);