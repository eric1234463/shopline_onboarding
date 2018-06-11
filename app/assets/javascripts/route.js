app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  $routeProvider
    .when("/users", {
      templateUrl: "/",
      controller: "UserController"
    })
    .when("/users/:user_id/edit", {
      templateUrl: "/",
      controller: "UserEditController"
    });
});
