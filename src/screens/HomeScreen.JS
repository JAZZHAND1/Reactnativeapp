import React from 'react';
import {Text, StyleSheet, View, Button, Image, TouchableOpacity, ScrollView} from 'react-native';


const HomeScreen = (props)=>{
    return (
    <ScrollView>
        <View style= {styles.viewStyle}>
                <Image
                    source={require ('../../assets/IUT.png')}
                    style={styles.imageStyle}
                />
            <Text style = {styles.textStyle}>Department of CSE{"\n"}Program: SWE{"\n"}{"\n"}</Text>
            <TouchableOpacity onPress={function ()
                {props.navigation.navigate("Profile");
                }
                }>
                <Text style = {styles.touchStyle}>My Profile{"\n"}</Text>
            </TouchableOpacity>
            <View style = {styles.buttonStyle}>
                <Button
                    title="Semesters"
                    onPress={function (){props.navigation.navigate("Semesters");}}
                    color="green"
                    margin="15"
                />
            </View>
            <View style = {styles.buttonStyle}>
                <Button
                    title="Faculty List"
                    onPress={function (){props.navigation.navigate("FacultyList");}}
                    color="green"
                />
            </View>
        </View>
    </ScrollView>
        );
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color:'blue',
            textAlign: "center",
            margin: 50
        },
        imageStyle: {
            height: 358,
            width: 296,
            alignSelf: 'center',
            margin:0
        },
        viewStyle: {
            margin: 50,
            alignSelf: 'center'
        },
        buttonStyle: {
            margin: 10,
            
        },
        touchStyle: {
            fontSize: 18,
            color:'blue',
            textAlign: "center",
            margin: 15,
        },
    }
);

export default HomeScreen;