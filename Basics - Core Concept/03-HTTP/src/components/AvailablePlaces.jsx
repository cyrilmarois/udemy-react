import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import axios from 'axios';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/places');
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }
        setAvailablePlaces(data.places);
      } catch (error) {
        setError({ message: error.message || 'Something wrong happened !' });
      }
      setIsFetching(false);
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
