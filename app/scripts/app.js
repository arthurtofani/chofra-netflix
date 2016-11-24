'use strict';

/**
 * @ngdoc overview
 * @name chofraNetflixApp
 * @description
 * # chofraNetflixApp
 *
 * Main module of the application.
 */
angular
  .module('chofraNetflixApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
})
.run(function($rootScope) {
    $rootScope.lang = localStorage.getItem("lang") || 'en';
    var hasPreloaded = localStorage.getItem("preloaded")
    if(!hasPreloaded){
        var images = new Array()
        function preload(arr) {
            for (var i = 0; i < arr; i++) {
                images[i] = new Image()
                images[i].src = preload.arguments[i]
            }
        }
        preload(data_br.lists[0].movies.map(function(m){
            return "images/movies/" + m.id + "/thumbnail.png";
        }));
        preload(data_br.lists[1].movies.map(function(m){
            return "images/movies/" + m.id + "/thumbnail.png";
        }));
        preload(data_br.lists[2].movies.map(function(m){
            return "images/movies/" + m.id + "/thumbnail.png";
        }));
        localStorage.setItem("preloaded", true)
        console.log("salvou preload")
    }


})
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing_page.html',
        controller: 'LandingPageCtrl',
        controllerAs: 'landing_page'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
