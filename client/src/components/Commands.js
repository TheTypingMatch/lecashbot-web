import React from 'react';
import '../scss/Commands.scss';

class Commands extends React.Component {
    constructor() {
        super();
        this.state = {
            commands: [{
                name: 'ERROR', 
                desc: 'Unable to fetch commands.'
            }]
        }
    }
    componentDidMount() {
        const commands = require('../commands')
        this.setState({ commands: commands })
    }
    render() {
        let cmds = this.state.commands.map(cmd => <li><code>${cmd.name}</code> - {cmd.desc}</li>);
        
        return <div className="Commands">
            <h1>Commands</h1>
            <div className="commands-wrap">{cmds}</div>
        </div>
    }
}

export default Commands;
