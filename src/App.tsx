import React from 'react';
import './App.css';
import {MainHeader} from "./header/main-header";
import {SecondaryHeader} from "./header/secondary-header";

function App() {
    return (
        <div className="app">
            <MainHeader/>
            <SecondaryHeader/>
        </div>
    );
}

export default App;
