import React from 'react'

import Event from '../components/event'


class EventList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allEvents : [
                {eventName : 'my first event'},
                {eventName : 'my second event'}
            ]

        }
    }

    render(){
        return (
            <div>
                <p>EventList : </p>
                <div>{this.state.allEvents.length === 0? <div>No event found for this buz</div> : this.state.allEvents.map(e => (
                    <div key={e.eventName}>
                        <span> {e.eventName} </span>
                        <Event eventInfo={e}></Event>
                    </div>
                ))}</div>
            </div>
        )
    
    }
}

export default EventList