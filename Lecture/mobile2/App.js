import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Content from './components/Content'
import Async from './components/Async'
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
    }
  }
  static navigationOptions = {
    title: 'Home Page',
  }
  render() {
    return(
      <View style={styles.container}>
        <TextInput 
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}/>
        <Button
          title={'View Content'}
          onPress={() => {
            this.props.navigation.navigate('Content');
          }} />
          <Button
          title={'View Async'}
          onPress={() => {
            this.props.navigation.navigate('Async');
          }} />
      </View>
    )
  }
}
  styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  const Routes =  StackNavigator({
    Home: { screen: Home },
    Content: { screen: Content},
    Async: { screen: Async }
  })
  
export default Routes