'use strict';

describe('Controller: StudentsCtrl', function () {

  // load the controller's module
  beforeEach(module('wijmo5App'));

  var StudentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentsCtrl = $controller('StudentsCtrl', {
      $scope: scope,
      students: students
    });
  }));

  it('should declare a list of students', function () {
    expect(StudentsCtrl.students).to.be.an.instanceof(Array);
  });

  it('should fetch a list of students from the server', function() {
    expect(students).to.have.been.called;
  });
});
