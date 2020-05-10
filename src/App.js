import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

import data from "./data/data";
import { colors } from "./data/styles";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      banners: data.banners,
      carousels: data.carousels,
      page: 1,
      redirect: true
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
    this.setState({ redirect: false });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ redirect: true });
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
  }
  handleKey = (e) => {
    e.preventDefault();
    const { key } = e;
    if (key === "ArrowRight") {
      this.next();
    }
    if (key === "ArrowLeft") {
      this.prev();
    }
  };
  prev = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };
  next = () => {
    if (this.state.page < 8) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  render() {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to={`/${this.state.page}`} />;
    }
    return (
      <StyledApp className="App">
        <Switch>
          <Route
            path="/1"
            render={() => {
              return <Banner content={this.state.banners.mainBanner} />;
            }}
          />

          <Route
            path="/2"
            render={() => {
              return <Banner content={this.state.banners.lifegiver} />;
            }}
          />

          <Route
            path="/3"
            render={() => {
              return <Carousel content={this.state.carousels.selfies} />;
            }}
          />

          <Route
            path="/4"
            render={() => {
              return <Carousel content={this.state.carousels.loved} />;
            }}
          />

          <Route
            path="/5"
            render={() => {
              return <Carousel content={this.state.carousels.baking} />;
            }}
          />

          <Route
            path="/6"
            render={() => {
              return <Carousel content={this.state.carousels.spirit} />;
            }}
          />

          <Route
            path="/7"
            render={() => {
              return <Banner content={this.state.banners.love} />;
            }}
          />

          <Route
            path="/8"
            render={() => {
              return <Banner content={this.state.banners.end} />;
            }}
          />
        </Switch>
        <span className="left" onClick={this.prev}>&lt;</span>
        <span className="right" onClick={this.next}>&gt;</span>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  span {
    position: absolute;
    bottom: 4px;
    background: none;
    color: ${colors.mainlight};
    opacity: .3;
    font-weight: 700;
    font-size: 3em;
    cursor: pointer;
    &.left {
      left: 7px;
    }
    &.right {
      right: 7px;
    }
  }
`;

export default App;
