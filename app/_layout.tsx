// app/index.tsx
import { useState } from 'react';
import { useFonts } from "expo-font";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from "react-native";

// ===============================
// KONFIGURASI DASAR
// ===============================

const NIM_ACUAN = "105841104322";
const BATAS_BAWAH = "105841104022";
const BATAS_ATAS = "105841107522";

// Daftar font yang digunakan (10 font berbeda)
const DAFTAR_FONT = [
  "Fredericka",
  "Manufacturing",
  "Monoton",
  "Playwrite",
  "SpecialElite",
  "Caveat",
  "Cinzel",
  "CrimsonPro",
  "Orbitron",
  "SplineSans"
];

// ===============================
// FUNGSI PEMBANTU
// ===============================

const ekstrakUrutan = (nim: string) => parseInt(nim.substring(7, 10));
const buatNIM = (urutan: number) => `1058411${urutan.toString().padStart(3, "0")}22`;
const dapatkanURLFoto = (nim: string) => `https://simak.unismuh.ac.id/upload/mahasiswa/${nim}_.jpg`;

// Fungsi untuk menghasilkan urutan NIM secara sirkular
const buatUrutanSirkular = (acuan: number, min: number, max: number) => {
  const hasil = [];
  const rentang = max - min + 1;
  
  // 5 NIM sebelum acuan
  for (let i = 5; i > 0; i--) {
    let urutan = acuan - i;
    if (urutan < min) urutan = max - (min - urutan - 1);
    hasil.push(buatNIM(urutan));
  }
  
  // 5 NIM setelah acuan
  for (let i = 1; i <= 5; i++) {
    let urutan = acuan + i;
    if (urutan > max) urutan = min + (urutan - max - 1);
    hasil.push(buatNIM(urutan));
  }
  
  return hasil;
};

// ===============================
// PEMBUATAN DATA
// ===============================

const urutanAcuan = ekstrakUrutan(NIM_ACUAN);
const urutanMin = ekstrakUrutan(BATAS_BAWAH);
const urutanMax = ekstrakUrutan(BATAS_ATAS);

// Generate 10 NIM (5 sebelum dan 5 sesudah acuan)
const semuaNIM = buatUrutanSirkular(urutanAcuan, urutanMin, urutanMax);

// Daftar nama contoh (10 nama)
const CONTOH_NAMA = [
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

// Data mahasiswa akhir dengan font unik untuk setiap nama
const dataMahasiswa = semuaNIM.map((nim, index) => ({
  nim,
  nama: CONTOH_NAMA[index],
  font: DAFTAR_FONT[index] // Setiap nama mendapat font berbeda
}));

// ===============================
// KOMPONEN UTAMA
// ===============================

export default function DirektoriMahasiswa() {
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

  const [gagalMemuatFoto, setGagalMemuatFoto] = useState<{[key: string]: boolean}>({});

  if (!fontsLoaded) {
    return (
      <View style={styles.kontainerLoading}>
        <ActivityIndicator size="large" color="#2c3e50" />
        <Text style={styles.teksLoading}>Memuat Font...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.kontainerUtama}>
      <View style={styles.header}>
        <Text style={styles.judul}>Direktori Mahasiswa</Text>
        <Text style={styles.subjudul}>
          Menampilkan 5 mahasiswa sebelum dan 5 setelah NIM: {NIM_ACUAN}
        </Text>
      </View>

      <View style={styles.tabel}>
        <View style={styles.headerTabel}>
          <Text style={styles.teksHeader}>No.</Text>
          <Text style={styles.teksHeader}>Foto</Text>
          <Text style={styles.teksHeader}>Nama</Text>
          <Text style={styles.teksHeader}>NIM</Text>
        </View>

        {dataMahasiswa.map((mahasiswa, index) => (
          <View key={mahasiswa.nim} style={styles.barisTabel}>
            <Text style={styles.sel}>{index + 1}</Text>
            <View style={styles.kontainerFoto}>
              <Image
                source={{ 
                  uri: gagalMemuatFoto[mahasiswa.nim] 
                    ? 'https://via.placeholder.com/60?text=No+Photo' 
                    : dapatkanURLFoto(mahasiswa.nim)
                }}
                style={styles.foto}
                onError={() => setGagalMemuatFoto({...gagalMemuatFoto, [mahasiswa.nim]: true})}
                resizeMode="cover"
              />
            </View>
            <Text style={[styles.sel, { fontFamily: mahasiswa.font }]}>
              {mahasiswa.nama}
            </Text>
            <Text style={[styles.sel, { fontFamily: mahasiswa.font }]}>
              {mahasiswa.nim}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.teksFooter}>
          * Setiap nama menggunakan font yang berbeda
        </Text>
        <Text style={styles.teksFooter}>
          Rentang NIM: {BATAS_BAWAH} sampai {BATAS_ATAS}
        </Text>
      </View>
    </ScrollView>
  );
}

// ===============================
// GAYA TAMPILAN
// ===============================

const styles = StyleSheet.create({
  kontainerUtama: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  kontainerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  teksLoading: {
    marginTop: 10,
    fontSize: 16,
    color: '#7f8c8d',
  },
  header: {
    padding: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subjudul: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  tabel: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTabel: {
    flexDirection: 'row',
    backgroundColor: '#2c3e50',
    paddingVertical: 12,
  },
  teksHeader: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  barisTabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  sel: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#34495e',
  },
  kontainerFoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    backgroundColor: '#f0f0f0',
  },
  footer: {
    padding: 15,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  teksFooter: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 2
  },
});