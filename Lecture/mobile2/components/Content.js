import React from 'react';
import {
  StyleSheet, Text, View, FlatList, AsyncStorage,
} from 'react-native';
import axios from 'axios';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      users: []
    }
  }
  _keyExtractor = (item, index) => item._id;
  static navigationOptions = {
    title: 'Home Page',
  }
  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => {
      axios({
        method: 'get',
        url: 'https://mobile-server-ii.herokuapp.com/users',
        headers: { 'authorization': token }
        })
        .then((res) => {
          this.setState({ users: res.data })
        })
        .catch((err) => {
          alert(err)
        })
    })
  }
  render() {
    return(
      <View>
          <FlatList
            data={this.state.users}
            keyExtractor={this._keyExtractor}
            renderItem= {({item}) => {
              return <Text>{item.email}</Text>
            }}/>
      </View>
    )
  }
}
