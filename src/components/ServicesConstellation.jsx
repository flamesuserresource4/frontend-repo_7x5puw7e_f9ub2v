import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToggleLeft, ToggleRight } from 'lucide-react';

const services = [
  {
    key: 'web',
    title: 'Web Design',
    pitch: 'Immersive, conversion-focused websites built for speed and story.',
    color: 'from-cyan-400 to-purple-500',
  },
  {
    key: 'brand',
    title: 'Branding',
    pitch: 'Identity systems that glow across every touchpoint.',
    color: 'from-fuchsia-400 to-amber-400',
  },
  {
    key: 'seo',
    title: 'SEO',
    pitch: 'Technical foundations and content galaxies that rank.',
    color: 'from-emerald-400 to-cyan-400',
  },
  {
    key: 'ads',
    title: 'Performance Ads',
    pitch: 'Full-funnel ad systems that compound growth.',
    color: 'from-orange-400 to-pink-500',
  },
  {
    key: 'automation',
    title: 'Automation',
    pitch: 'No-code/AI flows that reduce ops gravity.',
    color: 'from-violet-400 to-cyan-400',
  },
];

function Sphere({ title, pitch, color, onHover }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      onHoverStart={onHover}
      className="relative flex aspect-square w-36 items-center justify-center rounded-full bg-gradient-to-br p-[2px] md:w-44"
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl" />
      <div className={`relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${color} text-black shadow-[inset_0_0_40px_rgba(0,0,0,.35)]`}>
        <span className="px-3 text-center text-sm font-semibold">{title}</span>
      </div>
    </motion.div>
  );
}

export default function ServicesConstellation() {
  const [impactMode, setImpactMode] = useState(false);
  const [active, setActive] = useState(null);

  const impactData = useMemo(
    () => ({
      web: { lift: '+62% Avg. CR', detail: 'After redesign and CRO sprints' },
      brand: { lift: '+4.2x Brand Recall', detail: 'Multi-channel identity rollout' },
      seo: { lift: '#1–#3 Rankings', detail: 'Across 18 priority keywords' },
      ads: { lift: '+3.1x ROAS', detail: '12-week optimization cycle' },
      automation: { lift: '-43% Ops Time', detail: 'CRM + automations' },
    }),
    []
  );

  return (
    <section id="services" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_90%_30%,rgba(168,85,247,0.1),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h3 className="font-[Space Grotesk] text-3xl md:text-4xl">Services Constellation</h3>
          <button
            onClick={() => setImpactMode((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur hover:bg-white/15"
          >
            {impactMode ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
            {impactMode ? 'Show Services' : 'Show Service Impact'}
          </button>
        </div>

        <div className="grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {services.map((s) => (
            <div key={s.key} onMouseEnter={() => setActive(s.key)} onMouseLeave={() => setActive(null)}>
              <Sphere {...s} onHover={() => setActive(s.key)} />
            </div>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              {!impactMode ? (
                <div>
                  <div className="font-[Space Grotesk] text-xl text-cyan-300">
                    {services.find((x) => x.key === active)?.title}
                  </div>
                  <div className="text-white/80">
                    {services.find((x) => x.key === active)?.pitch}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="font-[Space Grotesk] text-xl text-cyan-300">
                    {impactData[active].lift}
                  </div>
                  <div className="text-white/80">{impactData[active].detail}</div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
