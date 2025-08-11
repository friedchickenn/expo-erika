import { View, Text, StyleSheet, Image, Animated, Easing } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { mahasiswa } from "../../data/mahasiswa";
import { Ionicons } from "@expo/vector-icons";

export default function DetailMahasiswa() {
  const { id } = useLocalSearchParams();
  const data = mahasiswa.find(m => m.nim === id);
  const [error, setError] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, duration: 700, useNativeDriver: true, easing: Easing.out(Easing.exp)
    }).start();
  }, []);

  if (!data) {
    return (
      <View style={styles.centered}>
        <Ionicons name="alert-circle-outline" size={55} color="#f87171" />
        <Text style={{ marginTop: 12, fontSize: 16 }}>Mahasiswa tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.photoBox}>
        {!error ? (
          <Image source={{ uri: data.foto }} style={styles.photo} onError={() => setError(true)} />
        ) : (
          <Ionicons
            name={data.gender === "L" ? "person-circle-outline" : "woman-outline"}
            size={120}
            color="#d1d5db"
          />
        )}
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <Text style={styles.value}>{data.nama}</Text>
        <Text style={styles.label}>NIM</Text>
        <Text style={styles.value}>{data.nim}</Text>
        <Text style={styles.label}>Jenis Kelamin</Text>
        <Text style={styles.value}>
          {data.gender === "L" ? "Laki-laki" : "Perempuan"}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#f8fafc", paddingHorizontal: 18, paddingTop: 36 },
  photoBox: {
    width: 140, height: 140, borderRadius: 70, overflow: "hidden",
    backgroundColor: "#e0e7ef", alignItems: "center", justifyContent: "center",
    elevation: 6, shadowColor: "#60a5fa", shadowOpacity: 0.27, shadowRadius: 16, marginBottom: 24
  },
  photo: { width: 140, height: 140, borderRadius: 70 },
  infoBox: { width: "100%", backgroundColor: "#fff", borderRadius: 16, padding: 24, elevation: 2, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 6 },
  label: { fontWeight: "bold", color: "#60a5fa", fontSize: 13, marginTop: 12 },
  value: { fontSize: 16, color: "#1e293b", marginTop: 2 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f1f5f9" }
});