'use strict';

describe('Controller: StudentsformCtrl', function () {

  // load the controller's module
  beforeEach(module('wijmo5App'));

  var StudentsformCtrl,
    scope;
  var students = {fetch: this.sinon.stub()};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentsformCtrl = $controller('StudentsformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
