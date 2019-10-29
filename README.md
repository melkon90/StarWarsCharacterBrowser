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

### Breaking the UI into a Component Hierarchy   
According to Facebook, the first step is to break the UI into a component hierarchy, for ([example](https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)
I first started with drawing a mock up of the app on paper. The app contains two screens:
1. The first screen shows the Star Wars Characters in a list. It also contains a searchbar at the top to allow the user to search and filter on characters. 
2. The second screen shows additional information about a character as a user selects a character. 

This results in the the following components: 
- FilterableStarWarsCharactersContainer: contains the entirety of the example 
- SearchBar: receives user input 
- Star Wars Table: displays and filters the data collection based on user input
- CharacterRow: displays a row for each product

### Identifying the Minimal Representation of UI State
The next step is to identify the minimal (but complete) representation of UI state. 

The following decision criteria is used: 
- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.

In this app, the UI state is represented with:
- The original list of Star Wars characters (this is downloaded from the Internet through an API): the 'data' state
- The search text the user has entered (this changes over time and can't be computed from anything) 

Because of the importance of user experience, an activity indicator is presented to the user when the app starts to retrieve data from the backend. To track this, a 'Boolean' is added as state: isDownloading. Its value is for example true when the app starts and is false when the download finishes.  

All the other pieces of data, e.g. the filtered list of characters, are props.

### Integrating an API in React Native 
This app calls an API to retrieve a JSON that contains all the required data. This is done via 'Fetch', which is placed in the 'componentDidMount'. The result of a Fetch is a 'Promise' with 'then' and 'catch'. Once the JSON is retrieved, its set into states, i.e. setting the boolean that indicates network activity to false and updating the array containing the JSON data. 

### Showing Data in a Table
This app uses a 'FlatList' component for the listing. This code is placed in the 'Render'. The 'Render' contains an 'if' to check network activity (via the Boolean). If there is no network acitivity, it continues to execute the code that calls the 'FlatList' component. This component requires several parameters:
- data; this is the JSON containing the characters
- ItemSeperatorComponent: this is a view to indicate the end of an item
- renderItem: this sets up the view that shows the first letter of the character in an circle shaped avater component, the name, sex and home planet 
- keyExtrator: this sets the name as the key of the view 

### Searching/Filter the Table 
This app uses the 'SearchBar' component from the React Native Elements library. There are two reasons for this choice:
1. The UI of this component gives a native feeling to the user 
2. It is a challenge to build a component that resembles the native iOS search bar within a short time
Therefore, the 'react-native-elements' is installed using npm. 

For the 'SearchBar' to work, an empty array is added to the state: charactersArray. 

The ideal position of the 'SearchBar' is at the top of the 'FlatList'. Fortunately, the 'FlatList' has a prop to add custom components to its header. However, before the SearchBar can be added, a search function is needed. The search function filters the charactersArray, and updates the 'data' state based on the result. 

### Navigating through the app 
The user can click on an item in the table and see more information about a certain character. For proper navigation, this app uses 'NavigatorIOS'. To make this work,  a new class is defined that sets up the NavigatorIOS and uses the class that contains the 'FlatList' as its initial route component. 

To navigate to the new screen, a new class is defined first: CharacterDetail.
This class is setup pretty straightforward. It receives the character details and it presents it in a (bulleted) list. 
Next, a function is added to the 'FlatList' to identify row selections. Once a row is selected, the right item is identified, and a push to the next screen is initiated with the selected item as a prop. 
