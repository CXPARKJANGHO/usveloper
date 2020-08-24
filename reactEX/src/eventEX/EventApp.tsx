import React, { useState, useEffect } from "react";
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

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        textValue = event.target.value;
    };

    const Abcde = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setText(textValue);
    };

    return (
        <div>
            <title>{textValue}</title>
            <InputText
                value={text || "0"}
                onChange={onChangeText}
                onClick={Abcde}
            />
        </div>
    );
}
export default EventApp;
