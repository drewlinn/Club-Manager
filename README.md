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
* Perform 'npm install' and 'bower install' commands
* Perform the commands 'ng build' followed by 'ng serve'
* Open your Web Browser and navigate to 'localhost:4200'

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
