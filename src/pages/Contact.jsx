import React, { useState } from 'react';

const Contact = () => {
  
  // Fungsi simulasi pengiriman pesan (biar tombolnya jalan)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  // 2. Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Fungsi pengiriman pesan
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Terkirim:", formData);
    alert(`Terima kasih ${formData.name}! Pesan Anda telah terkirim (Simulasi).`);
    
    // Opsional: Reset form setelah kirim
    setFormData({ name: '', email: '', subject: '', message: '' }); 
  };

  

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      
      <div className="px-6 md:px-40 py-12 flex flex-1 justify-center">
        <div className="w-full max-w-[1200px] flex flex-col gap-16">
          
          {/* --- HERO / INTRO SECTION --- */}
          <div className="flex flex-col gap-6 text-center md:text-left md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold tracking-wider text-sm uppercase">
                <span className="w-8 h-[2px] bg-primary"></span>
                Contact
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Let's build something <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">amazing together</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                I'm currently available for freelance work and open to new projects. If you have a project in mind or just want to say hi, feel free to reach out.
              </p>
            </div>
            
            {/* --- SOCIAL LINKS --- */}
            <div className="flex gap-4 md:gap-6 justify-center md:justify-end">
              {/* Mail Icon */}
              <a className="group flex items-center justify-center size-12 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary transition-all duration-300" href="mailto:muhammad.agung.pb@gmail.com">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-white">mail</span>
              </a>
              {/* LinkedIn Icon (SVG) */}
              <a 
              className="group flex items-center justify-center size-12 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary transition-all duration-300" 
              target='_blank'
              href="https://www.linkedin.com/in/mhmmdagung/">
                <svg className="w-6 h-6 fill-slate-600 dark:fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              {/* GitHub Icon (SVG) */}
              <a className="group flex items-center justify-center size-12 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary transition-all duration-300" 
              target='_blank'
              href="https://github.com/MuhammadAgung23">
                <svg className="w-6 h-6 fill-slate-600 dark:fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 9.00098 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.151 20.1625 22.0135 16.425 22.0135 12C22.0135 6.475 17.526 2 12.001 2Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* --- SPLIT LAYOUT: INFO & FORM --- */}
          <div className="grid lg:grid-cols-5 gap-10">
            
            {/* LEFT: Contact Info Card */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-[#283039] rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
                <div className="flex flex-col gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Me</p>
                      <a className="text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" href="mailto:muhammad.agung.pb@gmail.com">muhammad.agung.pb@gmail.com</a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">call</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Call Me</p>
                      <a className="text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" href="tel:+1234567890">+628 5161742323</a>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
                      <p className="text-base font-semibold text-slate-900 dark:text-white">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Image */}
              <div className="bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-[#283039] rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full relative group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">public</span>
                    Available Worldwide (Remote)
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-3 bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-[#283039] rounded-xl p-8 lg:p-10 shadow-sm">
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Send Message</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
                Fill in the form below and I will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="flex flex-col flex-1">
          <label htmlFor="name" className="text-slate-900 dark:text-white text-sm font-semibold leading-normal pb-2">
            Your Name
          </label>
          <input 
            id="name"
            name="name" // Penting: Harus ada atribut name
            value={formData.name}
            onChange={handleChange}
            className="flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#10151a] h-12 placeholder:text-slate-400 dark:placeholder:text-[#9dabb9] px-4 text-base font-normal transition-all" 
            placeholder="Muhammad Agung" 
            type="text" 
            required 
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col flex-1">
          <label htmlFor="email" className="text-slate-900 dark:text-white text-sm font-semibold leading-normal pb-2">
            Email Address
          </label>
          <input 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#10151a] h-12 placeholder:text-slate-400 dark:placeholder:text-[#9dabb9] px-4 text-base font-normal transition-all" 
            placeholder="john@example.com" 
            type="email" 
            required 
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col flex-1">
        <label htmlFor="subject" className="text-slate-900 dark:text-white text-sm font-semibold leading-normal pb-2">
          Subject
        </label>
        <input 
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#10151a] h-12 placeholder:text-slate-400 dark:placeholder:text-[#9dabb9] px-4 text-base font-normal transition-all" 
          placeholder="Project Proposal" 
          type="text" 
        />
      </div>

      {/* Message Area */}
      <div className="flex flex-col flex-1">
        <label htmlFor="message" className="text-slate-900 dark:text-white text-sm font-semibold leading-normal pb-2">
          Message
        </label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="flex w-full min-w-0 flex-1 resize-y rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#10151a] min-h-[160px] placeholder:text-slate-400 dark:placeholder:text-[#9dabb9] p-4 text-base font-normal transition-all" 
          placeholder="Tell me about your project needs..." 
          required
        ></textarea>
      </div>

      <div className="flex items-center justify-between pt-2">
        <p className="hidden md:block text-xs text-slate-500 dark:text-slate-400 italic">
          * I usually respond within 24 hours.
        </p>
        <button 
          type="submit" 
          className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all text-white text-base font-bold tracking-[0.015em] shadow-lg shadow-blue-500/20"
        >
          <span className="mr-2">Send Message</span>
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </form>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;