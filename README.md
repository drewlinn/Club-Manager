# Dungeons and Dragons Group Manager

#### Javascript Week 3 Code Review: A Club Manager Application.

#### By **Andrew Dalton**

## Description
  * This is an application designed for managing the members of a Dungeons and Dragons group and their characters.


## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.

  * Install the following packages:
    * npm install - allows us to install back-end packages.
    * bower install - allows us to manage front-end packages.
        * bootstrap - installed with bower for the front end, this provides us with some rudimentary page styling tools.

  2. Specifications
  
  | Behavior | Input | Output |
  | :--------| :---- | :------|
  | User can visit an about page to get more information about the club. | Click 'about' | "Our club is about..." |
  | User can view a list of all the members in the club. | Click "Members" | "Gabriel, Catlin, Peter, Ben, Faolan, Tyler, Sacha" |
  | User can filter the list of members by their Character. | Filter by "Wanderer June" | "Peter" |
  | User can view an individual instance of a member and their details. | Click "Catlin" | "Name: Catlin Walker, Age: 32, Characters: [Porggy Bucklebottom, Sir Mary Randy Savage Marsh III, Mandu, Grog(deceased), Ni(deceased)]" |
  | Administrator can create a new member. | "Add new Member" | "Name: Jesse Hughes, Age: 28, Characters: [Skyline] |
  | Administrator can edit a member. | Click "EDIT", Gabriel, Characters: [Aru, Sir Goose O'Malley] | "Characters[Aru, Sir Goose O'Malley, Tobias Sunday]" |
  |Administrator can delete a member. | "Name: Aaron Williams, DELETE" | "This member is no longer in this club" |
  **Stretch Goal**
  | Managing Character objects. |

3. Integration
  * index.html, welcome.component, app.component, app.module, and app.routing for application entry, navigation, and integration.
  * about.component to provide more information about our club.
  * members.component for viewing a list of all members.
  * member-detail.component for viewing the details of an individual member.
  * admin.component for an administrator to add, edit, and delete club members.
  * member-new.component for the club administrator to add a new a member to the club.
  * member-edit.component for the club administrator modify an existing member's information.

## Setup/Installation Requirements

* Open your console or powershell command line.
* In your command line, navigate to the desktop or your desired folder destination.
* Copy the project's github address (https://github.com/drewlinn/Club-Manager.git)
* Write in your console the command "git clone" and paste the project address afterward and press enter.
* Use your console to navigate to the project directory and perform 'npm install' and 'bower install' commands
* Create a file called 'api-keys.ts' in the 'src/app' folder of the project directory.
* Open your browser and navigate to https://console.firebase.google.com/ in your web browser.
* If necessary, create an account.
* In the dashboard area, click on the 'Create a New Project' option; provide it with a name and select your Country/Region from the drop-down menu.
* You will then be directed to an Overview area. Select the 'Add Firebase to your web app' option.
* In the window that pops up, Copy everything nested in the 'var config' code block and paste it into your 'api-keys.ts file; change the declaration from 'var config' to 'export var masterFirebaseConfig'. Like so:
  **export var masterFirebaseConfig = {
    apiKey: "YOUR-API-KEY-GOES-HERE",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };**
* Make sure to save the new file.
* Return to the Firebase Console and select your project. Click on the Database option in the side Navbar.
* Near the top of the page on the blue navbar, select the option that reads RULES; change both the ".read" and ".write" properties from "auth !== null" to "true".
* In your console (make sure you are still in the project directory), perform the commands 'ng build' followed by 'ng serve'
* In your Web Browser, navigate to 'localhost:4200'
* The application should successfully be displayed with full functionality.

  ## Angular-CLI Troubleshooting
    ## Development server

    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

    ## Code scaffolding

    Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

    ## Build

    Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

    ## Running unit tests

    Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

    ## Running end-to-end tests

    Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
    Before running the tests make sure you are serving the app via `ng serve`.

    ## Further help

    To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

None currently known.

## Support and contact details

If you notice any issues with my program or bugs with my code, please contact me at expandrew@gmail.com.

## Technologies Used

  * HTML
  * Javascript
  * Typescript
  * Angular2
  * CSS
  * SCSS
  * Bootstrap
  * Node Package Manager
  * Bower
  * Firebase

### License

*This software is licensed under the GPL*

Copyright (c) 2016 **Andrew Dalton, Epicodus**
