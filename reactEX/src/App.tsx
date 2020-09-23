import React from "react";
import "./App.css";
import App1 from "./App1";
import Training from "./Training/Training";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventApp from "./eventEX/EventApp";
import EventApp2 from "./eventEX2/EventApp";
import { useState } from "react";
import Main from "./Main";
import Header_button from "./base/header_button";

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
  return (
    <div className="App">
      <Router>
        <Header_button />
        <Switch>
          <Route path="/" exact >
            <Main />
          </Route>
          <Route path="/example" exact>
            <App1 />
          </Route>
          <Route path="/training" exact>
            <Training />
          </Route>
          <Route path="/example/eventApp1" exact>
            <EventApp />
          </Route>
          <Route path="/example/eventApp2" exact>
            <EventApp2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
