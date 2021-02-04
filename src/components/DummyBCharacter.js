import React from "react";

const DummyBCharacter = (props) => {
  return (
    <div className="Character">
      <div>{props.name}</div>
      <div>{props[birth_year]}</div>
      <div>{props.height}</div>
      <div>{props.gender}</div>
    </div>
  );
};

export default DummyBCharacter;
