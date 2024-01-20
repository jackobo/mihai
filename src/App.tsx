import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">

        <ul className="lista">
            <li>mere</li>
            <li>pere</li>
            <li>gutui</li>
            <li>prune</li>
            <li>struguri</li>
        </ul>
        <ul className="lista speciala">
            <li>mere</li>
            <li className={"speciala"}>pere</li>
            <li>gutui</li>
            <li>prune</li>
            <li>struguri</li>
            <div>
                <div className={"speciala"}>nepot special</div>
            </div>
        </ul>


        <ul className="lista speciala">
            <li>mere</li>
            <li className={"speciala"}>pere</li>
            <li>gutui</li>
            <li>prune</li>
            <li>struguri</li>
            <div>
                <div className={"speciala"}>nepot special</div>
            </div>
        </ul>

    </div>
  );
}

export default App;
