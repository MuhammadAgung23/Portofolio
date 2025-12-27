import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="layout-container flex w-full flex-col">
      <div className="flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full">
          <header className="flex items-center justify-between whitespace-nowrap px-4 py-6 md:px-10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-[#111418] dark:text-white cursor-pointer">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>terminal</span>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Agung.dev</h2>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <nav className="flex items-center gap-9">
                <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Home</Link>
                <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/about">About</Link>
                <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/projects">Projects</Link>
                <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/contact">Contact</Link>
              </nav>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Let's Talk</span>
              </button>
            </div>
            
            {/* Mobile Menu Icon */}
            <div className="md:hidden text-[#111418] dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Navbar;