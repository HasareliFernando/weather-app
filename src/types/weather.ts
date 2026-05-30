export interface WeatherResponse {
  id: number;
  name: string;

  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };

  weather: {
    main: string;
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
  };
}