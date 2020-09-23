import React from "react";
import { Link } from "react-router-dom";

function Header_button() {

    return (
        <div>
            <Link to="/example"><button>example</button></Link>
            <Link to="/training"><button>training</button></Link>
        </div>
    );
}

export default Header_button;
