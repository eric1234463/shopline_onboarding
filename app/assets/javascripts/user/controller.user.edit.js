app.controller("UserEditController", [
  "$scope",
  "$http",
  "$location",
  "$rootScope",
  "$routeParams",
  "UserService",
  function($scope, $http, $location, $rootScope, $routeParams, UserService) {
    $scope.$on("$routeChangeSuccess", function() {
      UserService.getUser($routeParams.user_id).then(function(response) {
        $scope.user = response.data;
      });
    });

    $scope.handleFormSubmit = function() {
      const user = $scope.user;
      UserService.updateUser($routeParams.user_id, user).then(function(
        response
      ) {
        $location.path("/users");
      });
    };
  }
]);
