import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

function AstroBotBubble({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="ml-auto max-w-[80%] rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur"
    >
      {message}
    </motion.div>
  );
}

export default function ContactPortal() {
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');
  const [messages, setMessages] = useState([
    'Ready to orbit your growth? Tell me about your mission.'
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    const witty = `Nice to meet you${name ? `, ${name}` : ''}! With a budget of ${budget || '—'}, we can plot a trajectory that maximizes thrust per dollar.`;
    setMessages((m) => [...m, witty]);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.6),transparent_60%),radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(168,85,247,0.12),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <h3 className="font-[Space Grotesk] text-3xl md:text-4xl">Contact Portal</h3>
          <p className="mt-2 text-white/80">Glass UI meets cosmic intent. Tell us about your mission.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <label className="block text-sm text-white/70">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40"
                placeholder="Luna Vega"
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <label className="block text-sm text-white/70">Budget Range</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none"
              >
                <option value="">Select</option>
                <option value="$5k-$10k">$5k-$10k</option>
                <option value="$10k-$25k">$10k-$25k</option>
                <option value="$25k+">$25k+</option>
              </select>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 px-6 py-3 font-medium text-black shadow-[0_0_40px_4px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.02]"
            >
              <Rocket size={18} /> Launch My Brand 🚀
            </button>
          </form>
        </div>

        {/* AstroBot */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="mb-2 text-sm text-white/70">AI AstroBot</div>
            <div className="flex flex-col gap-2">
              {messages.map((m, i) => (
                <AstroBotBubble key={i} message={m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
