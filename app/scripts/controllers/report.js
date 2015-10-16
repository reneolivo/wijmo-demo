'use strict';

/**
 * @ngdoc function
 * @name wijmo5App.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the wijmo5App
 */
angular.module('wijmo5App')
.controller('ReportCtrl', ['students', function (Students) {
  this.studentsData = [];

  Students.fetch().then(function(students) {
    this.studentsData = this.transformStudentsIntoReportData(students);
  }.bind(this));

  this.transformStudentsIntoReportData = function transformStudents(students) {
    var data = [];

    for(var i in students) {
      var student = students[i];
      var grades = student.grades;

      data.push({
        student: student.firstName + ' ' + student.lastName,
        english: (grades.english.Q1 + grades.english.Q2 + grades.english.Q3) / 3,
        history: (grades.history.Q1 + grades.history.Q2 + grades.history.Q3) / 3,
        math: (grades.math.Q1 + grades.math.Q2 + grades.math.Q3) / 3,
        science: (grades.science.Q1 + grades.science.Q2 + grades.science.Q3) / 3
      });
    }

    return data;
  }
}]);
