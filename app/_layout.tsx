// File: app/_layout.tsx
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function TabsLayout() {
  const [fontsLoaded] = useFonts({
    'Fredericka': require('../assets/fonts/static/FrederickatheGreat-Regular.ttf'),
    'Monoton': require('../assets/fonts/static/Monoton-Regular.ttf'),
    'SpecialElite': require('../assets/fonts/static/SpecialElite-Regular.ttf'),
    'Orbitron': require('../assets/fonts/variable/Orbitron-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: "#E63946",
      tabBarInactiveTintColor: "#457B9D",
      tabBarStyle: {
        backgroundColor: "#1D3557",
        borderTopWidth: 0,
      },
      headerStyle: {
        backgroundColor: "#1D3557",
      },
      headerTitleStyle: {
        color: "#F1FAEE",
        fontFamily: 'Orbitron',
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}