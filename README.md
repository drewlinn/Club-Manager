# Dungeons and Dragons Group Manager

#### Javascript Week 3 Code Review: A Club Manager Application.

#### By **Andrew Dalton**

## Description



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
