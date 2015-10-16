'use strict';

describe('Service: students', function () {
  // load the service's module
  beforeEach(module('wijmo5App'));

  // instantiate service
  var students;
  beforeEach(inject(function (_students_) {
    students = _students_;

    this.$httpBackend = $injector.get('$httpBackend');

    this.$httpBackend.when('GET', '/data/students.json')
      .respond([{
        firstName: 'John',
        lastName: 'Snow',
        sideNotes: 'Knows nothing'
      }]);
  }));

  it('should fetch a list of students', function() {
    students.fetch();

    this.$httpBackend.expectGET('/data/students.json');
  });
});
