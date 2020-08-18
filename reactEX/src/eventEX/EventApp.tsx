import React, { useState, useEffect } from "react";
import "./EventApp.css";
import InputText from "./InputText";
import UseEffectEX from "./UseEffectEX";
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

    let buttons;
    useEffect(() => {
        console.log(textValue);
        buttons = addButtonFunction(textValue || "0");
    });

    return (
        <div>
            <InputText
                text={text || "0"}
                onChange={onChangeText}
                onClick={Abcde}
            />
            ,{/* <UseEffectEX itemID={textValue} /> */}
            App
            {buttons}
        </div>
    );
}

function addButtonFunction(itemID: string) {
    // function addButtonFunction({ itemID }: { itemID: string }) {
    return <button itemID={itemID} />;
}

export default EventApp;
