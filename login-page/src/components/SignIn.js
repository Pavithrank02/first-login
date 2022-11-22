import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IconButton } from "@mui/material";
import formValues from './SignUp';
import './SignIn.css'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Home from './Home';
import SuccessCard from './SuccessCard';

function SignIn() {

  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
  });
  const getInputValue = event => {
    setInitialValues(event.target.value);
    console.log(val);
  }
  // const [inputValues, setInputValues] = useState([]);
  const submitButton = () => {
    console.log("done");
  }
  
  // useEffect(() => {
  //   localStorage.setItem("inputValues", JSON.stringify(inputValues));
    
  // }, [inputValues]);

  // const formVal = () => {
  //   const val = localStorage.getItem("formValues", JSON.stringify(formValues));
  //   // console.log("values", inputValues);
  //   if (val !== inputValues) {
  //     console.log("done");
    // }
  return (
    <div>
      <Home />
      <div className='signin'>
        <IconButton>
          <AccountCircleRoundedIcon sx={{ fontSize: 70 }} />
        </IconButton>
        <p> Username</p>
        <input type="text" 
          onChange={getInputValue} />
        <p> Password</p>
        <input type="text" value={initialValues.password}
          onChange={getInputValue
          } />
       { <button onClick={submitButton}>Login</button> }
      </div>
    </div>

  )
}

export default SignIn