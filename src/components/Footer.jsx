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
              <a className="group flex items-center justify-center size-12 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary transition-all duration-300" 
              target='_blank'
              href="https://github.com/MuhammadAgung23">
                <svg className="w-6 h-6 fill-slate-600 dark:fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 9.00098 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.151 20.1625 22.0135 16.425 22.0135 12C22.0135 6.475 17.526 2 12.001 2Z"></path>
                </svg>
              </a>
              
              {/* LinkedIn / Work */}
              <a 
              className="group flex items-center justify-center size-12 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary transition-all duration-300" 
              target='_blank'
              href="https://www.linkedin.com/in/mhmmdagung/">
                <svg className="w-6 h-6 fill-slate-600 dark:fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              
              {/* Email */}
              <a className="group flex items-center justify-center size-12 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary transition-all duration-300" href="mailto:muhammad.agung.pb@gmail.com">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-white">mail</span>
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