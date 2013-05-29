'use strict';


// Declare app level module which depends on filters, and services
angular.module('seedApp',
        [
            'seedApp.filters',
            'seedApp.services',
            'seedApp.directives',
            'ui.bootstrap',
            'ngGrid',
            'http-auth-interceptor',
            'ngResource'
        ]
    ).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/greet', {templateUrl: 'partials/greet.html', controller: SeedCtrl1});
        $routeProvider.when('/work', {templateUrl: 'partials/work.html', controller: SeedCtrl1});
        $routeProvider.when('/applicationinput', {templateUrl: 'partials/applicationinput.html', controller: SeedCtrl1});
        $routeProvider.when('/search', {templateUrl: 'partials/search.html', controller: SeedCtrl1});
        $routeProvider.when('/help', {templateUrl: 'partials/help.html', controller: SeedCtrl1});
        $routeProvider.otherwise({redirectTo: '/greet'});
    }]);
