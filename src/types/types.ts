export interface WeatherData {
  temp: number;
  description: string;
  humidity: number;
  wind: number;
  icon: string;
}

export interface ForecastDay {
  day: string;
  tempMin: number;
  tempMax: number;
  icon: string;
}
