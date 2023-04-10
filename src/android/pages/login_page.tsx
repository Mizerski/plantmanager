import React from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultInput } from "../components/default_input";
import { useNavigation } from "@react-navigation/native";



import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import { ButtonUserIndetify } from '../components/button_userIndetify';

export function ALogin() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  function handleStart() {
    navigation.navigate("Welcome");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{"Plantmanager"}</Text>
      <View style={styles.form} >
        <DefaultInput text={t("example@.com")}/>
        <DefaultInput text={t("Senha")} secureTextEntry={true} />
      </View>
      <View style={styles.footer}>
        <ButtonUserIndetify title={t("Login")} onPress={handleStart} />
      </View>
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
    marginVertical: 60,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
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
  form: {
    flex: 1,
    justifyContent: "center",
    width: "60%",
    alignItems: "center",
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
});
