import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { ButtonUserIndetify } from "../components/button";

export function UserIndetify() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handlerInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handlerInputFocus() {
    setIsFilled(true);
  }
  function handleInputChanges(value: string) {
    setIsFilled(!!value);
    setName(value);
  }
  const navigation = useNavigation();

  function handleStart() {
    if (!name) return Alert.alert("Por favor me diga seu nome 👉👈");

    AsyncStorage.setItem('@plantmanager:user', name);

    navigation.navigate("Confirmation");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emote}>{isFilled ? "😄" : "😀"}</Text>
                <Text style={styles.title}>
                  Como podemos {"\n"} chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite seu nome"
                onBlur={handlerInputBlur}
                onFocus={handlerInputFocus}
                onChangeText={handleInputChanges}
              />
              <View style={styles.footer}>
                <ButtonUserIndetify title="Confirmar" onPress={handleStart} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: { flex: 1, width: "100%" },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  emote: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
  },
});
