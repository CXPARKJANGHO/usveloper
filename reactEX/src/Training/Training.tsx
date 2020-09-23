import React from "react";
import "../App.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

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
function Training() {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <div className="Training">
      gogogogogo

      <button onClick={goBack}>back</button>
    </div>
  );
}
export default Training;
