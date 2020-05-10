import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

import data from "./data/datav2";
import { colors } from "./data/styles";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
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
          {this.state.data.map((item, i) => {
            return item.type === "banner" ? (
              <Route path={`/${i + 1}`}>
                <Banner content={item} />
              </Route>
            ) : item.type === "carousel" ? (
              <Route path={`/${i + 1}`}>
                <Carousel content={item} />
              </Route>
            ) : null;
          })}
        </Switch>
        <span className="left" onClick={this.prev}>
          &lt;
        </span>
        <span className="right" onClick={this.next}>
          &gt;
        </span>
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
    opacity: 0.3;
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
