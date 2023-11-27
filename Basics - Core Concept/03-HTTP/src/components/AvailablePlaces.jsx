import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import axios from 'axios';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      // const response = await fetch('http://localhost:3000/places');
      // console.log(response);
      // const data = await response.json();
      // setAvailablePlaces(data.places);
      const response = await axios.get('http://localhost:3000/places');
      console.log(response);
      setAvailablePlaces(response.data.places);
    }

    fetchPlaces();
  }, []);

  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
