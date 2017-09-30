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
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:token', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
  });
