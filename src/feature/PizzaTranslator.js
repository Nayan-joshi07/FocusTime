import React, { useState } from "react";
import { Text , TextInput , View ,StyleSheet} from "react-native";

const PizzaTranslator = () => {
     const [text , setText] = useState('');
    return(
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder = "Type Here to Translate!" defaultValue={text}></TextInput>
            <Text style={styles.text}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        
    },
     textInput :{
        height : 40,

     },
      text : {}
});

export default PizzaTranslator;