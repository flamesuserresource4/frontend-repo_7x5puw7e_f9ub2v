import React, { useState, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Rocket, Play, X } from 'lucide-react';

const Modal = ({ open, onClose, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="relative w-[92vw] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function HeroUniverse() {
  const [open, setOpen] = useState(false);
  const heroRef = useRef(null);

  // Smooth scroll to next section
  const enterUniverse = () => {
    const next = document.querySelector('#about');
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Light "parallax" tilt effect for the headline container
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handler = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${-(y * 4)}deg) rotateY(${x * 6}deg)`;
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, []);

  // Scroll-based parallax for the title group
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, -50]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0.7]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/0CT1-dbOQTa-XJKt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow overlay - allow pointer events through */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.12),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          style={{ y: yParallax, opacity: opacityParallax }}
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl select-none"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_20px_4px_rgba(34,211,238,.5)]" />
            AstroX Digital Marketing
          </motion.p>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-[Space Grotesk] text-4xl font-semibold leading-tight sm:text-6xl"
            >
              Welcome to AstroX
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="font-[Space Grotesk] text-2xl text-cyan-200/90 sm:text-4xl"
            >
              Where Digital Dreams Take Orbit 🚀
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-5 max-w-xl text-base text-white/80 sm:text-lg"
          >
            We design, market, and scale brands using creativity and data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={enterUniverse}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 px-6 py-3 font-medium text-black shadow-[0_0_40px_4px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.02]"
            >
              <Rocket className="transition-transform group-hover:translate-x-0.5" size={18} />
              Enter the Universe
            </button>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/15"
            >
              <Play size={18} />
              Watch Case Study Reel
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal with embedded video */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="relative aspect-video w-full bg-black">
          <iframe
            title="AstroX Reel"
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1&rel=0"
            allow="autoplay; fullscreen"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/15" />
        </div>
      </Modal>
    </section>
  );
}
