import  React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {

  _onPressButton() {
    alert('You Tapped a Button')
  }

  render() {
  return (
    <View style={styles.container}>
      
    <View style={styles.containerButton}>
      <Button
        onPress={this._onPressButton}
        title="Press button 1"
    />
    </View>


    <View style={styles.containerLayoutButton}>

      <Button
        onPress={this._onPressButton}
        title="Press button 2"
      />   

        <Button
        onPress={this._onPressButton}
        title="Great!"
        color='green'
      />   

  </View>


        <View style={styles.containerButton}>

        <Button
        onPress={() => {
          alert('You tapped button Tap Me!');
        }}
        title="Tap Me!"
      />   


        </View>


  </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

containerButton: {
  margin: 20,
},

containerButtonLayout: { 
  margin: 20,
  flexDirection: "row",
  justifyContent: 'space-between',
}

})}};