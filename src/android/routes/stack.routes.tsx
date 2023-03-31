import React from "react";

import { AWelcome } from "../pages/welcome_page";
import { AUserIndetify } from "../pages/user_indetify";
import { AConfirmation } from "../pages/confirmation_page";

import colors from "../../../styles/colors";
import { createStackNavigator } from "@react-navigation/stack";

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
    <StackRoutes.Screen name="AWelcome" component={AWelcome} />

    <StackRoutes.Screen name= "UserIndetify" component={AUserIndetify} />

    <StackRoutes.Screen name="Confirmation" component={AConfirmation} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
