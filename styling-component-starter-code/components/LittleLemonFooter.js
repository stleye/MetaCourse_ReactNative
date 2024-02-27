import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={footerStyles.container}>
      <Text
        style={footerStyles.footerText}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972'
  },
  footerText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  }
})