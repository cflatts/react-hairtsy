import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Backbone from 'backbone'

var SingleView = React.createClass({


    render: function () {
        // console.log(this.props)
        return (
            <div className = 'singleView'>
                <Header />
                <div className = 'singleItemContainer'>
                    <div className = 'singleTitle'>{this.props.itemModel.get('results')[0].title}</div>
                    <img src = {this.props.itemModel.get('results')[0].Images[0].url_570xN} />
                    <div className = 'singlePrice'>{this.props.itemModel.get('results')[0].price}</div>
                </div>
            </div>
        )
    }
})

export default SingleView