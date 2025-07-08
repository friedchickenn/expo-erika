import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

// 9 pasang gambar
const characters = [
  { base: require("../assets/images/giyu1.jpg"), alt: require("../assets/images/giyu2.jpg") },
  { base: require("../assets/images/inosuke1.jpg"), alt: require("../assets/images/inosuke2.jpg") },
  { base: require("../assets/images/kanao1.jpg"), alt: require("../assets/images/kanao2.jpg") },
  { base: require("../assets/images/nezuko1.jpg"), alt: require("../assets/images/nezuko2.jpg") },
  { base: require("../assets/images/rengoku1.jpg"), alt: require("../assets/images/rengoku2.jpg") },
  { base: require("../assets/images/tanjiro1.jpg"), alt: require("../assets/images/tanjiro2.jpg") },
  { base: require("../assets/images/tengen1.jpg"), alt: require("../assets/images/tengen2.jpg") },
  { base: require("../assets/images/tokito1.jpg"), alt: require("../assets/images/tokito2.jpg") },
  { base: require("../assets/images/zenitsu1.jpg"), alt: require("../assets/images/zenitsu2.jpg") },
];

export default function Index() {
  const initialState = characters.map(() => ({
    isAlt: false,
    scale: 1.2,
  }));

  const [imageStates, setImageStates] = useState(initialState);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImagePress = (index: number) => {
    setImageStates((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const newScale = item.scale + 0.4; 
          return {
            isAlt: true,
            scale: newScale > 2 ? 2 : newScale, 
          };
        } else {
          return {
            isAlt: false,
            scale: 1.2,
          };
        }
      })
    );
    setActiveIndex(index);
  };

  const handleOutsidePress = () => {
    setImageStates(initialState);
    setActiveIndex(null);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.container}>
          
          <View style={styles.triangle} />

          <View style={styles.header}>
            <Text style={styles.nameText}>Erika Yanti</Text>
          </View>

          <View style={styles.nimBox}>
            <Text style={styles.nimText}>105841104322</Text>
          </View>

          <View style={styles.profileRow}>
            <Image
              source={{
                uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841104322_.jpg?1751871436",
              }}
              style={styles.profileImage}
            />
            <Image
              source={{
                uri: "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif",
              }}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.gridContainer}>
            {characters.map((char, index) => {
              const isActive = index === activeIndex;
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={(e) => {
                    e.stopPropagation();
                    handleImagePress(index);
                  }}
                >
                  <View style={[styles.gridItem, { zIndex: isActive ? 1 : 0 }]}>
                    <Image
                      source={imageStates[index].isAlt ? char.alt : char.base}
                      blurRadius={activeIndex !== null && !isActive ? 4 : 0}
                      style={{
                        ...styles.gridImage,
                        transform: [{ scale: imageStates[index].scale }],
                      }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 190,
    borderRightWidth: 190,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "orange",
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    backgroundColor: "black",
    padding: 10,
    width: 390,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "pink",
  },
  nimBox: {
    width: 410,
    height: 60,
    backgroundColor: "gray",
    borderRadius: 30,
    marginTop: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nimText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  profileRow: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    marginHorizontal: 5,
  },
  gridContainer: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 1,
    width: 500,
    paddingHorizontal: 10,
  },
  gridItem: {
    width: "30%", 
    aspectRatio: 1, 
    margin: 2,
    paddingBottom: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  gridImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});
