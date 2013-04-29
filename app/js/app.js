'use strict';


// Declare app level module which depends on filters, and services
angular.module('seedApp', ['seedApp.filters', 'seedApp.services', 'seedApp.directives', 'ui.bootstrap', 'ngGrid']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: SeedCtrl1});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
