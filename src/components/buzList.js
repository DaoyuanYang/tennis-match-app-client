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
            allBuz : []
        }
    }

    componentDidMount(){
        this.getAllBuz()
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
            console.log(res.data)
            this.setState({ allBuz : JSON.stringify(res.data) })
        })
        .catch((e) => {
            console.log(e)
        }) 
    }

    render(){
        return (
            <React.Fragment>
                <div class='buz-container'>
                    {
                        this.state.allBuz.map(buz => (
                            <Buz buzInfo={buz}></Buz>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

    
export default BuzList
    