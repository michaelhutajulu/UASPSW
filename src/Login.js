import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Pastikan CSS disimpan di folder yang sesuai

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mengambil data email dan password dari localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    
    // Validasi email dan password
    if (!email || !password) {
      setError('Email dan password tidak boleh kosong.');
      return;
    }

    // Validasi format email (misalnya harus @gmail.com)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setError('Format email harus valid dan menggunakan domain @gmail.com.');
      return;
    }

    // Validasi password minimal 6 karakter
    if (password.length < 6) {
      setError('Password harus terdiri dari minimal 6 karakter.');
      return;
    }
    
    // Memeriksa apakah email dan password cocok dengan yang terdaftar
    if (email === storedEmail && password === storedPassword) {
      onLogin(email, password); // Cek login dengan fungsi onLogin dari App.js
      navigate('/dashboard'); // Arahkan ke dashboard setelah login
    } else {
      setError('Email atau password salah!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">Login</div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <div className="register-link">
          Belum punya akun? <span onClick={() => navigate('/registration')}>Daftar di sini</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
