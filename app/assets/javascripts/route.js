app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/views/index.html",
      controller: "UserController"
    })
    .when("/users", {
      templateUrl: "/views/index.html",
      controller: "UserController"
    })
    .when("/users/:user_id/edit", {
      templateUrl: "/views/edit.html",
      controller: "UserEditController"
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});
