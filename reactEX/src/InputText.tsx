import React from "react";
// import React, { useState } from "react";

function InputText({
    text,
    onChange,
    onClick,
}: {
    text: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
    // const [text, setText] = useState<string>();
    // let textValue = "";
    // const Abcde = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     setText(textValue);
    // };
    // const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     textValue = event.target.value;
    // };

    return (
        <div>
            <h1>{text}</h1>
            <input className='ABD' onChange={onChange} />
            <button className='ABD1' onClick={onClick}>
                1234
            </button>
        </div>
    );
}
export default InputText;
