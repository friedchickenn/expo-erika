import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function MahasiswaCard({ data, onPress }: any) {
  const [error, setError] = useState(false);
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.avatarArea}>
        {!error ? (
          <Image
            source={{ uri: data.foto }}
            style={styles.avatar}
            onError={() => setError(true)}
          />
        ) : (
          <Ionicons
            name={data.gender === "L" ? "person-circle-outline" : "woman-outline"}
            size={55}
            color="#a1a1aa"
            style={styles.avatar}
          />
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.nama}>{data.nama}</Text>
        <Text style={styles.nim}>{data.nim}</Text>
      </View>
      <Ionicons
        name="chevron-forward"
        size={22}
        color="#60a5fa"
        style={{ alignSelf: "center" }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 6,
    padding: 14,
    elevation: 3,
    shadowColor: "#000", shadowOpacity: 0.09, shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  avatarArea: { marginRight: 14 },
  avatar: { width: 55, height: 55, borderRadius: 999, backgroundColor: "#e0e7ef" },
  info: { flex: 1 },
  nama: { fontSize: 16, fontWeight: "600" },
  nim: { fontSize: 13, color: "#64748b", marginTop: 2 }
});