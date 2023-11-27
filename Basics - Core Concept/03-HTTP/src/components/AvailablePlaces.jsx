import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import axios from 'axios';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3000/places')
    //   .then((res) => {
    //     console.log({ fetchRes: res });
    //     return res.json();
    //   })
    //   .then((resData) => {
    //     console.log({ fetchData: resData });
    //     setAvailablePlaces(resData.places);
    //   });
    axios
      .get('http://localhost:3000/places')
      .then((res) => {
        console.log({ axiosRes: res });
        return res.data;
      })
      .then((resData) => {
        console.log({ axiosResData: resData });
        setAvailablePlaces(resData.places);
      });
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
