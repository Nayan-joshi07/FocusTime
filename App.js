import * as React from 'react';
import {Text , View , StyleSheet , SafeAreaView , Platform , StatusBar} from 'react-native';
import { colors } from './src/utils/Color';
import { Focus } from './src/feature/Focus';
import {InputText} from './src/feature/PizzaTranslator';

export default function App() {
     return(
      <SafeAreaView style={styles.container}>
        <Focus/>
      </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container :{
      flex : 1,
      paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
      backgroundColor:  colors.blue
     }
});