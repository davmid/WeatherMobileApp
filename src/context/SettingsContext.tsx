import React, { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';
type Unit = 'C' | 'F';

interface SettingsContextProps {
  theme: Theme;
  unit: Unit;
  city: string;
  setTheme: (t: Theme) => void;
  setUnit: (u: Unit) => void;
  setCity: (c: string) => void;
}

const SettingsContext = createContext<SettingsContextProps | null>(null);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('SettingsContext not found');
  return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [unit, setUnit] = useState<Unit>('C');
  const [city, setCity] = useState<string>('Poznań');

  return (
    <SettingsContext.Provider value={{ theme, unit, city, setTheme, setUnit, setCity }}>
      {children}
    </SettingsContext.Provider>
  );
};
