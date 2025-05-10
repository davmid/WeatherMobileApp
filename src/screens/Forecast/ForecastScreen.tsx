import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSettings } from '../../context/SettingsContext';

const ForecastScreen = () => {
  const { unit, theme, city } = useSettings();
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=12b2a8504d33a621ef32cc5940d83890&units=metric`
        );
        const data = await res.json();

        const dailyData: any = [];
        const seenDays = new Set();

        for (const item of data.list) {
          const date = new Date(item.dt_txt);
          const dayName = date.toLocaleDateString('pl-PL', { weekday: 'short' }).toUpperCase();

          if (!seenDays.has(dayName)) {
            seenDays.add(dayName);

            dailyData.push({
              day: dayName,
              tempMin: item.main.temp_min,
              tempMax: item.main.temp_max,
              icon: item.weather[0].icon,
            });

            if (dailyData.length >= 7) break;
          }
        }

        setForecast(dailyData);
      } catch (err) {
        console.error('Forecast fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  const convert = (temp: number) => (unit === 'C' ? temp : (temp * 9) / 5 + 32);

  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <Text style={styles.title}>Prognoza 7-dniowa</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#2196f3" />
      ) : (
        <FlatList
          data={forecast}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.day}>{item.day}</Text>
              <Image
                source={{ uri: `https://openweathermap.org/img/wn/${item.icon}.png` }}
                style={styles.icon}
              />
              <Text style={styles.temps}>
                {convert(item.tempMin).toFixed(1)}° /{' '}
                <Text style={{ color: '#ff5252' }}>{convert(item.tempMax).toFixed(1)}°</Text>
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  dark: {
    backgroundColor: '#121212',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#2196f3',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    elevation: 2,
    alignItems: 'center',
  },
  day: {
    fontSize: 16,
    width: 60,
    textTransform: 'uppercase',
  },
  icon: {
    width: 40,
    height: 40,
  },
  temps: {
    fontSize: 16,
    width: 100,
    textAlign: 'right',
  },
});

export default ForecastScreen;
