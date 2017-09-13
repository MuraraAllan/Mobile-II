import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default class SignUp extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder='Enter your Email'/>
        <TextInput placeholder='Enter your Password'/> 
        <Button title='SignUp' onPress={() => this.props.navigation.navigate('Content')}/>
      </View>
    );
  }
}
