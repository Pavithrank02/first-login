import React, { useState, useEffect } from 'react'
import Home from './Home'
import './SignIn.css'

function SignUp() {
  const [initialValues, setInitialValues] = useState({
    username: "",
    email: "",
    password: "",
    dob: ""
  });
  const [formValues, setFormValues] = useState([]);

  const submitForm = (e) => {
    e.preventDefualt();
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  };
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));

  }, [formValues]);

  

  return (
    <div>
      <Home />
      <div >
        <form className='signin'>
        <p> Username</p>
        <input type="text" value={initialValues.username}
          onChange={(e) =>
            setInitialValues({ ...initialValues, username: e.target.value })
          } />
        <p> Password</p>
        <input type="text" value={initialValues.password}
          onChange={(e) =>
            setInitialValues({ ...initialValues, password: e.target.value })
          }/>
        <p> Email</p>
        <input type="text" value={initialValues.email}
          onChange={(e) =>
            setInitialValues({ ...initialValues, email: e.target.value })
          }/>
        <p> Date of Birth</p>
        <input type="text" value={initialValues.dob}
          onChange={(e) =>
            setInitialValues({ ...initialValues, dob: e.target.value })
          }/>
        <button onClick={submitForm}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp