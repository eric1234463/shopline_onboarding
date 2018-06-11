app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/views/users/index.html",
      controller: "UserController"
    })
    .when("/users", {
      templateUrl: "/views/users/index.html",
      controller: "UserController"
    })
    .when("/users/add", {
      templateUrl: "/views/users/add.html",
      controller: "UserAddController"
    })
    .when("/users/:user_id/edit", {
      templateUrl: "/views/users/edit.html",
      controller: "UserEditController"
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});
