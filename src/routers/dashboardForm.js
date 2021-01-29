import React from 'react'
import './login.css'

/*
    put everything to do with buz, template, match in this form
*/

const DashboardForm = ({
    userProfile = 'user profile',
    handleSubmit
}) => {
    return (
        <div className='dashboard-body'>
            <h1>Dashboard</h1>
            <p id='user-prof'></p>
            <div class="userProfile container">
                <p>{ userProfile }</p>
                {/* Render basic user info here. Just a name for simple */}
            </div>
            <div className='buz-container'>
                {/* Render all buzes here */}
                <div className='event-container'>
                    {/* Render all events here */}
                </div>
            </div>
        </div>
    )
}
    
export default DashboardForm
    