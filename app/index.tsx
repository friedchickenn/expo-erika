// File: app/index.tsx
import { View, Text, ScrollView } from 'react-native';
import Carousel from '../components/Carousel';

export default function TabHome() {
  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1, 
        padding: 20, 
        backgroundColor: '#F1FAEE'
      }}
    >
      <Carousel />
      
      <Text style={{ 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginBottom: 16, 
        color: '#1D3557', 
        textAlign: 'center',
        fontFamily: 'Fredericka'
      }}>
        Universitas Muhammadiyah Makassar
      </Text>

      <View style={{ 
        backgroundColor: '#A8DADC', 
        padding: 20, 
        borderRadius: 10, 
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
          Universitas Muhammadiyah Makassar, yang lebih dikenal dengan nama Unismuh Makassar, 
          adalah salah satu perguruan tinggi swasta ternama di Indonesia Timur. Berdiri sejak tahun 1963, 
          kampus ini terletak di Jalan Sultan Alauddin No. 259, Makassar, Sulawesi Selatan. 
          Dengan semangat "Ilmu Amaliah, Amal Ilmiah, dan Akhlakul Karimah", 
          Unismuh berkomitmen mencetak lulusan yang unggul dalam bidang akademik sekaligus memiliki akhlak mulia.
        </Text>
      </View>

      <View style={{ 
        backgroundColor: '#457B9D', 
        padding: 20, 
        borderRadius: 10, 
        marginTop: 20,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 6, 
        elevation: 8,
      }}>
        <Text style={{ 
          textAlign: 'center', 
          fontSize: 16, 
          color: '#F1FAEE',
          lineHeight: 24,
          fontFamily: 'SpecialElite'
        }}>
          Memiliki berbagai fakultas dan program studi, Unismuh Makassar aktif mengembangkan pendidikan, penelitian, dan pengabdian kepada masyarakat, 
          serta menjadi pusat pengembangan ilmu pengetahuan berbasis nilai-nilai Islam.
        </Text>
      </View>
    </ScrollView>
  );
}