import React from 'react'
import { useState } from 'react'
import { IconButton } from "@mui/material";
import './SignIn.css'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Home from './Home';

function SignIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const inputHanlder = event => {
    const {name, value} = event.target;
    setData((prev) => {
      return{...prev, [name]: value}});
  }

// useEffect(() => {
//     const inputVal = JSON.parse(localStorage.getItem('formValues'));
//     if (inputVal) {
//      setInputVal(inputVal);
//     }
//   }, []);

 
  const submitButton = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("formValues");
    console.log(user);

    // if(data.username === inputVal.username && data.password === inputVal.password){
    //   console.log("match");
    // } else {
    //   console.log("doesnt match");
    // }
 
    const {username, password} = data;
    if(username === "") {
      alert("Please enter username")

    }else if(password.length < 5 ) {
      alert("Please enter valid password")
    } else{
    
    }
    


  }

  return (
    <div>
      <Home />
      <form>
      <div className='signin'>
        <IconButton>
          <AccountCircleRoundedIcon sx={{ fontSize: 70 }} />
        </IconButton>
        <p> Username</p>
        <input type="text"  name="username" onChange={inputHanlder} value={data.username}/>
        <p> Password</p>
        <input type="password"   name="password" onChange={inputHanlder} value={data.password}/>
        {<button onClick={submitButton} type="submit">Login</button>}
      </div>
      </form>
      </div>

  )
}

export default SignIn