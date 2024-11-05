import React from 'react'
import './CSS/LoginSignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an a account? <span>Login here</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Buy continuing,i agree to the trems of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Loginsignup
