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
    'ui.materialize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
