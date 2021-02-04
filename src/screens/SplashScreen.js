import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function SplashScreen({ navigation }) {
  
    return (
          <View style={styles.container}>
          <Text>SplashScreen</Text>
          </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bkgdColor
  },
})