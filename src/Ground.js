/**
 * Created by admin on 7/20/17.
 */
import React, { Component } from 'react';
import Offense from './Sides/Offense';
import Defense from './Sides/Defense';

class Ground extends Component {
    render() {
        return (
            <div className="ground">
                <Defense></Defense>
                <br/>
                <hr/>
                <br/>
                <Offense></Offense>
            </div>
        )
    }
}

export default Ground;