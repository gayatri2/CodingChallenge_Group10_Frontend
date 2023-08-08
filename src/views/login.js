// LoginPage.js
import axios from "axios";
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // You can perform authentication logic here, such as sending login credentials to a server
    console.log('Login clicked!');
    console.log('Email:', email);
    console.log('Password:', password);
    try{
    const response = await axios.post('http://localhost:8081/api/v1/login', {
      email: email,
      password: password,
    });

    if (response.data === 'Login successful') {
      // Handle successful login, such as redirecting to the dashboard or home page
      console.log('Login successful!');
    } else {
      setError('Invalid credentials');
    }
  } catch (error) {
    setError('Error occurred while logging in');
  }
  };

  return (
   
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;