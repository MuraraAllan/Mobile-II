import React from 'react';
import { 
  Text,
  View,
  Button } from 'react-native';
import SignIn from './SignIn'
import SignUp from './SignUp'
import { connect } from 'react-redux';

class Home extends React.Component{
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <Button title='SignIn' onPress={() => this.props.navigation.navigate('SignIn')}/>
        <Button title='SignUp' onPress={() => this.props.navigation.navigate('SignUp')}/> 
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Home);