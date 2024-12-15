import React from 'react';
import Navbar from '../components/Navbar';
import './MataPelajaran.css';

const MataPelajaran = () => {
  return (
    <div className="mata-pelajaran-container">
      <header className="mata-pelajaran-header">
        <div className="logo-section">
          <img src="/images/logo.jpg" alt="SMAN 1 Laguboti Logo" className="logo" />
          <h1 className="website-name">SMAN 1 LAGUBOTI</h1>
        </div>
      </header>
      <Navbar />
      
      <main className="content-section">
        <h1>Mata Pelajaran di SMA Negeri 1 Laguboti</h1>
        <div className="mata-pelajaran-list">
          <div className="mata-pelajaran-item">
            <h3>Matematika</h3>
            <p>Mempelajari konsep-konsep matematika, mulai dari aljabar hingga kalkulus, serta penerapannya dalam kehidupan sehari-hari.</p>
          </div>
          <div className="mata-pelajaran-item">
            <h3>Fisika</h3>
            <p>Mempelajari fenomena alam dan hukum-hukum fisika yang berlaku, serta eksperimen untuk memahami prinsip-prinsipnya.</p>
          </div>
          <div className="mata-pelajaran-item">
            <h3>Kimia</h3>
            <p>Mempelajari struktur materi, reaksi kimia, dan penerapannya dalam bidang industri, kesehatan, dan lingkungan.</p>
          </div>
          <div className="mata-pelajaran-item">
            <h3>Biologi</h3>
            <p>Mempelajari kehidupan makhluk hidup, mulai dari sel hingga ekosistem, dan bagaimana mereka berinteraksi dengan lingkungan.</p>
          </div>
          <div className="mata-pelajaran-item">
            <h3>Bahasa Indonesia</h3>
            <p>Mempelajari kaidah bahasa, sastra, dan keterampilan komunikasi dalam bahasa Indonesia untuk kehidupan sosial dan akademis.</p>
          </div>
          <div className="mata-pelajaran-item">
            <h3>Bahasa Inggris</h3>
            <p>Mempelajari keterampilan berbahasa Inggris, termasuk mendengarkan, berbicara, membaca, dan menulis dengan efektif.</p>
          </div>
          <div className="mata-pelajaran-item">
            <h3>Sejarah</h3>
            <p>Mempelajari sejarah dunia dan Indonesia, serta bagaimana peristiwa-peristiwa sejarah membentuk peradaban masa kini.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MataPelajaran;
