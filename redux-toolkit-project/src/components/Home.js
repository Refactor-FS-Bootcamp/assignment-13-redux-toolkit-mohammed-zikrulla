import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import movieApi from "../common/apis/movieApi";
import { APIKey } from "../common/apis/MovieApiKey";
import { addMovies } from "../features/movies/moviesSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`movie?api_key=${APIKey}`);
      dispatch(addMovies(response.data.results));
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
