'use strict';

angular.module('myApp', ['ngRoute', 'myApp.products', 'myApp.services'])
.config(['$routeProvider', function($routeProvider) {
   console.log('myApp module setup');

   //$routeProvider.otherwise({redirectTo: '/products'});
}]);


// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
