import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../../styles/colors";
import userImg from "../assets/pixelArt.png";
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "../../styles/fonts";

export function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Wesley</Text>
        </View>

        <Image source={userImg} style={styles.image} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
 
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  username: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});
