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
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../styles/colors";
import { ButtonUserIndetify } from "../components/button_userIndetify";
import fonts from "../../../styles/fonts";
import { TitleComponent } from "../components/title_component";

export function AUserIndetify() {
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
    navigation.navigate("Confirmation");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emote}>{isFilled ? "😄" : "😀"}</Text>
                <TitleComponent text={`Como podemos \nchamar você?`} style={{marginTop: 15}}/>
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
                <TouchableOpacity onPress={handleStart} >
                  <ButtonUserIndetify/>
                </TouchableOpacity>
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
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
  },
});
