import { useEffect, useState } from 'react';

const UseApi = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect((url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMoviesData(data);
      });
  });
  return { moviesData };
};

export default UseApi;
