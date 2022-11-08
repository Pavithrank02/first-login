import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
        <Link to='/signUp'>
            SignUp
          </Link>
        </li>
        <li>
        <Link to='/signIn'>
            SignIn
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home