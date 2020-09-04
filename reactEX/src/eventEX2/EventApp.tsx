import React, { useState, useEffect, useReducer } from "react";
import BaseButton from "../base/base_button";
import "./EventApp.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginTest from "./LoginTest";

function reducer(state: any, action: any) {
    switch (action.type) {
        case "id":
            return { loginID: action.loginID };
        case "pw":
            return { loginPW: action.loginPW + "pw" };
        default:
            return { loginID: "error", loginPW: "error" };
    }
}

//     state: { value, setState },
// }: {
//     state: {
//         value: string;
//         setState: React.Dispatch<React.SetStateAction<string>>;
//     };
// }) {
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
function EventApp({ afterOnClick }: { afterOnClick: () => void }) {
    const [props, setUserInfo] = useReducer(reducer, {
        loginID: "",
        loginPW: "",
    });
    const testEvent = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        await setUserInfo({ type: "button" });
        // setState("login");
        await afterOnClick();
    };

    const onChangeTest = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ loginID: event.target.value, type: "id" });
    };

    const onChangeTest2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ loginPW: event.target.value, type: "pw" });
    };
    return (
        <div>
            ID {props.loginID}
            <input onChange={onChangeTest} />
            <br />
            Password {props.loginPW}
            <input type='Password' onChange={onChangeTest2} />
            {/* <BaseButton name='LOGIN' onClickButton={testEvent} /> */}
            <Router>
                <div className='test'>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/main'>
                                    <BaseButton
                                        name='LOGIN'
                                        onClickButton={testEvent}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        </div>
    );
}
export default EventApp;
