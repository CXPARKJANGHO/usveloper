import React from "react";
import "./App.css";
import App1 from "./App1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventApp from "./eventEX/EventApp";
import EventApp2 from "./eventEX2/EventApp";
import LoginTest from "./eventEX2/LoginTest";
import { useState } from "react";

// 기본
//* 정보
//! 경고
//? 질문
//TODO TODO
//
/**
 *
 * @param a
 */
function App() {
  const [state, setState] = useState("init");

  const afterOnClick = async () => {
    await setState("login");
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/eventApp1">
            <EventApp />
          </Route>
          <Route path="/eventApp2">
            <EventApp2 afterOnClick={afterOnClick} />
          </Route>
          <Route path="/" exact>
            <App1 />
          </Route>
          <Route path="/login">
            <LoginTest state={state} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
