import React, { useEffect, useState } from "react";

function UseEffectEX() {
    const [count, setCount] = useState(0);
    let item = count;
    useEffect(() => {
        document.title = count.toString();
        // item = count;
        // setCount(count + 1);
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(item);
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    });

    return (
        <div>
            useeffect{item}
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {item}
            </button>
        </div>
    );
}

export default UseEffectEX;
