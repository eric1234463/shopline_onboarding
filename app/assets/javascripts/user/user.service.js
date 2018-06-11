app.service("UserService", [
  "$rootScope",
  "$http",
  function($rootScope, $http) {
    return {
      getUsers: function() {
        return $http.get("http://54.169.123.170:32794/users.json");
      },
      getUser: function(user_id) {
        return $http.get("http://54.169.123.170:32794/users/"+user_id+".json");
      },
      updateUser: function(user_id, user) {
        return $http.put("http://54.169.123.170:32794/users/"+user_id, {
          user
        });
      },
      deleteUser: function(user_id) {
        return $http.delete("http://54.169.123.170:32794/users/"+user_id);
      },
      createUser: function(user) {
        return $http.post("http://54.169.123.170:32794/users/", {
          user
        });
      }
    };
  }
]);
