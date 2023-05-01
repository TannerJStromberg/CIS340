import { StatusBar } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

const csuLogo={
  uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Fpng-colorado-state-university-colorado-state-rams-foot-1862942%2F&psig=AOvVaw3pUaUYQib0xlwihGeAe_Hj&ust=1682999462714000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMj51tub0_4CFQAAAAAdAAAAABAE",
  width: 80,
  height: 80
};

  return (
    <View style={styles.container}>
    <ImageBackground source={csuLogo} style={styles.image}>

    <Text style={styles.text}> CSU Logo </Text>

    </ImageBackground>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
},

text: {
  color: "red",
  fontSize: 40,
  fontWeight: 'bold',
}

});
