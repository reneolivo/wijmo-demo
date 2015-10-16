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
    this.filterTypes = ['By Full Name', 'By Guardian'];
    this.filterBy = this.filterTypes[0];

    Students.fetch().then(function(students) {
      this.students = students;

      applyFilters(students);
    }.bind(this));

    var applyFilters = function applyFilters(students) {
      this.studentsFilter = new wijmo.collections.CollectionView(students);
      this.studentsFilter.filter = fullNameFilterFunc;
    }.bind(this);

    var fullNameFilter = '';
    var filterByGuardian = false;
    function fullNameFilterFunc(item) {
      if (!fullNameFilter) return true;

      if (filterByGuardian) {
        return new RegExp(fullNameFilter, 'i').test(item.guardiansName);
      }

      var fullName = item.firstName + ' ' + item.lastName;
      return new RegExp(fullNameFilter, 'i').test(fullName);
    };

    this.refreshFilter = function refreshFilter() {
      fullNameFilter = this.fullNameFilter;
      filterByGuardian = this.filterBy == this.filterTypes[1];
      this.studentsFilter.refresh();
    }.bind(this);
  }]);
