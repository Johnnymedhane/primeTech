import { useEffect, useState } from "react"



function useCityPosition() {
  const [isMapLoading, setIsMapLoading] = useState(false);
  const [cityPosition, setCityPosition] = useState(null);
  const [error, setError] = useState(null);

 const city = "Tel Aviv"

 useEffect(function(){
  async function getCityPosition() {
    setIsMapLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
      if (!res.ok) throw new Error("Failed to fetch map");

      const data = await res.json();
      if (!data.results || data.results.length === 0) {
        throw new Error("City not found. Try a different spelling.");
      }
      const position = {
        lat: data.results[0].latitude,
        lng: data.results[0].longitude
      };
      setCityPosition(position);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setIsMapLoading(false);
    }
  }
  getCityPosition();
 }, [city]);

  return { isMapLoading, cityPosition, error };
}

export default useCityPosition
