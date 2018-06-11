app.controller("UserController", [
  "$scope",
  "$http",
  "$location",
  "$rootScope",
  "$routeParams",
  "UserService",
  function($scope, $http, $location, $rootScope, $routeParams, UserService) {
    $scope.$on("$routeChangeSuccess", function() {
      UserService.getUsers().then(function(response) {
        $scope.users = response.data;
      });
    });
  }
]);
