import React from 'react'

import Event from '../components/event'


class EventList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allEvents : [{eventName : 'event'}]
        }
    }

    render(){
        return (
            <div>
                <p>EventList : </p>
                <div>{this.state.allEvents.map(e => (
                    <div>
                        <span> {e.eventName} </span>
                        <Event eventInfo={e}></Event>
                    </div>
                ))}</div>
            </div>
        )
    
    }
}

export default EventList