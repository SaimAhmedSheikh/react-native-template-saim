import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './navigators/AppNavigator';


const App = () => {
   
  enableScreens();

  return(
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
