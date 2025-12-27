import { useState } from 'react'; // <--- Pastikan ini ada!
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State untuk Buka/Tutup Menu
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi saat tombol diklik
  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("Tombol diklik! Status menu sekarang:", !isOpen); // Cek di Console Browser (F12)
  };

  return (
    // Navbar Induk
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#283039]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. LOGO */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              <span className="font-bold text-xl text-slate-900 dark:text-white">Agung.dev</span>
            </Link>
          </div>

          {/* 2. MENU DESKTOP (Hilang di HP) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/projects" className="text-slate-700 dark:text-slate-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</Link>
              <Link to="/about" className="text-slate-700 dark:text-slate-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
              <Link to="/contact" className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors">Hire Me</Link>
            </div>
          </div>

          {/* 3. TOMBOL HP (Hamburger) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleToggle} // Panggil fungsi toggle
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Logika Ikon: Kalau isOpen=true (X), kalau false (Garis 3) */}
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. MENU MOBILE (Muncul jika isOpen = true) */}
      {/* Kita pakai kondisi && untuk memunculkan elemen ini */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#101922] border-t border-gray-200 dark:border-[#283039] absolute w-full left-0 z-50 shadow-xl" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className="text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              onClick={() => setIsOpen(false)} 
              className="text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)} 
              className="text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <div className="pt-4 pb-2">
               <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition"
              >
                Hire Me Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;