import React from 'react'

/* 
    Show all info about a buz
*/ 
const eventForm = ({
    buzInfo = {
        owenr : 'owner'
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
    