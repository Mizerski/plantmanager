import React from "react";
import { UserIndetify } from "./src/pages/user_indetify";
import AppLoading from "expo-app-loading";
import { Welcome } from "./src/pages/welcome_page";
import { Confirmation} from './src/pages/confirmation_page'
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fontsLoaded) return <AppLoading />;

  return (<UserIndetify/>)
  // return (<Welcome/>)

}
