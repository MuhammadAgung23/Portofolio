import { Link } from 'react-router-dom';
import Expertise from "../components/Expertise";
import foto from '../assets/fotoagung.png';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="layout-container flex w-full flex-col grow">
        <div className="flex flex-1 justify-center py-5 md:py-12">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full px-4 md:px-10">
            <div className="@container">
              <div className="flex flex-col-reverse gap-10 py-10 md:gap-12 md:flex-row md:items-center">
                
                {/* Hero Text */}
                <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 flex-1">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit border border-primary/20">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">Available for work</span>
                    </div>
                    <h1 className="text-4xl font-black leading-[1.1] tracking-[-0.033em] md:text-5xl lg:text-6xl">
                      Building digital <span className="text-primary">experiences</span> that matter.
                    </h1>
                    <h2 className="text-[#9dabb9] text-base font-normal leading-relaxed md:text-lg max-w-xl">
                      Hi, I'm Agung. A specialized Frontend Developer crafting high-performance React applications.
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    
                    {/* Tombol View Projects (Sekarang jadi Link) */}
                    <Link to="/projects" className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-all text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25">
                      <span className="truncate">View Projects</span>
                    </Link>
                    
                    {/* Tombol Contact Me (Sekarang jadi Link) */}
                    <Link to="/contact" className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#283039] hover:bg-[#323b46] border border-[#3e4856] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all">
                      <span className="truncate">Contact Me</span>
                    </Link>

                  </div>

                  
                  {/* Tech Stack */}
                  <div className="flex flex-col gap-3 pt-4">
                    <p className="text-xs font-medium text-[#9dabb9] uppercase tracking-widest">Tech Stack</p>
                    <div className="flex gap-4 items-center text-[#9dabb9]">
                      <span className="material-symbols-outlined text-[28px]">javascript</span>
                      <span className="material-symbols-outlined text-[28px]">css</span>
                      <span className="material-symbols-outlined text-[28px]">html</span>
                      <span className="material-symbols-outlined text-[28px]">database</span>
                        
                    </div>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="w-full flex-1 flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden bg-[#283039] group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                    <div 
                      className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105" 
                      img   style={{ backgroundImage: `url(${foto})` }} 
                    >
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Expertise />
    </>
  );
};

export default Home;