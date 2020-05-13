import React from "react";
import styled from "styled-components";

import Card from "./Card";
import { colors, mobile } from "../data/styles";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.content,
      curIndex: null,
      next: null,
      prev: null,
      forwards: true,
      paused: null
    };
  }
  componentDidMount() {
    this.setState({
      curIndex: 0,
      paused: false
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.curIndex !== this.state.curIndex) {
      this.setState({
        next:
          this.state.curIndex < this.state.images.length - 1
            ? this.state.curIndex + 1
            : 0,
        prev:
          this.state.curIndex > 0
            ? this.state.curIndex - 1
            : this.state.images.length - 1
      });
    }
    if (prevState.paused !== this.state.paused) {
      if (this.state.paused) {
        this.clearTimer();
      } else {
        this.setTimer();
      }
    }
  }
  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer = () => {
    clearInterval(this.state.timer);
  };
  setTimer = () => {
    this.setState({
      timer: setInterval(this.state.forwards ? this.next : this.prev, 2500)
    });
  };

  next = () => {
    this.setState({ curIndex: this.state.next });
  };
  prev = () => {
    this.setState({ curIndex: this.state.prev });
  };

  clickHandler = (e) => {
    e.preventDefault();
    this.setState({ forwards: e.target.name === "next" ? true : false });
    this.clearTimer();
    if (this.state.forwards) this.next();
    else this.prev();
    this.setTimer();
  };

  togglePause = (e) => {
    e.preventDefault();
    this.setState({ paused: !this.state.paused });
  };

  render() {
    return (
      <StyledCarousel
        className={`container${this.state.reversed ? " reversed" : ""}`}
      >
        <div className="carousel">
          <div className="buttons">
            <button name="prev" onClick={this.clickHandler}>
              &lt;
            </button>
            <button name="pause" onClick={this.togglePause}>
              {this.state.paused ? "Play" : "Pause"}
            </button>
            <button name="next" onClick={this.clickHandler}>
              &gt;
            </button>
          </div>
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
    background-color: ${colors.mainDark};
    color: ${colors.mainlight};
    .carousel {
      .Card > img {
        box-shadow: 0 0 40px 2px ${colors.mainMed};
      }
    }
  }
  p {
    font-family: "Ubuntu", sans-serif;
    text-align: center;
    font-weight: 700;
    font-size: 3rem;
    width: 50%;
    padding: 10vh 3%;
    @media ${mobile} {
      font-size: 1.6rem;
    }
  }
  .carousel {
    height: 100vh;
    width: 50%;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .buttons {
      position: absolute;
      bottom: 10vh;
      left: 25%;
      width: 50%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      button {
        cursor: pointer;
        font-size: 2rem;
        font-weight: 900;
        font-family: "Ubuntu", sans-serif;
        background: none;
        color: ${colors.mainFull};
        opacity: 0.5;
      }
    }
    .Card {
      height: 70vh;
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10vh;
      img {
        border-radius: 5vh;
        box-shadow: 0 0 40px 2px ${colors.mainDark};
      }
    }
  }
`;

export default Carousel;
