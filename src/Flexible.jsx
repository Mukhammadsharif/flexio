import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {schedule} from './context/plan';
import {BackIcon, FlexioLogo} from './components/Svgs';
import {useNavigation} from '@react-navigation/native';

export default function Flexible() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon style={{marginLeft: 20}} />
        </TouchableOpacity>
        <FlexioLogo style={{marginLeft: -45}} />

        <View />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {schedule.slice(21).map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.name}>{item?.name}</Text>

            <Image source={item?.image} style={styles.image} />

            <Text style={styles.description}>{item?.description}</Text>

            <Text style={styles.time}>{item?.time}</Text>
          </View>
        ))}
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
    paddingHorizontal: 20,
    backgroundColor: '#7C4DFF',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    marginTop: 10,
  },
  itemContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingVertical: 10,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 40,
    color: '#FFFFFF',
    marginTop: 10,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'justify',
    color: '#FFFFFF',
    marginTop: 10,
  },
  time: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
});
