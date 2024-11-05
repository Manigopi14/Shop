import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Excusive Ofeers On Your Email</h1>
        <p>Subcribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id '/>
            <button>Subcribe</button>
        </div>
    </div>

  )
}

export default NewsLetter
