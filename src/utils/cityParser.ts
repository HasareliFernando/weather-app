import cities from "../data/cities.json";
import type {City} from "../types/city";

const typedCities = cities as City[];

export const cityIds = typedCities.map((city) => city.CityCode);