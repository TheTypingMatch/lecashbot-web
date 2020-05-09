import React from 'react';
import './scss/App.scss';
import Commands from './components/Commands';

function App() {
  return (
    <div className="App">
      <h1 className="title">
        <img alt="" className="logo" src="assets/lecashbot.png" />
        <br />
        LeCashBot
      </h1>
      <br />
      <div className="info-wrap">
        <div className="about-wrap">
          LeCashBot is a Discord.js bot based on the NitroType currency.
        </div>
        <h1 className="invite">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://discordapp.com/api/oauth2/authorize?client_id=586645522614583306&permissions=134073664&scope=bot"
          >Invite</a>
        </h1>
        <Commands />
        <h1>Discord</h1>
        <div className="discord-wrap">
          <iframe 
            src="https://discordapp.com/widget?id=689241652916912138&theme=dark" 
            height="500" 
            allowtransparency="true" 
            frameBorder="0">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
