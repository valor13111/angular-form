var app = angular.module('app', ['ngRoute']);

app.factory("sharedService", function() {
    // creating the variable for controllers
    var dataObj = {};

    return {
      setData: function(data) {
        dataObj.firstName = data.firstName;
        dataObj.lastName = data.lastName;
        dataObj.email = data.email;
      },
      getData: function(data) {
        return dataObj;
      }
    };
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/views/form.html',
      controller: 'formcontroller'
    })
    .when('/404', {
      templateUrl: '/views/error404.html'
    })
    .when('/success', {
      templateUrl: '/views/success.html',
      controller: 'submittedForm'
    })
    .otherwise({
      redirectTo: '/404'
    });

}]);

// CONTROLLER: the form controller, which is used to set the data in the factory service
// this injects the formcontroller function into the app
app.controller('formcontroller', ['$scope', '$location', '$http', 'sharedService', formcontroller]);

// CONTROLLER: for '/success' view, after the form has been submitted
// this injects the submittedform (controller) into the app
app.controller('submittedForm', ['$scope', 'sharedService', submittedForm]);

// CONTROLLER: for the form view, just practice to see if it works, sets the title and message
app.controller('settings', function($scope) {
  $scope.title = "Sign-in Form";
  $scope.message = "Please Sign-in before proceeding";
});

// function to submit the data
function formcontroller($scope, $location, $http, sharedService) {
  $scope.submit = function(data) {

    sharedService.setData(data);
    $location.url('/success');

  };

  // retrieves the data from the userinfo.json file
  // $http.get('data/userinfo.json').then(function(data) {
  //   $scope.myInfo = data.data;
  //   console.log($scope.myInfo);
  // });
};

function submittedForm($scope, sharedService) {

  $scope.user = sharedService.getData();
  console.log($scope.user.firstName);
  console.log($scope.user.lastName);
  console.log($scope.user.email);
  console.log($scope.user.password);

};
