import React from 'react'
import ReactDOM from 'react-dom'

var SingleView = React.createClass ({
    render: function () {
        console.log(this.props.notKey)
        return (
            <div className = 'singleItemContainer'>
                <div className = 'singleTitle'></div>
                <img src ='' />
                <div className = 'singleDescription'></div>
                <div className = 'singlePrice'></div>
            </div>)
    }
})

export default SingleView