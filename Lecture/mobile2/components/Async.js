import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import axios from 'axios';

export default class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World!',
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      this.setState({
        message: response,
      })
    });
  }
  render() {
    return (
      <FlatList 
      data={this.state.message}
      renderItem= {({item}) => {
        return <Text>{item}</Text>
      }}/>
    )
  }
}