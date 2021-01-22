import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/index";
import Character from "../Character/Character";

const Characters = (props) => {
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
    <div>
      {characters.map((character) => {
        return <Character {...character} />;
      })}
    </div>
  );
};
