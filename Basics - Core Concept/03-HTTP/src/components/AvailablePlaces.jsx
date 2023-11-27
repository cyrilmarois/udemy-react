import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import axios from 'axios';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || 'Something wrong happened !' });
        setIsFetching(false);
      }
      // const response = await axios.get('http://localhost:3000/places');
      // console.log(response);
      // setTimeout(() => {
      //   setAvailablePlaces(response.data.places);
      //   setIsFetching(false);
      // }, 1500);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title='OOOOOooooops' message={error.message} />;
  }
  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Loading marvellous places...'
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
