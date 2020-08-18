import React, { useState, useEffect } from "react";
import UseEffectEX from "./UseEffectEX";
// import React, { useState } from "react";

function InputText({
    text,
    onChange,
    onClick,
}: // eventTest2,
{
    text: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    // eventTest2: (itemID: string) => any;
}) {
    // const [text, setText] = useState<string>();
    // let textValue = "";
    // const Abcde = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     setText(textValue);
    // };
    // const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     textValue = event.target.value;
    // };

    // useEffect(() => {
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
    //     console.log(text);

    //     text = !text ? "0" : text;

    //     console.log(text);
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
    // });
    return (
        <div>
            <h1>{text}</h1>
            <input className='ABD' onChange={onChange} />
            <button className='ABD1' onClick={onClick}>
                {text}
            </button>

            <UseEffectEX />
        </div>
    );

    function eventTest(itemID: string): any {
        return;
    }
}
export default InputText;
