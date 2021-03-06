import React, {useState} from 'react'
import { Link } from 'react-router-dom'

class MyHeader extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/signup">Signup</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">login</a>
                        </li> */}
                        <li class="nav-item">
                            <a class="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/player">Player</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                    Navbar text with an inline element
                    </span>
                </div>
            </nav>
        )
    }
}

export default MyHeader