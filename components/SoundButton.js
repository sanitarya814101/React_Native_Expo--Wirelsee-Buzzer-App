import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import db from "../config";
import firebase from 'firebase'

export default class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };

  isButtonPressed(){

    var teamColor = this.props.color;
    
    db.ref(teamColor).update({

      'isButtonPressed':true,
      'timeStamp':firebase.database.ServerValue.TIMESTAMP

    })

    console.log(teamColor);

  }

  render() {
    return (
      <TouchableOpacity style={[styles.button,{backgroundColor: this.props.color}]} 
      onPress={()=>{

        this.isButtonPressed()
        this.playSound()
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>
          Press Me
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 70,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
    marginTop:80
  },
});
