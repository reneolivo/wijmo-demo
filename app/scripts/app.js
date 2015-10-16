'use strict';

/**
 * @ngdoc overview
 * @name wijmo5App
 * @description
 * # wijmo5App
 *
 * Main module of the application.
 */
angular
  .module('wijmo5App', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.materialize',
    'wj'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/students', {
        templateUrl: 'views/students/index.html',
        controller: 'StudentsCtrl',
        controllerAs: 'studentsCtrl'
      })
      .when('/form', {
        templateUrl: 'views/students/form.html',
        controller: 'StudentsformCtrl',
        controllerAs: 'studentsForm'
      })
      .when('/report', {
        templateUrl: 'views/students/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'reportCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
