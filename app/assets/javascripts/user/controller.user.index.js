app.controller("UserController", [
  "$scope",
  "UserService",
  function($scope, UserService) {
    $scope.$on("$routeChangeSuccess", function() {
      UserService.getUsers().then(function(response) {
        $scope.users = response.data;
      });
    });
  }
]);
