import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  SafeAreaView,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";

import { ButtonWelcome } from "../components/button_welcome";
import colors from "../../../styles/colors";
import wateringImg from "../assets/watering.png";
import fonts from "../../../styles/fonts";
import { changeLanguage } from 'i18next';

export function AWelcome() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewWellcome}>
        <Text style={styles.title}>{t("Gerencie suas plantas de forma fácil")}</Text>

        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          {t('Não esqueça mais de regar suas plantas. Nós cuidamos de lemrar você sempre que precisar.')}
        </Text>

        <ButtonWelcome />
      </View>
    </SafeAreaView>
  );
}

// ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWellcome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34,
    fontFamily: fonts.heading,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 16,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: { height: Dimensions.get("window").width * 0.7 },
});
