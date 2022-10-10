import * as React from 'react';
import {Text , View , StyleSheet , SafeAreaView , Platform , StatusBar} from 'react-native';

export default function App() {
     return(
      <SafeAreaView style={styles.container}>
        <Text>Hello World!</Text>
      </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container :{
      flex : 1,
      paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
     },
});