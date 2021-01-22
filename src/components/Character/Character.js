// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
  return (
    <StyledCharacter className="character">
      <div>{props.name}</div>
      <div>{props["birth_year"]}</div>
    </StyledCharacter>
  );
};

export default Character;

const StyledCharacter = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  font-weight: ${(pr) => pr.theme.fontWeight};
  padding: ${(pr) => pr.theme.padding};
  border: ${(pr) => pr.theme.border};
  max-width: 100%;
`;
