'use strict';

 angular.module('myApp.products', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider){
          console.log('myApp.products module setup');
          $routeProvider.when('/products', {
            templateUrl: 'products/products.html',
            controller: 'productsCtrl'
          });
        }])


        .controller('productsCtrl', [function(){
          console.log('productsCtrl setup');

        }]);
