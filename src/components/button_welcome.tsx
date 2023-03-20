import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { Feather } from "@expo/vector-icons";

export function ButtonWelcome() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>
        <Feather name="chevron-right" style ={styles.buttonIcon} /> 
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
    width: 56,
  },
  //
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
  //
  buttonIcon:{
    fontSize:32,
  }

});
