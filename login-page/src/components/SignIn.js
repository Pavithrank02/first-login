
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
        const handleSubmit = () => {
          const userDetails = localStorage.getItem("formValues");
          const { username, password } = data;

          if (username === "") {
            alert("Please enter username")
      
          } else if (password.length < 5) {
            alert("Please enter valid password")
          } else {
            const userFound = userDetails.find((userInfo) => userInfo.username === username && userInfo.password === password )
            console.log(userFound);
              if(userFound) {
                console.log("login successful");
                history("/success")
              } else {
                alert("login failed")
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
                {<button onClick={handleSubmit} type="submit">Login</button>}
              </div>
            </form>
          </div>
      
        )
      }
      
      export default SignIn