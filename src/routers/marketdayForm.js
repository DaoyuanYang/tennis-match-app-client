import React from 'react'

const MarketdayForm = ({
    handleChange,
    handleSubmit
}) => {
    return (
        <div className='signup-body'>
            <h1>Welcome to ANUTC 2021 Marketday</h1>
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input type="text" name="FirstName"  class="form-control my-input" id="FirstName" placeholder="First Name" onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                        <input type="text" name="LastName"  class="form-control my-input" id="LastName" placeholder="Last Name" onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                        <input type="email" name="email1"  class="form-control my-input" id="email1" placeholder="Email" onChange={handleChange}/>
                    </div>
                    
                    <div class="form-group">
                        <input type="email" name="email2"  class="form-control my-input" id="email2" placeholder="Confirm Your Email" onChange={handleChange}/>
                    </div>

                    <div class="text-center ">
                        <button type="submit" class=" btn btn-block send-button tx-tfm">Signup For ANU Tennis Club</button>
                    </div>                    

                    <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>. </p>
                </form>
            </div>
        </div>
    )
}
    
    export default MarketdayForm
    