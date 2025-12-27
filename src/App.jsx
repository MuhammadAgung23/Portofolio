import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Kalau mau nambah halaman lain nanti, import di sini
// import Projects from './pages/Projects'; 
// import About from './pages/About';

function App() {
  return (
    // Wrapper utama untuk background color & font
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white min-h-screen overflow-x-hidden font-display flex flex-col justify-between">
      
      {/* Navbar selalu muncul di atas */}
      <Navbar />

      {/* Area konten yang berubah-ubah sesuai route */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          
        </Routes>
      </main>

      {/* Footer selalu muncul di bawah */}
      <Footer />
      
    </div>
  );
}

export default App;