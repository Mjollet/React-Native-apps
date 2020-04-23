import React from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.childStyle1} />
        <View style={styles.childStyle2} />
        <View style={styles.childStyle3} />
    </View>
};

const styles = StyleSheet.create ({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between',        
    },

    childStyle1: {
       borderWidth: 1,
       borderColor: 'red', 
       backgroundColor: 'red',
       height: 50,
       width: 50, 
    },

    childStyle2: {
        height: 50,
        width: 50,  
        borderWidth: 1,
        borderColor: 'green',  
        backgroundColor: 'green',
        top: 50,   
     },

    childStyle3: {
        height: 50,
        width: 50,  
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'purple', 
        right: 0,    
    },

});

export default BoxScreen;