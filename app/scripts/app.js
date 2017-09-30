'use strict';

/**
 * @ngdoc overview
 * @name baldBritneyApp
 * @description
 * # baldBritneyApp
 *
 * Main module of the application.
 */
angular
  .module('baldBritneyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
  });
