import React from 'react'

import Event from '../components/event'


class EventList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allEvents : [{eventName : 'all buz should go here'}]
        }
    }

    render(){
        return (
            <div>{this.state.allEvents.map(e => (
                <div>
                    <span> {e.eventName} </span>
                    <Event eventInfo={e}></Event>
                </div>
            ))}</div>
        )
    
    }
}

export default EventList