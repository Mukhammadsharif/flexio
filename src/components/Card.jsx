import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../context/GlobalContext';
import Liked from '../images/other/icons8-heart-48.png';
import Disliked from '../images/other/icons8-heart-50.png';

export default function Card({item, index, data}) {
  const {refresh, setRefresh} = useContext(GlobalContext);

  const add = async () => {
    const activities = await AsyncStorage.getItem('trainings');
    let parsedStorage = JSON.parse(activities);
    parsedStorage.push(item.id);
    await AsyncStorage.setItem('trainings', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  const remove = async () => {
    const activities = await AsyncStorage.getItem('trainings');
    let parsedStorage = JSON.parse(activities);
    parsedStorage = parsedStorage.filter(s => s !== item.id);
    await AsyncStorage.setItem('trainings', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };
  return (
    <View key={index} style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.time}>{item?.time}</Text>
        <Text style={styles.name}>{item?.name}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (data.includes(item.id)) {
            remove();
          } else {
            add();
          }
        }}>
        <Image
          source={data.includes(item.id) ? Liked : Disliked}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '60%',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 10,
    textAlign: 'center',
    color: '#E84479',
  },
  time: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
    textAlign: 'center',
    marginTop: 10,
    color: '#E84479',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
