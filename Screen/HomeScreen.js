import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader';

import db from '../config';

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      redstatus: true,
      greenstatus: true,
      bluestatus: true,
      yellowstatus: true,
    };
  }

  componentDidMount() {
    db.ref('/').on('value', (data) => {
      var teamDetails = data.val();

      this.setState({
        redstatus: teamDetails.red.enabled,
        greenstatus: teamDetails.green.enabled,
        bluestatus: teamDetails.blue.enabled,
        yellowstatus: teamDetails.yellow.enabled,
      });
    });

  }

  goToBuzzerScreen = (buzzerColor) => {
    db.ref('/'+buzzerColor).update({enabled:false})
    this.props.navigation.navigate('BuzzerScreen', { color: buzzerColor });

    console.log(this.state.redstatus)
  };

  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
        disabled={!this.state.redstatus}
          style={[styles.button,{backgroundColor: 'red',}]}
          onPress={() => {
            this.goToBuzzerScreen('red');
          }}>
          <Text style={styles.text}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={[styles.button,{backgroundColor: 'green',}]}
           disabled={!this.state.greenstatus}
          onPress={() => {
            this.goToBuzzerScreen('green');
          }}>
          <Text style={styles.text}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={[styles.button,{backgroundColor: 'blue',}]}
           disabled={!this.state.bluestatus}
          onPress={() => {
            this.goToBuzzerScreen('blue');
          }}>
          <Text style={styles.text}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={[styles.button,{backgroundColor: 'yellow',}]}
           disabled={!this.state.yellowstatus}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.text}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 50,
    marginTop: 50,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
