import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Profile from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Profile.js';
import semester1 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Sem1.js';
import semester2 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Sem2.js';
import semester3 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Sem3.js';
import Semester from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Semester.js';
import FacultyList from  'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/FacultyList.js';
const stack = createStackNavigator();

function App(){
  return(
  <NavigationContainer>
   <stack.Navigator>
     <stack.Screen name="Home" component={HomeScreen}/>
     <stack.Screen name="Profile" component ={Profile}/>
     <stack.Screen name="sem1" component= {semester1}/>
      <stack.Screen name="sem2" component= {semester2}/>
      <stack.Screen name="sem3" component= {semester3}/>
      <stack.Screen name="Semesters" component= {Semester}/>
      <stack.Screen name="FacultyList" component= {FacultyList}/>
      </stack.Navigator>
 </NavigationContainer>
  );
}
export default App;
