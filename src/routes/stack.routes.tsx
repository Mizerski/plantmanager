import React from "react";
//Ios
import { Welcome } from "../pages/welcome_page";
import { UserIndetify } from "../pages/user_indetify";
import { Confirmation } from "../pages/confirmation_page";
import { PlantsSelect } from "../pages/plants_select";

//Android
import { AWelcome } from "../android/pages/welcome_page";
import { AUserIndetify } from "../android/pages/user_indetify";
import { AConfirmation } from "../android/pages/confirmation_page";
import { APlantsSelect } from "../android/pages/plants_select";

import colors from "../../styles/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

const StackRoutes = createStackNavigator();
const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <StackRoutes.Screen name="Welcome" component={Platform.OS =="ios"? Welcome : AWelcome} />

    <StackRoutes.Screen name="UserIndetify" component={Platform.OS =="ios"?UserIndetify:AUserIndetify} />

    <StackRoutes.Screen name="Confirmation" component={Platform.OS =="ios"?Confirmation:AConfirmation} />

    <StackRoutes.Screen name="PlantsSelect" component={Platform.OS =="ios"?PlantsSelect:APlantsSelect} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
