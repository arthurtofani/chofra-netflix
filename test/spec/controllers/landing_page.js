'use strict';

describe('Controller: LandingPageCtrl', function () {

  // load the controller's module
  beforeEach(module('chofraNetflixApp'));

  var LandingPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandingPageCtrl = $controller('LandingPageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LandingPageCtrl.awesomeThings.length).toBe(3);
  });
});
