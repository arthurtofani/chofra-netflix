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
    $scope.selectLang = function(){
      $scope.lang = $rootScope.lang
      $scope.data = ($rootScope.lang=="pt" ? data_br : data_en);
    }
    $scope.selectLang();
    $scope.svc = myModals;
  	$scope.currentMouseOver = null;
  	$scope.mouseOverPromise = null;
    $scope.selectedSection = null;
    $scope.show_details = null;
    $scope.show_menu = false;
  	//$scope.selectedSection = $scope.data.lists[0];

    $scope.goMain = function(){
      $scope.selectedSection = false;
      $scope.show_details = false;
      $scope.show_menu = false;
      myModals.showScreen=null;
    }

    $scope.toggleLang = function(){
      $rootScope.lang = ($rootScope.lang=='pt' ? 'en' : 'pt')
      $scope.selectLang();
      $scope.show_menu = false;
    }



    $scope.toggleMenu = function(){
      $scope.show_menu = !$scope.show_menu;
    }

    $scope.toggleCV = function(){
      $scope.show_menu = false;
      myModals.showScreen='cv';
      $("body").animate({scrollTop: 0}, "slow", function(){
        $scope.selectedSection = null;
        $scope.$apply();
      });
    }
    $scope.toggleDisclaimer = function(){
      $scope.show_menu = false;
      myModals.showScreen='disclaimer';
      $("body").animate({scrollTop: 0}, "slow", function(){
        $scope.selectedSection = null;
        $scope.$apply();
      });
    }
    $scope.toggleThanks = function(){
      $scope.show_menu = false;
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

    $scope.openDetails = function(){
      $scope.show_details = true;
    }

  	$scope.getStyle = function(movie){
      if(movie==undefined) return {};
      if(!movie.id) return {};
  		return {"background-image": "url(images/movies/" + movie.id + "/background.png)"};
  	}
  }]);
