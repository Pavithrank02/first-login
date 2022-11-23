import React, { useState, useEffect } from 'react'
import Home from './Home'
import './SignIn.css'


function SignUp() {
  const [data, setData] = useState({
    username: "",
    email: "",
    address: "",
    dob: ""
  });
  const inputHanlder = event => {
    const {name, value} = event.target;
    setData((prev) => {
      return{...prev, [name]: value}});
  }
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(data));
    }, [data]);
  const submitForm = (e) => {
    
    e.preventDefault(); 
    
  }
  useEffect(() => {
    const val = localStorage.getItem("inputValue", JSON.stringify(data));
    console.log(val)
  }, [data]);
  return (
    <div>
      <Home />
      <div className='signin'>
        <form onClick={submitForm}>
        <p> Username</p>
        <input type="text"  name="username" onChange={inputHanlder} value={data.username}/>
        <p> Email</p>
        <input type="text"   name="email" onChange={inputHanlder} value={data.email}/>
        <p> Address</p>
        <input type="text"   name="address" onChange={inputHanlder} value={data.address}/>
        <p> Password</p>
        <input type="password"   name="password" onChange={inputHanlder} value={data.password}/> 
          <button >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp