import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Profile from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Profile.js';
const stack = createStackNavigator();

function App(){
  return(
  <NavigationContainer>
   <stack.Navigator>
     <stack.Screen name="Home" component={HomeScreen}/>
     <stack.Screen name="Profile" component ={Profile}/>
      </stack.Navigator>
 </NavigationContainer>
  );
}
export default App;
