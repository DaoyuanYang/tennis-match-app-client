import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import './signup.css'

import BuzList from '../components/buzList'
import EventList from '../components/eventList'
import Event from '../components/event'

const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl

class Dashboard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user : 'Not logged in! User profile should go here',
            // load all buz and with specified buz load all events 
            buzes : [],
            events : []
        }
    }

    componentDidMount(){
        this.getUserProfile()
    }

    getUserProfile(){
        const token = localStorage['TennisMatchAuthToken']
        axios({
            method : 'get',
            url : apiUrl + '/auth',
            headers : {
                Authorization : 'Bearer ' + token
            }
        })
        .then((res) => {
            this.setState({ user : JSON.stringify(res.data) })
        })
        .catch((e) => {
            console.log(e)
        }) 
    }

    getAllBuzUnderUser(){

    }

    /*
        BuzList -> getBasicProfile()
        EventList -> getDetailedProfileAllEvents() -> store as state
        Event -> read state
    */ 
    render() {
        // console.log(this.state)
        return (
            <React.Fragment>
                <div class='dashboard-container'>
                    <div class="userProfile-container">
                        <span>{ this.state.user }</span>
                        {/* Render basic user info here. Just a name for simple */}
                    </div>

                </div>
                <BuzList></BuzList>
                <EventList buz={this.state.events}></EventList>
                <Event event={this.state.events}></Event>
            </React.Fragment>
        )
    }    
}

export default Dashboard