(function () {
    "use strict";

    angular.module("netpontoManagerApp")
           .controller("SpeakersController", ["$scope", "$http", "speakersService", SpeakersController]);

    function SpeakersController($scope, $http, speakersService) {

        var onSpeakersCompleted = function (data) {
            $scope.speakers = data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        speakersService.getSpeakers().then(onSpeakersCompleted, onError);

    }

}());