import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
function Main() {
  return (
    <div className="main">
      <Link to="/example">example</Link>
      <br />
      <Link to="/training">training</Link>
    </div>
  );
}
export default Main;
