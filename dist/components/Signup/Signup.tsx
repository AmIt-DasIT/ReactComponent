import React from 'react'
import './Signup.css'

export default function Signup() {
    return (
        <div className='container'>
            <div className='form'>
                <div className='tag'>SignUp</div>
                <div className='inputBox'>
                    <i className="fa fa-regular fa-user"></i>
                    <input type='text' required={true} />
                    <span>username</span>
                </div>
                <div className='inputBox'>
                    <i className="fa fa-regular fa-envelope"></i>
                    <input type='text' required={true} />
                    <span>email address</span>
                </div>
                <div className='inputBox'>
                    <i className="fa fa-solid fa-lock"></i>
                    <input type='text' required={true} />
                    <span>create password</span>
                </div>
                <div className='inputBox'>
                    <i className="fa fa-solid fa-lock"></i>
                    <input type='text' required={true} />
                    <span>confirm password</span>
                </div>
                <div className='inputBox'>
                    <input type='submit' value={'Create Account'} />
                </div>
            </div>
        </div>
    )
}
