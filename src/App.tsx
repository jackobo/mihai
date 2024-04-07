import React from 'react';
import './App.css';
import {MainHeader} from "./header/main-header";
import {SecondaryHeader} from "./header/secondary-header";
import {TopBanner} from "./top-banner/top-banner";
//import {BannersContainer} from "./bannners/banners-container";
import {GuessGameComponent} from "./guess-game/components/guess-game.component";
import {IncrementButtonComponent} from "./consolidare/increment-button.component";
import {OptionButtonsComponent} from "./option-buttons/option-buttons.component";


function App() {

    return (
        <div className="app">
            <MainHeader/>
            <SecondaryHeader/>
            <TopBanner/>
            {/*<BannersContainer/>*/}
            <GuessGameComponent/>
            <IncrementButtonComponent/>
            <OptionButtonsComponent/>
        </div>
    );
}

export default App;
