import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} NovaPBX — A futuristic, multi‑tenant cloud VoIP platform.
        </p>
      </footer>
    </div>
  );
}

export default App;
