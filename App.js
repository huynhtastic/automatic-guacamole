import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Hello, {this.props.name}!</Text>
			</View>
		)
	}
}

export default class App extends Component {
  render() {
    let pic = 
      { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}} />
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
