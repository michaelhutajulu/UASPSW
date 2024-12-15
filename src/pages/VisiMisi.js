import React from 'react';
import Navbar from '../components/Navbar'; // Pastikan path impor sesuai dengan struktur folder kamu

const VisiMisi = () => {
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
        <h1>VISI, MISI, DAN TUJUAN SMA NEGERI 1 Laguboti</h1>

        <h2>Visi Sekolah</h2>
        <p>
          MEWUJUDKAN LULUSAN DAN WARGA SEKOLAH, YANG BERPROFIL PEMBELAJAR PANCASILA, BERPRESTASI, BERWAWASAN LINGKUNGAN, BERMARTABAT DALAM KASIH, KEPERDULI, DAN KEIKHLASAN.
        </p>

        <h2>Misi Sekolah</h2>
        <ul>
          <li>Menumbuhkan penghayatan siswa terhadap ajaran agama yang dianutnya.</li>
          <li>Meningkatkan aktivitas beriman dan bertakwa kepada Tuhan Yang Maha Esa serta berakhlak mulia.</li>
          <li>Menjadikan disiplin sebagai budaya pola tingkah laku di sekolah dan masyarakat.</li>
          <li>Menumbuhkan pendidikan karakter sesuai dengan nilai-nilai Pancasila.</li>
          <li>Mendorong pembelajaran dengan pendekatan saintifik dan PAIKEM dengan keterampilan berbasis IPTEKS.</li>
          <li>Menumbuhkan budaya berprestasi di lingkungan warga sekolah.</li>
          <li>Mendorong pendidikan keluarga di sekolah.</li>
          <li>Meningkatkan kegiatan kepedulian sosial di lingkungan sekolah dan masyarakat.</li>
          <li>Menjadikan sekolah pusat kegiatan, pelestarian, dan pengembangan budaya daerah dan nasional.</li>
          <li>Mengembangkan kegiatan pengembangan diri, ekstrakurikuler untuk meningkatkan kecakapan hidup.</li>
          <li>Meningkatkan penataan sarana prasarana sekolah dengan ciri-ciri: sehat, nyaman, indah, dan hijau.</li>
          <li>Mendorong pembelajaran yang sadar dan berwawasan lingkungan.</li>
          <li>Mendorong kewirausahaan di sekolah berbasis lingkungan.</li>
          <li>Membudayakan sekolah melayani, mandiri, tertib, bersatu, dan bersih.</li>
          <li>Mengokohkan solidaritas, loyalitas, kerjasama, esprit de corps (jiwa korsa), dan semangat kekeluargaan di sekolah dan masyarakat.</li>
        </ul>
      </main>
    </div>
  );
};

export default VisiMisi;
