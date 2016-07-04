import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import MultiView from './MultiView'
import SingleView from './SingleView'

const app = function() {
    //COLLECTION/MODEL

    var MultiCollection = Backbone.Collection.extend({
        url: 'https://openapi.etsy.com/v2/listings/active.js',
        _token: 'ls49cw4bk576jhmk3kyeljdf',

        parse: function(apiResponse) {

            return apiResponse.results //returns an object that has an array of objects on the results key
        }

    })

    var SingleModel = Backbone.Model.extend({
        url: function () {
            return 'https://openapi.etsy.com/v2/listings/' + this.id + '.js'
        },
        _token: 'ls49cw4bk576jhmk3kyeljdf',

        parse: function(apiResponse) {
            return apiResponse
        },

        initialize: function(id) {
            this.id = id
        }
    })

    //ROUTER

    var AppRouter = Backbone.Router.extend({
        routes: {
            'home': 'showMultiView',
            'search/:query': 'doSearch',
            'details/:id': 'showSingleView',
            '*default': 'backToHome'
        },

        showSingleView: function(id) {
            var singleModel = new SingleModel()

            singleModel.fetch({
                dataType: 'jsonp',
                data: {
                    includes: 'Images,Shop',
                    api_key: 'ls49cw4bk576jhmk3kyeljdf'
                }
            }).then(function() {
                ReactDOM.render(<SingleView itemModel = {singleModel} />, document.querySelector('.container'))
            })
        },

        showMultiView: function() {
            var multiColl = new MultiCollection() //creates new instance of MultiCollection and models key filled with an array of modelsd
            multiColl.fetch({
                dataType: 'jsonp',
                data: {
                    includes: 'Images,Shop', //parameters set on data
                    api_key: 'ls49cw4bk576jhmk3kyeljdf'
                }
            })
            ReactDOM.render(<MultiView itemsColl = {multiColl} />, document.querySelector('.container'))

        },

        doSearch: function(query) {

            var searchCollection = new MultiCollection()
            searchCollection.fetch({
                dataType: 'jsonp',
                data: {
                    includes: 'Images,Shop',
                    api_key: 'ls49cw4bk576jhmk3kyeljdf',
                    keywords: query
                }
            }).then(function(){
                ReactDOM.render(<MultiView itemsColl = {searchCollection} />, document.querySelector('.container'))
            })
        },

        backToHome: function() {
            location.hash = 'home'
        },

        initialize: function () {
            Backbone.history.start() //starts keeping track of hash changes so that rendering new views is easier
        }
    })

    var myApp = new AppRouter //creates new instance of the router

    // document.querySelector('input').addEventListener('keydown',function(evt) {
    //     var searchTerm = evt.target.value
    //     if (evt.keyCode === 13) {
    //         location.hash = 'search/' + searchTerm
    //     }
    // })

}

app()

// var rootUrl = 'https://openapi.etsy.com/v2/listings/active.js?api_key='
// var token = 'ls49cw4bk576jhmk3kyeljdf'

// //SHORTHAND QUERY SELECTOR FUNCTION

// var query = function(elementInput) {
//     return document.querySelector('elementInput')
// }