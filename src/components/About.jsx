import profileImg from '../assets/profile2.png';

function About() {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center g-5">
            {/* Image Side */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src={profileImg} alt="Alfian Mutakim" className="img-fluid rounded-4 shadow" style={{ maxWidth: '80%' }} />
          </div>
          {/* Text Side */}
          <div className="col-md-6" data-aos="fade-right">
            <p className="text-primary fw-semibold mb-2">About Me</p>
            <h2 className="fw-bold mb-3">Alfian Mutakim</h2>
            <p className="mb-3">
              Saya adalah mahasiswa aktif semester 6 jurusan Software Engineering di Telkom University – Purwokerto, dengan latar belakang akuntansi dan pengalaman sebagai admin keuangan, pelayanan masyarakat, dan asisten praktikum.
            </p>
            <p className="mb-3">
              Terbiasa bekerja dengan data, coding, desain, serta memiliki keterampilan administratif, riset, komunikasi, dan problem solving. Aktif dalam organisasi dan kompetisi seperti OSC Medcom.id, Innovillage, dan PKM.
            </p>
            <ul className="list-unstyled mb-4">
              <li><strong>📍 Lokasi:</strong> Purwokerto, Indonesia</li>
              <li><strong>🎓 Pendidikan:</strong> S1 Software Engineering, Telkom University</li>
              <li><strong>💼 Pengalaman:</strong> Admin Keuangan, Pelayanan Publik, Asisten Praktikum</li>
              <li><strong>🎖️ Prestasi:</strong> Awardee OSC Medcom.id, Innovillage 2023, PKM 2023</li>
            </ul>
            <a href="#contact" className="btn btn-outline-light me-2">Contact Me</a>
            <a href="/cv-alfian.pdf" className="btn btn-primary" download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
