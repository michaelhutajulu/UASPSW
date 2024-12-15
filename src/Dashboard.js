import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './web.css';

const Dashboard = () => {
  const sliderImages = [
    '/images/5.jpg',
    '/images/8.jpg',
    '/images/4.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  // Fungsi logout
  const handleLogout = () => {
    navigate('/login');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/images/logo.jpg" alt="SMAN 1 Laguboti Logo" className="logo" />
          <h1 className="website-name">SMAN 1 LAGUBOTI</h1>
        </div>
      </header>

      <Navbar onLogout={handleLogout} />

      <main className="dashboard-main">
        <div className="box slider">
          <img
            src={sliderImages[currentImage]}
            alt={`Slider ${currentImage + 1}`}
            className="slider-image"
          />
        </div>

        <div className="box welcome-box">
          <div className="welcome-text">
            <h1>Selamat Datang di SMAN 1 Laguboti</h1>
            <p>
              Kami bangga menjadi bagian dari pendidikan unggulan yang mempersiapkan generasi masa depan 
              dengan kegiatan akademik dan ekstrakurikuler terbaik.
            </p>
          </div>
        </div>

        <div className="articles-container">
          {/* Ekstrakurikuler 1 */}
          <div className="article">
            <div className="article-content">
              <h2>Pramuka</h2>
              <p>Ikuti kegiatan pramuka untuk melatih kedisiplinan dan kepemimpinan.</p>
              <Link to="/ekstrakurikuler" className="btn">Lihat Selengkapnya</Link>
            </div>
            <img src="/images/pramuka.jpg" alt="Pramuka" className="article-image" />
          </div>

          {/* Ekstrakurikuler 2 */}
          <div className="article">
            <div className="article-content">
              <h2>PMR</h2>
              <p>Bergabung dengan Palang Merah Remaja dan pelajari keterampilan pertolongan pertama.</p>
              <Link to="/ekstrakurikuler" className="btn">Lihat Selengkapnya</Link>
            </div>
            <img src="/images/pmr.jpg" alt="PMR" className="article-image" />
          </div>

          {/* Ekstrakurikuler 3 */}
          <div className="article">
            <div className="article-content">
              <h2>Olahraga</h2>
              <p>Bergabung dengan tim olahraga seperti basket, voli, atau sepak bola.</p>
              <Link to="/ekstrakurikuler" className="btn">Lihat Selengkapnya</Link>
            </div>
            <img src="/images/olahraga.jpg" alt="Olahraga" className="article-image" />
          </div>

          {/* Ekstrakurikuler 4 */}
          <div className="article">
            <div className="article-content">
              <h2>Paduan Suara</h2>
              <p>Ekspresikan bakat musikmu dengan bergabung dalam paduan suara sekolah.</p>
              <Link to="/ekstrakurikuler" className="btn">Lihat Selengkapnya</Link>
            </div>
            <img src="/images/paduansuara.jpg" alt="Paduan Suara" className="article-image" />
          </div>

          {/* Ekstrakurikuler 5 */}
          <div className="article">
            <div className="article-content">
              <h2>Robotika</h2>
              <p>Pelajari teknologi terbaru dengan bergabung di klub robotika.</p>
              <Link to="/ekstrakurikuler" className="btn">Lihat Selengkapnya</Link>
            </div>
            <img src="/images/robotika.jpg" alt="Robotika" className="article-image" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
