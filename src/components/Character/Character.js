// Write your Character component here
import React from "react";

const Character = (props) => {
  return <StyledCharacter className="character">{props.name}</StyledCharacter>;
};

export default Character;

const StyledCharacter = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  font-weight: ${(pr) => pr.theme.fontWeight};
  display: ${(pr) => pr.theme.displayFlex};
  justify-content: ${(pr) => pr.theme.justifyContent}
`;
