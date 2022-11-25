import React from 'react'
import { useState } from 'react'
import { IconButton } from "@mui/material";
import './SignIn.css'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Home from './Home';
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const history = useNavigate()
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const inputHanlder = event => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value }
    });
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
    // console.log(user);

    // if(user.username === username && user.password === password){
    //   console.log("match");
    // } else {
    //   console.log("doesnt match");
    // }

    const { username, password } = data;
    if (username === "") {
      alert("Please enter username")

    } else if (password.length < 5) {
      alert("Please enter valid password")
    } else {
      if (user && user.length) {
        const userData = JSON.parse(user);
        if (userData.username === username && userData.password === password) {
          console.log("login successful");
          history("/success")
        } else {
          alert("please enter correct details")
        }


        // const getUser = userData.filter((el, val) => {
        //   return el.username === username && el.password === password;
        // });
        // console.log(getUser)
      }




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
          <input type="text" name="username" onChange={inputHanlder} value={data.username} />
          <p> Password</p>
          <input type="password" name="password" onChange={inputHanlder} value={data.password} />
          {<button onClick={submitButton} type="submit">Login</button>}
        </div>
      </form>
    </div>

  )
}

export default SignIn