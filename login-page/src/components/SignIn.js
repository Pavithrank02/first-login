import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IconButton } from "@mui/material";
import formValues from './SignUp';
import './SignIn.css'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Home from './Home';

function SignIn() {
  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
  });
  const [inputValues, setInputValues] = useState([]);
  const submitButton = () => {
    setInputValues((prevInputValues) => [...prevInputValues, initialValues]);
    formVal();
  }
  
  useEffect(() => {
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
    
  }, [inputValues]);

  const formVal = () => {
    const val = localStorage.getItem("formValues", JSON.stringify(formValues));
    // console.log("values", inputValues);
    if (val !== inputValues) {
      console.log("done");
    }
  }
 

  return (
    <div>
      <Home />
      <div className='signin'>

        <IconButton>
          <AccountCircleRoundedIcon sx={{ fontSize: 70 }} />
        </IconButton>
        <p> Username</p>
        <input type="text" value={initialValues.username}
          onChange={(e) =>
            setInitialValues({ ...initialValues, username: e.target.value })
          } />
        <p> Password</p>
        <input type="text" value={initialValues.password}
          onChange={(e) =>
            setInitialValues({ ...initialValues, password: e.target.value })
          } />
        <button onClick={submitButton}>Login</button>
      </div>
    </div>

  )
}

export default SignIn