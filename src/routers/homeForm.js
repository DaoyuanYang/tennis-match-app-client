import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const HomeForm = ({
    routeChange
}) => {
    return (
        <div className='login-body'>
            <h1>login</h1>
            <div class="container">
                    <div class="text-center ">
                        <Link to='/signup'>

                            <button type="signup" class=" btn btn-block send-button tx-tfm" >
                                Don't have an account yet? Signup here
                                
                            </button>
                        </Link>
                    </div>

                    <div class="text-center ">
                        <Link to='/login'>
                            <button type="login" class=" btn btn-block send-button tx-tfm" >
                                Already have an account? Login here
                            </button>
                        </Link>
                    </div>

                    <div class="col-md-12 ">
                        <div class="login-or">
                            <hr class="hr-or" />
                            <span class="span-or">or</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <a class="btn btn-block g-button" href="#">
                        <i class="fa fa-google"></i> Login with Google
                        </a>
                    </div>
                    

                    <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>. </p>
            </div>
        </div>
    )
}
    
export default HomeForm
    