import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function SearchCard({item, index}) {
  return (
    <View key={index} style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item?.name}</Text>
      </View>

      <Text style={styles.time}>{item?.time}</Text>
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
    color: '#7C4DFF',
  },
  time: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
    textAlign: 'center',
    marginTop: 10,
    color: '#7C4DFF',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
