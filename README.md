# StarWarsCharacterBrowser
Brows through your favorite Star Wars characters! 

## Objective 
The objective is to develop an iOS app with React Native. 

## Motivation
This project is created to learn more about developings apps with React Native. 

## Features 
- See characters from Star Wars in a list 
- Search or filter the list by using the search section
- Select a character from the list to see more info 

## Technologies used 
**Built with**
- Sublime Text
- Visual Studio Code 
- React Native using Expo 

Sublime Text was only used in the early stages of this project. I selected this editor initially because Ray Wenderlich suggested it in their [tutorial on building iOS apps with javascript](https://www.raywenderlich.com/485-react-native-tutorial-building-ios-apps-with-javascript). 

However, the editor did not work properly and this resulted in a significant delay. One of the issues inludes color coding that does not work correct. For example, some lines showed the wrong color, which suggests that something is wrong with the code while the code was actually fine. 

Therefore, the switch to Visual Studio Code was made to enhance the ease of development. 

## How the Code is Built 

According to Facebook, the first step is to break the UI into a component hierarchy, for ([example](https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)
I first started with drawing a mock up of the app on paper. The app contains two screens:
1. The first screen shows the Star Wars Characters in a list. It also contains a searchbar at the top to allow the user to search and filter on characters. 
2. The second screen shows additional information about a character as a user selects a character. 

This results in the the following components: 
- FilterableStarWarsCharactersContainer: contains the entirety of the example 
- SearchBar: receives user input 
- Star Wars Table: displays and filters the data collection based on user input
- CharacterRow: displays a row for each product

The next step is to identify the minimal (but complete) representation of UI state. 

The following decision criteria is used: 
- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.

In this app, the UI state is represented with:
- The original list of Star Wars characters (this is downloaded from the Internet through an API)
- The search text the user has entered (this changes over time and can't be computed from anything) 

Because of the importance of user experience, an activity indicator is added as state to indicate to the user that the app is downloading data from the backend. 

All the other pieces of data, e.g. the filtered list of characters, are props.



