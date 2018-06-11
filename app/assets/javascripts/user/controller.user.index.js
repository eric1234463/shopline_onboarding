app.controller("UserController", [
  "$scope",
  "UserService",
  function($scope, UserService) {
    $scope.$on("$routeChangeSuccess", function() {
      UserService.getUsers().then(function(response) {
        $scope.users = response.data;
      });
    });

    $scope.deleteUser = function(user_id) {
      UserService.deleteUser(user_id).then(function() {
        UserService.getUsers().then(function(response) {
          $scope.users = response.data;
        });
      });
    };
  }
]);
