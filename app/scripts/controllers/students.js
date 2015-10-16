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
    this.students = [];

    Students.fetch().then(function(students) {
      this.students = students;
    }.bind(this));

    // generate some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < 100; i++) {
        data.push({
            id: i,
            country: countries[i % countries.length],
            date: new Date(2014, i % 12, i % 28),
            amount: Math.random() * 10000,
            active: i % 4 == 0
        });
    }

    // add data array to scope
    this.data = data;
  }]);
