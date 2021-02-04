// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
  return (
    <StyledCharacter className="character">
      <div>{props.name}</div>
      <div>{props["birth_year"]}</div>
      <div>{props.height}</div>
      <div>{props.gender}</div>
    </StyledCharacter>
  );
};

export default Character;

const StyledCharacter = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  /* font-weight: ${(pr) => pr.theme.fontWeight}; */
  font-style: ${(pr) => pr.theme.fontStyle};
  font-size: ${(pr) => pr.theme.fontSize};
  padding: ${(pr) => pr.theme.padding};
  border: ${(pr) => pr.theme.border};
  max-width: 100%;
  text-shadow: ${(pr) => pr.theme.textShadow};
  background-color: ${(pr) => pr.theme.backgroundColor};
  column-count: 4;
`;
