import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var Header = React.createClass ({
    render: function () {
        return (
            <div className = 'header'><a href = '#home'>Hairtsy</a></div>
        )
    }
})

export default Header