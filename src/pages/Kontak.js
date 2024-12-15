import React from 'react';
import Navbar from '../components/Navbar';
import './Kontak.css';

const Kontak = () => {
  return (
    <div className="kontak-container">
      <header className="kontak-header">
        <div className="logo-section">
          <img src="/images/logo.jpg" alt="SMAN 1 Laguboti Logo" className="logo" />
          <h1 className="website-name">SMAN 1 LAGUBOTI</h1>
        </div>
      </header>
      <Navbar />

      <main className="content-section">
        <h1>Hubungi Kami</h1>

        <div className="contact-details">
          <div className="contact-info">
            <h3>Informasi Kontak</h3>
            <p><strong>Alamat:</strong> Jl. Pendidikan No. 10, Laguboti</p>
            <p><strong>Email:</strong> info@sman1laguboti.sch.id</p>
            <p><strong>Telepon:</strong> +62 812 3456 7890</p>
          </div>

          <div className="contact-form">
            <h3>Kirim Pesan</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Masukkan email Anda" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea id="message" name="message" rows="5" placeholder="Tulis pesan Anda" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Kirim</button>
            </form>
          </div>
        </div>

        <div className="social-media">
          <h3>Ikuti Kami</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">Instagram</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kontak;
