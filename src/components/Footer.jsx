import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex justify-center w-full bg-[#111418] py-10 border-t border-[#283039]">
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-4 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          
          {/* Bagian Kiri: Logo & Deskripsi */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-2 text-white">
              <span className="material-symbols-outlined text-primary">terminal</span>
              <h2 className="text-lg font-bold font-display">Agung.dev</h2>
            </Link>
            <p className="text-[#9dabb9] text-sm max-w-xs mx-auto md:mx-0">
              Crafting pixel-perfect web experiences with modern technologies. Based in Indonesia, working globally.
            </p>
          </div>

          {/* Bagian Kanan: Menu & Sosmed */}
          <div className="flex flex-col gap-6 text-center md:text-right">
            
            {/* Link Legalitas */}
            <div className="flex justify-center md:justify-end gap-6">
              <a className="text-[#9dabb9] hover:text-white transition-colors text-sm font-medium" href="#">Privacy Policy</a>
              <a className="text-[#9dabb9] hover:text-white transition-colors text-sm font-medium" href="#">Terms of Service</a>
            </div>

            {/* Icon Sosmed */}
            <div className="flex justify-center md:justify-end gap-4">
              {/* GitHub / Code */}
              <a className="group" href="#" aria-label="GitHub">
                <div className="text-[#9dabb9] group-hover:text-primary transition-colors flex items-center justify-center bg-[#283039] p-2 rounded-full">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </div>
              </a>
              
              {/* LinkedIn / Work */}
              <a className="group" href="#" aria-label="LinkedIn">
                <div className="text-[#9dabb9] group-hover:text-primary transition-colors flex items-center justify-center bg-[#283039] p-2 rounded-full">
                  <span className="material-symbols-outlined text-[20px]">work</span>
                </div>
              </a>
              
              {/* Email */}
              <a className="group" href="#" aria-label="Email">
                <div className="text-[#9dabb9] group-hover:text-primary transition-colors flex items-center justify-center bg-[#283039] p-2 rounded-full">
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </div>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-[#9dabb9] text-xs font-normal">© 2025 Agung Developer. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;