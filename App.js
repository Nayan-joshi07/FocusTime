import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/Color';
import { Focus } from './src/feature/Focus';
import { InputText } from './src/feature/PizzaTranslator';

export default function App() {
     const [currentSubject, setCurrentSubject] = useState(null);
     return (
          <SafeAreaView style={styles.container}>
               {!currentSubject ? (<Focus addSubject={setCurrentSubject} />) : (<View><Text style={{ color: colors.white }}>I am going to Render the Timer for {currentSubject}</Text></View>)}
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          backgroundColor: colors.blue
     }
});