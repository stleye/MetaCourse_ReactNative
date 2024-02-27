import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View
        style={ containerStyles.container }>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={ containerStyles.footerContainer }>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333'
  }
})