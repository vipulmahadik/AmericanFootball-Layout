/**
 * Created by admin on 7/20/17.
 */
import React, { Component } from 'react';
import Offense from './Sides/Offense';
import Defense from './Sides/Defense';
import Player from './Sides/Player';

class Ground extends Component {

    constructor(){
        super();
        this.state = {
            players: [{
                S: [["Byron Jones"], [31]],
                CB: [["Chidobe Awuzie", "Jourdan Lewis"],[33, 27]],
                DL: [["David Irving", "Tyrone Crawford"],[98,  95]],
                LB: [["Sean Lee"],[5]]
            },
            {
                WR: [["Dez Bryant", "Terrance Williams"],[88,83]],
                QB: [["Dak Prescott"],[4]],
                RB: [["Ezekiel Elliot"],[21]],
                TE: [["Jason Witten"],[82]],
                C: [["Travis Frederick"],[72]]
            }],
            offense:{
                31: "Byron Jones",
                33: "Chidobe Awuzie",
                27: "Jourdan Lewis",
                98: "David Irving",
                95: "Tyrone Crawford",
                5: "Sean Lee"
            },
            defense:{
                4: "Dak Prescott",
                21: "Ezekiel Elliot",
                88: "Dez Bryant",
                83: "Terrance Williams",
                82: "Jason Witten",
                72: "Travis Frederick"
            }
        }
    }



    render() {
        return (
        <div>
            <div className="dashboard">
                <h1>Defense</h1>
                <div className="playername">
                    <Player players={this.state.offense} />
                </div>
                <br/>
                <h1>Offense</h1>
                <div className="playername">
                    <Player players={this.state.defense} />
                </div>
            </div>
            <div className="ground">
                <Defense players = {this.state.players[0]}/>
                <br/>
                <hr/>
                <br/>
                <Offense players = {this.state.players[1]}/>
            </div>
        </div>
        )
    }
}

export default Ground;