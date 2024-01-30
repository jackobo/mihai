import React from 'react';
import './App.css';
import {MoreFunctionsButton} from "./more-functions-button";

function App() {
    return (
        <div className="app">
            <div className="main-header">
                <img className="logo" src="https://www.pandabuy.com/static/img/header-logo.pngx" alt={"Logo Pandabuy"}/>
                <input placeholder="Product's link or name/shop's link/PI"/>
                <MoreFunctionsButton/>
            </div>
            <div className="second-header">

            </div>
        </div>
    );
}

export default App;
