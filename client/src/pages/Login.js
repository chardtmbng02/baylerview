import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://baylerview-api.onrender.com/api/logins', {
        username,
        password,
      });

      console.log(response.data)

    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
