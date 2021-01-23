import React from 'react'
import { Redirect } from 'react-router-dom'
import HomeForm from './homeForm'
const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl.concat('/users')


class Home extends React.Component {  
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log(this.props)
    // this.getAllUsers()
  }

  getAllUsers(){
    console.log('handle click')
    axios.get(apiUrl)
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <HomeForm >

        </HomeForm>
      </div>
    )
  }
}

export default Home;