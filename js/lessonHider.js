angular.module('directivePractice')
.directive('lessonHider', function() {
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'EA',
    scope: {
  //     twoWayDataBinding: '=',
  // stringBinding: '@',
  // functionBinding: '&'
  lesson: '=lesson',
  dayAlert:'&'
    },
    controller: function($scope, service){
          $scope.getSchedule = service.getSchedule();
    },
    link: function( scope, element, attributes ) {
      scope.getSchedule.then(function( response ) {
      scope.schedule = response.data;

      scope.schedule.forEach(function( scheduleDay ) {
          if (scheduleDay.lesson === scope.lesson) {
            element.css('text-decoration', 'line-through');
            // scope.lessonDay = weekday;
            return;
          }
        });
      });
    }

  };
});
