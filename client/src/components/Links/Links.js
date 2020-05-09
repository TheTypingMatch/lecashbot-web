import React from 'react';
import './Links.scss';

function Links() {
  return (
    <div className="Links">
        <a 
            className="link link__github"
            href="https://github.com/TheTypingMatch/le-cash-bot"
            target="_blank"
        >
            <img 
                className="img img__github"
                height="75"
                src="https://i.imgur.com/YoTSl7y.png"
                alt="LeCashBot"
            />
        </a>
    </div>
  );
}

export default Links;
