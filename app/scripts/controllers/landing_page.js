'use strict';

/**
 * @ngdoc function
 * @name chofraNetflixApp.controller:LandingPageCtrl
 * @description
 * # LandingPageCtrl
 * Controller of the chofraNetflixApp
 */
angular.module('chofraNetflixApp')
  .controller('LandingPageCtrl', ['$rootScope', '$scope', '$location', '$timeout', '$routeParams', 'anchorSmoothScroll', function ($rootScope, $scope, $location, $timeout, $routeParams, anchorSmoothScroll) {
  	$scope.lang = $rootScope.lang;
  	$scope.changeLangAndRedirect = function(lang){
  		$rootScope.lang = lang;
  		$location.path("/main");
  	}
  }]);
