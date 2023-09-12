import React, { useState, useEffect } from 'react';


const List_movie = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [show,setShow] = useState([]);
  const [act,setAct] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=2f1d522f9a87d7458baceea9a5184900&with_genres=28  "
        );
        const response2 = await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=2f1d522f9a87d7458baceea9a5184900&with_genres=18"
          );
          const response3 = await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=2f1d522f9a87d7458baceea9a5184900&with_genres=35"
          );


        const movieData = await response.json();
        const movieData2 = await response2.json();
        const movieData3 = await response3.json();
        setMovies(movieData.results.slice(0,4)); 
        setShow(movieData2.results.slice(0,4));
        setAct(movieData3.results.slice(0,4));
    }
    fetchData();
  }, []);
  console.log(movies);
  console.log(show);
  console.log(act);

  return (
   <>
   <h2 style={{color:"yellow"}}>Genre &nbsp;{genres }</h2>
   
   <div class="card1">
        {movies ? (
          movies.map((data) => (
              <img
                class="poster"   height={"200px"} width={"230px"}
                src={"https://image.tmdb.org/t/p/original" + data.poster_path}
              />
          ))
        ) : (
          <p>Loading data</p>
        )}
      </div>
      <div class="card1">
        {show ? (
          show.map((data) => (
              <img
                class="poster"   height={"200px"} width={"230px"}
                src={"https://image.tmdb.org/t/p/original" + data.poster_path}
              />
          ))
        ) : (
          <p>Loading data</p>
        )}
      </div>
      <div class="card1">
        {act ? (
          act.map((data) => (
              <img
                class="poster"   height={"200px"} width={"230px"}
                src={"https://image.tmdb.org/t/p/original" + data.poster_path}
              />
          ))
        ) : (
          <p>Loading data</p>
        )}
      </div>
   </>
  );
};

export default List_movie;

