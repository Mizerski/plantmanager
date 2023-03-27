import React from "react";

import {
  SafeAreaView,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

import { ButtonWelcome } from "../components/button_welcome";
import colors from "../../styles/colors";
import wateringImg from "../assets/watering.png";
import fonts from "../../styles/fonts";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewWellcome}>
        <Text style={styles.title}>
          Gerencie {"\n"}suas plantas de {"\n"} forma fácil
        </Text>

        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <ButtonWelcome />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  viewWellcome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  //
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34,
    fontFamily: fonts.heading,
  },
  //
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  //
  image: { height: Dimensions.get("window").width * 0.7 },
});
