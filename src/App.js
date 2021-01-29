import logo from './logo.svg';
import './App.css';
import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Home from './routers/home'
import Signup from './routers/signup'
import Login from './routers/login'
import Dashboard from './routers/dashboard'

import MyHeader from './components/header'


const axios = require('axios')

// config serverUrl
const apiUrl = require('./config/keys').serverUrl


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      token : null
    }
  }

  async loggedIn(){
    const token = localStorage['TennisMatchAuthToken']
    var rtn = false
    await axios({
      method : 'get',
      url : apiUrl + '/auth',
      headers : {
          Authorization : 'Bearer ' + token
      }
    })
    .then((res) => {
        console.log(res.data)
        rtn = true
    })
    .catch((e) => {
        console.log(e)
    }) 

    console.log(rtn)
    return rtn
  }

  render() {
    return (
      <div>
        <MyHeader />
        <Router>
          <Switch>
            {/* <Route path='/' exact >
              {this.loggedIn()? <Redirect to='/dashboard'></Redirect> : <Home></Home> }
            </Route> */}

            <Route path='/' exact component={Home}></Route>

            <Route path='/signup' component={Signup}></Route>

            <Route path='/login' component={Login}></Route>
            
            <Route path='/dashboard' >
              {this.loggedIn()? <Dashboard></Dashboard> : <Redirect to='/'></Redirect> }
            </Route>

            <Route path='/player/:id' >
              {this.loggedIn()? <Home></Home> : <Redirect to='/'></Redirect> }
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;






  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );