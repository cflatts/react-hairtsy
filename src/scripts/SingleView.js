import React from 'react'
import ReactDOM from 'react-dom'

var SingleView = React.createClass ({
    render: function () {
        console.log(this.props.itemModel.attributes)
        return (
            <div className = 'singleItemContainer'>
                <div className = 'singleTitle'>{this.props.itemModel.get('title')}</div>
                <div className = 'singleDescription'>{this.props.itemModel.get('description')}</div>
                <div className = 'singlePrice'>{this.props.itemModel.get('price')}</div>
            </div>)
    }
})

export default SingleView