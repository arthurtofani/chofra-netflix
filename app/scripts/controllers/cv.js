angular.module('chofraNetflixApp')
  .controller('CvCtrl', ['myModals', '$rootScope', '$scope', '$location', '$timeout', '$routeParams', 'anchorSmoothScroll', function (myModals, $rootScope, $scope, $location, $timeout, $routeParams, anchorSmoothScroll) {
  	$scope.lang = $rootScope.lang;
    $scope.svc = myModals;
    $(window).resize(function(){
      $scope.resizeAll();
    })
    $scope.$watch('svc.showScreen', function(){
    	if($scope.svc.showScreen=='cv'){
    		$scope.resizeAll();
    	}
    })
    $scope.closeCV = function(){
    	myModals.showScreen = null;
    }
    $scope.resizeAll = function(){
      $scope.calculateCvWindowSize("top", 0.12605);
      //$scope.calculateCvWindowSize("height", 0.24605);
    }
    $scope.calculateCvWindowSize = function(key, coef_m){
      var w = $(window).width();
      var h = parseFloat($(".chofra-block img")[0].offsetHeight);
      var value =  coef_m * w + 36.17;
      var hsh = {};
      hsh[key] = value + "px";
      $(".chofra-block .text-place").css(hsh);
    }
  }]);
