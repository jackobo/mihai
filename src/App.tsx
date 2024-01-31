import React from 'react';
import './App.css';
import {HeaderButton} from "./header-button";
import {HeaderSearchInput} from "./header-search-input";
import {EllipsisButton} from "./ellipsis-button";

function App() {
    return (
        <div className="app">
            <div className="main-header">
                <img className="logo" src="https://www.pandabuy.com/static/img/header-logo.png" alt={"Logo Pandabuy"}/>
                <HeaderSearchInput/>
                <HeaderButton text={"More functions"} icon={<EllipsisButton/>}/>
                <HeaderButton text={"Estimation"} icon={<div>x</div>}/>
            </div>
            <div className="second-header">

            </div>
        </div>
    );
}

export default App;
