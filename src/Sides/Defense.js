/**
 * Created by admin on 7/20/17.
 */
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
        return(
            <div className="Defense">
                <div className="row S">
                    <PlayerCard team="D" side="S" player={this.state.players['S'][0]} number={this.state.players['S'][1]}/>
                    <PlayerCard team="D" side="S" player={this.state.players['S'][0]} number={this.state.players['S'][1]}/>
                </div>
                <div className="row CB">
                    <PlayerCard team="D" side="CB" player={this.state.players['CB'][0]} number={this.state.players['CB'][1]}/>
                    <PlayerCard team="D" side="CB" player={this.state.players['CB'][0]} number={this.state.players['CB'][1]}/>
                </div>
                <div className="row LB">
                    <PlayerCard team="D" side="LB" player={this.state.players['LB'][0]} number={this.state.players['LB'][1]}/>
                    <PlayerCard team="D" side="LB" player={this.state.players['LB'][0]} number={this.state.players['LB'][1]}/>
                </div>
                <div className="row DL">
                    <PlayerCard team="D" side="DL" player={this.state.players['DL'][0]} number={this.state.players['DL'][1]}/>
                    <PlayerCard team="D" side="DL" player={this.state.players['DL'][0]} number={this.state.players['DL'][1]}/>
                    <PlayerCard team="D" side="DL" player={this.state.players['DL'][0]} number={this.state.players['DL'][1]}/>
                    <PlayerCard team="D" side="DL" player={this.state.players['DL'][0]} number={this.state.players['DL'][1]}/>
                </div>
            </div>
        )
    }
}

export default Offense;