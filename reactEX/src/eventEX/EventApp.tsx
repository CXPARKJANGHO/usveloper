import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./EventApp.css";
import InputText from "./InputText";
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
function EventApp() {
  const [text, setText] = useState<string>();
  let textValue = "";
  console.log("abc")
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    textValue = event.target.value;
  };

  const Abcde = () => {
    setText(textValue);
  };

  const history = useHistory();
  const onClick = () =>
    history.goBack();

  return (
    <div>
      <title>{textValue}</title>
      <InputText value={text || "0"} onChange={onChangeText} onClick={Abcde} />
      <button onClick={onClick}>back</button>
    </div>
  );
}
export default EventApp;
