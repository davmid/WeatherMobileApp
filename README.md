# WeatherTSApp (zaliczenie)

Aplikacja pogodowa stworzona w technologii React Native z TypeScript i Expo.

Pozwala użytkownikowi sprawdzić aktualną pogodę oraz prognozę dla wybranego miasta, zmieniać jednostki temperatury oraz motyw aplikacji. Projekt jest w pełni funkcjonalny i może być uruchomiony bez potrzeby backendu.

## Funkcje aplikacji

### 1. Wybór miasta
Użytkownik może zmienić aktualnie obserwowane miasto z poziomu zakładki „Search”. Dostępne są m.in. miasta: Poznań, Warszawa, Kraków, Londyn, Nowy Jork. Po wyborze miasta wszystkie dane pogodowe w aplikacji są odświeżane.

### 2. Tryb jasny i ciemny
Z poziomu zakładki „Settings” można przełączać tryb wyświetlania pomiędzy jasnym i ciemnym. Zmiana wpływa na wygląd wszystkich ekranów aplikacji.

### 3. Jednostki temperatury
Użytkownik może wybrać, czy temperatura ma być wyświetlana w stopniach Celsjusza (°C) czy Fahrenheita (°F). Wartości są automatycznie przeliczane.

### 4. Aktualna pogoda
Na stronie głównej („Home”) prezentowane są:
- aktualna temperatura,
- ikona stanu pogody (np. słońce, chmury),
- opis warunków (np. pochmurno, pogodnie),
- wilgotność powietrza,
- prędkość wiatru.

Dane te są pobierane na żywo z API OpenWeatherMap.

### 5. Prognoza 7-dniowa
Zakładka „Forecast” wyświetla prognozę pogody na najbliższe 7 dni z temperaturą minimalną i maksymalną, oraz ikonami warunków atmosferycznych.

### 6. Faza księżyca
W zakładce „Moon” użytkownik może sprawdzić aktualną fazę księżyca (np. pełnia, nów, pierwsza kwadra). Informacje pobierane są z publicznego API farmsense.net.

---

## Jak uruchomić projekt
1. Klonowanie repozytorium:
```
git clone https://github.com/davmid/WeatherMobileApp.git
cd nazwa projektu
```
2. Zainstaluj zależności:
```
npm install
```
3. Start aplikacji:
```
npm start
```