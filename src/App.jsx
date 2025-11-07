import React from 'react';
import HeroUniverse from './components/HeroUniverse';
import AboutNebula from './components/AboutNebula';
import ServicesConstellation from './components/ServicesConstellation';
import CaseStudyOrbit from './components/CaseStudyOrbit';
import ContactPortal from './components/ContactPortal';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroUniverse />
      <AboutNebula />
      <ServicesConstellation />
      <CaseStudyOrbit />
      <ContactPortal />
      <footer className="relative w-full bg-black py-12 text-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.06),transparent_45%)]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="text-sm text-white/70">© 2025 AstroX Digital Marketing — Designed for the Future of Brand Growth.</div>
          <div className="text-sm text-white/60">Light/Dark Universe coming soon</div>
        </div>
      </footer>
    </div>
  );
}
