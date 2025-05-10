import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSettings } from '../../context/SettingsContext';

const HomeScreen = () => {
  const { theme, unit, city } = useSettings();
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12b2a8504d33a621ef32cc5940d83890&units=metric`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error('Error fetching weather:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const convertTemp = (tempC: number) => (unit === 'C' ? tempC : (tempC * 9) / 5 + 32);

  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <Text style={styles.city}>{city}</Text>

      {loading || !weather ? (
        <ActivityIndicator size="large" color="#2196f3" />
      ) : (
        <>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }}
            style={styles.icon}
          />
          <Text style={styles.temp}>
            {convertTemp(weather.main.temp).toFixed(1)}°{unit}
          </Text>
          <Text style={styles.subtitle}>
            {weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}, wilgotność {weather.main.humidity}%, wiatr {weather.wind.speed} m/s
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dark: {
    backgroundColor: '#121212',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  city: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2196f3',
  },
  icon: {
    width: 120,
    height: 120,
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#ff5252',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

export default HomeScreen;
