const Expertise = () => {
  // Data expertise (tinggal tambah di sini kalau mau nambah skill)
  const skills = [
    { 
      icon: "devices", 
      title: "Responsive", 
      subtitle: "Design" 
    },
    { 
      icon: "speed", 
      title: "High", 
      subtitle: "Performance" 
    },
    { 
      icon: "security", 
      title: "Secure", 
      subtitle: "Development" 
    }
  ];

  return (
    <div className="layout-container flex w-full flex-col bg-[#161b22] dark:bg-[#161b22] border-y border-[#283039]">
      <div className="flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-4 py-12 md:px-10">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
            
            {/* Judul Bagian */}
            <div className="text-center md:text-left">
              <h3 className="text-white text-xl font-bold font-display">My Expertise</h3>
              <p className="text-[#9dabb9] text-sm mt-1">Tools I use to build seamless applications</p>
            </div>

            {/* Daftar Skill (Looping dari data di atas) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#111418] rounded-lg p-3 pr-6 border border-[#283039] hover:border-primary/50 transition-colors">
                  <div className="rounded-md bg-[#283039] p-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{skill.icon}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white text-sm font-bold">{skill.title}</p>
                    <p className="text-[#9dabb9] text-xs">{skill.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;