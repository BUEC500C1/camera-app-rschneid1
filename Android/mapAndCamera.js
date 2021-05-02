import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { RNCamera, FaceDetector } from 'react-native-camera'

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native'

class App extends Component {
  state = {
    count: 0
  }


  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

 render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>

        <MapView
        initialRegion={{
            latitude: 42.3318,
            longitude: -71.1212,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        style = {styles.map}
        />

        
        <RNCamera
          ref={ref=> {
            this.camera = ref;
          }}
          captureAudio={false}
          style={{
            flex: 1,
            width: '100%',
          }}>
        </RNCamera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  map: {
    width: 480,
    height: 300
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default App;
