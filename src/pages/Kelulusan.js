import React from 'react';
import Navbar from '../components/Navbar';  // Impor Navbar yang sudah ada
import './Kelulusan.css';  // Link ke file CSS eksternal

const Kelulusan = () => {
  return (
    <div className="kelulusan-container">
      <header className="kelulusan-header">
        <div className="logo-section">
          <img src="/images/logo.jpg" alt="SMAN 1 Laguboti Logo" className="logo" />
          <h1 className="website-name">SMAN 1 LAGUBOTI</h1>
        </div>
      </header>
      <Navbar /> {/* Navbar yang sudah ada */}
      
      <main className="content-section">
        <h1>Daftar Kelulusan SMA Negeri 1 Laguboti</h1>
        <div className="biodata-container">
          {/* Biodata untuk Siswa 1 */}
          <div className="biodata-item">
            <img src="/images/kael.jpg" alt="Foto Siswa 1" className="biodata-photo" />
            <h2>Michael Hutajulu</h2>
            <p>NIS: 665495</p>
            <p>Jurusan: IPA</p>
            <p>Tahun Lulus: 2023</p>
            <p>Status: Mahasiswa IT Del</p>
          </div>

          {/* Biodata untuk Siswa 2 */}
          <div className="biodata-item">
            <img src="/images/maro.jpg" alt="Foto Siswa 2" className="biodata-photo" />
            <h2>Marojahan Hutahaean</h2>
            <p>NIS: 664789</p>
            <p>Jurusan: IPA</p>
            <p>Tahun Lulus: 2023</p>
            <p>Status: Mahasiswa IT Del</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kelulusan;
