import React, { Component } from 'react';
import PlayerCard from './PlayerCard';

class Offense extends Component {
    constructor(){
        super();
        this.state = {
            players: ""
        }
    }
    componentWillMount(){
        this.setState({
            players : this.props.players
        })
    }

    render(){
        return (
            <div className="Offence">
                <div className="row first">
                    <span className="WR"><PlayerCard team="O" side="WR" player={this.state.players['WR'][0]} number={this.state.players["WR"][1]} /></span>
                    <span className="C"><PlayerCard team="O" side="C" player={this.state.players['C'][0]} number={this.state.players['C'][1]} /></span>
                    <span className="TE"><PlayerCard team="O" side="TE" player={this.state.players['TE'][0]} number={this.state.players['TE'][1]} /></span>
                </div>
                <div className="row second">
                    <span className="QB"><PlayerCard team="O" side="QB" player={this.state.players['QB'][0]} number={this.state.players['QB'][1]} /></span>
                    <span className="WR"><PlayerCard team="O" side="WR" player={this.state.players['WR'][0]} number={this.state.players["WR"][1]} /></span>
                </div>
                <div className="row third">
                    <span className="RB"><PlayerCard team="O" side="RB" player={this.state.players['RB'][0]} number={this.state.players['RB'][1]} /></span>
                </div>
                <div className="row forth">
                    <span className="RB"><PlayerCard team="O" side="RB" player={this.state.players['RB'][0]} number={this.state.players['RB'][1]} /></span>
                </div>
            </div>
        )
    }
}

export default Offense;