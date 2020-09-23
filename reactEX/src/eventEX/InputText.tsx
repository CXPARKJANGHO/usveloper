import React from "react";

function InputText({
    value: text,
    onChange,
    onClick,
}: {
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
    return (
        <div>
            <h1>{text}</h1>
            <input onChange={onChange} />
            <button onClick={onClick}>{text}</button>
        </div>
    );

}
export default InputText;
