import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export function ButtonUserIndetify() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={styles.text}>Confirmar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});
