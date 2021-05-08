# Camera Application 
# Client-Based

## Description:
Camera appliation that allows you to click on the map to get a location, take a photo and save an image to that location, and click on that map marker to see that image.

## Update:
Turns out that the expo client does not support expo-camera in the android emulator, and react-native-maps does not work with expo, so I had to rebuild in just react-native and not use expo.


## Step 1 & 2 & 3: Displaying a Map (and showing the button from the tutorial)
![image](https://user-images.githubusercontent.com/55038099/116816559-74208400-ab30-11eb-9eb4-7245509d4a14.png)

## Updated: Camera underneath map, Camera displaying black screen:
![image](https://user-images.githubusercontent.com/55038099/116818335-e39a7180-ab38-11eb-9f24-d95ee4fa3796.png)

## Update: Unable to get camera (using react-native-camera) RNCamera to display anything more than a black screen using android emulator. 
Attmepted to debug via links:
https://github.com/react-native-camera/react-native-camera/issues/2337
https://www.fullstacklabs.co/blog/react-native-camera


Solution:
Map features will stay on an android emulation. 

Will implement camera features on a web app using expo-camera.

## Step 4: Displaying Camera Input and some Basic UI
![image](https://user-images.githubusercontent.com/55038099/116824219-13587200-ab57-11eb-8a06-4dce07afede6.png)

## Step 5: Storing Each Captured Image in an Array
![image](https://user-images.githubusercontent.com/55038099/116836739-b7f9a480-ab95-11eb-83f4-64c58ff49a89.png)


## Video Demos of Progress:
Android:
https://drive.google.com/file/d/1oNcLQDalDou25IMxUua6RBJxnBn2lZFN/view?usp=sharing
Web (for camera):
https://drive.google.com/file/d/1cT3kpUv5GgRnFvQ6NJWOvWazhFXJGy80/view?usp=sharing



