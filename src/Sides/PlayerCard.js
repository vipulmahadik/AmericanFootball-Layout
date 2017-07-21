/**
 * Created by admin on 7/20/17.
 */
import React, { Component } from 'react';

class PlayerCard extends Component {
    componentWillMount(){
        console.log(this.props.player);
    }



    handleClick(e){
        let ele = document.getElementById(e);
        ele.classList.add('highlight');
        setTimeout(()=>{
            ele.classList.remove('highlight');
        },1000);
    }



    render(){
        let temp ="";
        if(this.props.player){
            temp = this.props.player.map((p,i) => {
                return (
                    <span key={i}>
                        <input type="radio"
                               name={this.props.number[i]}
                               onClick={this.handleClick.bind(this,this.props.number[i])}/>
                        {this.props.number[i]}
                        <br/>
                    </span>
                )
            });
        }
        return(
            <div className="card">
                <p>{this.props.side}</p>
                <div className={
                    this.props.team==="D"? 'nameno up': 'nameno down'
                }>
                    {temp}
                </div>
            </div>
        )
    }
}

export default PlayerCard;