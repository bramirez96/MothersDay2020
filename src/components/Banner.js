import React from "react";
import styled from "styled-components";
import { colors } from "../data/styles";

const Banner = (props) => {
  const { main, text, title, pic } = props.content;
  return (
    <StyledBanner className={`banner${main ? " main" : ""}`}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      <img src={pic} alt="alt" />
    </StyledBanner>
  );
};

const StyledBanner = styled.section`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: ${colors.mainlight};
  padding: 5% 0;
  background-color: ${colors.mainFull};
  &.main {
    background-color: ${colors.mainDark};
  }
  h2 {
    font-family: "Great Vibes", cursive;
    font-size: 6em;
  }
  p {
    font-family: "Ubuntu", sans-serif;
    text-align: center;
    font-weight: 700;
    font-size: 3rem;
  }
  img {
    margin-top: 5vh;
    border-radius: 1vw;
    box-shadow: 0 0 40px 2px ${colors.mainMed};
    max-height: 60vh;
  }
`;

export default Banner;
