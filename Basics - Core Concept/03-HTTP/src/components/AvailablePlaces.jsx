import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import axios from 'axios';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      // const response = await fetch('http://localhost:3000/places');
      // console.log(response);
      // const data = await response.json();
      // setAvailablePlaces(data.places);
      const response = await axios.get('http://localhost:3000/places');
      console.log(response);
      setTimeout(() => {
        setAvailablePlaces(response.data.places);
        setIsFetching(false);
      }, 1500);
    }

    fetchPlaces();
  }, []);

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
