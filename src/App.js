import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/index";
import Character from "./components/Character/Character";

import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}people`)
      .then((res) => {
        console.log(res);
        setCharacters(res.data.results);
      })
      .catch((error) => {
        console.log("there was an error: ", error);
      });
  }, [setCharacters]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characters">
        {characters.map((character) => {
          return <Character key={character.name} {...character} />;
        })}
      </div>
    </div>
  );
};

export default App;
