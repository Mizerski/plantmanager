import React from "react";
import AppLoading from "expo-app-loading";
import i18n from './src/services/i18n/i18n';
import { initReactI18next } from "react-i18next";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
initReactI18next.init(i18n);