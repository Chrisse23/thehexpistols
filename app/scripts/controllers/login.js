'use strict';

/**
 * @ngdoc function
 * @name baldBritneyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baldBritneyApp
 */
angular.module('baldBritneyApp')
  .controller('LoginCtrl',['$scope', function ($scope) {
    $scope.loggedIn = false;

    $scope.authorize = function() {
      var clientId = 'e2b2a53b1aa34ac2ac1dbee3068a740d';
      var redirectUri = 'http://localhost:9000';
      var permissions = 'user-read-currently-playing';

      var authorizeUrl = 'https://accounts.spotify.com/authorize';
      authorizeUrl = authorizeUrl + '?response_type=token';
      authorizeUrl = authorizeUrl + '&client_id=' + encodeURIComponent(clientId); 
      authorizeUrl = authorizeUrl + '&redirect_uri=' + encodeURIComponent(redirectUri); 
      authorizeUrl = authorizeUrl + '&scope=' + encodeURIComponent(permissions);

      window.location = authorizeUrl;
    };
  }]);
