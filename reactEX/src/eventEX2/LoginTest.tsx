import React from "react";
import "./EventApp.css";
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

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
function LoginTest(
) {
  const history = useHistory();
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    history.goBack();
  return (
    <div>
      LOGIN
      <button onClick={onClick}>back</button>
    </div>
  );
}
export default LoginTest;
