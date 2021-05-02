import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
        <Camera style={styles.camera} type={Camera.Constants.Type.front}>
        </Camera>
        <View style={styles.rightSide}>
          <Text> Enter your zip code, and then take a photo! </Text>
          <TextInput
            style={styles.input}>
          </TextInput>
          <Text> See list of taken photos below: </Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  camera: {
    flex: 1,
    width: 400,
    height: 500,
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
