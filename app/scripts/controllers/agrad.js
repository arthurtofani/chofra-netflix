angular.module('chofraNetflixApp')
  .controller('AgradCtrl', ['myModals', '$rootScope', '$scope', '$location', '$timeout', '$routeParams', 'anchorSmoothScroll', function (myModals, $rootScope, $scope, $location, $timeout, $routeParams, anchorSmoothScroll) {
  	$scope.lang = $rootScope.lang;
    $(window).resize(function(){
      $scope.resizeAll();
    })
    $scope.close = function(){
    	myModals.showScreen = null;
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
  }]);
