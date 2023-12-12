import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import BottomBar from './src/BottomBar';
import HomeScreen from './src/Screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5E1",
    alignItems: "center",
    justifyContent: "center"
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
