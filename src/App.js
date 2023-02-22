import React from "react";
import "./App.css";
import Row from "./Components/Row/Row.js";
import requests from "./requests.js";
import Banner from "./Components/Banner/Banner.js";
import NavBar from "./Components/NavBar/NavBar.js";


const App = () => {
  return (
    <div className="app">

      <NavBar></NavBar>
      <Banner></Banner>
      <Row
        title="ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
