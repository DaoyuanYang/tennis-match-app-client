import logo from './logo.svg';
import './App.css';
import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './routers/home'
import SignUpContainer from './routers/SignUpContainer'
import LoginContainer from './routers/loginContainer'
import dashboardContainer from './routers/dashboardContainer'

class App extends React.Component {
  constructor(props){
    super(props)
    this.setAuthToken = this.setAuthToken.bind(this)
    this.state = {
      token : null
    }
  }


  setAuthToken(authToken){
    const bearer = 'Bearer '
    const token = bearer.concat(authToken)
    this.state.token = token
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={SignUpContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/dashboard' component={dashboardContainer} />
        </Switch>
      </Router>
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