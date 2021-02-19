import React from 'react'
import { Redirect } from 'react-router-dom'

import MarketdayForm from './marketdayForm'

const axios = require('axios')

// config serverUrl
const apiUrl = require('../config/keys').serverUrl.concat('/anutc-marketday-signup')


class GetAllMembers extends React.Component {
    constructor(props){
        super(props)
        this.exportToCsv = this.exportToCsv.bind(this)
        this.state = {
            allMembers : []
        }
    }

    async componentDidMount(){
        const allMembers = await this.getData() 
        const data = this.state.allMembers
        // console.log(data)
        this.exportToCsv(data)
    }

    async getData(){
        const THIS = this
        await axios.get(apiUrl)
        .then(function (res) {
            const data = []

            for (var obj of res.data){
                data.push(obj)    
            }

            THIS.setState({
                allMembers : data
            })
        })
        .catch((e) => {
            console.log(e)
        })
    }

    exportToCsv(data){
        const properties = ['FirstName', 'LastName', 'Email', 'uid']
    
        var rows = []
        for (var obj of data){
            var row = []
            for (var key of properties) {
                row.push(obj[key])
            }
            rows.push(row)
        }
        
    
        // to CSV
        let csvContent = "data:text/csv;charset=utf-8," 
            + rows.map(e => e.join(",")).join("\n");
    
        var encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
    }

    render(){
        return(
            <div>Get all members who signed up on marketday 2021</div>
        )
    }
}

export default GetAllMembers