app.controller("UserAddController", [
  "$scope",
  "$location",
  "$routeParams",
  "UserService",
  function($scope, $location, $routeParams, UserService) {
    $scope.user = {
      age: null,
      gender: null,
      first_name: "",
      last_name: "",
      address: {
        country: "",
        address_1: "",
        address_2: ""
      }
    };

    $scope.handleFormSubmit = function() {
      const user = $scope.user;
      UserService.createUser(user).then(function(response) {
        $location.path("/users");
      });
    };
  }
]);
