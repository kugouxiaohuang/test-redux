import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import Counter from "./components/Counter";
im

const store=createStore(couter);
const rootEl=document.getElementById("root");

const render=()=>ReactDOM.render(
        <Couter />,
        rootEl   
    )