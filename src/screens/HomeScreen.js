import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
  <View>

    <Text style={styles.text}> Hi there ! </Text>

    <Button 
    onPress={() => navigation.navigate('Components')}
    title="Go to Component Demo"
    color="#f194ff"
    />
    <Button 
    onPress={() => navigation.navigate('List')}
    title="Go to List Demo"
    color="#f194ff"
    />
    <Button
    onPress={() => navigation.navigate('Image')}
    title="Go to Image Demo"
    color="#f194ff"
    />    
     <Button
    onPress={() => navigation.navigate('Counter')}
    title="Go to Counter Demo"
    color="#f194ff"
    />  
    <Button
    onPress={() => navigation.navigate('Color')}
    title="Go to Color Demo"
    color="#f194ff"
    />  
    <Button
    onPress={() => navigation.navigate('Square')}
    title="Go to Square Demo"
    color="#f194ff"
    />  
    <Button 
    onPress= { () => navigation.navigate('Text') }
    title="Go to Text Demo"
    color="#f194ff"
    />
     <Button 
    onPress= { () => navigation.navigate('Box') }
    title="Go to Layout Demo"
    color="#f194ff"
    />
  </View>
  );

};

const styles = StyleSheet.create({

  viewStyle: {
    borderWidth: 1,
    borderColor: 'grey',

  },
  text: {
    padding: 5,
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    borderWidth: 1,
    borderColor: 'black',
  },

});

export default HomeScreen;
