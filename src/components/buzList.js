import React, { Component } from 'react'

import Buz from '../components/buz'

const axios = require('axios')


// config serverUrl
const apiUrl = require('../config/keys').serverUrl

/* 
    Show all info about a buz
*/ 
class BuzList extends Component{
    constructor(props){
        super(props)
        this.getAllBuz = this.getAllBuz.bind(this)
        this.state = {
            allBuz : [1,2]
        }
    }

    async componentDidMount(){
        await this.getAllBuz()
    }

    async getAllBuz(){
        const token = localStorage['TennisMatchAuthToken']
        await axios({
            method : 'get',
            url : apiUrl + '/buz',
            headers : {
                Authorization : 'Bearer ' + token
            }
        })
        .then((res) => {
            if (res.data !== '' && res.data !== null && res.data.length !== 0) {
                console.log(res.data)
                this.setState({ allBuz : JSON.stringify(res.data) })
            }
        })
        .catch((e) => {
            console.log(e)
        }) 
    }

    render(){
        console.log(this.state.allBuz )
        return (
            <React.Fragment>
                <p>BuzList : </p>
                <div class='buz-container'>
                    {this.state.allBuz.map(buz => (
                            <Buz buzInfo={buz}></Buz>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

    
export default BuzList
    