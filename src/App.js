import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { setRedirect, setPage } from "./actions/actions";

import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

import { colors } from "./data/styles";

const App = (props) => {
  const { setPage, setRedirect, page, data, redirect } = props;
  const prev = () => {
    setPage("PREV");
  };
  const next = () => {
    setPage("NEXT");
  };
  const handleKey = (e) => {
    e.preventDefault();
    const { key } = e;
    if (key === "ArrowRight") {
      next();
    }
    if (key === "ArrowLeft") {
      prev();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    setRedirect(false);
    return () => {
      document.removeEventListener("keydown", handleKey);
      setRedirect(true);
    };
  }, []);

  if (redirect) {
    setRedirect(false);
    return <Redirect to={`/${page}`} />;
  } else {
    return (
      <StyledApp className="App">
        <Switch>
          {data.map((item, i) => {
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
        <span className="left" onClick={prev}>
          &lt;
        </span>
        <span className="right" onClick={next}>
          &gt;
        </span>
      </StyledApp>
    );
  }
};

const StyledApp = styled.div`
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  span {
    font-family: "Ubuntu", sans-serif;
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

const mapStateToProps = (state) => {
  const { data, page, redirect } = state;
  return { data, page, redirect };
};

export default connect(mapStateToProps, { setRedirect, setPage })(App);
