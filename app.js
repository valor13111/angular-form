var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  //$locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: '/views/form.html',
      controller: 'formcontroller',
      controller: 'settings'
    })
    .when('/404', {
      templateUrl: '/views/error404.html'
    })
    .otherwise({
      redirectTo: '/404'
    });
}]);

app.controller('formcontroller', function($scope) {
  // $scope.firstName = $scope.contact.firstName;
  // $scope.lastName = $scope.contact.lastName;
  // $scope.email = $scope.contact.email;
  // $scope.password = $scope.contact.password;
});

app.controller('settings', function($scope) {
  $scope.title = "Sign-in Form";
  $scope.message = "Please Sign-in before proceeding";
})
