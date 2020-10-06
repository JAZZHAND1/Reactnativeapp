import React from 'react';
import { Text, View, StyleSheet, Image} from "react-native";

const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                source = {require ('../../assets/profile.jpg')}
                style={styles.imageStyle}
        />
        <Text style = {styles.textStyle}>
            Name: S.M.Nawsad Rahmatullah{"\n"}
            Student ID: 170042084{"\n"}
            Room No: Non Residential{"\n"}
            Email: babel@iut-dhaka.edu
        </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "blue",
    margin: 20,
    alignSelf: "center",
  },
  viewStyle: {
    margin: 50,
    alignSelf: "center"
  },
  imageStyle: {
    height: 443,
    width: 249,
    alignSelf: 'center',
  },
 }
);


export default Profile;