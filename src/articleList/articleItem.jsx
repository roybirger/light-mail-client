import React from 'react';

import { articleRemove } from './articleListActions'

const { Component } = React

export class ArticleItem extends Component {
    
    onRemove() {
        this.props.store.dispatch(new articleRemove(this.props.item.id));
    }

    render() {
        return (
            <div style={{
                "borderBottom": "1px dotted #b4b4b4", 
                "marginBottom": "10px",
                "padding": "0 0 10px 110px",
                "display": "block",
                "height": "75px"
                }}>
                <a href={this.props.item.contentUrl} style={{
                    "color": "#dc4e00",
                    "textDecoration": "none",
                    "display": "inline"
                    }}>
                    <h1 style={{
                        "fontSize": "16px",
                        "fontWeight": "normal",
                        "margin": 0,
                        "fontFamily": "Arial, sans-serif",
                        "display": "inline"
                    }}>{this.props.item.title}</h1>
                    <img src={this.props.item.img} style={{
                        "float": "left",
                        "marginLeft": "-110px",
                        "width": "100px",
                        "height": "75px"
                    }} alt=''/>
                </a>
                <button onClick={this.onRemove.bind(this)} style={{
                        "marginLeft": "50px"
                    }}>Remove</button>
            </div>
        )
    }
}