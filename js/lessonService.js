angular.module('directivePractice').service('service', function($http){
  this.getSchedule = function (){
    return $http.get('schedule.json');
  };


});
