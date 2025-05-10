import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSettings } from '../../context/SettingsContext';

const phaseIcons: any = {
  'New Moon': '🌑',
  'Waxing Crescent': '🌒',
  'First Quarter': '🌓',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Waning Gibbous': '🌖',
  'Last Quarter': '🌗',
  'Waning Crescent': '🌘',
};

const MoonPhaseScreen = () => {
  const { theme, city } = useSettings();
  const [phase, setPhase] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoonData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.farmsense.net/v1/moonphases/?d=${Math.floor(Date.now() / 1000)}`
        );
        const data = await res.json();
        setPhase(data[0]?.Phase || 'Unknown');
      } catch (err) {
        console.error('Moon phase fetch error:', err);
        setPhase('Full Moon'); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchMoonData();
  }, []);

  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <Text style={styles.title}>Faza Księżyca</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#2196f3" />
      ) : (
        <>
          <Text style={styles.icon}>{phaseIcons[phase!] || '🌝'}</Text>
          <Text style={styles.phase}>{phase}</Text>
          <Text style={styles.info}>Dla lokalizacji: {city}</Text>
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2196f3',
  },
  icon: {
    fontSize: 96,
  },
  phase: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 16,
    color: '#999',
  },
  info: {
    marginTop: 12,
    fontSize: 16,
    color: '#aaa',
  },
});

export default MoonPhaseScreen;
