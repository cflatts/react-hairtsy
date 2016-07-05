import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import $ from 'jquery'

Backbone.$ = $

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
        if(evt.keyCode === 13) {
            location.hash = 'search/' + evt.target.value
            evt.target.value = ''
        }
        console.log(evt)
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
            newJsxArray.push(<Item itemModel = {item} />
            )
        })
        // console.log(newJsxArray)
        return newJsxArray
    },

    render: function () {
        return (
            <div className = 'allContainer'>
                {this._getJsxArray(this.props.itemsColl.models)}
            </div>
            )
    }
})

var Item = React.createClass ({

    _toSingleView: function() {
        location.hash= 'details/' + this.props.itemModel.get('listing_id')
    },

    render: function() {
        return (
            <div className = 'itemContainer' onClick = {this._toSingleView}>
                <div className = 'title'> {this.props.itemModel.get('title')}</div>
                <img src = {this.props.itemModel.get('Images')[0].url_170x135}/>
                <div className = 'price'>{this.props.itemModel.get('price')}</div>

            </div>
            )
    }
})

export default MultiView