import React from 'react'
import ReactDOM from 'react-dom'

var SingleView = React.createClass({


    render: function () {
        // console.log(this.props)
        return (
            <div className = 'singleItemContainer'>
                <Header />
                <div className = 'singleTitle'>{this.props.itemModel.get('results')[0].title}</div>
                <img src = {this.props.itemModel.get('results')[0].Images[0].url_570xN} />
                <div className = 'singlePrice'>{this.props.itemModel.get('results')[0].price}</div>
                <Description/>
            </div>
        )
    }
})

var Description = React.createClass({

})

export default SingleView