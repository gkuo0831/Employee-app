import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Searchbar from "./Searchbar";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Searchbar />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
