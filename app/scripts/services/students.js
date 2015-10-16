'use strict';

/**
 * @ngdoc service
 * @name wijmo5App.students
 * @description
 * # students
 * Service in the wijmo5App.
 */
angular.module('wijmo5App')
  .service('students', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function Students() {}

    Students.prototype.fetch = function fetch() {
      return $http.get('/data/students.json').then(function(result) {
        return result.data;
      });
    }

    return new Students;
  }]);
