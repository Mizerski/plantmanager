import React from "react";

import { Welcome } from "../pages/welcome_page";
import { UserIndetify } from "../pages/user_indetify";
import { Confirmation } from "../pages/confirmation_page";

import colors from "../../styles/colors";
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
    <StackRoutes.Screen name="Welcome" component={Welcome} />

    <StackRoutes.Screen name= 'UserIndetify' component={UserIndetify} />

    <StackRoutes.Screen name="Confirmation" component={Confirmation} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
