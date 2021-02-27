# Starwars Blog Reading List

_The force is strong with this exercise..._

We are going to be building a minimalist version of the [Star Wars Databank](https://www.starwars.com/databank) with a React Later or Favorites list functionality.

![Starwars Demo](https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true)

## 📝 Instructions

1. Start a new project using [4Geeks Academy's React Advanced boilerplate](https://github.com/4GeeksAcademy/react-hello-webapp).
2. Use bootstrap components, you need **almost** no custom CSS.
3. Take some time to understand the SWAPI.tech API, this will be our source of information, we will be consuming this API.
4. Fetch the SWAPI people, vehicles and planets and display them on your application.
5. Declare a `favorites` array in your central store and allow the user to add or remove favorites.

#### Building the grid of Characters and Planets

- Create a React webapp that lists the _peope_, _vehicles_ and _planets_ **entities** provided by the [SWAPI](https://www.swapi.tech/documentation).

Note: Please use https://www.swapi.tech/ instead of https://www.swapi.dev/ because the second one is giving problems.

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

#### Building a details view for Character or Planet

- Each entity should have a short description (Bootstrap Card) and a details view (Bootstrap components):

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

***Important***: The SWAPI doesn't provide the images, you can use placeholders or avoid the images altogether. The focus of this exercise is to practice *fetch*, *router* and *context*; you can focus on the color theme and simple layout to make it look good.

***Important 2***: don't worry if the data you get from the SWAPI doesn't match the data you see in starwars.com.

Use all the information provided by the SWAPI (check the docs and/or the json responses).

## Read Later or Favorites functionlity

Implement a read-later funcionality, i.e, a button that allows the user to "save" the item (character, vehicle or planet) into a special list. This list will be shown at the bottom of the home page, it resembles the main list but only shows the "saved" elements.

#### Use the Context

To ensure that the user can "save" the item, you must implement an action that can be accessible from anywhere within the app.

## 😎 Feeling Confident?

The following features are not needed for the final solution, but you can develop them if you feel confident enough:

- `+1` Prevent the website from fetching the Startwars API again if refreshed (you can use the localstorage to save the store on the local browser).
- `+3` Implement a search bar with autocomplete for Characters and Planets. When the autocomplete is clicked it should take you to the Character or planet page.
