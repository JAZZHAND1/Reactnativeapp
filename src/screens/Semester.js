import React from "react";
import {View, StyleSheet, Button} from "react-native";
import sem1 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Sem1.js';
import sem2 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Sem2.js';
import sem3 from 'D:/Books/3-2/Web And App Development/Lab Task/Apps/reactnativeapp/src/screens/Sem3.js';

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
          color="green"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="2nd Semsester"
            onPress={function (){
              props.navigation.navigate("sem2");
              }
            }
          color="green"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="3rd Semsester"
            onPress={function (){
              props.navigation.navigate("sem3");
              }
          }
          color="green"
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
    margin: 5,
},
});
export default Semesters;