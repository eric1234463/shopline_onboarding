app.controller("UserShowController", [
  "$scope",
  "$location",
  "$routeParams",
  "UserService",
  function($scope, $location, $routeParams, UserService) {
    $scope.$on("$routeChangeSuccess", function() {
      UserService.getUser($routeParams.user_id).then(function(response) {
        $scope.user = response.data;
      });
    });
  }
]);
