
      import React from 'react'
      import { useState } from 'react'
      import { IconButton } from "@mui/material";
      import './SignIn.css'
      import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
      import Home from './Home';
      import { useNavigate } from 'react-router-dom'
      
      function SignIn() {
        const history = useNavigate()
        const [userData, setUserData] = useState({
          username: "",
          password: "",
        });
        const inputHanlder = event => {
          const { name, value } = event.target;
          setUserData((prev) => {
            return { ...prev, [name]: value }
          });
        }
        const handleSubmit = () => {
          const userDetails = localStorage.getItem("formValues");
          //const result = Object.keys(userDetails).map((key) => [Number(key), userDetails[key]])
        
          console.log( userDetails)

          const { username, password } = userData;
          let regex =   /^[0-9]\w{7,14}$/;

          if (username === "") {
            alert("Please enter username")
      
          } else if (password.match(regex)) {
            alert("Please enter valid password")
          } else {
            if(userDetails && userDetails.length) {
              const userData = JSON.parse(userDetails);
              if(userData.username === username && userData.password === password) {
                console.log("login successful");
                history("/success")
              } else if(userData.length === "") {
                alert("please enter details")
              } 
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
                <input type="text" name="username" onChange={inputHanlder} value={userData.username} />
                <p> Password</p>
                <input type="password" name="password" onChange={inputHanlder} value={userData.password} />
                {<button onClick={handleSubmit} type="submit">Login</button>}
              </div>
            </form>
          </div>
      
        )
      }
      
      export default SignIn