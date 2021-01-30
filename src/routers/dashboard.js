import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import './signup.css'

import BuzList from '../components/buzList'

const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl

class Dashboard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user : 'Not logged in! User profile should go here',
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
            </React.Fragment>
        )
    }    
}

export default Dashboard