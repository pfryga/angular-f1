'use strict';

describe('Service: ergastAPIservice', function () {

  // load the service's module
  beforeEach(module('raceApp'));

  // instantiate service
  var ergastAPIservice;
  beforeEach(inject(function (_ergastAPIservice_) {
    ergastAPIservice = _ergastAPIservice_;
  }));

  it('should do something', function () {
    expect(!!ergastAPIservice).toBe(true);
  });

});
