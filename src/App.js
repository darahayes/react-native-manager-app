import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm'
import Router from './Router'


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBkoT9Ll9F-YuMr4nNjYL4KDWoTmu-pD7Y',
      authDomain: 'manager-7a3ea.firebaseapp.com',
      databaseURL: 'https://manager-7a3ea.firebaseio.com',
      projectId: 'manager-7a3ea',
      storageBucket: '',
      messagingSenderId: '322711721460'
    })
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App