'use strict';

describe('Controller: StudentsformCtrl', function () {

  // load the controller's module
  beforeEach(module('wijmo5App'));

  var StudentsformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentsformCtrl = $controller('StudentsformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentsformCtrl.awesomeThings.length).toBe(3);
  });
});
