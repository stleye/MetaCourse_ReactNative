import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      {/* </View><LittleLemonFooter={styles.container} ></LittleLemonFooter> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns children at the bottom
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100, // You can adjust the height as per your requirement
    backgroundColor: 'blue', // Example background color
    justifyContent: 'center',
    alignItems: 'center',
  },
});