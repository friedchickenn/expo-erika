// File: components/Carousel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Dimensions, StyleSheet, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/images/Banner1.jpg'),
  require('../assets/images/Banner2.jpg'),
  require('../assets/images/Banner3.jpg'),
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        fadeAnim.setValue(1);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images[currentIndex]}
        style={[
          styles.image,
          {
            opacity: fadeAnim,
          },
        ]}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});