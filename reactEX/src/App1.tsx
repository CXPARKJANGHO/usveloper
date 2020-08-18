import React, { useState } from "react";
import "./App.css";
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
function App() {
    const [text, setText] = useState<string>();
    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        textValue = event.target.value;
    };

    const Abcde = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setText(textValue);
    };
    let textValue = "";
    return <InputText text={text} onChange={onChangeText} onClick={Abcde} />;
}

export default App;
