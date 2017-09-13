import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { signUp } from './actions';

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.dispatchSignUp = this.dispatchSignUp.bind(this)
  }
  dispatchSignUp = () => {
    email = this.state.email;
    password = this.state.password;
    this.props.signUp({email, password});
  }
  render() {
    return (
      <View>
        <TextInput value={this.state.email} onChangeText={(email) => this.setState({email})} placeholder='Enter your Email'/>
        <TextInput value={this.state.password} onChangeText={(password) => this.setState({password})} placeholder='Enter your Password'/> 
        <Button title='SignUp' onPress={this.dispatchSignUp}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error
  }
}

export default connect(mapStateToProps, { signUp })(SignUp);