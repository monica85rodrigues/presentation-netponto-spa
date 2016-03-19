(function () {
    "use strict";

    angular.module("netpontoManagerApp", ['ngRoute'])
           .config(['$routeProvider', RouteConfig]);

    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/sessions', {
                templateUrl: 'app/sessions/sessions.html',
                controller: 'SessionController'
            })
            .when('/speakers', {
                templateUrl: 'app/speakers/speakers.html',
                controller: 'SpeakersController'
            })
            .otherwise({ redirectTo: '/sessions' });
    };

}());
