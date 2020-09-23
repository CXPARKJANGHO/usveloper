import React, { useReducer } from "react";
import BaseButton from "../base/base_button";
import "./EventApp.css";
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import { UserInfo, Action, State } from "../model/Model";

function reducer(state: UserInfo, action: Action): UserInfo {
  switch (action.type) {
    case "id":
      return { loginID: action.loginID, loginPW: state.loginPW };
    case "pw":
      return { loginID: state.loginID, loginPW: action.loginPW + "pw" };
    default:
      return { loginID: "error", loginPW: "error" };
  }
}

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
function EventApp(
) {
  const [props, setUserInfo] = useReducer(reducer, {
    loginID: "",
    loginPW: "",
  });

  const history = useHistory();
  const testEvent = async () => {
    await setUserInfo({ type: "button" });
    history.push("login");
  };

  const onClick = () =>
    history.goBack();
  const onChangeTest = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ loginID: event.target.value, type: "id" });
  };

  const onChangeTest2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ loginPW: event.target.value, type: "pw" });
  };
  return (
    <div>
      ID {props.loginID}
      <input onChange={onChangeTest} />
      <br />
      Password {props.loginPW}
      <input type="Password" onChange={onChangeTest2} />
      <BaseButton name="LOGIN" onClickButton={testEvent} />
      <button onClick={onClick}>back</button>
    </div>
  );
}
export default EventApp;
