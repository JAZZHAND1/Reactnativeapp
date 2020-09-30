import React from 'react';
import {Text,StyleSheet} from 'react-native';
import { createPortal } from 'react-dom';

const HomeScreen = ()=>{
    return(<Text style={styles.textStyle}> Hi there </Text>);
}

const styles= StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color :'blue',
        },
    }
);

export default HomeScreen;