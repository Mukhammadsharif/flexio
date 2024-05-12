import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import BackgroundImage from './images/other/1_1_1.png';
import {useNavigation} from '@react-navigation/native';

export default function Init() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <Text style={styles.slogan}>
          Преодолей границы своего потенциала с нашим фитнес-приложением: стань
          лучшей версией себя!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TabScreen')}>
          <Text style={styles.title}>Начать</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
  },
  button: {
    height: 60,
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#E84479',
    marginBottom: 20,
    borderRadius: 25,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  slogan: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
});
