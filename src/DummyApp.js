import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/index";
import DummyCharacter from "./components/Character/DummyCharacter";
import ThemeProvider from "styled-components";
import theme from "./Theme/index";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}people`)
      .then((res) => {
        console.log(res.data);
        setCharacters(res.data);
      })
      .catch((error) => {
        console.log("there was an error");
      });
  }, [setCharacters]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characters">
        {characters.map((character) => {
          return <Character key={character.name} {...character}></Character>;
        })}
      </div>
    </div>
  );
};
