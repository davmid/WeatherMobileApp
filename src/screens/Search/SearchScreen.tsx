import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSettings } from '../../context/SettingsContext';

const SearchScreen = () => {
  const { city, setCity, theme } = useSettings();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <Text style={styles.label}>Wybierz miasto:</Text>
      <Picker
        selectedValue={city}
        style={styles.picker}
        onValueChange={(value) => setCity(value)}
      >
        <Picker.Item label="Poznań" value="Poznań" />
        <Picker.Item label="Warszawa" value="Warszawa" />
        <Picker.Item label="Kraków" value="Kraków" />
        <Picker.Item label="Nowy Jork" value="Nowy Jork" />
        <Picker.Item label="Londyn" value="Londyn" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  dark: {
    backgroundColor: '#121212',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#888',
  },
  picker: {
    color: '#2196f3',
    backgroundColor: '#eee',
  },
});

export default SearchScreen;
