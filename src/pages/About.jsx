import React from 'react';
import foto from '../assets/fotoagung.png';

const About = () => {
  // --- DATA: Keahlian (Tinggal tambah di sini) ---
  const skillCategories = [
    {
      title: "Frontend",
      items: [
        { name: "HTML5 & CSS3", icon: "html", color: "text-orange-500" },
        { name: "React & Next.js", icon: "code", color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: "brush", color: "text-teal-400" }
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "terminal", color: "text-green-500" },
        { name: "PostgreSQL", icon: "dataset", color: "text-blue-400" },
        { name: "Python", icon: "warning", color: "text-yellow-500" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Git & GitHub", icon: "commit", color: "text-red-500" },
        { name: "Docker", icon: "deployed_code", color: "text-blue-500" },
        { name: "Figma", icon: "design_services", color: "text-purple-400" }
      ]
    }
  ];

  // --- DATA: Pengalaman Kerja ---
  const experiences = [
    {
      period: "2024 — Sekarang",
      company: "PT. Easybook Teknologi Indonesia",
      role: "Assistant IT",
      desc: "Memimpin tim frontend dalam pengembangan ulang platform e-commerce utama perusahaan. Meningkatkan performa memuat halaman sebesar 40% dan mengimplementasikan sistem desain baru.",
      tags: ["React", "Redux", "Team Lead"]
    },
    {
      period: "2025 — 2025",
      company: "GAOTek Inc.",
      role: "Junior Web Developer",
      desc: "Bekerja sama dengan desainer untuk menerjemahkan wireframe menjadi kode yang fungsional. Bertanggung jawab atas pemeliharaan situs web klien dan perbaikan bug backend.",
      tags: ["HTML/CSS", "JavaScript", "Node.js", "Express", "MongoDB", "React", "Git"]
    },
    {
      period: "2019 — 2024",
      company: "PT. Polytech Jaya Indsutri",
      role: "Administrasi",
      desc: "Sebagai Staf Administrasi, saya bertanggung jawab melaksanakan tugas-tugas administratif yang mendukung efisiensi operasional kantor. Pekerjaan saya mencakup pengelolaan dan penyimpanan data, penjadwalan rapat, serta pemeliharaan dokumen dan arsip. Saya berperan penting dalam mengelola komunikasi internal dan eksternal, baik melalui email maupun telepon. Selain itu, saya berkolaborasi secara aktif dengan tim untuk menyusun laporan rutin, memproses pengeluaran, dan mendukung kegiatan administratif lainnya. Saya memiliki kemampuan organisasi yang kuat, ketelitian terhadap detail dalam menyelesaikan tugas, serta kemampuan multitasking untuk memastikan kelancaran operasional kantor.",
      tags: ["Administrasi", "Manajemen Data", "Komunikasi"]
    },
    {
      period: "2018 — 2019",
      company: "CV. Intimedia Teknologi",
      role: "IT Support",
      desc: "Menangani ketersediaan dan kinerja komputer serta jaringan dengan memastikan seluruh perangkat berfungsi dan terhubung secara optimal. Melakukan pemeliharaan dan pemantauan untuk memastikan aplikasi berjalan lancar, serta menyimpan dan mengelola data pengguna. Bertanggung jawab menyusun laporan teknis dan dokumentasi sebagai bagian dari tugas pekerjaan.",
      tags: ["Mikrotik", "Cisco", "Troubleshooting"]
    },
  ];

  return (
    <div className="layout-container flex h-full grow flex-col items-center bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4 md:px-10 py-5">
        
        {/* --- HERO SECTION --- */}
        <div className="@container mb-8">
          <div className="flex flex-col gap-6 py-10 md:flex-row items-center">
            {/* Foto Profil */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="w-full max-w-[400px] aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg relative overflow-hidden group" 
                   style={{ backgroundImage: `url(${foto})` }}>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </div>
            
            {/* Teks Intro */}
            <div className="flex flex-col gap-6 w-full md:w-1/2 justify-center">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                  Halo, Saya Agung
                </h1>
                <h2 className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal md:text-lg">
                  Pengembang Web Full Stack yang berdedikasi menciptakan pengalaman digital yang mulus, cepat, dan mudah diakses.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                
                <a 
                    href="CV.pdf" 
                    download="CV-MuhammadAgung.pdf"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal hover:bg-blue-600 transition-colors"
                    >
                    <span className="truncate">Unduh Resume</span>
                    <span className="material-symbols-outlined ml-2 !text-sm">download</span>
                    </a>

                {/* Social Icons */}
                <div className="flex gap-2">
                   {/* LinkedIn Icon */}
                  <a 
                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-[#283039] hover:text-primary transition-colors" 
                    href="https://www.linkedin.com/in/mhmmdagung/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  </a>
                  {/* GitHub Icon */}
                  <a className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-[#283039] hover:text-primary transition-colors" href="https://github.com/MuhammadAgung23"
                  target='_blank'
                  rel='noopener noreferrer'>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BIOGRAPHY --- */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-3 px-4 pt-5">
            <div className="h-6 w-1 bg-primary rounded-full"></div>
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">Biografi Singkat</h2>
          </div>
          <div className="bg-white dark:bg-[#1b222b] rounded-xl p-6 shadow-sm border border-slate-200 dark:border-none">
            <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
              Saya adalah pengembang perangkat lunak dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web yang skalabel dan responsif. Memiliki hasrat yang besar terhadap teknologi open source dan desain antarmuka yang bersih.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed mt-4">
              Saat ini, saya fokus mendalami arsitektur cloud dan pengembangan berbasis komponen modern. Saya percaya bahwa kode yang baik bukan hanya tentang fungsionalitas, tetapi juga tentang keterbacaan dan pemeliharaan jangka panjang.
            </p>
          </div>
        </div>

        {/* --- SKILLS --- */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-3 px-4 pt-5">
            <div className="h-6 w-1 bg-primary rounded-full"></div>
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">Keahlian Teknis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Looping Category */}
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">{cat.title}</h3>
                <div className="flex flex-col gap-3">
                  {/* Looping Items */}
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white dark:bg-[#283039] p-3 rounded-lg border border-slate-200 dark:border-transparent hover:border-primary transition-all cursor-default">
                      <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- EXPERIENCE --- */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3 px-4 pt-5">
            <div className="h-6 w-1 bg-primary rounded-full"></div>
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">Pengalaman Kerja</h2>
          </div>
          <div className="flex flex-col px-4 gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline Line Mobile */}
                <div className="absolute left-2 top-2 h-full w-0.5 bg-slate-300 dark:bg-[#283039] md:hidden"></div>
                <div className={`absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-[#111418] md:hidden ${index === 0 ? 'bg-primary' : 'bg-slate-400'}`}></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  <div className="flex flex-col md:w-1/4 pt-1">
                    <span className="font-bold text-lg">{exp.period}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{exp.company}</span>
                  </div>
                  <div className="flex flex-col md:w-3/4 p-6 bg-white dark:bg-[#1b222b] rounded-xl border border-slate-200 dark:border-none shadow-sm relative">
                    <div className="hidden md:block absolute top-6 -left-2 w-4 h-4 bg-white dark:bg-[#1b222b] rotate-45"></div>
                    <h3 className={`${index === 0 ? 'text-primary' : ''} font-bold text-lg mb-1`}>{exp.role}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{exp.desc}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {exp.tags.map((tag, t) => (
                        <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-[#283039] text-xs font-medium text-slate-600 dark:text-slate-300 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA (Call To Action) --- */}
        <div className="flex justify-center my-8">
          <div className="w-full bg-slate-200 dark:bg-[#1b222b] rounded-2xl p-8 text-center flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">Tertarik bekerja sama?</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-lg">
              Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang menjadi bagian dari visi Anda.
            </p>
            <a className="mt-2 flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-base font-bold leading-normal hover:opacity-90 transition-opacity" 
            href="mailto:muhammad.agung.pb@gmail.com">
              Hubungi Saya
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;