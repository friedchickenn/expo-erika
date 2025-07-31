// File: app/about.tsx
import { View, Text, ScrollView, Image } from 'react-native';

export default function TabAbout() {
  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1, 
        padding: 20, 
        backgroundColor: '#F1FAEE'
      }}
    >
      <Image 
        source={require('../assets/images/Logo.png')}
        style={{ 
          width: 150, 
          height: 150, 
          alignSelf: 'center',
          marginBottom: 20,
        }}
      />

      <Text style={{ 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginBottom: 16, 
        color: '#1D3557', 
        textAlign: 'center',
        fontFamily: 'Monoton'
      }}>
        Tentang Aplikasi
      </Text>

      <View style={{ 
        backgroundColor: '#A8DADC', 
        padding: 20, 
        borderRadius: 10, 
        marginBottom: 20,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 6, 
        elevation: 8,
      }}>
        <Text style={{ 
          textAlign: 'center', 
          fontSize: 16, 
          color: '#1D3557',
          lineHeight: 24,
          fontFamily: 'SpecialElite'
        }}>
          Aplikasi EXPO-ERIKA ini dibangun menggunakan Expo Router dan React Native untuk memenuhi tugas kuliah, menampilkan informasi tentang Unismuh Makassar di halaman Home, penjelasan aplikasi di About, serta data diri pembuat di Profil, dengan fitur unggulan seperti banner otomatis, custom font, dan antarmuka interaktif berbasis tab navigation.
        </Text>
      </View>

      <Text style={{ 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 16, 
        color: '#E63946', 
        textAlign: 'center',
        fontFamily: 'Orbitron'
      }}>
        Fungsi Halaman
      </Text>

      <View style={{ 
        backgroundColor: '#457B9D', 
        padding: 20, 
        borderRadius: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 6, 
        elevation: 8,
      }}>
        <Text style={{ 
          fontSize: 16, 
          color: '#F1FAEE',
          lineHeight: 24,
          fontFamily: 'SpecialElite',
          marginBottom: 10
        }}>
          🏠 <Text style={{fontWeight: 'bold'}}>Home:</Text> Menampilkan informasi tentang Unismuh Makassar termasuk sejarah dan visi misi.
        </Text>
        
        <Text style={{ 
          fontSize: 16, 
          color: '#F1FAEE',
          lineHeight: 24,
          fontFamily: 'SpecialElite',
          marginBottom: 10
        }}>
          ℹ️ <Text style={{fontWeight: 'bold'}}>About:</Text> Menjelaskan tujuan pembuatan aplikasi dan fungsi masing-masing halaman.
        </Text>
        
        <Text style={{ 
          fontSize: 16, 
          color: '#F1FAEE',
          lineHeight: 24,
          fontFamily: 'SpecialElite'
        }}>
          👤 <Text style={{fontWeight: 'bold'}}>Profil:</Text> Menampilkan data diri pembuat aplikasi termasuk foto profil.
        </Text>
      </View>
    </ScrollView>
  );
}