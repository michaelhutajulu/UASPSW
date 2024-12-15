import React from 'react';
import Navbar from '../components/Navbar'; // Pastikan path impor sesuai dengan struktur folder kamu
import './Ekstrakurikuler.css'; // Pastikan file CSS ini ada

const Ekstrakurikuler = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/images/logo.jpg" alt="SMAN 1 Laguboti Logo" className="logo" />
          <h1 className="website-name">SMAN 1 LAGUBOTI</h1>
        </div>
      </header>
      {/* Panggil Navbar di sini */}
      <Navbar />
      
      <main className="content-section">
        <h1>Ekstrakurikuler SMA Negeri 1 Laguboti</h1>

        <h2>Daftar Ekstrakurikuler</h2>
        <p>
          SMA Negeri 1 Laguboti menyediakan berbagai kegiatan ekstrakurikuler yang bertujuan untuk mengembangkan bakat dan minat siswa. Berikut adalah beberapa pilihan ekstrakurikuler yang dapat diikuti:
        </p>

        <div className="ekstrakurikuler-list">
          <div className="ekstrakurikuler-item">
            <h3>Pramuka</h3>
            <p>Pramuka adalah kegiatan yang bertujuan untuk membentuk karakter dan kepemimpinan siswa dengan kegiatan luar ruangan dan berbagai tantangan.</p>
          </div>
          <div className="ekstrakurikuler-item">
            <h3>Paskibra</h3>
            <p>Paskibra merupakan kegiatan yang berfokus pada pengembangan kedisiplinan, kebangsaan, dan kekompakan dengan melakukan upacara bendera dan latihan baris-berbaris.</p>
          </div>
          <div className="ekstrakurikuler-item">
            <h3>Basketball</h3>
            <p>Ekstrakurikuler bola basket ini bertujuan untuk meningkatkan kemampuan fisik dan keterampilan dalam bermain bola basket, serta membentuk kerjasama tim.</p>
          </div>
          <div className="ekstrakurikuler-item">
            <h3>Musik</h3>
            <p>Ekstrakurikuler musik memberikan kesempatan bagi siswa untuk menyalurkan bakat dalam seni musik melalui berbagai instrumen, paduan suara, atau band sekolah.</p>
          </div>
          <div className="ekstrakurikuler-item">
            <h3>Drama</h3>
            <p>Drama adalah kegiatan yang mengasah kemampuan akting siswa, menampilkan karya seni panggung, serta meningkatkan kepercayaan diri dalam berbicara di depan umum.</p>
          </div>
          <div className="ekstrakurikuler-item">
            <h3>Robotics</h3>
            <p>Ekstrakurikuler robotics mengajarkan keterampilan dalam merakit dan memprogram robot, serta mengasah kreativitas dalam teknologi dan inovasi.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ekstrakurikuler;
