import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Wallet from "./screens/Wallet";
import Pay from "./screens/Pay";
import PayButton from "./components/PayButton";

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },
  Pay: {
    lib: AntDesign,
    name: "home",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            if (route.name === "Pay")
              return (
                <PayButton
                  focused={focused}
                  onPress={() => navigation.navigate("Pay")}
                />
              );

            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: "#131418",
            borderTopColor: "rgba(255, 255, 255, 0.2)",
          },
          activeTintColor: "#fff",
          inactiveTintColor: "#92929c",
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            title: "Início",
          }}
        />
        <Screen
          name="Wallet"
          component={Wallet}
          options={{
            title: "Carteira",
          }}
        />
        <Screen
          name="Pay"
          component={Pay}
          options={{
            title: "",
          }}
        />
        <Screen
          name="Notifications"
          component={Pay}
          options={{
            title: "Notificações",
          }}
        />
        <Screen
          name="Settings"
          component={Pay}
          options={{
            title: "Ajustes",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
