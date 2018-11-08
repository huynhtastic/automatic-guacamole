import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello, {this.props.name}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Kevin' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
