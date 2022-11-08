import React from 'react'
import {Link} from 'react-router-dom'
import { IconButton } from "@mui/material";
import './SignIn.css'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Home from './Home';

function SignIn() {
  return (
    <div>
      <Home />
    <div className='signin'>
          
          <IconButton>
              <AccountCircleRoundedIcon sx={{ fontSize: 70 }} />
            </IconButton>
            <p> Username</p>
            <input type="text" />
            <p> Password</p>
            <input type="text" />
            <button>Login</button>
        </div>
    </div>
    
  )
}

export default SignIn