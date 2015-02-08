'use strict';

angular.module('myApp.services', ['ngRoute'])
       .config(['$routeProvider', function($routeProvider){
          console.log('myApp.services module setup');

          $routeProvider.when('/services', {
            templateUrl: 'services/services.html',
            controller: 'servicesCtrl'
          });
       }])
       .controller('servicesCtrl', [function(){
          console.log('myApp.services controller setup');
       }]);