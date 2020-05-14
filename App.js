import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Heyo this thing is onnnn</Text>
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />
      <Text style={styles.instructions}>
        I think maybe I should start with a simple counter app, but perhaps I should start with the actual tutorial

        This marks the day when VSCode decided to stop opening stuff. Think of it as a placeholder of sorts

        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afbcf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#1a0136',
    fontSize: 18,
    marginHorizontal: 15,
  }, 
});
