import React from 'react'
import { Redirect } from 'react-router-dom'
import './signup.css'
import SignUpForm from './SignUpForm'
const axios = require('axios')
const apiUrl = require('../config/keys').serverUrl

class SignUpContainer extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.init = {
            name : 'name',
            email : 'email',
            password : 'password'
        }
        this.state = {
            signupSuccess : false, 
            user : {
                name : 'name',
                email : 'email',
                password1 : 'password1',
                password2 : 'password2'
            }        
        }
    }
    
    handleChange(event){
        const field = event.target.name
        const user = this.state.user
        user[field] = event.target.value
        
        this.setState({
            user
        })
    }
    
    async handleSubmit(event){
        const THIS = this
        event.preventDefault()
        const stateUser = this.state.user 
        const user = {
            name : stateUser.name,
            email : stateUser.email,
            password : stateUser.password1
        }
        console.log('submit!')
        axios.post(apiUrl.concat('/users'), user)
            .then(function (res) {
                console.log(res.data)
                localStorage['TennisMatchAuthToken'] = res.data.token      
                THIS.setState({ signupSuccess : true })     
            })
    }
    
    isValidInfo(){
        const init = this.init
        const user = this.state.user
        if (init.name === user.name || init.email === user.email || init.password === user.password) {
            console.log('false')
            return false
        }
        
        return true
    }

    render(){
        if (this.state.signupSuccess) {
            return (
                <Redirect to='/dashboard'></Redirect>
            )
        }
        return (
            <div>
                <SignUpForm 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                />
            </div>
        )
    }
}

export default SignUpContainer