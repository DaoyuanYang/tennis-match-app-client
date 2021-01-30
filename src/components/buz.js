import React from 'react'

import EventList from '../components/eventList'

/* 
    Show all info about a buz
*/ 
class Buz extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            buzInfo : {
                buz_id : 'buz_id'
            }
        }
    }

    render(){
        return (
            <div>
                <p>Buz : </p>
                <EventList
                    buz_id = {this.state.buzInfo.buz_id}
                ></EventList>
            </div>
        )
    }
}

    
export default Buz
    