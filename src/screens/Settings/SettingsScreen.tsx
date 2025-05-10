import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSettings } from '../../context/SettingsContext';

const SettingsScreen = () => {
  const { theme, unit, city, setTheme, setUnit, setCity } = useSettings();

  useEffect(() => {
    console.log('Settings loaded:', { theme, unit, city });
  }, [theme, unit, city]);

  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <Text style={styles.title}>Ustawienia</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Tryb ciemny</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={(v) => setTheme(v ? 'dark' : 'light')}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Jednostki (°C / °F)</Text>
        <Switch
          value={unit === 'F'}
          onValueChange={(v) => setUnit(v ? 'F' : 'C')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dark: {
    backgroundColor: '#121212',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196f3',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  label: {
    fontSize: 18,
    color: '#999',
  },
  cityPicker: {
    marginTop: 20,
  },
  picker: {
    color: '#2196f3',
    backgroundColor: '#eee',
  },
});

export default SettingsScreen;
