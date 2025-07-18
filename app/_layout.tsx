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

// Daftar 10 font (5 static + 5 variable)
const DAFTAR_FONT = [
  // Font static
  { 
    nama: "Fredericka",
    jenis: "static",
    sumber: require("../assets/fonts/static/FrederickatheGreat-Regular.ttf")
  },
  {
    nama: "Manufacturing",
    jenis: "static",
    sumber: require("../assets/fonts/static/ManufacturingConsent-Regular.ttf")
  },
  {
    nama: "Monoton",
    jenis: "static",
    sumber: require("../assets/fonts/static/Monoton-Regular.ttf")
  },
  {
    nama: "Playwrite",
    jenis: "static",
    sumber: require("../assets/fonts/static/PlaywriteVNGuides-Regular.ttf")
  },
  {
    nama: "SpecialElite",
    jenis: "static",
    sumber: require("../assets/fonts/static/SpecialElite-Regular.ttf")
  },
  
  // Font variable
  {
    nama: "Caveat",
    jenis: "variable",
    sumber: require("../assets/fonts/variable/Caveat-VariableFont_wght.ttf")
  },
  {
    nama: "Cinzel",
    jenis: "variable",
    sumber: require("../assets/fonts/variable/Cinzel-VariableFont_wght.ttf")
  },
  {
    nama: "CrimsonPro",
    jenis: "variable",
    sumber: require("../assets/fonts/variable/CrimsonPro-VariableFont_wght.ttf")
  },
  {
    nama: "Orbitron",
    jenis: "variable",
    sumber: require("../assets/fonts/variable/Orbitron-VariableFont_wght.ttf")
  },
  {
    nama: "SplineSans",
    jenis: "variable",
    sumber: require("../assets/fonts/variable/SplineSansMono-VariableFont_wght.ttf")
  }
];

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

// ===============================
// FUNGSI PEMBANTU
// ===============================

const ekstrakUrutan = (nim: string) => parseInt(nim.substring(7, 10));
const buatNIM = (urutan: number) => `1058411${urutan.toString().padStart(3, "0")}22`;
const dapatkanURLFoto = (nim: string) => `https://simak.unismuh.ac.id/upload/mahasiswa/${nim}_.jpg`;

// Fungsi untuk menghasilkan urutan NIM secara sirkular dengan penanganan indeks rendah
const buatUrutanSirkular = (acuan: number, min: number, max: number) => {
  const hasil = [];
  const rentang = max - min + 1;
  
  // 5 NIM sebelum acuan
  for (let i = 1; i <= 5; i++) {
    let urutan = acuan - i;
    
    // Penanganan circular untuk indeks rendah
    while (urutan < min) {
      urutan = max - (min - urutan - 1);
    }
    
    hasil.unshift({  // unshift untuk mempertahankan urutan ascending
      nim: buatNIM(urutan),
      posisi: "sebelum",
      urutan: urutan
    });
  }
  
  // 5 NIM setelah acuan
  for (let i = 1; i <= 5; i++) {
    let urutan = acuan + i;
    
    // Penanganan circular untuk indeks tinggi
    while (urutan > max) {
      urutan = min + (urutan - max - 1);
    }
    
    hasil.push({
      nim: buatNIM(urutan),
      posisi: "sesudah",
      urutan: urutan
    });
  }
  
  return hasil;
};

// ===============================
// PEMBUATAN DATA
// ===============================

// Validasi jumlah font dan nama
if (DAFTAR_FONT.length !== 10) throw new Error("Harus ada tepat 10 font");
if (CONTOH_NAMA.length !== 10) throw new Error("Harus ada tepat 10 nama");

const urutanAcuan = ekstrakUrutan(NIM_ACUAN);
const urutanMin = ekstrakUrutan(BATAS_BAWAH);
const urutanMax = ekstrakUrutan(BATAS_ATAS);

// Generate 10 data mahasiswa (5 sebelum dan 5 sesudah acuan)
const dataMahasiswa = buatUrutanSirkular(urutanAcuan, urutanMin, urutanMax);

// Gabungkan data dengan nama dan font yang unik
const dataFinal = dataMahasiswa.map((mahasiswa, index) => ({
  ...mahasiswa,
  nama: CONTOH_NAMA[index],
  font: DAFTAR_FONT[index].nama, // Pastikan 1-to-1 mapping
  jenisFont: DAFTAR_FONT[index].jenis,
  fontIndex: index // Untuk verifikasi
}));

// ===============================
// KOMPONEN UTAMA
// ===============================

export default function DirektoriMahasiswa() {
  const [fontsLoaded, error] = useFonts(
    DAFTAR_FONT.reduce((acc, font) => {
      acc[font.nama] = font.sumber;
      return acc;
    }, {} as Record<string, any>)
  );

  const [gagalMemuatFoto, setGagalMemuatFoto] = useState<{[key: string]: boolean}>({});

  if (!fontsLoaded) {
    return (
      <View style={styles.kontainerLoading}>
        <ActivityIndicator size="large" color="#2c3e50" />
        <Text style={styles.teksLoading}>Memuat Font...</Text>
        {error && <Text style={styles.teksError}>Error: Gagal memuat beberapa font</Text>}
      </View>
    );
  }

  return (
    <ScrollView style={styles.kontainerUtama}>
      <View style={styles.header}>
        <Text style={[styles.judul, { fontFamily: 'Fredericka' }]}>
          Direktori Mahasiswa
        </Text>
        <Text style={[styles.subjudul, { fontFamily: 'CrimsonPro' }]}>
          Menampilkan 5 mahasiswa sebelum dan 5 setelah NIM: {NIM_ACUAN}
        </Text>
      </View>

      <View style={styles.tabel}>
        <View style={styles.headerTabel}>
          <Text style={styles.teksHeader}>No.</Text>
          <Text style={styles.teksHeader}>Posisi</Text>
          <Text style={styles.teksHeader}>Foto</Text>
          <Text style={styles.teksHeader}>Nama (Font {DAFTAR_FONT.length} jenis)</Text>
          <Text style={styles.teksHeader}>NIM</Text>
          <Text style={styles.teksHeader}>Jenis Font</Text>
        </View>

        {dataFinal.map((mahasiswa, index) => {
          const fontValid = DAFTAR_FONT.some(f => f.nama === mahasiswa.font);
          
          return (
            <View key={`${mahasiswa.nim}-${index}`} style={styles.barisTabel}>
              <Text style={styles.sel}>{index + 1}</Text>
              <Text style={styles.sel}>{mahasiswa.posisi}</Text>
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
              <Text style={[
                styles.selNama, 
                { 
                  fontFamily: mahasiswa.font,
                  color: fontValid ? '#2c3e50' : '#e74c3c'
                }
              ]}>
                {mahasiswa.nama}
              </Text>
              <Text style={[styles.sel, { fontFamily: mahasiswa.font }]}>
                {mahasiswa.nim}
              </Text>
              <Text style={styles.sel}>
                {mahasiswa.jenisFont} ({mahasiswa.fontIndex + 1}/10)
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.footer}>
        <Text style={styles.teksFooter}>
          * 5 sebelum: {dataFinal.filter(d => d.posisi === 'sebelum').map(d => d.nama).join(', ')}
        </Text>
        <Text style={styles.teksFooter}>
          * 5 sesudah: {dataFinal.filter(d => d.posisi === 'sesudah').map(d => d.nama).join(', ')}
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
  teksError: {
    marginTop: 10,
    fontSize: 14,
    color: '#e74c3c',
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
    fontSize: 12,
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
    fontSize: 12,
    color: '#34495e',
    paddingHorizontal: 2,
  },
  selNama: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#2c3e50',
    paddingHorizontal: 2,
    fontWeight: 'bold',
  },
  kontainerFoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 50,
    height: 50,
    borderRadius: 25,
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