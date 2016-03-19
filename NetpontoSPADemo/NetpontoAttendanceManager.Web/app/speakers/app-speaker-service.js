(function () {
    "use strict";

    var SpeakersService = function ($http) {

        var servicesUrls = {
            speakers: "/data/speakers/speakers.json"
        };

        var getSpeakers = function () {
            return $http.get(servicesUrls.speakers).then(function (response) {
                return response.data;
            });
        };

        return {
            getSpeakers: getSpeakers
        };

    };

    angular.module("netpontoManagerApp").factory("speakersService ", ["$http", SpeakersService]);


}());