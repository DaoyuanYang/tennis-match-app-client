import React from 'react'
import { Redirect } from 'react-router-dom'

import MarketdayForm from './marketdayForm'

const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl.concat('/anutc-marketday-signup')

class Marketday extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            user : {
                FirstName : 'firstName',
                LastName : 'lastName',
                Email : 'email'
            },
            email : {
                email1 : 'email1',
                email2 : 'email2'
            }
        }
    }

    handleChange(event){
        try {
            const field = event.target.name
            const user = this.state.user
            user[field] = event.target.value
            
            this.setState({
                user
            })
            console.log(this.state)
        } catch (e) {
            console.log(e)
        }
    }

    async handleSubmit(event){
        const THIS = this
        event.preventDefault()
        const stateUser = this.state.user 
        const user = {
            FirstName : stateUser.FirstName,
            LastName : stateUser.LastName,
            Email : stateUser.Email
        }
        console.log('submit!')
        axios.post(apiUrl, user)
            .then(function (res) {
                console.log(res.data) 
            })
            .catch((e) => {
                console.log(e)
            })
    }

    render(){
        return (
            <MarketdayForm
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            ></MarketdayForm>
        )
    }
} 

export default Marketday