import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import DashboardForm from './dashboardForm'
import './signup.css'

const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl

class DashboardContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user : 'Not logged in! User profile should go here'
        }
    }

    componentDidMount(){
        this.fun()
    }

    fun () {
        this.getUserProfile()
        console.log(this.state)
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
            console.log(res.data)
            this.setState({ user : JSON.stringify(res.data) })
        })
        .catch((e) => {
            console.log(e)
        }) 
    }


    render() {
        console.log(this.state)
        return (
            <div>
                {/* <MyHeader></MyHeader> */}
                <DashboardForm 
                userProfile = { this.state.user }
                />
            </div>
        )
    }    
}

export default DashboardContainer