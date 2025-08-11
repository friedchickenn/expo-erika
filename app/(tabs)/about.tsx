import { View, Text, ScrollView } from 'react-native';

export default function TabAbout() {
  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20, 
        backgroundColor: '#f5f5f5' // warna latar belakang lembut
      }}
    >
      <Text style={{ 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 16, 
        color: '#333' 
      }}>
        Tentang Aplikasi
      </Text>

      <View style={{ 
        backgroundColor: '#fff', 
        padding: 16, 
        borderRadius: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        elevation: 4,
        width: '90%' 
      }}>
        <Text style={{ 
          textAlign: 'center', 
          fontSize: 16, 
          color: '#555' 
        }}>
          Aplikasi ini dibuat untuk keperluan tugas kuliah.{"\n"}{"\n"}
          Fungsi halaman:
          {"\n"}- Home: Menampilkan informasi tentang Unismuh Makassar.
          {"\n"}- About: Menjelaskan tujuan dan fungsi aplikasi.
          {"\n"}- Profil: Menampilkan data diri pembuat aplikasi.
        </Text>
      </View>
    </ScrollView>
  );
}