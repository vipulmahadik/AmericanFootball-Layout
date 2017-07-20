/**
 * Created by admin on 7/20/17.
 */
import React, { Component } from 'react';

class PlayerCard extends Component {
    render(){
        return(
            <div className="card">
                <div className="label name"><p>Name</p></div>
                <span className="label position">{this.props.side}</span>
                <span className="label number">{this.props.number}</span>
            </div>
        )
    }
}

export default PlayerCard;