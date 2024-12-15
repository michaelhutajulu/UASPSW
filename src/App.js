import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Halaman-halaman
import Dashboard from './Dashboard';
import TentangSekolah from './pages/TentangSekolah';
import VisiMisi from './pages/VisiMisi';
import Ekstrakurikuler from './pages/Ekstrakurikuler';
import MataPelajaran from './pages/MataPelajaran';
import Pengumuman from './pages/Pengumuman';
import Kelulusan from './pages/Kelulusan';
import Kontak from './pages/Kontak';
import Login from './Login';
import Registrasi from './Registration';
import Footer from './components/Footer'; // Import Footer

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login
  const [registeredUsers, setRegisteredUsers] = useState([]); // Data pengguna terdaftar

  // Ambil data dari localStorage saat pertama kali aplikasi dimuat
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

    setRegisteredUsers(savedUsers);
    setIsLoggedIn(loggedIn);
  }, []);

  // Simpan data ke localStorage saat ada perubahan pada registeredUsers atau isLoggedIn
  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [registeredUsers, isLoggedIn]);

  // Fungsi login
  const handleLogin = (email, password) => {
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
    } else {
      alert('Email atau password salah!');
    }
  };

  // Fungsi logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Fungsi registrasi
  const handleRegistration = (email, password) => {
    const userExists = registeredUsers.some((user) => user.email === email);
    if (userExists) {
      alert('Email sudah terdaftar. Silakan gunakan email lain.');
    } else {
      setRegisteredUsers((prevUsers) => [...prevUsers, { email, password }]);
      alert('Registrasi berhasil! Silakan login.');
    }
  };

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            {/* Redirect ke halaman dashboard jika sudah login */}
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace />}
            />
            {/* Dashboard - Halaman utama */}
            <Route
              path="/dashboard"
              element={<Dashboard onLogout={handleLogout} />}
            />
            {/* Halaman-halaman lain yang dapat diakses tanpa login */}
            <Route path="/tentang-sekolah" element={<TentangSekolah />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
            <Route path="/mata-pelajaran" element={<MataPelajaran />} />
            <Route path="/pengumuman" element={<Pengumuman />} />
            <Route path="/kelulusan" element={<Kelulusan />} />
            <Route path="/kontak" element={<Kontak />} />
            {/* Halaman Login dan Registrasi */}
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
            <Route
              path="/registration"
              element={<Registrasi onRegister={handleRegistration} />}
            />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
