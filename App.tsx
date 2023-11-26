import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, } from 'react-native';
import { getTextColor, getBackgroundColor, checkMode } from './helpers';

function App(): JSX.Element {
  const isDarkMode = checkMode() === "dark"

  const [has, setHas] = useState(true)

  useEffect(() => {
    console.log("is dark mode: ", isDarkMode, has)
  }, [])

  return (
    <SafeAreaView style={getBackgroundColor()}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={getBackgroundColor().backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={getBackgroundColor()}>
        <Text style={getTextColor()}>jhjkhjkhj</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
