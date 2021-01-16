import React from 'react'
import './login.css'

const DashboardForm = ({
    userProfile = 'user profile',
    handleSubmit
}) => {
    return (
        <div className='login-body'>
            <h1>Dashboard</h1>
            <p id='user-prof'></p>
            <div class="container">
                <p>{ userProfile }</p>
                <form onSubmit={handleSubmit}>
                    <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>. </p>
                </form>
            </div>
        </div>
    )
}
    
export default DashboardForm
    