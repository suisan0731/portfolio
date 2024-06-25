import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import './css/index.css';
import App from './component/App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </Router>
    </StrictMode>
);


/*
if-else文の代わりに三項演算子を使う
{(条件) && trueの時に返される式}でtrue && 式なら式を、false && 式 ならfalseを返す
*/