import React from 'react';
import UseApi from '../hooks/useApi';

const HomePage = () => {
  const { moviesData } = UseApi('https://ghibliapi.herokuapp.com/films/');
  return (
    <>
      <div className="flex items-center justify-center ">
        <h1 className="text-2xl font-light">GHIBLIFLIX</h1>
      </div>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {moviesData.map((movie, index) => {
          return (
            <div class="animate- max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                class="w-full"
                src={movie.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{movie.title}</div>
                <p class="text-gray-700 text-base">{movie.description}</p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {movie.director}
                </span>
                <span class="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {movie.release_date}
                </span>
                <span class="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {movie.producer}
                </span>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
