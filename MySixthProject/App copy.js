import { StatusBar } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

const csuLogo={
  uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Fpng-colorado-state-university-colorado-state-rams-foot-1862942%2F&psig=AOvVaw3pUaUYQib0xlwihGeAe_Hj&ust=1682999462714000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMj51tub0_4CFQAAAAAdAAAAABAE",
  width: 80,
  height: 80
};

  return (
    <View style={styles.container}>
      
    <Image
      style={styles.localCSULogo}
      source={require('./assets/CSULogo.png')}/>

  <Image
    style={styles.urlCSULogo}
    source={{
      uri: "https://media.istockphoto.com/vectors/ram-vector-id1003202434"
    }}/>


  <Image 
  style={styles.stretchLogo}
  source={csuLogo} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

localCSULogo: {
  width: 55,
  height: 65,
},

urlCSULogo: {
  width: 50,
  height: 50
},

stretchLogo: {
  height: 200,
  resizeMode: 'center',
}

});
