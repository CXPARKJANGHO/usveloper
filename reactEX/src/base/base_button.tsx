import React from "react";

function base_button({
    name,
    onClickButton,
}: {
    name: string;
    onClickButton: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}) {
    return (
        <div>
            <button onClick={onClickButton}>{name}</button>
        </div>
    );
}

export default base_button;
