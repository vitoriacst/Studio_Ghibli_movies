import { useEffect, useState } from 'react';

const UseApi = (url) => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMoviesData(data);
      });
  }, []);

  return { moviesData };
};

export default UseApi;
