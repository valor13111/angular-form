var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  //$locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: '/views/form.html',
      controller: 'formcontroller'
    })
    .when('/404', {
      templateUrl: '/views/error404.html'
    })
    .when('/success', {
      templateUrl: '/views/success.html'
    })
    .otherwise({
      redirectTo: '/404'
    });
}]);

app.controller('formcontroller', ['$scope', '$location', '$http',  function($scope, $location, $http) {
  $scope.submit = function(data) {



    $scope.myArray =
      {
        firstName: data.first,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      };

      console.log($scope.myArray);

    // grabs the data and sets it to a json format
    // console.log(angular.toJson($scope.myArray));

    // $http.post('/success', JSON.stringify(data)).then(function(data) {
    //   console.log(data);
    // });

    var config = {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
    }

    $http.post('/', JSON.stringify(data), config)
      .then(
        function (response) {
          // success
          console.log('SUCCESS');
          console.log(response);
        },
        function (response) {
          // failure
          console.log('FAIL');
          console.log(response);
      });
    $location.url('/success');
  };

  //need a server to run this code
  $http.get('data/userinfo.json').then(function(data) {
    $scope.myInfo = data.data;
    console.log($scope.myInfo);
  });
}]);

app.controller('settings', function($scope) {
  $scope.title = "Sign-in Form";
  $scope.message = "Please Sign-in before proceeding";
})
