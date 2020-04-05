import React from 'react';
import './scss/App.scss';
import Commands from './components/Commands';

function App() {
  return (
    <div className="App">
      <h1 className="title">
        <img className="logo" src="assets/lecashbot.png" />
        <br />
        LeCashBot
      </h1>
      <br />
      <div className="info-wrap">
        <div className="about-wrap">
          LeCashBot is a Discord.js bot based on the NitroType currency.
        </div>
        <Commands />
        <h1>Discord</h1>
        <div className="discord-wrap">
          <iframe src="https://discordapp.com/widget?id=689241652916912138&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
