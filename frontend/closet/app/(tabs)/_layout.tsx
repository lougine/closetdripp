import { IconSymbol } from '@/components/ui/icon-symbol';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function CustomTabBarButton({ children, onPress }: any) {
  return (
    <TouchableOpacity
      style={styles.customButtonContainer}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.customButton}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

export default function TabLayout() {
  const router = useRouter();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            backgroundColor: "#1E1E1E",
            borderRadius: 25,
            height: 75,
          },
        }}
      >
        <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: ({ focused }) => (
        <Image source={require("../../assets/images/Community.png")}
        style={{
          width: 50,
          height: 50,
          tintColor: focused ? "#F0507B" : "#ffffff",
          position: "relative", 
          top:20,
        }}
        resizeMode="contain"
      />
    ),
  }}
/>
        <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ focused }) => (
        <Image source={require("../../assets/images/calender.png")}
        style={{
          width: 37,
          height: 37,
          tintColor: focused ? "#F0507B" : "#ffffff",
          position: "relative", 
          top:20,
          right: 20,
        }}
        resizeMode="contain"
      />
    ),
  }}
/>
        <Tabs.Screen
        name="styling"
        options={{
          tabBarIcon: ({ focused }) => (
        <Image source={require("../../assets/images/styling.png")}
        style={{
          width: 60,
          height: 60,
          tintColor: focused ? "#F0507B" : "#ffffff",
          position: "relative", 
          top:20,
          left: 20,
        }}
        resizeMode="contain"
      />
    ),
  }}
/>
       <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
        <Image source={require("../../assets/images/waredrobe.png")}
        style={{
          width: 50,
          height: 50,
          tintColor: focused ? "#F0507B" : "#ffffff",
          position: "relative", 
          top:20,
        }}
        resizeMode="contain"
      />
    ),
  }}
/>
      </Tabs>

      {/* Floating Modal Button */}
      <View style={styles.floatingContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => router.push("/modal")}
        >
          <IconSymbol size={30} name="plus" color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  floatingContainer: {
    position: "absolute",
    bottom: 35,
    alignSelf: "center",
  },
  floatingButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#FF4F81",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    position: "relative",
    bottom:20,
  },
  customButton: {
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    padding: 10,
  },
  customButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});