import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BrainButton from './components/button'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <BrainButton showOnButton="test"></BrainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
