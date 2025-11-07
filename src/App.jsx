import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} NovaPBX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Security</a>
            <a className="hover:text-white" href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
