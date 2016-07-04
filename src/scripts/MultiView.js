import React from 'react'
import ReactDOM from 'react-dom'

var MultiView = React.createClass ({
    // console.log(this)


    componentWillMount: function () {
        this.props.itemsColl.on('sync', () => {
            this.setState ({
                coll: this.props.itemsColl
            // Array of models on models attribute of child
            })
            // console.log(this.props.itemsColl)
        })
    },

    getInitialState: function() {
        return {
            coll: this.props.itemsColl
        }
    },

    render: function () {
        return (
            <div className = 'multiView'>
                <Header />
                <SearchBar />
                <ItemsContainer itemsColl = {this.state.coll} />
            </div>
            )
    }
})

var Header = React.createClass ({
    render: function () {
        return (
            <div className = 'header'><h1>Hairtsy</h1></div>
            )
    }
})

var SearchBar = React.createClass ({
    _searchForItem: function (evt) {
        if(evt.keyCode ===13) {
            location.hash = `search/${evt.target.value}`
            evt.target.value = ''
        }
    },

    render: function () {
        return (
            <input onKeyDown = {this._searchForItem} placeholder = 'What would you like to search for?'/>
            )
    }
})

var ItemsContainer = React.createClass ({

    _getJsxArray: function (listArray) {
        // console.log('listing array', listArray)
        var newJsxArray =[]
        listArray.forEach(function(item) {
            // console.log(item)
            newJsxArray.push(<Item itemModel = {item} />)
        })
        return newJsxArray
    },

    render: function () {
        return (
            <div className = 'itemContainer'>
                {this._getJsxArray(this.props.itemsColl.models)}
            </div>
            )
    }
})

var Item = React.createClass ({
    _toSingleView: function() {
        location.hash = `detail/${this.props.itemModel.get('listing_id')}`
    },

    render: function() {
        return (
            <div className = 'title'>Hello</div>
            )
    }
})

export default MultiView