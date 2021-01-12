import React, {useState} from 'react'
const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl.concat('/users')

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            users : 'all users data should go here',
            isLoaded : false
        }
    }

    async componentDidMount(){
        const users = await axios.get(apiUrl)
        console.log(users)
        this.setState({
            isLoaded : true,
            users : users
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>{!this.state.isLoaded || !this.state.users? <div>loading...</div> : <div>{this.state.users.data[0].name}</div>}</p>
                <button>Clickme</button>
            </div>
        )
    }    
}

export default Login