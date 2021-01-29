import React from 'react'

/* 
    Show all info about an event
*/ 
const eventForm = ({
    eventInfo = {
        buz : 'buz'
    }
}) => {
    return (
        <div className='dashboard-body'>
            <h1>Dashboard</h1>
            <p id='user-prof'></p>
            <div class="container">
                <p>{ userProfile }</p>
            </div>
            <div className='businesses-container'>

            </div>
        </div>
    )
}
    
export default eventForm
    