# angular-form
## A web application using AngularJS

### How the form works
1.  app.js <br>
    * this creates the angular app module and controller.
    * use **ng-app="app"** in the html file to tell it to use that module
    * use **ng-controller="formcontroller"** in whatever div in the html file to tell it to use that controller and its function
    * **app.factory** is used to bridge two controllers, **formcontroller and submittedForm**

2. index.html <br>
    ```
    <form name="signinForm" ng-controller="formcontroller" novalidate>
    ```

    <br>

    * this tells the form to have a name **signinForm** which will be used for validation
    * set the **controller** to be used in any code within the form tag
    * **novalidate** allows me to use angulars validation instead of the HTML5

    <br>

    ```
    <div class="form-group">
      <label for="inputFirstName">First Name</label>
        <input type="text" class="form-control" id="inputFirstName" name="firstName" placeholder="First Name" ng-model="contact.firstName" ng-required="true">
        <p ng-show="signinForm.firstName.$touched && signinForm.firstName.$invalid">
          <small class="form-text text-muted error">Please enter a valid first name.</small>
        </p>
    </div>
    ```

    <br>

    * **<div...**, set the class called form-group, which is just bootstrap
    * **<label...**, the **for** is set, so that when you give the input id that is **EQUAL** to for, it allows you to
    click the label, and highlight the input area.
    * **<input...**,
      * **type=** is assigned to text
      * **class=** is assigned form-control which is just a bootstrap class
      * **id=** is assigned to for of the label tag
      * **name=** is assigned so that we can call this input for validation later
      * **placeholder=** is assigned "First Name" text which is shown in the input field while the user hasn't typed anything yet
      * **ng-model="contact.firstName"**, this retrieves whatever is input in the field, and here I used an object called contact, and applied the property
      firstName to it.  I could have just used ng-model="firstName", but with a longer form, I can just pass an object through later on that contains all the properties
      * **ng-required="true"** just says this has to be filled in before anything can be submitted, just leave this out if you dont want to require anything because
      it is set to false by default
