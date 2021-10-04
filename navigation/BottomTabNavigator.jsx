import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import * as React from "react";
import Colors, { COLORS } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Notification from "../screens/Notification/Notification";
import Communication from "../screens/Communication/Communication";
import ReportBug from "../screens/ReportBug/ReportBug";
import GiveFeedback from "../screens/GiveFeedback/GiveFeedback";
import EditProfile from "../screens/EditProfile/EditProfile";
import { Text, View } from "../components/Themed/Themed";
import Packages from "../screens/Packages/Packages";
import Investment from "../screens/Investment/Investment";
import About from "../screens/About/About";
import PackageView from "../screens/PackageView/PackageView";
import AddPackage from "../screens/AddPackage/AddPackage";
import UpdatePaymentDate from "../screens/UpdatePaymentDate/UpdatePaymentDate";
import ChatRoom from "../screens/ChatRoom/ChatRoom";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  function getTabBarVisible(route) {
    const routeName = getFocusedRouteNameFromRoute(route);
    switch (routeName) {
      case "EditProfile":
        return false;

      case "Profile":
        return false;

      case "Investments":
        return false;

      case "Notification":
        return false;

      case "Communication":
        return false;

      case "About":
        return false;

      default:
        return true;
    }
  }
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          elevation: 10, // for Android
          borderTopWidth: 0,
          position: "absolute",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          // marginTop: -50,
          marginBottom: 10,
          marginHorizontal: 10,
          borderTopColor: "transparent",
          shadowColor: "transparent",
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: "#b3b4b6",
      }}
      initialRouteName="HomeScreen"
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreenNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarLabel: ({ focused }) =>
            focused && (
              <Text
                position="right"
                style={{
                  color: COLORS.tint,
                  fontSize: 9,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  marginTop: -10,
                  marginBottom: 5,
                  textTransform: "uppercase",
                }}
              >
                Home
              </Text>
            ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="users" size={22} color={color} />
            ) : (
              <FontAwesome name="users" size={20} color={color} />
            ),
        })}
      />
      <BottomTab.Screen
        name="PackagesScreen"
        component={PackageScreenNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarLabel: ({ focused }) =>
            focused && (
              <Text
                position="right"
                style={{
                  color: COLORS.tint,
                  fontSize: 9,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  marginTop: -10,
                  marginBottom: 5,
                  textTransform: "uppercase",
                }}
              >
                Packages
              </Text>
            ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="explore" size={33} color={color} />
            ) : (
              <AntDesign name="find" size={24} color={color} />
            ),
        })}
      />
      <BottomTab.Screen
        name="InvestmentScreen"
        component={InvestmentScreenNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarLabel: ({ focused }) =>
            focused && (
              <Text
                position="right"
                style={{
                  color: COLORS.tint,
                  fontSize: 9,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  marginTop: -10,
                  marginBottom: 5,
                  textTransform: "uppercase",
                }}
              >
                Messaging
              </Text>
            ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="message-reply"
                size={22}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="message-reply"
                size={20}
                color={color}
              />
            ),
        })}
      />
    </BottomTab.Navigator>
  );
}

const ScreenStack = createStackNavigator();

function HomeScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Investments"
        component={Investment}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Communication"
        component={Communication}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="ReportBug"
        component={ReportBug}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="GiveFeedback"
        component={GiveFeedback}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Packages"
        component={Packages}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="UpdatePaymentDate"
        component={UpdatePaymentDate}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="PackageView"
        component={PackageView}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerShown: false,
        }}
      />
    </ScreenStack.Navigator>
  );
}

function PackageScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Packages"
        component={Packages}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="AddPackage"
        component={AddPackage}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="PackageView"
        component={PackageView}
        options={{
          headerShown: false,
        }}
      />
    </ScreenStack.Navigator>
  );
}
function InvestmentScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Investments"
        component={Investment}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Packages"
        component={Packages}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="PackageView"
        component={PackageView}
        options={{
          headerShown: false,
        }}
      />
    </ScreenStack.Navigator>
  );
}
