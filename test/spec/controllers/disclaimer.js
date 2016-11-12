'use strict';

describe('Controller: DisclaimerctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('chofraNetflixApp'));

  var DisclaimerctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DisclaimerctrlCtrl = $controller('DisclaimerctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DisclaimerctrlCtrl.awesomeThings.length).toBe(3);
  });
});
