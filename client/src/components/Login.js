import React, { useState } from 'react';
import { axiosWithAuth } from '../Authorization';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username:"",
    password:""
  });
  const handleChange = e => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push("bubbles");
    })
  }


  return (
    <div className="login-form">
      
      <form onSubmit={handleSubmit}>
       <h1>Welcome to the Bubble App!</h1> 
        <input
        type="text"
        name="username"
        placeholder="enter username"
        value={credentials.username}
        onChange={handleChange} 
        /><br/>
          <input
        type="password"
        name="password"
        placeholder="enter password"
        value={credentials.password}
        onChange={handleChange} 
        /><br/>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login; 
