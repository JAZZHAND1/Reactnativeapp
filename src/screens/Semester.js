import React from "react";
import {View, StyleSheet, Button} from "react-native";
import semester1 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Semester1.js';
import semester2 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Semester2.js';
import semester3 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Semester3.js';

const Semesters = (props) => {
  return (
    <View style={styles.viewStyle}>
      <View style = {styles.buttonStyle}>
        <Button
          title="1st Semsester"
          onPress={function (){
            props.navigation.navigate("sem1");
            }
          }
          color="red"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="2nd Semsester"
            onPress={function (){
              props.navigation.navigate("sem2");
              }
            }
          color="red"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="3rd Semsester"
            onPress={function (){
              props.navigation.navigate("sem3");
              }
          }
          color="red"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "blue",
    marginVertical: 30,
  },
  viewStyle: {
      margin: 100,
      alignItems: 'center'
  },
  buttonStyle: {
    margin: 50,
},
});
export default Semesters;