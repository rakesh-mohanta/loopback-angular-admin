'use strict';

describe('Directive: adminBox', function () {

  // load the directive's module
  beforeEach(module('loopbackApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-box></admin-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the adminBox directive');
  }));
});
