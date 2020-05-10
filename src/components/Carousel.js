import React from "react";
import styled from "styled-components";

import Card from "./Card";
import { colors } from "../data/styles";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.content,
      curIndex: null,
      next: null
    };
  }
  componentDidMount() {
    this.setState({
      curIndex: 0
    });
    this.timer = setInterval(() => {
      this.setState({ curIndex: this.state.next });
    }, 4000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.curIndex !== this.state.curIndex) {
      this.setState({
        next:
          this.state.curIndex < this.state.images.length - 1
            ? this.state.curIndex + 1
            : 0
      });
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <StyledCarousel
        className={`container${this.state.reversed ? " reversed" : ""}`}
      >
        <div className="carousel">
          <Card img={this.state.images[this.state.curIndex]} />
        </div>
        <p>{this.state.text}</p>
      </StyledCarousel>
    );
  }
}

const StyledCarousel = styled.section`
  background-color: ${colors.mainMed};
  color: ${colors.mainDark};

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100vh;
  &.reversed {
    flex-direction: row-reverse;
  }
  p {
    font-family: "Ubuntu", sans-serif;
    font-size: 3rem;
    width: 50%;
    padding: 10vh 3%;
    text-align: center;
    font-weight: 700;
  }
  .carousel {
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .Card {
      height: 80vh;
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 5vh;
        box-shadow: 0 0 40px 2px ${colors.mainDark};
      }
    }
  }
`;

export default Carousel;
