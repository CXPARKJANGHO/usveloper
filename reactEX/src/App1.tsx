import React, { useState } from "react";
import "./App.css";
import InputText from "./InputText";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

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
function App1() {
  const [text, setText] = useState<string>();
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    textValue = event.target.value;
  };

  const Abcde = () => {
    setText(textValue);
  };
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }
  let textValue = "";
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example/eventApp1">eventApp1</Link>
          </li>
          <li>
            <Link to="/example/eventApp2">
              <button>eventApp2</button>
            </Link>
          </li>
        </ul>
      </nav>
      <InputText text={text} onChange={onChangeText} onClick={Abcde} />
      <button onClick={goBack}>back</button>
    </div>
  );
}

export default App1;
