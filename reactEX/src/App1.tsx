import React, { useState } from "react";
import "./App.css";
import InputText from "./InputText";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  const [text, setText] = useState<string>();
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    textValue = event.target.value;
  };

  const Abcde = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setText(textValue);
  };
  let textValue = "";
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/eventApp1">eventApp1</Link>
          </li>
          <li>
            <Link to="/eventApp2">
              <button>eventApp2</button>
            </Link>
          </li>
        </ul>
      </nav>
      <InputText text={text} onChange={onChangeText} onClick={Abcde} />
    </div>
  );
}

export default App;
