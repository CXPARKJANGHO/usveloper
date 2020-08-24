import React, { useState, useEffect, useReducer } from "react";
import BaseButton from "../base/base_button";
import "./EventApp.css";

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
    const [state, setUserInfo] = useReducer(reducer, {
        loginID: "",
        loginPW: "",
    });

    const testEvent = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setUserInfo({ type: "button" });
    };

    const onChangeTest = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ loginID: event.target.value, type: "id" });
    };

    const onChangeTest2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ loginPW: event.target.value, type: "pw" });
    };
    return (
        <div>
            ID {state.loginID}
            <input onChange={onChangeTest} />
            <br />
            Password {state.loginPW}
            <input type='Password' onChange={onChangeTest2} />
            <BaseButton name='LOGIN' onClickButton={testEvent} />
        </div>
    );
}
export default EventApp;
