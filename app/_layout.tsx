// app/_layout.tsx
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Font static
    "Fredericka": require("../assets/fonts/static/FrederickatheGreat-Regular.ttf"),
    "Monoton": require("../assets/fonts/static/Monoton-Regular.ttf"),
    "SpecialElite": require("../assets/fonts/static/SpecialElite-Regular.ttf"),
    "Manufacturing": require("../assets/fonts/static/ManufacturingConsent-Regular.ttf"),
    "Playwrite": require("../assets/fonts/static/PlaywriteVNGuides-Regular.ttf"),

    // Font variable
    "Caveat": require("../assets/fonts/variable/Caveat-VariableFont_wght.ttf"),
    "Cinzel": require("../assets/fonts/variable/Cinzel-VariableFont_wght.ttf"),
    "CrimsonPro": require("../assets/fonts/variable/CrimsonPro-VariableFont_wght.ttf"),
    "Orbitron": require("../assets/fonts/variable/Orbitron-VariableFont_wght.ttf"),
    "SplineSans": require("../assets/fonts/variable/SplineSansMono-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && !error) return null;

  return <Stack />;
}
