/**
 * Created by admin on 7/20/17.
 */
import React, { Component } from 'react';

class Player extends Component {

    constructor(){
        super();
        this.state = {
            op:""
        }
    }

    componentWillMount(){
        let players = this.props.players;
        let op = [];
        for(let p in players){
            let a = <p id={p} >{"00".substring(0, 2 - p.length) + p}  {players[p]}</p>;
            op.push(a);
        }
        this.setState({
            op : op
        })
    }
    render(){
        return(
            <div>
                {this.state.op}
            </div>
        )
    }
}

export default Player;