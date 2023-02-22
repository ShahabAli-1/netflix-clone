/*
import React,{useState,useEffect} from 'react'

//if you have a default import then when ure importing 
//it in some other filer you can name
//it whatever you want as here in axios file
//the export is default instance so here we can 
//rename that instance export to axios or whatever
import axios from '../axios'
function Row({title,fetchUrl})  {
    
    const [movies,setMovies] = useState([])

    //snippet of code which runs on a specific condition
    useEffect(() => {
        async function fetchData()  {
            const request = await axios.get(fetchUrl);
        //"https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_network=213
        //this is basically wht the above axios req is doing
            console.log(request);
        }
        fetchData();
    },[])
    
    //if [],run once (only on page load) when the row loads and dont run again,if [movies] as the second
    //parameter then everytime that movies in [] changes it will run again
    return (
        <div>
            { title }
            <h2>{title}</h2>
            {Container => Posters}
        </div>
    )
}
export default Row


*/
import React, { useState, useEffect } from "react";
import baseurl from "../../baseurl";
import "regenerator-runtime/runtime";
import "./Row.css";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

//a base url for loading the images u fetch
//from an api or url
const img_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //set trailer url
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    getInfo();
  }, [baseurl.baseURL, fetchUrl]);

  const getInfo = async () => {
    const response = await fetch(`${baseurl.baseURL}${fetchUrl}`);
    const jsonData = await response.json();
    //console.table(jsonData);
    setMovies(jsonData.results);
    return jsonData;
  };
  //console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="row">
      {/* Navbar */}
      {/* Banner */}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* Row Poster */}
        {movies.map((movie) => (
          <>
            <div className="row__posterSingle">
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${img_base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              {/* <FavoriteBorderIcon className="row__LikeButton"/> */}
            </div>
          </>
        ))}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
