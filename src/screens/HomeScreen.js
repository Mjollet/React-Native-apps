import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
  <View>

    <Text style={styles.text}> Hi there ! </Text>
    <Button 
    onPress={() => navigation.navigate('Components')}
    title="Go to Component Demo"
    />
    <Button 
    onPress={() => navigation.navigate('List')}
    title="Go to List Demo"
    />
    <Button
    onPress={() => navigation.navigate('Image')}
    title="Go to Image Demo"
    />    
     <Button
    onPress={() => navigation.navigate('Counter')}
    title="Go to Counter Demo"
    />  
    <Button
    onPress={() => navigation.navigate('Color')}
    title="Go to Color Demo"
    />  
    
  </View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
