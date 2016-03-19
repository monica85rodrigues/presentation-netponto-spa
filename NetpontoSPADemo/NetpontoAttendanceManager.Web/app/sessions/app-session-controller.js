(function () {
    "use strict";

    angular.module("netpontoManagerApp")
           .controller("SessionController", ["$scope", "$http", "sessionService", SessionController]);

    function SessionController($scope, $http, sessionService) {

        var onSessionsCompleted = function (data) {
            $scope.sessions = data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        sessionService.getSessions().then(onSessionsCompleted, onError);

    }

}());