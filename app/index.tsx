// app/index.tsx
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const icons = [
    { name: "angry", label: "Rage Demon" },
    { name: "grin-stars", label: "Starry Smile" },
    { name: "grin-tongue-squint", label: "Cheeky Grin" },
    { name: "flushed", label: "Flustered Face" },
    { name: "kiss-beam", label: "Beaming Kiss" },
    { name: "dizzy", label: "Dizzy Spell" },
    { name: "kiss", label: "Sweet Kiss" },
    { name: "grin-wink", label: "Winking Charm" },
    { name: "grin-alt", label: "Classic Smirk" },
    { name: "frown-open", label: "Open Disdain" }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>10 Expressive Icons</Text>
      
      <View style={styles.grid}>
        {icons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            <FontAwesome6 name={icon.name} size={40} color="#4a6fa5" />
            <Text style={styles.iconLabel}>{icon.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  iconContainer: {
    width: "45%",
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#4a6fa5",
    textAlign: "center",
  },
});