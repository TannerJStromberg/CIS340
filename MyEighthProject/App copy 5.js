import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'//import

export default function App() {  

  const [selectedImage, setSelectedImage] = React.useState(null)
  
  let openImagePickerAsync = async() => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){
      alert("Permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});

  };

  if (selectedImage !== null){
    return(
      <View style={styles.container}>
        <Image source={{uri: selectedImage.localUri}} style={styles.selImage}/>
      </View>
    )
  }
//end of the code


  return (
    <View style={styles.container}>
    <Image source={{uri: 'https://github.com/AbdunabiRamadan/CIS340-Images/blob/main/images/logo.png' }}
      style={styles.logo} />

    <Text style={styles.insts}>
      Press the Button below to select an image on your phone!
    </Text>

    <TouchableOpacity style={styles.button} onPress={openImagePickerAsync} >

    <Text style={styles.buttonText}>Pick Image</Text>

    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0",
  },


button: {
  backgroundColor: "#778899",
  padding: 10,
  borderRadius: 5
},

insts: {
  fontSize: 18,
  color: "#87CEFA",
  marginHorizontal: 15,
  marginBottom: 10

},

logo: {
  width: 305,
  height: 300,
  marginBottom: 20
},

buttonText: {
  fontSize: 20,
  color: "#fff"
},

selImage: {
  width: 300,
  height: 300,
  resizeMode: 'contain'
}


});
