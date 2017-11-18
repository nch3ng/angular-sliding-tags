var SLIDING_TAGS_INPUT = '<div class="tags">\
                            <ul class="tag">\
                              <li ng-repeat="tag in tagSets"><a href="#">{{tag.name}} <span>{{tag.count}}</span></a> </li>\
                              <li class="hidden"><a href="#"></a></li>\
                            </ul>\
                            <input placeholder="Add tag" type="text"\
                              ng-focus="onInputFocus($event)" \
                              ng-model="tagInput" \
                              ng-blur="onInputBlur()" \
                              ng-keydown="onKD($event)" />\
                          </div>'

angular.module('sliding.tags', []).service("slidingTags", [function(){
}]).directive('slidingTagsInput', ['$timeout', function($timeout){
  return {
    restrict: 'E',
    replace: false,
    controller: "slidingTagsCtrl",
    //bindToController: true,
    template: function(element, attrs) {
   
      return SLIDING_TAGS_INPUT;
    },
    scope: {
      tagInput: '=',
      tagSets: '=',
      initCount: '@'
    },
    link: function (scope, element, attrs) {
      if(typeof scope.initCount == 'undefined')
        scope.initCountInt = 0;
      else
        scope.initCountInt = parseInt(scope.initCount);
      
      scope.onInputFocus = function(event){
        scope.focus = true;
      };
      scope.addTag = function(tag, tagSets){
        var match = false;
        var count = 0;
        var idx = 0;
        angular.forEach(tagSets, function(obj, key){
          
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
          tagSets.push({name: tag, count: scope.initCountInt})
        }
      }
      scope.onKD = function(e){
        if(e.which == 13) {
          //Enter
          scope.addTag(scope.tagInput, scope.tagSets);
          scope.tagInput = '';
        }
      };
      
      scope.onInputBlur = function(event) {
        scope.focus = false;
      }
    }
  }
}]).controller("slidingTagsCtrl", ['$scope', function($scope){
  $scope.focus = false;
  $scope.$watch('focus', function(newvalue, oldvalue){
  })
}]);