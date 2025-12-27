import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // --- DATA PROYEK (Tinggal tambah di sini) ---
  const projectList = [
    {
      title: "E-Commerce Dashboard",
      desc: "Platform manajemen inventaris real-time dengan analitik penjualan, manajemen stok otomatis, dan integrasi pembayaran.",
      tags: ["Vue.js", "Tailwind", "Firebase"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web App"
    },
    {
      title: "Fintech Mobile App",
      desc: "Aplikasi keuangan pribadi dengan fitur pelacakan pengeluaran otomatis, budgeting cerdas, dan laporan bulanan.",
      tags: ["React Native", "Redux"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Mobile App"
    },
    {
      title: "Travel Booking Platform",
      desc: "Situs pemesanan perjalanan dengan integrasi peta interaktif Mapbox, pembayaran gateway stripe, dan sistem booking real-time.",
      tags: ["Next.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1436491865332-7a6153217f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web App"
    },
    {
      title: "Healthcare Portal",
      desc: "Portal pasien aman untuk janji temu dokter, melihat hasil lab, dan manajemen rekam medis digital yang terenkripsi.",
      tags: ["Angular", "TypeScript"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web App"
    },
    {
      title: "Social Media Analytics",
      desc: "Dashboard analitik komprehensif untuk memantau tren media sosial, analisis sentimen, dan pelaporan performa kampanye.",
      tags: ["Python", "Django"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Data Science"
    },
    {
      title: "LMS Platform",
      desc: "Platform e-learning untuk kursus online, manajemen tugas, kuis interaktif, dan sertifikasi otomatis.",
      tags: ["Laravel", "MySQL"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web App"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      
      {/* --- HERO SECTION & SEARCH --- */}
      <section className="relative flex flex-col items-center justify-center py-12 px-4 md:py-16 lg:py-20">
        <div className="container max-w-[960px] mx-auto">
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl text-[#111418] dark:text-white">
                Karya Terpilih
              </h1>
              <h2 className="text-base font-normal leading-relaxed text-[#637588] dark:text-[#9dabb9] max-w-2xl mx-auto">
                Kumpulan aplikasi web dan eksperimen desain yang telah saya kerjakan dengan penuh dedikasi. Jelajahi inovasi teknologi terbaru saya.
              </h2>
            </div>
            {/* Search Bar */}
            <div className="w-full max-w-[560px] mt-4">
              <div className="relative flex items-center w-full h-12 rounded-xl focus-within:ring-2 focus-within:ring-primary/50 bg-white dark:bg-[#1c2127] border border-[#e5e7eb] dark:border-[#3b4754] overflow-hidden shadow-sm">
                <div className="grid place-items-center h-full w-12 text-[#9dabb9]">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input 
                  className="peer h-full w-full outline-none bg-transparent text-sm text-[#111418] dark:text-white placeholder:text-[#9dabb9] pr-2" 
                  id="search" 
                  placeholder="Cari proyek berdasarkan nama atau teknologi..." 
                  type="text"
                />
                <div className="pr-1.5">
                  <button className="h-9 px-4 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors">
                    Cari
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTERS (CHIPS) --- */}
      <section className="sticky top-16 z-40 w-full border-y border-gray-200 dark:border-[#283039] bg-background-light/95 dark:bg-[#101922]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[960px] justify-center py-3 px-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 md:gap-3">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#111418] dark:bg-white px-4 hover:opacity-90 transition-opacity">
              <p className="text-white dark:text-[#111418] text-sm font-medium">Semua</p>
            </button>
            {['Web App', 'Mobile App', 'UI/UX Design', 'Open Source'].map((filter, idx) => (
              <button key={idx} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#283039] border border-[#e5e7eb] dark:border-transparent px-4 hover:bg-gray-50 dark:hover:bg-[#3b4754] transition-colors group">
                <p className="text-[#111418] dark:text-white text-sm font-medium">{filter}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECT GRID --- */}
      <section className="py-8 px-4 md:px-8 lg:px-12 flex-1">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Mapping Data Project */}
            {projectList.map((project, index) => (
              <article key={index} className="flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#1c2127] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="relative aspect-video w-full overflow-hidden bg-gray-200 dark:bg-[#283039]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                    style={{ backgroundImage: `url("${project.image}")` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-[#637588] dark:text-[#9dabb9] leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-2">
                    <button className="flex-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                      Detail Proyek
                    </button>
                    <a className="flex items-center justify-center rounded-lg border border-[#e5e7eb] dark:border-[#3b4754] p-2 text-[#637588] dark:text-[#9dabb9] hover:bg-gray-50 dark:hover:bg-[#283039] transition-colors" href="#" title="Live Demo">
                      <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* --- PAGINATION --- */}
      <section className="pb-12 pt-4">
        <div className="flex items-center justify-center gap-2">
          <a className="flex size-10 items-center justify-center rounded-lg border border-transparent hover:border-[#3b4754] text-[#111418] dark:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">chevron_left</span>
          </a>
          <a className="flex size-10 items-center justify-center rounded-lg bg-[#111418] dark:bg-white text-white dark:text-[#111418] text-sm font-bold shadow-sm" href="#">1</a>
          <a className="flex size-10 items-center justify-center rounded-lg border border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#1c2127] text-[#111418] dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#3b4754] transition-colors" href="#">2</a>
          <span className="flex size-10 items-center justify-center text-[#637588] dark:text-[#9dabb9] text-sm font-medium">...</span>
          <a className="flex size-10 items-center justify-center rounded-lg border border-transparent hover:border-[#3b4754] text-[#111418] dark:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Projects;