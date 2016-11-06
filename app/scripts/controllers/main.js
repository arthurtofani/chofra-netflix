'use strict';

/**
 * @ngdoc function
 * @name chofraNetflixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chofraNetflixApp
 */
angular.module('chofraNetflixApp')
  .controller('MainCtrl', ['$scope', '$location', '$timeout', 'anchorSmoothScroll', function ($scope, $location, $timeout, anchorSmoothScroll) {
  	$scope.data = data;
  	$scope.currentMouseOver = null;
  	$scope.mouseOverPromise = null;
  	//$scope.selectedSection = $scope.data.lists[0];

  	$scope.openDescription = function(section, movie){

		if($scope.selectedSection != section){
			console.log("entrou")
			$(".movie-details").css({"margin-left": "50px", "opacity": 0})
			$scope.selectedSection = section;
		}

		$scope.selectedMovie = movie
		$("body").animate({scrollTop: $("#" + section.id).offset().top}, "slow");
		$(".movie-details").show()
		$(".movie-details").animate({"margin-left": "0px", "opacity": 1}, "slow")
      	$timeout.cancel($scope.mouseOverPromise)
      	//$scope.scrollTo($("#" + section.id), 0, 600);
  	}

  	$scope.mouseOverMovie = function(section, movie){
  		if($scope.currentMouseOver==movie) return;

  		$scope.currentMouseOver=movie;
  		$scope.mouseOverPromise = $timeout(function(){
  			//$scope.openDescription(section, movie);
  		}, 1000).then(function(){
  			if($scope.currentMouseOver==movie){
  				$scope.openDescription(section, movie)
  			}
  		})
  	}

  	$scope.getStyle = function(movie){
  		return {"background-image": "url(images/movies/" + movie.id + "/background.png)"};
  	}

  }]);
