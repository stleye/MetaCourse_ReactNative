import * as React from 'react';
import { ScrollView, Text, StyleSheet, Image, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.logo}
          source={require('./img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});
