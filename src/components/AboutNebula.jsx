import React from 'react';
import { Sparkles } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import { ParallaxItem } from './Parallax';

export default function AboutNebula() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      {/* Parallax decorative glows */}
      <ParallaxItem speed={0.25} className="pointer-events-none absolute -top-10 left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <ParallaxItem speed={0.12} className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.1),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Holographic video loop */}
        <ScrollFadeIn y={24}>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://cdn.coverr.co/videos/coverr-digital-waves-3990/1080p.mp4"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-purple-400/10 to-transparent" />
          </div>
        </ScrollFadeIn>

        {/* Copy + metrics */}
        <div className="space-y-6">
          <ScrollFadeIn delay={0.05}>
            <h3 className="font-[Space Grotesk] text-3xl md:text-4xl">About Nebula</h3>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.1}>
            <p className="text-white/80">
              AstroX is a cosmic crew of designers, engineers, and growth strategists. We blend
              creativity with data to launch brands into new orbits of attention and revenue.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.15}>
            <div className="grid grid-cols-3 gap-4">
              {[
                ['+150', 'Projects Launched'],
                ['+90', 'Happy Brands'],
                ['+1M', 'Digital Reach'],
              ].map(([num, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                  <div className="font-[Space Grotesk] text-3xl text-cyan-300 drop-shadow">{num}</div>
                  <div className="mt-1 text-xs text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <button
              onClick={() => {
                const el = document.getElementById('mission');
                if (el) el.showModal?.();
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-white/15"
            >
              <Sparkles size={16} /> Explore Mission Statement
            </button>
          </ScrollFadeIn>

          <dialog id="mission" className="m-0 w-[92vw] max-w-2xl rounded-2xl border border-white/10 bg-black/80 p-0 text-white backdrop:bg-black/60">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.1),rgba(168,85,247,0.12),rgba(249,115,22,0.08),transparent_65%)]" />
              <div className="relative space-y-4 p-6">
                <div className="font-[Space Grotesk] text-2xl">Our Growth Philosophy</div>
                <p className="text-white/80">
                  We operate at the intersection of art and algorithm. Our campaigns are living systems—
                  constantly iterating with creative testing, first-party data, and automation.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    ['Discovery', 'Research and data mapping'],
                    ['Design', 'Prototyping and creative systems'],
                    ['Orbit', 'Launch, learn, optimize'],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <div className="font-medium text-cyan-300">{title}</div>
                      <div className="text-sm text-white/70">{desc}</div>
                    </div>
                  ))}
                </div>
                <form method="dialog" className="pt-2">
                  <button className="rounded-full bg-white/90 px-4 py-2 text-black hover:bg-white">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </section>
  );
}
