import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';


export default class SignIn extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder='Enter your Email'/>
        <TextInput placeholder='Enter your Password'/>
        <Button title='SignIn' onPress={() => this.props.navigation.navigate('Content')}/>
      </View>
    )
  }
}
