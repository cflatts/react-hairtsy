import React from 'react'
import ReactDOM from 'react-dom'

var SingleView = React.createClass ({
    render: function () {
        return (
            <div className = 'singleItemContainer'>
                <div className = 'singleTitle'>{this.props.itemModel.get('title')}</div>
                <div className = 'singleDescription'>{this.props.itemModel.get('description')}</div>
                <div className = 'singlePrice'>{this.props.itemModel.get('price')}</div>
            </div>)
    }
})

export default SingleView


// <div className = 'title'> {this.props.itemModel.get('title')}</div>
//                 <img src = {this.props.itemModel.get('Images')[0].url_170x135}/>
//                 <div className = 'price'>{this.props.itemModel.get('price')}</div>