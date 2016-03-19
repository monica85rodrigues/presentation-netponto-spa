(function () {
    "use strict";

    var SessionService = function ($http) {

        var servicesUrls = {
            sessions: "/app/sessions/sessions.json"
        };

        var getSessions = function () {
            return $http.get(servicesUrls.sessions).then(function (response) {
                return response.data;
            });
        };

        return {
            getSessions: getSessions
        };

    };

    angular.module("netpontoManagerApp").factory("sessionService", ["$http", SessionService]);


}());