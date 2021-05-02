# Camera Application 
# Client-Based

## Description:
Camera appliation that allows you to click on the map to get a location, take a photo and save an image to that location, and click on that map marker to see that image.

## Update:
Turns out that the expo client does not support react-native-maps in the android emulator, and react-native-maps does not work with expo, so I had to rebuild in just react-native and not use expo.


## Step 1: Displaying a Map
![image](https://user-images.githubusercontent.com/55038099/116816559-74208400-ab30-11eb-9eb4-7245509d4a14.png)

## Updated: Camera underneath map, Camera displaying black screen:
![image](https://user-images.githubusercontent.com/55038099/116818335-e39a7180-ab38-11eb-9f24-d95ee4fa3796.png)

## Update: Unable to get Camera to display anything more than a black screen using android emulator. 
Attmepted to debug via links:
https://github.com/react-native-camera/react-native-camera/issues/2337
https://www.fullstacklabs.co/blog/react-native-camera


Solution:
Map features will stay on an android emulation. 

Will implement camera features on a web app using expo-camera.

