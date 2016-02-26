var myApp = angular.module('myApp',[]);
 
myApp.directive ('owntag', function(){
   return {
     templateUrl: 'pages/templates/alert.html',
      restrict : 'E'
   };
});

