(function() {

    angular.module("attendanceManagerApp")
           .controller("AttendanceController", ["$scope", "$http", "attendanceService", AttendanceController]);

    function AttendanceController($scope, $http, attendanceService) {

        $scope.filters = {};

        $scope.checkIn = function (user) {
            user.IsPresent = !user.IsPresent;
        };

        $scope.goLunch = function (user) {
            user.IsLunch = !user.IsLunch;
        };

        $scope.getUsersGoingOrNotGoingLunch = function(value) {
            $scope.filters.IsLunch = value;
        };

        $scope.getUsersIsOrNotPresent = function (value) {
            $scope.filters.IsPresent = value;
        };

        $scope.resetFilters = function() {
            $scope.filters = {};
        };

        $scope.resetAll = function () {
            angular.forEach($scope.users, function(usr) {
                usr.IsLunch = false;
                usr.IsPresent = false;
            });
        };

        var onUsersCompleted = function (data) {
            $scope.users = data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the data";
        };

        attendanceService.getAttendances().then(onUsersCompleted, onError);
     
    }

}());