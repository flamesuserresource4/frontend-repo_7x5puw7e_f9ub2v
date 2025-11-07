import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    title: 'NovaTech E‑Com',
    stats: ['+230% ROI', '+62% AOV', '3.1x ROAS'],
    video: 'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-9634/1080p.mp4',
  },
  {
    title: 'Orbit Realty',
    stats: ['+180% Leads', '-42% CPL', 'SEO Top 3'],
    video: 'https://cdn.coverr.co/videos/coverr-abstract-blue-1091/1080p.mp4',
  },
  {
    title: 'Quasar SaaS',
    stats: ['+120% Trials', '+48% Activation', 'NPS 72'],
    video: 'https://cdn.coverr.co/videos/coverr-digital-globe-5244/1080p.mp4',
  },
];

export default function CaseStudyOrbit() {
  return (
    <section id="cases" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(236,72,153,0.1),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h3 className="font-[Space Grotesk] text-3xl md:text-4xl">Case Study Orbit</h3>
        <p className="mt-2 max-w-2xl text-white/80">
          Scroll horizontally to explore orbits. Click a card to pause its orbit.
        </p>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="flex min-w-[900px] gap-6">
            {cases.map((c, idx) => (
              <motion.div
                key={c.title}
                whileHover={{ y: -6 }}
                className="group relative w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <video className="h-full w-full object-cover" autoPlay loop muted playsInline src={c.video} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="font-[Space Grotesk] text-xl text-cyan-300">{c.title}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.stats.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
