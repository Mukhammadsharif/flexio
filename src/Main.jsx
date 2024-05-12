import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Rectangle from './images/other/Rectangle.png';
import {useNavigation} from '@react-navigation/native';
import Banner1 from './images/other/Banner1.png';
import Banner2 from './images/other/Banner2.png';
import Banner3 from './images/other/Banner3.png';
import {FlexioLogo} from './components/Svgs';

export default function Main() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlexioLogo style={styles.logo} />
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={Rectangle} style={styles.rectangle} />

        <TouchableOpacity onPress={() => navigation.navigate('Flexio')}>
          <Image source={Banner1} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cardio')}>
          <Image source={Banner2} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Flexible')}>
          <Image source={Banner3} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 100,
  },
  rectangle: {
    width: '95%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  image: {
    height: 210,
    alignSelf: 'center',
    marginTop: 20,
  },
  logo: {
    marginVertical: 20,
    marginLeft: 20,
  },
});
