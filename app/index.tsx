// app/index.tsx
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// Data Manual NIM atas (menggunakan font statis)
const dataStatic = [
  { nim: "105841104222", nama: "Alif Ryanto Rahman", font: "Fredericka" },
  { nim: "105841104122", nama: "Selfira Ayu Safitri", font: "Manufacturing" },
  { nim: "105841104022", nama: "Rindiani Saputri", font: "Monoton" },
  { nim: "105841107522", nama: "Ahmad Fauzan", font: "Playwrite" },
  { nim: "105841107322", nama: "Alpin N. Nasir", font: "SpecialElite" },
];

// Data Manual NIM bawah (menggunakan variable font)
const dataVariable = [
  { nim: "105841104422", nama: "Zulkifli", font: "Caveat" },
  { nim: "105841104522", nama: "Fifiana", font: "Cinzel" },
  { nim: "105841104622", nama: "Muh. Akbar Haeruddin", font: "CrimsonPro" },
  { nim: "105841104722", nama: "Agustiana", font: "Orbitron" },
  { nim: "105841104822", nama: "Dia Rahmatillah", font: "SplineSans" },
];

// Fungsi ambil foto dari NIM
const getPhotoUrl = (nim: string) =>
  `https://simak.unismuh.ac.id/upload/mahasiswa/${nim}_.jpg`;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
      {/* Keterangan acuan */}
      <Text style={styles.referenceText}>
        Data di bawah ini menggunakan acuan NIM{" "}
        <Text style={{ fontWeight: "bold" }}>105841104322</Text> atas nama{" "}
        <Text style={{ fontWeight: "bold" }}>Erika Yanti</Text>. Lima data di atas dan lima data
        di bawah berdasarkan urutan stambuk ditampilkan di tabel berikut:
      </Text>

      {/* TABEL STATIS */}
      <Text style={styles.sectionTitle}>Daftar Mahasiswa Sebelum Urutan Stambuk</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>No</Text>
          <Text style={styles.headerCell}>Foto</Text>
          <Text style={styles.headerCell}>Nama</Text>
          <Text style={styles.headerCell}>NIM</Text>
        </View>
        {dataStatic.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Image source={{ uri: getPhotoUrl(item.nim) }} style={styles.photo} />
            <Text style={[styles.cell, { fontFamily: item.font }]}>{item.nama}</Text>
            <Text style={[styles.cell, { fontFamily: item.font }]}>{item.nim}</Text>
          </View>
        ))}
      </View>

      {/* TABEL VARIABEL */}
      <Text style={styles.sectionTitle}>Daftar Mahasiswa Setelah Urutan Stambuk</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>No</Text>
          <Text style={styles.headerCell}>Foto</Text>
          <Text style={styles.headerCell}>Nama</Text>
          <Text style={styles.headerCell}>NIM</Text>
        </View>
        {dataVariable.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Image source={{ uri: getPhotoUrl(item.nim) }} style={styles.photo} />
            <Text style={[styles.cell, { fontFamily: item.font }]}>{item.nama}</Text>
            <Text style={[styles.cell, { fontFamily: item.font }]}>{item.nim}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  referenceText: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  table: {
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 30,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    paddingVertical: 12,
    alignItems: "center",
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
  },
  photo: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 8,
    marginHorizontal: 5,
  },
});
