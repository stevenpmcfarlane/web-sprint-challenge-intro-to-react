import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyBCharacter from "./components/Character/DummyBCharacter";
import { BASE_URL } from "./constants";

const DummyBApp = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}people`)
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((error) => {
        console.log("there was an error ", error);
      });
  }, [setCharacters]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="Characters">
        {characters.map((character) => {
          return (
            <DummyBCharacter
              key={character.name}
              {...character}
            ></DummyBCharacter>
          );
        })}
      </div>
    </div>
  );
};

export default DummyBApp;
