import React from 'react';
import { StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Content from './components/Content'
import reducers from './components/reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}> 
        <Routes />
      </Provider>
    );
  }
}

const Routes =  StackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn},
  SignUp: { screen: SignUp },
  Content: { screen: Content }
})

Expo.registerRootComponent(App);

export default App