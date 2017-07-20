import React, { Component } from 'react';
import PlayerCard from './PlayerCard';

class Offense extends Component {

    handleClick(e){
        let cls = e.currentTarget.className;
        let elems = document.getElementsByClassName(cls)[1];
        let first = e.currentTarget.firstChild;
        console.log(elems.firstChild);
        // e.currentTarget.innerHTML = document.createElement(elems.firstChild);
        // elems.innerHTML = document.createElement(first);

    }

    render(){
        return (
            <div className="Offence">
                <div className="row first">
                    <span className="WR" onClick={this.handleClick.bind(this)}><PlayerCard side="WR" number="1"/></span>
                    <span className="C" onClick={this.handleClick.bind(this)}><PlayerCard side="C" number=""/></span>
                    <span className="TE" onClick={this.handleClick.bind(this)}><PlayerCard side="TE" number=""/></span>
                </div>
                <div className="row second">
                    <span className="QB" onClick={this.handleClick.bind(this)}><PlayerCard side="QB" number=""/></span>
                    <span className="WR" onClick={this.handleClick.bind(this)}><PlayerCard side="WR" number="2"/></span>
                </div>
                <div className="row third">
                    <span className="RB"><PlayerCard side="RB" number=""/></span>
                </div>
                <div className="row forth">
                    <span className="RB"><PlayerCard side="RB" number=""/></span>
                </div>
            </div>
        )
    }
}

export default Offense;