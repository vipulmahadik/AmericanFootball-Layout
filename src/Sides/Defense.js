/**
 * Created by admin on 7/20/17.
 */
import React, { Component } from 'react';
import PlayerCard from './PlayerCard';

class Offense extends Component {
    render(){
        return(
            <div className="Defense">
                <div className="row S">
                    <PlayerCard side="S" number=""/>
                    <PlayerCard side="S" number=""/>
                </div>
                <div className="row CB">
                    <PlayerCard side="CB" number=""/>
                    <PlayerCard side="CB" number=""/>
                </div>
                <div className="row LB">
                    <PlayerCard side="LB" number=""/>
                    <PlayerCard side="LB" number=""/>
                </div>
                <div className="row DL">
                    <PlayerCard side="DL" number=""/>
                    <PlayerCard side="DL" number=""/>
                    <PlayerCard side="DL" number=""/>
                    <PlayerCard side="DL" number=""/>
                </div>
            </div>
        )
    }
}

export default Offense;