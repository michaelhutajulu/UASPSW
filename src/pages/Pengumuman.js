import React from 'react';
import Navbar from '../components/Navbar';
import './Pengumuman.css';

const Pengumuman = () => {
  return (
    <div className="pengumuman-container">
      <header className="pengumuman-header">
        <div className="logo-section">
          <img src="/images/logo.jpg" alt="SMAN 1 Laguboti Logo" className="logo" />
          <h1 className="website-name">SMAN 1 LAGUBOTI</h1>
        </div>
      </header>
      <Navbar />
      
      <main className="content-section">
        <h1>Pengumuman Sekolah</h1>
        <div className="pengumuman-list">
          <div className="pengumuman-item">
            <h3>Libur Natal dan Tahun Baru</h3>
            <p>
              Kami informasikan bahwa libur Natal dan Tahun Baru akan dimulai pada tanggal 24 Desember 2024 hingga 2 Januari 2025. Selama periode ini, sekolah akan tutup.
            </p>
          </div>
          <div className="pengumuman-item">
            <h3>Pendaftaran Siswa Baru</h3>
            <p>
              Pendaftaran siswa baru untuk tahun ajaran 2025/2026 dimulai pada tanggal 1 Januari 2025. Untuk informasi lebih lanjut, kunjungi halaman pendaftaran di website kami.
            </p>
          </div>
          <div className="pengumuman-item">
            <h3>Ujian Tengah Semester</h3>
            <p>
              Ujian Tengah Semester (UTS) akan dilaksanakan mulai tanggal 10 Februari 2025 hingga 12 Februari 2025. Semua siswa diharapkan untuk mempersiapkan ujian dengan baik.
            </p>
          </div>
          <div className="pengumuman-item">
            <h3>Workshop Pembelajaran Online</h3>
            <p>
              Sekolah akan mengadakan workshop tentang pembelajaran online pada tanggal 20 Januari 2025. Semua guru dan siswa diharapkan hadir untuk meningkatkan keterampilan dalam pembelajaran digital.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pengumuman;
