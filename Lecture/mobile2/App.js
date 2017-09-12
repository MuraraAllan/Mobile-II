import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Content from './components/Content'

const token = AsyncStorage.getItem('token')

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: token ? `Welcome ${JSON.stringify(token)}` : 'Please Sign In Hacker' }
  }
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>{this.state.email}</Text>
        <Button
          title={'Sign In'}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }} />
          <Button
          title={'Sign Up'}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
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
    SignIn: { screen: SignIn},
    SignUp: { screen: SignUp },
    Content: { screen: Content },
  })

export default Routes
