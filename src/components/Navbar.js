import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="dashboard-navbar">
      <ul className="navbar-list">
        {/* Beranda */}
        <li><Link to="/dashboard">Beranda</Link></li>

        {/* Profil */}
        <li className="dropdown">
          <span className="dropdown-toggle">Profil</span>
          <ul className="dropdown-menu">
            <li><Link to="/tentang-sekolah">Tentang Sekolah</Link></li>
            <li><Link to="/visi-misi">Visi dan Misi</Link></li>
            <li><Link to="/ekstrakurikuler">Ekstrakurikuler</Link></li>
            <li><Link to="/mata-pelajaran">Mata Pelajaran</Link></li>
          </ul>
        </li>

        {/* Informasi */}
        <li className="dropdown">
          <span className="dropdown-toggle">Informasi</span>
          <ul className="dropdown-menu">
            <li><Link to="/pengumuman">Pengumuman</Link></li>
            <li><Link to="/kelulusan">Kelulusan</Link></li>
          </ul>
        </li>

        {/* Kontak */}
        <li><Link to="/kontak">Kontak</Link></li>
      </ul>

      {/* Tombol Logout */}
      <div className="navbar-logout">
        <button onClick={onLogout} className="btn logout-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
