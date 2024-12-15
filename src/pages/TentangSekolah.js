import React from 'react';
import Navbar from '../components/Navbar';
const TentangSekolah = () => {
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
        <h1>Tentang SMAN 1 Laguboti</h1>
        <h2>PROFIL SMA NEGERI 1 LAGUBOTI</h2>
        <table>
          <tbody>
            <tr>
              <td>Nama Sekolah</td>
              <td>: SMA Negeri 1 Laguboti</td>
            </tr>
            <tr>
              <td>Tahun Berdiri</td>
              <td>: 1967</td>
            </tr>
            <tr>
              <td>NSS</td>
              <td>: 301070818006</td>
            </tr>
            <tr>
              <td>NPSN</td>
              <td>: 10208460</td>
            </tr>
            <tr>
              <td>Luas Lahan</td>
              <td>: 3.164 m²</td>
            </tr>
            <tr>
              <td>Luas Bangunan</td>
              <td>: m²</td>
            </tr>
            <tr>
              <td>Akreditasi</td>
              <td>: A (Nomor: 694/BAP-SM/PROVSU/LL/XI/2017 Tanggal 18 Nopember 2017 dari BAN)</td>
            </tr>
            <tr>
              <td>Alamat Lengkap Sekolah</td>
              <td></td>
            </tr>
            <tr>
              <td>Jalan</td>
              <td>: Sekolah No. 3</td>
            </tr>
            <tr>
              <td>Desa/Kelurahan</td>
              <td>: Pasar Laguboti</td>
            </tr>
            <tr>
              <td>Kecamatan</td>
              <td>: Laguboti</td>
            </tr>
            <tr>
              <td>Kabupaten</td>
              <td>: Toba</td>
            </tr>
            <tr>
              <td>Kode Pos</td>
              <td>: 22381</td>
            </tr>
            <tr>
              <td>Telepon Sekolah</td>
              <td>: 0632 – 331512</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>: smanegeri1laguboti@yahoo.co.id</td>
            </tr>
            <tr>
              <td>SK Pendirian Sekolah</td>
              <td>: 190/B/III/1967</td>
            </tr>
            <tr>
              <td>Instansi yang mengeluarkan</td>
              <td>: Kanwil Departemen Pendidikan dan Kebudayaan Provinsi Sumatera Utara</td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'left' }}>Kepala Sekolah</td>
            </tr>
            <tr>
              <td>a. Nama Lengkap</td>
              <td>: Togar Duharman Panjaitan, S.Pd., M.Si.</td>
            </tr>
            <tr>
              <td>b. Pendidikan Terakhir</td>
              <td>: S2</td>
            </tr>
            <tr>
              <td>c. Jurusan</td>
              <td>: Biologi</td>
            </tr>
            <tr>
              <td>d. Tanggal SK Pengangkatan</td>
              <td>: 26 Oktober 2010</td>
            </tr>
            <tr>
              <td>e. Pelatihan yang pernah diikuti</td>
              <td>: Seleksi calon kepala sekolah 31 Juli s/d 1 Agustus 2006 dengan predikat lulus dan Baik</td>
            </tr>
          </tbody>
        </table>

        <h2>Sejarah SMA Negeri 1 Laguboti</h2>
        <p>
          Awal berdirinya SMA Negeri 1 Laguboti pada tahun 1967 adalah momen lahirnya ide mewujudkan kepedulian terhadap pendidikan secara umum dan pendidikan generasi muda di Laguboti. Putera/i terbaik bangsa yang berasal dari Laguboti sepakat membangun pendidikan di Bona Pasogit (tempat asal) dengan cara merekrut siswa terbaik dalam akademis dari setiap SLTP yang berada dalam jajaran wilayah Toba Samosir.
        </p>
        <p>
          Periode 1967 s.d 1983: Drs. T.A. Silaen<br />
          Periode 1983 s.d 1993: Baginda Pipin Silaen<br />
          Periode 1993 s.d 1995: Drs. Chaspar Sinaga<br />
          Periode 1995 s.d 1997: Drs. Saut Halomoan Hutagaol<br />
          Periode 1998 s.d 1999: Nurmala Hutauruk<br />
          Periode 2000 s/d 2002: Drs. Dumpang Sarumpaet<br />
          Periode 2002 s/d 2004: Drs. Mochtar Sihotang<br />
          Periode 2004 s/d 2006: Drs. Hasonangan<br />
          Periode 2006 s.d 2008: Jasa Pembangunan Sitorus, S.Pd<br />
          Periode 2008 s.d 2010: Drs. Mochtar Sihotang<br />
          Periode 2011 s.d Pebruari 2014: Drs. Lambok Simanjuntak<br />
          Periode Maret 2014: Beduan Siahaan, S.Pd<br />
          Periode Nopember 2014 s.d 2022: Jelarwin Dabutar, S.Pd, M.Pd<br />
          Periode 2022 s.d sekarang: Togar D. Panjaitan, S.Pd., M.Si.<br />
        </p>
        <p>
          Sejak TP. 1967 sampai dengan sekarang SMA Negeri 1 Laguboti menerima siswa baru melalui jalur seleksi sekolah.
        </p>
      </main>
    </div>
  );
};

export default TentangSekolah;
