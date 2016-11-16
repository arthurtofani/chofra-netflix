'use strict';

/**
 * @ngdoc function
 * @name chofraNetflixApp.controller:DisclaimerctrlCtrl
 * @description
 * # DisclaimerctrlCtrl
 * Controller of the chofraNetflixApp
 */
angular.module('chofraNetflixApp')
  .controller('DisclaimerCtrl', ['myModals', '$rootScope', '$scope', '$location', '$timeout', '$routeParams', 'anchorSmoothScroll', function (myModals, $rootScope, $scope, $location, $timeout, $routeParams, anchorSmoothScroll) {
  	$scope.lang = $rootScope.lang;
    $scope.close = function(){
    	myModals.showScreen = null;
    }
    $rootScope.$watch('lang', function(){
      $scope.lang = $rootScope.lang;
    })
  }]);
