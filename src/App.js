import React from "react";
import styled from "styled-components";

import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

import data from "./data/data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      banners: data.banners,
      carousels: data.carousels
    };
  }
  componentDidMount() {}
  render() {
    return (
      <StyledApp className="App">
        <Banner content={this.state.banners.mainBanner} />
        <Banner content={this.state.banners.lifegiver} />
        <Carousel content={this.state.carousels.selfies} />
        <Carousel content={this.state.carousels.loved} />
        <Carousel content={this.state.carousels.baking} />
        <Carousel content={this.state.carousels.spirit} />
        <Banner content={this.state.banners.love} />
        <Banner content={this.state.banners.end} />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
`;

export default App;
