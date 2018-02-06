# angular-form
## A web application using AngularJS

### How the form works
1.  app.js <br>
    * this creates the angular app module and controller.
    * use **ng-app="app"** in the html file to tell it to use that module
    * use **ng-controller="formcontroller"** in whatever div in the html file to tell it to use that controller and its function

2. index.html <br>
    ```
      <form name="signinForm" ng-controller="formcontroller" novalidate>
    ```
    * this tells the form to have a name **signinForm** which will be used for validation
    * set the **controller** to be used in any code within the form tag
    * **novalidate** allows me to use angulars validation instead of the HTML5
