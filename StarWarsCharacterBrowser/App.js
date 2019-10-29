
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
  ListItem,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

constructor(props) { 
  super(props); 
  this.state = { 
    dataSource: [],
    isLoading: true,
    error: null,
  };
}

componentDidMount() {
  console.log('did mount!!')

  this._performRequest('https://swapi.co/api/people/')
}


keyExtractor = (item, index) => item.name

renderItem=(item)=>
<TouchableOpacity>
<Text>{item.name}</Text>
</TouchableOpacity>


FlatListItemSeparator = () => {
  return (
    <View style={{
       height: .5,
       width:"100%",
       backgroundColor:"rgba(0,0,0,0.5)", 
      }}/>
      );
    }

render(){
  if(this.state.isLoading){
   return( 
     <View style={styles.loader}> 
       <ActivityIndicator size="large" color="#0c9"/>
     </View>
 )}
 return(
  <View style={styles.container}>
  <FlatList
     data= {this.state.dataSource}
     ItemSeparatorComponent = {this.FlatListItemSeparator}
     renderItem= {item=> this.renderItem(item)}
     keyExtractor= {item=>item.name}
  />
 </View>
 )}

 /*
render() {
  const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.name} />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>  
    );
}
*/

_performRequest = (query) => {
  this.setState({ isLoading: true });
  fetch(query) 
  .then(response => response.json())
  .then(json => this._handleResponse(json.results))
   .catch(error => {        
     this.setState({ error, isLoading: false });      
   });  
};

  _handleResponse = (response) => { 
    console.log(response)
        this.setState({          
          dataSource: response,          
          isLoading: false,        
        });        
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});


/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
*/

/*
// class SearchResults extends Component<{}> {
//   _keyExtractor = (item, index) => index; 

//   _renderItem = ({item, index}) => ( 
//     <ListItem item={item}
//     index={index}
//     />
//     );

// render() { 
//   return (
//       <FlatList data={this.props.results}
//       _keyExtractor={this._keyExtractor}
//       renderItem={this._renderItem}
//       />
//     )
// }

// }

// class ListItem extends React.PureComponent { 
//   _onPress = () => { 
//     console.log('pressed on item')
//     // this.props.onPressItem(this.props.index)
//   }

//   render() { 
//     const item = this.props.name

//     return ( 
//       <View> 
//         <View style={styles.rowContainer}>
//         <Text style={styles.name}>{item.name} </Text>
//         </View>
//       </View>
//       )
//   }

// }

const styles = StyleSheet.create({ 
  description: {
    fontSize: 18, 
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },  container: {
    flex: 1,
  },
    thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  name: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },

});
*/


export default App;