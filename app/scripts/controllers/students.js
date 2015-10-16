'use strict';

/**
 * @ngdoc function
 * @name wijmo5App.controller:StudentsCtrl
 * @description
 * # StudentsCtrl
 * Controller of the wijmo5App
 */
angular.module('wijmo5App')
  .controller('StudentsCtrl', ['students', function (Students) {
    this.fullNameFilter = '';
    this.studentsFilter = null;
    this.students = [];

    Students.fetch().then(function(students) {
      this.students = students;

      applyFilters(students);
    }.bind(this));

    var applyFilters = function applyFilters(students) {
      this.studentsFilter = new wijmo.collections.CollectionView(students);
      this.studentsFilter.filter = fullNameFilterFunc;
    }.bind(this);

    var fullNameFilter = '';
    function fullNameFilterFunc(item) {
      if (!fullNameFilter) return true;

      var fullName = item.firstName + ' ' + item.lastName;

      return new RegExp(fullNameFilter, 'i').test(fullName);
    };

    this.refreshFilter = function refreshFilter() {
      fullNameFilter = this.fullNameFilter;
      this.studentsFilter.refresh();
    }.bind(this);
  }]);
