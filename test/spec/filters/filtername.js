'use strict';

describe('Filter: filterName', function () {

  // load the filter's module
  beforeEach(module('raceApp'));

  // initialize a new instance of the filter before each test
  var filterName;
  beforeEach(inject(function ($filter) {
    filterName = $filter('filterName');
  }));

  it('should return the input prefixed with "filterName filter:"', function () {
    var text = 'angularjs';
    expect(filterName(text)).toBe('filterName filter: ' + text);
  });

});
