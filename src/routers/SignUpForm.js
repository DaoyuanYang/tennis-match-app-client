import React from 'react'

const SignUpForm = ({
    handleChange,
    handleSubmit
}) => {
    return (
        <div className='signup-body'>
            <h1>Signup</h1>
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input type="text" name="name"  class="form-control my-input" id="name" placeholder="Name" onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email"  class="form-control my-input" id="email" placeholder="Email" onChange={handleChange}/>
                    </div>
                    
                    
                    <div class="form-group">
                        <input type="password" min="0" name="password1" id="password1"  class="form-control my-input" placeholder="Password" onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <input type="password" min="0" name="password2" id="password2"  class="form-control my-input" placeholder="Confirm Password" onChange={handleChange}/>
                    </div>


                    <div class="text-center ">
                        <button type="submit" class=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
                    </div>
                    <div class="col-md-12 ">
                        <div class="login-or">
                            <hr class="hr-or" />
                            <span class="span-or">or</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <a class="btn btn-block g-button" href="#">
                        <i class="fa fa-google"></i> Sign up with Google
                        </a>
                    </div>
                    

                    <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>. </p>
                </form>
            </div>
        </div>
    )
}
    
    export default SignUpForm
    