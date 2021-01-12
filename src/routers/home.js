import React from 'react'
const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl.concat('/users')


class MyClass extends React.Component {  
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
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
        <h1>Home</h1>
        <button className='square' onClick={() => this.handleClick()}>
          {this.props.value} Click me!
        </button>
      </div>
    )
  }
}

export default MyClass;