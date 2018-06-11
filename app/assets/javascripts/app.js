var app = angular.module("app", ["ngRoute"]);

app.constant("genders", [
  {
    label: "Male",
    value: "M"
  },
  {
    label: "Female",
    value: "F"
  },
  {
    label: "Other",
    value: "O"
  }
]);

app.run([
  "$rootScope",
  "genders",
  function($rootScope, genders) {
    $rootScope.genders = genders;
  }
]);
