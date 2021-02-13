import React from 'react'
import { Redirect } from 'react-router-dom'

import MarketdayForm from './marketdayForm'

const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl.concat('/anutc-marketday-signup')

class Marketday extends React.Component {
    constructor(props){
        super(props)
        this.confEmail = this.confEmail.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            user : {
                FirstName : 'firstName',
                LastName : 'lastName',
                Email : 'email',
                isStudent : false,
                uid : 'uid'
            },
            email : {
                email1 : 'email1',
                email2 : 'email2'
            },
            emailsMatch : false,
            isSignedUp : false,
            memberIndex : -1
        }
    }

    confEmail(){
        const email1 = this.state.email.email1
        const email2 = this.state.email.email2

        const user = this.state.user
        
        if (email1 === email2){
            user.Email = email1
            this.setState( { 
                user,
                emailsMatch : true
            })
            console.log(this.state.user)
        } else {
            user.email = 'email'
            this.setState({ 
                user,
                emailsMatch : false 
            })
        }
    }

    onChange(event){
        try {
            const field = event.target.name
            if (field === 'email1' || field === 'email2'){ 
                const email = this.state.email
                email[field] = event.target.value
                this.setState({ email })
                this.confEmail() 
            } else {
                const user = this.state.user
                user[field] = event.target.value
                this.setState({ user })
            }
        } catch (e) {
            console.log(e)
        }
    }

    async onSubmit(event){
        const THIS = this
        event.preventDefault()
        const stateUser = this.state.user 
        const user = {
            FirstName : stateUser.FirstName,
            LastName : stateUser.LastName,
            Email : stateUser.Email,
            isStudent : stateUser.isStudent
        }
        if (stateUser.uid) { user.uid = stateUser.uid }
        console.log('submit!')
        console.log(user)
        axios.post(apiUrl, user)
            .then(function (res) {
                THIS.setState({ 
                    isSignedUp : true,
                    memberIndex : res.data.numOfMember 
                })
                console.log(res.data) 
            })
            .catch((e) => {
                console.log(e)
            })
    }

    render(){
        const sameEmails = {
            'color' : 'green',
            'backgroundColor' : 'rgba(119, 235, 52, 0.5)',
            'font-weight' : 'bold'
        }

        const diffEmails = {
            'color' : 'red',
            'backgroundColor' : 'rgba(255, 31, 31, 0.46)',
            'font-weight' : 'bold'
        }

        const signUpSucc = {

        }

        if (this.state.isSignedUp){
            return (
                <div >
                    <p className='signup-succ'>You have signed up to ANU Tennis Club!</p>

                    <p className='signup-succ'>For more information please follow our {<a href='https://www.facebook.com/TennisClubANU' target='_blank'>Facebook page</a>} and {<a href='https://anutennis.org/aboutus/' target='_blank'>website</a>}.</p>
                    
                    <p>You are our number {this.state.memberIndex === -1? <span style={ {'font-weight' : 'bold', 'font-size' : '200%'} }>86</span> : <span style={ {'font-weight' : 'bold', 'font-size' : '200%'} }>{this.state.memberIndex}</span>}th player who signed up for 2021!</p>
                    
                </div>
            )
        } else {
            return (
                <div>
                    <span>
                        { this.state.emailsMatch? <div style={sameEmails}>Your email is confirmed!</div> : <div style={diffEmails}>Please fill in the same email to confirm</div> }
                    </span>
                    <MarketdayForm
                        handleChange = {this.onChange}
                        handleSubmit = {this.onSubmit}
                    ></MarketdayForm>
                </div>
            )
        }
    }
} 

export default Marketday