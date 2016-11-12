'use strict';

/**
 * @ngdoc function
 * @name chofraNetflixApp.controller:LandingPageCtrl
 * @description
 * # LandingPageCtrl
 * Controller of the chofraNetflixApp
 */
angular.module('chofraNetflixApp')
  .controller('LandingPageCtrl', ['myModals', '$rootScope', '$scope', '$location', '$timeout', '$routeParams', 'anchorSmoothScroll', function (myModals, $rootScope, $scope, $location, $timeout, $routeParams, anchorSmoothScroll) {
  	$scope.lang = $rootScope.lang;
  	myModals.showScreen=null;
  	$scope.changeLangAndRedirect = function(lang){
  		$rootScope.lang = lang;
  		$location.path("/main");
  	}
  }]);
