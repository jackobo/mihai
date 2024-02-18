import React from 'react';
import './App.css';
import {MainHeader} from "./header/main-header";
import {SecondaryHeader} from "./header/secondary-header";
import {TopBanner} from "./top-banner/top-banner";

function App() {
    return (
        <div className="app">
            <MainHeader/>
            <SecondaryHeader/>
            <TopBanner/>
        </div>
    );
}

export default App;
