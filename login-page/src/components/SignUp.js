import React from 'react'
import Home from './Home'
import './SignIn.css'

function SignUp() {
  return (
    <div>
      <Home />
      <div >
        <form className='signin'>
        <p> Username</p>
        <input type="text" required=" "/>
        <p> Password</p>
        <input type="text" required=" "/>
        <p> Email</p>
        <input type="text" required=" " />
        <p> Date of Birth</p>
        <input type="text" required=" "/>
        <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp