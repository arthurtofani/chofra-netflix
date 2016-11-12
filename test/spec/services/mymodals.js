'use strict';

describe('Service: myModals', function () {

  // load the service's module
  beforeEach(module('chofraNetflixApp'));

  // instantiate service
  var myModals;
  beforeEach(inject(function (_myModals_) {
    myModals = _myModals_;
  }));

  it('should do something', function () {
    expect(!!myModals).toBe(true);
  });

});
