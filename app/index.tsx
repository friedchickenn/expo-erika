// app/index.tsx
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// ===============================
// KONFIGURASI DASAR
// ===============================

// NIM acuan dan batas atas/bawah
const nimAcuan = "105841104322";
const batasAtas = "105841104022";
const batasBawah = "105841107522";

// Daftar 11 font (5 statis, 5 variabel + 1 ekstra acuan)
const fontList = [
  "Fredericka",
  "Manufacturing",
  "Monoton",
  "Playwrite",
  "SpecialElite",
  "", // NIM Acuan pakai ini (posisi tengah)
  "Cinzel",
  "CrimsonPro",
  "Orbitron",
  "SplineSans",
  "Caveat", // untuk looping terakhir
];

// ===============================
// FUNGSI PEMBANTU
// ===============================

// Konversi NIM ke nomor urutan terakhir 3 digit
const nimToNumber = (nim: string) => parseInt(nim.slice(7, 10));

// Bentuk ulang NIM dari nomor
const numberToNIM = (num: number) =>
  `1058411${num.toString().padStart(3, "0")}22`;

// Fungsi mengambil foto (gunakan dummy apabila tidak ada)
const getPhotoUrl = (nim: string) =>
  `https://simak.unismuh.ac.id/upload/mahasiswa/${nim}_.jpg`;

// ===============================
// GENERASI NIM FINAL
// ===============================

const urutanAcuan = nimToNumber(nimAcuan);
const urutanAtas = nimToNumber(batasAtas);
const urutanBawah = nimToNumber(batasBawah);

// Ambil 5 sebelum (mundur dan wrap jika perlu)
const before = Array.from({ length: 5 }, (_, i) => {
  let urutan = urutanAcuan - (i + 1);
  if (urutan < urutanAtas) {
    urutan = urutanBawah - (urutanAtas - urutan - 1);
  }
  return numberToNIM(urutan);
}).reverse();

// Ambil 5 sesudah (naik dan wrap jika perlu)
const after = Array.from({ length: 5 }, (_, i) => {
  let urutan = urutanAcuan + (i + 1);
  if (urutan > urutanBawah) {
    urutan = urutanAtas + (urutan - urutanBawah - 1);
  }
  return numberToNIM(urutan);
});

// Gabung total data: 5 sebelum + 1 acuan + 5 sesudah = 11
const finalNIMList = [...before, nimAcuan, ...after];

// Dummy nama disesuaikan
const namaDummy = [
  "Muh. Wahyu Yudistira",
  "Ahmad Fauzan",
  "Rindiani Saputri",
  "Selfira Ayu",
  "Alif Ryanto",
  "Erika Yanti", // Acuan
  "Zulkifli",
  "Fifiana",
  "Muh. Akbar",
  "Agustiana",
  "Dia Rahmatillah",

];

// Gabungkan menjadi objek data
const finalData = finalNIMList.map((nim, index) => ({
  nim,
  nama: namaDummy[index],
  font: fontList[index],
}));

// ===============================
// KOMPONEN UTAMA
// ===============================

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <Text style={styles.referenceText}>
        Tabel berikut menampilkan 5 mahasiswa sebelum, 1 mahasiswa acuan, dan 5 mahasiswa setelah
        berdasarkan NIM <Text style={{ fontWeight: "bold" }}>{nimAcuan}</Text> atas nama{" "}
        <Text style={{ fontWeight: "bold" }}>Erika Yanti</Text>. Total 11 mahasiswa ditampilkan
        dengan font berbeda-beda.
      </Text>

      <Text style={styles.sectionTitle}>Daftar Mahasiswa Berdasarkan Urutan Stambuk</Text>

      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>No</Text>
          <Text style={styles.headerCell}>Foto</Text>
          <Text style={styles.headerCell}>Nama</Text>
          <Text style={styles.headerCell}>NIM</Text>
        </View>

        {finalData.map((item, index) => {
          const isAcuan = item.nim === nimAcuan;
          return (
            <View
              key={index}
              style={[
                styles.row,
                isAcuan && styles.acuanRow, // Penanda baris NIM acuan
              ]}
            >
              <Text style={styles.cell}>{index + 1}</Text>
              <Image
                source={{
                  uri: getPhotoUrl(item.nim),
                }}
                style={styles.photo}
              />
              <Text style={[styles.cell, { fontFamily: item.font }]}>
                {item.nama}
              </Text>
              <Text style={[styles.cell, { fontFamily: item.font }]}>
                {item.nim}
              </Text>
            </View>
          );
        })}
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
  acuanRow: {
    backgroundColor: "#fce4ec", // Warna pink muda untuk baris NIM acuan
    borderWidth: 2,
    borderColor: "#ec407a",
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
