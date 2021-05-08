import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Camera } from 'expo-camera';
 
let camera: Camera


const firebaseConfig = {
    apiKey: "AIzaSyAM4ba4gz_ztmH-CJd2-XsmaczP4DT_s2U",
    authDomain: "cameraapp-312503.firebaseapp.com",
    projectId: "cameraapp-312503",
    storageBucket: "cameraapp-312503.appspot.com",
    messagingSenderId: "933221981473",
    appId: "1:933221981473:web:b2f0ee484c3ece0f18b260",
    measurementId: "G-PE16ENEF4F"
  };

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

// storing data
function storeData(zipcode, photo_uri, barcode, faceDetect){
  dbh.collection("photos").doc(zipcode).set({
    barcode: barcode,
    faceDetected: faceDetect,
    photo_uri: photo_uri
  })
}

// Global
let takenPhotos = [];

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [exampleState, setExampleState] = useState(takenPhotos);
  const [text, setText] = useState('')



  const __takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync()

    // add element and update object with correlation to zipcode
    photo.zip = text;
    takenPhotos.push(photo)
    // Clear zipcode after update
    setText('')
    console.log(photo)

    // add element to array
    var newPhotos = [...takenPhotos, photo]
    setExampleState(newPhotos)

    storeData(photo.zip, photo.uri, "", "")
    
    console.log(exampleState)
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text> Welcome to Web Camera! Press the button below to take a photo</Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <Camera 
          style={styles.camera} 
          type={Camera.Constants.Type.front}
          ref = {(ref) => { camera = ref }}>
          <View style={styles.capture}>
            <TouchableOpacity
              onPress={__takePicture}
              style={{
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: '#fff'
              }}>
            </TouchableOpacity>
          </View>
        </Camera>
        <View style={styles.rightSide}>
          <Text> Enter your zip code, and then take a photo! </Text>
          <TextInput
            style={styles.input}
            defaultValue={text}
            onChangeText={(text) => setText(text)}
            value={text}>
          </TextInput>
          <Text> See list of taken photos below: </Text>
          <FlatList
            keyExtractor = { item => item.id}
            data={exampleState}
            renderItem = {item => (<View>
              <text> {item.item.zip} </text>
              <Image
                styles={styles.logo}
                source = {{
                  uri: item.item.uri,
                }}>
              </Image>
            </View>)}
          >
          </FlatList>
          <Text> Selected Image: </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightSide: {
    flexDirection: "column",
    width: 400
  },
  logo:{
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  camera: {
    flex: 1,
    flexDirection: 'column',
    width: 400,
    height: 500,
  },
  capture: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
