import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Gunakan CSS yang sama dengan login

const Registration = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Validasi email
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

    // Menyimpan email dan password ke localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    onRegister(email, password); // Cek registrasi dengan fungsi onRegister dari App.js
    navigate('/login'); // Arahkan ke halaman login setelah registrasi berhasil
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">Registrasi</div>
        <form className="login-form" onSubmit={handleRegister}>
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
          <button type="submit" className="btn-primary">Daftar</button>
        </form>
        <div className="register-link">
          Sudah punya akun? <span onClick={() => navigate('/login')}>Login di sini</span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
