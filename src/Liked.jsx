import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Card from './components/Card';
import {schedule} from './context/plan';
import {FlexioLogo} from './components/Svgs';
import {GlobalContext} from './context/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Liked() {
  const [data, setData] = useState([]);
  const {refresh} = useContext(GlobalContext);

  const defineItemFromStorage = async () => {
    const activities = await AsyncStorage.getItem('trainings');
    if (!activities) {
      await AsyncStorage.setItem('trainings', JSON.stringify([]));
    } else {
      const parsedStorage = JSON.parse(activities);
      // console.log(parsedStorage);
      setData(parsedStorage);
    }
  };

  useEffect(() => {
    defineItemFromStorage();
  }, [refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <FlexioLogo style={styles.logo} />
      <ScrollView>
        {schedule.map((item, index) => (
          <Card item={item} key={index} data={data} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginVertical: 20,
    marginLeft: 20,
  },
});
