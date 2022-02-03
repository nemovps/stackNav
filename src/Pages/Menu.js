import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'


const Menu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este es el Menu!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default Menu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  },
});
