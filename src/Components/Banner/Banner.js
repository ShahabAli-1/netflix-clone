import React, { useState, useEffect } from "react";
import baseurl from "../../baseurl";
import "./Banner.css";
import requests from "../../requests.js";
const img_base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const response = await fetch(
      `${baseurl.baseURL}${requests.fetchComedyMovies}`
    );
    const bannerMovie = await response.json();
    setMovie(
      bannerMovie.results[
        Math.floor(Math.random() * bannerMovie.results.length)
      ]
    );
    return bannerMovie;
  };
  //the truncator function when u have too much text
  //then after the space runs out the three dots
  //appear showing theres more but doesnot show the text
  const truncat = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${img_base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {/* Background Image */}
      <div className="banner__contents">
        {/* Title */
        }
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div => 2 Buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* description */}
        <h1 className="banner__description">{truncat(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
















