import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput, AsyncStorage,
} from 'react-native';
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
    this.sendSignUp = this.sendSignUp.bind(this)
  }
  static navigationOptions = {
    title: 'Sign Up',
  }
  sendSignUp(e) {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'https://mobile-server-ii.herokuapp.com/users',
      data: { 'email': this.state.email, 'password': this.state.password }
      })
      .then((res) => {
        AsyncStorage.setItem('token', res.data.token)
        this.props.navigation.navigate('Content')
      })
      .catch((err) => {
        alert(err)
      })
  }
  render() {
    return (
      <View>
        <Text>E-mail:</Text><TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text>Password:</Text><TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title='Sign Up' onPress={this.sendSignUp} />
      </View>
    );
  }
}
