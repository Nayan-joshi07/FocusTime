import React from "react";
import { View , StyleSheet} from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/Color";

export const Focus = () => {
    return(
    <View style = {styles.container}>
      <View style = {styles.inputContainer}>
      <TextInput label = "What you would like to focus on?"/>
      </View>
    </View>
);
}

const styles = StyleSheet.create({
   container :{
       flex : 1
   },
   inputContainer:{
        flex:1,
        padding:25,
        justifyContent:'top',
   },
   text : {
        color : colors.white
   }
});