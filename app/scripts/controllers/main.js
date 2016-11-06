'use strict';

/**
 * @ngdoc function
 * @name chofraNetflixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chofraNetflixApp
 */
angular.module('chofraNetflixApp')
  .controller('MainCtrl', ['$scope', '$location', 'anchorSmoothScroll', function ($scope, $location, anchorSmoothScroll) {
  	$scope.data = data;
  	//$scope.selectedSection = $scope.data.lists[0];

  	$scope.openDescription = function(section, movie){
		$scope.selectedSection = section;
		$scope.selectedMovie = movie
      	anchorSmoothScroll.scrollTo(section.id);
  	}

  	$scope.getStyle = function(movie){
  		return {"background-image": "url(images/movies/" + movie.id + "/background.png)"};
  	}

  }]);
