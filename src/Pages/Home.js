import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vamos Nito HOME!</Text>
      <StatusBar style="auto" />
      <Button title='Ir al Menú' onPress={()=>
        navigation.navigate('Menu')}>

      </Button>
    </View>
  );
}
export default Home

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
