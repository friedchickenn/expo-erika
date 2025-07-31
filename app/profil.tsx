// File: app/profil.tsx
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';

export default function TabProfil() {
  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1, 
        padding: 20, 
        backgroundColor: '#F1FAEE',
        alignItems: 'center'
      }}
    >
      <View style={styles.profileContainer}>
        <Image 
          source={require('../assets/images/hehe.jpg')} 
          style={styles.profileImage} 
        />

        <Text style={styles.title}>
          Biodata Mahasiswa
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>Erika Yanti</Text>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>NIM:</Text>
            <Text style={styles.infoValue}>105841104322</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Kelas:</Text>
            <Text style={styles.infoValue}>6-B</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Jurusan:</Text>
            <Text style={styles.infoValue}>Teknik Informatika</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Fakultas:</Text>
            <Text style={styles.infoValue}>Teknik</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#457B9D',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1D3557',
    fontFamily: 'Fredericka'
  },
  infoContainer: {
    backgroundColor: '#A8DADC',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#E63946',
    fontFamily: 'Orbitron'
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#457B9D',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D3557',
    fontFamily: 'SpecialElite'
  },
  infoValue: {
    fontSize: 16,
    color: '#1D3557',
    fontFamily: 'SpecialElite'
  },
});