import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, TextInput} from 'react-native';
import {schedule} from './context/plan';
import {FlexioLogo} from './components/Svgs';
import SearchCard from './components/SearchCard';

export default function Search() {
  const [query, setQuery] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <FlexioLogo style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder={'Поиск...'}
        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
        value={query}
        onChangeText={setQuery}
      />

      {!query ? (
        <ScrollView>
          {schedule.map((item, index) => (
            <SearchCard item={item} key={index} />
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          {schedule
            .filter(training => training.name.includes(query))
            .map((item, index) => (
              <SearchCard item={item} key={index} />
            ))}
        </ScrollView>
      )}
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
  input: {
    width: '95%',
    alignSelf: 'center',
    color: '#121212',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E84479',
    height: 50,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Bold',
  },
});
