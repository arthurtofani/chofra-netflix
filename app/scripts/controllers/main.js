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
    $scope.selectedSection = null;
    $scope.showCV = false;
    $scope.showThanks = false;
    $scope.lang = "pt"
  	//$scope.selectedSection = $scope.data.lists[0];

    $(window).resize(function(){
      $scope.resizeAll();
    })

    $scope.toggleCV = function(){
      $scope.showCV = !$scope.showCV;
      $("body").animate({scrollTop: 0}, "slow", function(){
        $scope.selectedSection = null;
        $scope.showThanks = false;
        $scope.$apply();
      });
    }
    $scope.toggleThanks = function(){
      $scope.showThanks = !$scope.showThanks;
      $("body").animate({scrollTop: 0}, "slow", function(){
        $scope.selectedSection = null;
        $scope.showCV = false;
        $scope.$apply();
      });

    }

    $scope.resizeAll = function(){
      $scope.calculateCvWindowSize("top", 0.12605);
      $scope.calculateCvWindowSize("height", 0.24605);
    }
    $scope.calculateCvWindowSize = function(key, coef_m){
      var w = parseFloat($(".chofra-block img").css("width").replace("px", ""));
      var h = parseFloat($(".chofra-block img").css("height").replace("px", ""));
      var value =  coef_m * w + 36.17
      var hsh = {}
      hsh[key] = value + "px"
      $(".chofra-block .text-place").css(hsh)
    }

  	$scope.openDescription = function(section, movie){
		if($scope.selectedSection != section){
			$scope.selectedSection = section;
		}
		$(".movie-details").css({"margin-left": "50px", "opacity": 0})
		$scope.selectedMovie = movie
		$("body").animate({scrollTop: $("#" + section.id).offset().top}, "slow");
		$(".movie-details").show()
		$(".movie-details").animate({"margin-left": "0px", "opacity": 1}, "slow")
      	$timeout.cancel($scope.mouseOverPromise)
      	//$scope.scrollTo($("#" + section.id), 0, 600);
  	}

    $scope.getFakeLinkStyle = function(){
      if(!$scope.selectedMovie) return "";
      return ($scope.selectedMovie.type=="seriado" ? "visao_geral_seriado" : "visao_geral_filmes")
    }

    $scope.getOriginal = function(){
      if(!$scope.selectedMovie) return "";
      return {"background-image": "url(../images/movies/" + $scope.selectedMovie.id + "/original.png"}
    }


  	$scope.getStyle = function(movie){
      if(movie==undefined) return {};
      if(!movie.id) return {};
  		return {"background-image": "url(images/movies/" + movie.id + "/background.png)"};
  	}
    $scope.resizeAll();
  }]);
