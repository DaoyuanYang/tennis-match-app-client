import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from './loginForm'
import './signup.css'

const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl.concat('/login')

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            email : null,
            password : null,
            loggedIn : false
        }
    }

    handleChange(event){
        const field = event.target.name
        const state = this.state
        state[field] = event.target.value
        this.setState({ state })
    }

    handleSubmit(event){
        const THIS = this
        event.preventDefault()
        console.log(this.state)
        axios({
            method : 'post',
            url : apiUrl,
            data: {
                email : this.state.email,
                password : this.state.password
            }
        })
        .then(function (res) {
            console.log(res.data)
            localStorage['TennisMatchAuthToken'] = res.data.token
            THIS.setState({ loggedIn : true })
        })
        .catch(e => {
            console.log(e)
        })
    }

    async componentDidMount(){
        // console.log(this.state)
        // const instance = axios.create({
        //     headers : {
        //         'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY1M2Y0OWJiOGZmYTBiMjZmMzJlOWIiLCJpYXQiOjE2MTA2MDQ0ODQsImV4cCI6MTYxMTIwOTI4NH0.1dD9JfOcVM2x3hshAsStxJ_-tgwiQP-WAzVhm7VbNyY'
        //     }
        // })
        // const users = await instance.get(apiUrl)
        // console.log(users)
        // console.log(this.state)

        // console.log(localStorage['TennisMatchAuthToken'])
    }

    render() {
        if (this.state.loggedIn){
            return (
                <Redirect to='/dashboard'></Redirect>
            )
        }
        return (
            <div>
                <LoginForm 
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                />
            </div>
        )
    }    
}

export default Login