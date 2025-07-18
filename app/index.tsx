// app/index.tsx
import { Image, ScrollView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

// ===============================
// KONFIGURASI DASAR
// ===============================

const nimAcuan = "105841104322";
const batasAtas = "105841104022";
const batasBawah = "105841107522";

const fontList = [
  "Fredericka",     // statis
  "Manufacturing",  // statis
  "Monoton",        // statis
  "Playwrite",      // statis
  "SpecialElite",   // statis
  "Caveat",          // variabel
  "Cinzel",          // variabel
  "CrimsonPro",      // variabel
  "Orbitron",        // variabel
  "SplineSans"       // variabel
];

// ===============================
// FUNGSI PEMBANTU
// ===============================

const nimToNumber = (nim: string) => parseInt(nim.slice(7, 10));
const numberToNIM = (num: number) => `1058411${num.toString().padStart(3, "0")}22`;
const getPhotoUrl = (nim: string) => `https://simak.unismuh.ac.id/upload/mahasiswa/${nim}_.jpg`;

// ===============================
// GENERASI NIM FINAL TANPA ACUAN
// ===============================

const urutanAcuan = nimToNumber(nimAcuan);
const urutanAtas = nimToNumber(batasAtas);
const urutanBawah = nimToNumber(batasBawah);

const before = Array.from({ length: 5 }, (_, i) => {
  let urutan = urutanAcuan - (i + 1);
  if (urutan < urutanAtas) {
    urutan = urutanBawah - (urutanAtas - urutan - 1);
  }
  return numberToNIM(urutan);
}).reverse();

const after = Array.from({ length: 5 }, (_, i) => {
  let urutan = urutanAcuan + (i + 1);
  if (urutan > urutanBawah) {
    urutan = urutanAtas + (urutan - urutanBawah - 1);
  }
  return numberToNIM(urutan);
});

const finalNIMList = [...before, ...after];

const namaDummy = [
  "Muh. Wahyu Yudistira",
  "Ahmad Fauzan",
  "Rindiani Saputri",
  "Selfira Ayu",
  "Alif Ryanto",
  "Zulkifli",
  "Fifiana",
  "Muh. Akbar",
  "Agustiana",
  "Dia Rahmatillah"
];

const finalData = finalNIMList.map((nim, index) => ({
  nim,
  nama: namaDummy[index],
  font: fontList[index % fontList.length],
}));

// ===============================
// KOMPONEN UTAMA
// ===============================

export default function Index() {
  const [fontsLoaded] = useFonts({
    Fredericka: require("../assets/fonts/static/FrederickatheGreat-Regular.ttf"),
    Manufacturing: require("../assets/fonts/static/ManufacturingConsent-Regular.ttf"),
    Monoton: require("../assets/fonts/static/Monoton-Regular.ttf"),
    Playwrite: require("../assets/fonts/static/PlaywriteVNGuides-Regular.ttf"),
    SpecialElite: require("../assets/fonts/static/SpecialElite-Regular.ttf"),
    Caveat: require("../assets/fonts/variable/Caveat-VariableFont_wght.ttf"),
    Cinzel: require("../assets/fonts/variable/Cinzel-VariableFont_wght.ttf"),
    CrimsonPro: require("../assets/fonts/variable/CrimsonPro-VariableFont_wght.ttf"),
    Orbitron: require("../assets/fonts/variable/Orbitron-VariableFont_wght.ttf"),
    SplineSans: require("../assets/fonts/variable/SplineSansMono-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <Text style={styles.referenceText}>
        Tabel berikut menampilkan 5 mahasiswa sebelum dan 5 mahasiswa setelah NIM acuan {nimAcuan}. Total 10 mahasiswa ditampilkan menggunakan 10 font berbeda.
      </Text>

      <Text style={styles.sectionTitle}>Daftar Mahasiswa</Text>

      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>No</Text>
          <Text style={styles.headerCell}>Foto</Text>
          <Text style={styles.headerCell}>Nama</Text>
          <Text style={styles.headerCell}>NIM</Text>
        </View>

        {finalData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Image
              source={{ uri: getPhotoUrl(item.nim) }}
              style={styles.photo}
            />
            <Text style={[styles.cell, { fontFamily: item.font }]}>{item.nama}</Text>
            <Text style={[styles.cell, { fontFamily: item.font }]}>{item.nim}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// ===============================
// GAYA
// ===============================

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
    fontSize: 22,
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
    marginBottom: 30,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#bbb",
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
    color: "#333",
  },
  photo: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 8,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});