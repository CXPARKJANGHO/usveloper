import React, { useState } from "react";
import TEST from "./TEST";

function InputText() {
    const [text, setText] = useState("1");
    return (
        <div>
            <input className='ABD' value={text} />
            <button className='ABD1' onClick={test}>
                1234
            </button>
        </div>
    );
}

function test(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const a = "abc";
    console.log(event);
}

export default InputText;
