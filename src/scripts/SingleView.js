import React from 'react'
import ReactDOM from 'react-dom'

var SingleView = React.createClass ({
    render: function () {
        return (
            <div className = 'singleItemContainer'>
                <div className = 'singleTitle'>{this.props.itemModel.get('results')[0].title}</div>
                <img src = {this.props.itemModel.get('results')[0].Images[0].url_570xN} />
                <div className = 'singleDescription'>{this.props.itemModel.get('results')[0].description}</div>
                <div className = 'singlePrice'>{this.props.itemModel.get('results')[0].price}</div>
            </div>
            )
    }
})

export default SingleView