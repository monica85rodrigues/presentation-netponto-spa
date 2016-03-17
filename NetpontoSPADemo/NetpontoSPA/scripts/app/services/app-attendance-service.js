(function() {

    var AttendanceService = function($http) {

        var urls = {
            attendances: "/scripts/data/users.json"
        };

        var getAttendances = function() {
            return $http.get(urls.attendances).then(function(response) {
                return response.data;
            });
        };

        return {
            getAttendances: getAttendances
        };

    };

    angular.module("attendanceManagerApp").factory("attendanceService", ["$http", AttendanceService]);


}());