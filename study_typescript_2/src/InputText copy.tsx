import React, { useState } from "react";

const [text, setText] = useState(0);
function InputText() {
    return (
        <div>
            <input className='ABD' value={text} />
        </div>
    );
}

export default InputText;
