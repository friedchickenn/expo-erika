import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { useState } from "react";
import MahasiswaCard from "../components/MahasiswaCard";
import { mahasiswa } from "../data/mahasiswa";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function DaftarMahasiswa() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const filtered = mahasiswa.filter(m =>
    m.nama.toLowerCase().includes(search.toLowerCase()) ||
    m.nim.includes(search)
  );

  return (
    <LinearGradient colors={["#e0e7ef", "#bae6fd"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>👩‍🎓 Daftar Mahasiswa Kelas B</Text>
        <TextInput
          placeholder="Cari nama/NIM..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholderTextColor="#a1a1aa"
        />
        <FlatList
          data={filtered}
          keyExtractor={item => item.nim}
          renderItem={({ item }) =>
            <MahasiswaCard
              data={item}
              onPress={() => router.push({ pathname: "/(tabs)/user/[id]", params: { id: item.nim } })}
            />
          }
          ListEmptyComponent={
            <Text style={{ textAlign: "center", color: "#888", marginTop: 80 }}>
              Tidak ada mahasiswa ditemukan.
            </Text>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, paddingTop: 36 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, color: "#2563eb", textAlign: "center" },
  input: {
    borderRadius: 12,
    backgroundColor: "#f1f5f9",
    padding: 10, fontSize: 15,
    marginBottom: 18, borderWidth: 1, borderColor: "#e0e7ef"
  }
});