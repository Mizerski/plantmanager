import React, { useState } from 'react';
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

export function ASign() {
  const [inputValues, setInputValues] = useState({ email: '', password: '' });

  const handleInputChange = (inputName: string, inputValue: string) => {
    setInputValues({ ...inputValues, [inputName]: inputValue });
  }
  const { t } = useTranslation();
  const navigation = useNavigation();
  function handleStart() {
    const regesEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (regesEmail.test(inputValues.email) && inputValues.password.length > 7) {
      navigation.navigate("Welcome");
      console.log("EMAIL VALIDO");
      console.log("SENHA VALIDA");
    } else if (!regesEmail.test(inputValues.email)) {
      console.log("EMAIL INVALIDO");
    } else console.log("SENHA INVALIDA");

  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{"Plantmanager"}</Text>
      <View style={styles.form} >
        <DefaultInput text={t("example@.com")} value={inputValues.email} onChangeText={(text) => handleInputChange('email', text)} />
        <DefaultInput text={t("Senha")} secureTextEntry={true} value={inputValues.password} onChangeText={(text) => handleInputChange('password', text)} />
      </View>
      <View style={styles.button}>
        <ButtonUserIndetify title={t("Cadastre-se")} onPress={handleStart} />
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
  sign: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: colors.green,
    marginTop: 36,
    lineHeight: 25,
    fontFamily: fonts.text,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: 263,
    alignItems: "center",
  },
  button: {
    width: 231,
    marginTop: 50

  },
});
