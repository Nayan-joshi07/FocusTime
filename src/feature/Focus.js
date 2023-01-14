import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/Color";
import { RoundedButton } from "../component/RoundedButton";
import {spacing} from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={(val) => setSubject(val)} label="What you would like to focus on?" />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  text: {
    color: colors.white
  }
});