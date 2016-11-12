'use strict';

/**
 * @ngdoc function
 * @name chofraNetflixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chofraNetflixApp
 */
angular.module('chofraNetflixApp')
  .controller('MainCtrl', ['myModals', '$rootScope', '$scope', '$location', '$timeout', '$routeParams', 'anchorSmoothScroll', function (myModals, $rootScope, $scope, $location, $timeout, $routeParams, anchorSmoothScroll) {
    $scope.lang = $rootScope.lang
    $scope.svc = myModals;
    $scope.data = ($rootScope.lang=="pt" ? data_br : data_en);
  	$scope.currentMouseOver = null;
  	$scope.mouseOverPromise = null;
    $scope.selectedSection = null;
  	//$scope.selectedSection = $scope.data.lists[0];



    $scope.toggleCV = function(){
      myModals.showScreen='cv';
      $("body").animate({scrollTop: 0}, "slow", function(){
        $scope.selectedSection = null;
        $scope.$apply();
      });
    }
    $scope.toggleDisclaimer = function(){
      myModals.showScreen='disclaimer';
      $("body").animate({scrollTop: 0}, "slow", function(){
        $scope.selectedSection = null;
        $scope.$apply();
      });
    }
    $scope.toggleThanks = function(){
      myModals.showScreen='agrad';
      $("body").animate({scrollTop: 0}, "slow", function(){
        $scope.selectedSection = null;
        $scope.$apply();
      });

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
      return {"background-image": "url(images/movies/" + $scope.selectedMovie.id + "/original.png"}
    }


  	$scope.getStyle = function(movie){
      if(movie==undefined) return {};
      if(!movie.id) return {};
  		return {"background-image": "url(images/movies/" + movie.id + "/background.png)"};
  	}
  }]);
