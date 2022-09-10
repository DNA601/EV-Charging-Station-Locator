# EV Charging Station Locator

## Description
A EV charging location app that collects data based on a person's search -- city or zip code -- and displays various data parameters detailing the charging station location and retail information. The application incorporates five parts:
- search input
- closest charging station near user
- dynamic map to visualize that main charging station 
- alternative locations
- localStorage buttons to go back to stations that were previously highlighted.

We used [Leaflet](https://leafletjs.com/) as a third-party API to retrieve a visual map, and two server-side APIs --[National Renewable Energy Laboratory](https://developer.nrel.gov) and [MyPTV](https://developer.myptv.com) --to find data on EV charging stations and geocoding information. For styling, we used Skeleton as a CSS framework and HTML our baseline structure.

GitHub repository: https://github.com/espinbrandon49/EV-Charging-Station-Locator

Deployed Link: https://espinbrandon49.github.io/EV-Charging-Station-Locator/

## Installation
* Runs in the browser
* Git clone - git@github.com:espinbrandon49/EV-Charging-Station-Locator.git

## Tools
JavaScript, HTML, CSS (Skeleton), Git, GitHub, Chrome DevTools, Leaflet, National Renewable Energy Laboratory (NREL), MyPTV

### JavaScript
* We set up and used an access key from [NREL API](https://developer.nrel.gov) and [MyPTV](https://developer.myptv.com) to access their data using the Fetch API 

* We reviewed the third-party API's documentation to make use of their functionality for 
  - the parameters available
  - the response display
  - how we should interpret the response
  - various other parts of the functionality such as how to recieve the response in imperial versus absolute units for example.

* We made use of the API's functionality to make requests with specific parameters we needed and were available based on the API's documentation so that we retrieved data applicable to our location tracker.

* We stored the search history using local storage.

* Document Object Model connects the HTML to our JavaScript.

* Used console extensively to: 
  - diagnose problems with my JavaScript
  - view the results of my functions before I inserted into the application.
  - ensure my code is executing in the right order by inspecting the variables in console at certain moments of time
 
### HTML
* The source code uses semantic HTML elements.
* The structure of the HTML elements follow a logical structure that is key for DOM references, styling, and access to the elements from JS and CSS. 
* The HTML follows best practices for class/id naming conventions, indentation, etc. so that I was able to concisely use the Document interfaces such as getElementById() in JavaScript to access the inputs/element data, display accurate outputs, and connect event handlers.
* The HTML is referenced throughout the JS and CSS using the web API.

### CSS
* The application has responsive layout that adapts to your viewport on various screen sizes.
* Application user experience is intuitive and easy to navigate.
* Application user interface style is clean and polished.
* Application's CSS framework organizes the components into a grid.

## Git/GitHub
* Repository commit messages allow one to follow along as the application development story unfolds.
* Repository maintained consistent code management (GIT) and continuous integration to build and deploy.
* Collaborators created separate branches and merged them with the main branch to create an efficient workflow. 
* Repository contains quality readme with description, screenshot, link to deployed application.
* GitHub repository contains application code.

## Chrome DevTools
* Used console to diagnose problems with my JavaScript.
* Used console to view the results of all of my functions to see that they were doing what I expected and holistically.
* Using DevTools, I viewed my media queries, server-side API fetches, and the application on different device screens and to inspect various elements in the Elements panel.
* Used DevTools to examine my box sizes, padding, borders, content, etc., and to view element styles in the browser.


## Collaboration
### Dylan Kreisman, David Navarrete Ayala, Brandon Espinosa
#
## Screenshots
####  ![EV Charging Station Locator](./Assets/ev-locator-gif.gif)