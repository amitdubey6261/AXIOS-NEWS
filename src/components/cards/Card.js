import React, { Component } from 'react'
import "./card.css"

export class Card extends Component {
    render() {
        console.log(this.props.obj.urlToImage);
        return (
            <div className="cardCon">
                <div className="imgo"><img src={this.props.obj.img} alt="not found" /></div>
                <div className="title">{this.props.obj.title}</div>
                <div className="desc">{this.props.obj.description}</div>
            </div>
        )
    }
}

export default Card     