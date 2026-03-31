import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useInView, useMotionValue, animate } from "motion/react";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  useEffect(() => {
    return count.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [count]);

  return <span ref={ref}>{value}</span>;
}
import {
  BEIGE, DARK_GREEN, LIME, CREAM_CARD,
  HERO_IMAGE, NIGERIA_1, CANADA_1,
  P1, P2, P3, P4, P5, P6,
  TESTIMONIALS, LOGOS, SOLUTION_ROLES, TALENT,
} from "../components/shared";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

export function Home() {
  const [accordionOpen, setAccordionOpen] = useState(0);
  const previewTalent = TALENT.slice(0, 8);

  return (
    <motion.div {...fade}>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <div style={{ background: BEIGE, padding: "0 12px" }}>
        <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: 600, borderRadius: "0 0 24px 24px", overflow: "hidden" }}>
          <img src={HERO_IMAGE} alt="Ibima Hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.62) saturate(0.82)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,22,14,0.55) 0%, rgba(10,22,14,0.15) 45%, rgba(10,22,14,0.72) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: "80px" }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(5rem, 16vw, 13rem)", color: LIME, fontWeight: 500, fontStyle: "italic", lineHeight: 1, letterSpacing: "-0.02em", margin: 0 }}>
              ibima
            </h1>
            <p style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Playfair Display', serif", fontSize: "clamp(1rem, 2.8vw, 2rem)", fontWeight: 400, letterSpacing: "0.1em", marginTop: "0.5rem" }}>
              to build.
            </p>
            <Link to="/contact" style={{ marginTop: "2.5rem", background: "rgba(200,240,62,0.12)", border: "1px solid rgba(200,240,62,0.45)", color: LIME, borderRadius: "999px", padding: "0.65rem 2rem", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", letterSpacing: "0.06em" }}>
              Book Our Talent Team
            </Link>
          </div>
        </section>
      </div>

      {/* ─── LOGO STRIP ───────────────────────────────────────────────── */}
      <div style={{ background: CREAM_CARD, borderBottom: "1px solid rgba(0,0,0,0.06)" }} className="py-4 overflow-hidden">
        <div className="flex items-center justify-center gap-10 flex-wrap px-8">
          {LOGOS.map((logo) => (
            <span key={logo} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", color: "rgba(30,50,35,0.45)", textTransform: "uppercase", fontWeight: 500 }}>{logo}</span>
          ))}
        </div>
      </div>

      {/* ─── VALUE PROP ───────────────────────────────────────────────── */}
      <section style={{ background: BEIGE }} className="py-16 text-center px-6">
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1rem, 2.2vw, 1.35rem)", color: "#2a3a2e", fontWeight: 400, maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
          We hire, manage, and give you direct access<br />to premium talent offshore.
        </p>
      </section>

      {/* ─── SOLUTIONS ────────────────────────────────────────────────── */}
      <section style={{ background: BEIGE }} className="pb-24 px-8 md:px-16">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20 items-center">
            <div style={{ flex: "0 0 auto", width: "min(380px, 100%)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a2e20", fontWeight: 500, lineHeight: 1.2, marginBottom: "1rem" }}>Our Solutions</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#5a6e5a", lineHeight: 1.75, marginBottom: "2rem" }}>
                Ibima embeds world-class offshore talent directly into your team. No agencies, no middlemen — just exceptional people working as your own.
              </p>
              <div>
                {SOLUTION_ROLES.map((s, i) => (
                  <div key={s.dept} style={{ borderTop: "1px solid rgba(30,50,35,0.15)", borderBottom: i === SOLUTION_ROLES.length - 1 ? "1px solid rgba(30,50,35,0.15)" : "none" }}>
                    <button onClick={() => setAccordionOpen(i === accordionOpen ? -1 : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.9rem 0", background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: accordionOpen === i ? "#1a2e20" : "#4a5e4a", fontWeight: accordionOpen === i ? 500 : 400, letterSpacing: "0.03em" }}>
                      {s.dept}
                      <span style={{ transition: "transform 0.3s", transform: accordionOpen === i ? "rotate(45deg)" : "rotate(0deg)", fontSize: "1.1rem", color: "#5a7a5a" }}>+</span>
                    </button>
                    {accordionOpen === i && (
                      <div style={{ paddingBottom: "1rem" }}>
                        <div className="flex flex-wrap gap-2">
                          {s.roles.map((r) => (
                            <span key={r.title} style={{ background: "rgba(30,58,40,0.08)", border: "1px solid rgba(30,58,40,0.15)", borderRadius: "999px", padding: "0.25rem 0.75rem", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", color: "#2d4a35" }}>{r.title}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link to="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1.5rem", border: "1px solid rgba(30,58,40,0.3)", color: DARK_GREEN, borderRadius: "999px", padding: "0.55rem 1.25rem", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>
                Explore All Solutions <ArrowRight size={13} />
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-center pt-4 md:pt-0">
              <div style={{ position: "relative", width: 340, height: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <motion.svg animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} width={340} height={340} viewBox="0 0 340 340" style={{ position: "absolute", inset: 0 }}>
                  {[155, 120, 85, 50].map((r) => <circle key={r} cx={170} cy={170} r={r} fill="none" stroke="rgba(30,58,40,0.1)" strokeWidth={0.8} />)}
                  <circle cx={170} cy={170} r={155} fill="none" stroke={DARK_GREEN} strokeWidth={1.2} strokeDasharray={`${2 * Math.PI * 155 * 0.7} ${2 * Math.PI * 155 * 0.3}`} strokeDashoffset={`${2 * Math.PI * 155 * 0.15}`} strokeLinecap="round" style={{ transform: "rotate(-90deg)", transformOrigin: "170px 170px" }} />
                  <circle cx={170} cy={170} r={85} fill="none" stroke={DARK_GREEN} strokeWidth={1} strokeDasharray={`${2 * Math.PI * 85 * 0.45} ${2 * Math.PI * 85 * 0.55}`} strokeDashoffset={`${2 * Math.PI * 85 * 0.08}`} strokeLinecap="round" style={{ transform: "rotate(-90deg)", transformOrigin: "170px 170px" }} />
                  {[0, 72, 144, 216, 288].map((angle, i) => { const rad = (angle - 90) * (Math.PI / 180); return <circle key={i} cx={170 + 155 * Math.cos(rad)} cy={170 + 155 * Math.sin(rad)} r={3} fill={i === 0 ? LIME : DARK_GREEN} />; })}
                </motion.svg>
                <div style={{ textAlign: "center", zIndex: 2, position: "relative" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", color: DARK_GREEN, fontWeight: 500, lineHeight: 1 }}><AnimatedNumber value={500} />+</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#6a8a6a", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.3rem" }}>Placed Talents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TALENT PREVIEW ───────────────────────────────────────────── */}
      <section style={{ background: BEIGE }} className="pb-24 px-8">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", textAlign: "center", marginBottom: "2rem" }}>Meet the Talent</h2>
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            {previewTalent.map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center" style={{ width: 80 }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(30,58,40,0.12)", marginBottom: "0.5rem" }}>
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", color: "#3a5040", fontWeight: 500 }}>{person.name}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", color: "#8aa08a" }}>{person.role}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/talent" style={{ background: DARK_GREEN, color: LIME, borderRadius: "999px", padding: "0.6rem 1.75rem", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", letterSpacing: "0.04em", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              Browse All Talent <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY FOUNDERS ──────────────────────────────────────── */}
      <section style={{ background: DARK_GREEN }} className="py-32 px-8 text-center relative overflow-hidden">
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Ibima</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.8rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.15, maxWidth: 560, margin: "0 auto 1.25rem" }}>Trusted by Founders</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", maxWidth: 440, margin: "0 auto 3rem", lineHeight: 1.75 }}>
            Over 500 founders have trusted Ibima to build their remote teams — from seed to scale.
          </p>
          <div className="flex items-center justify-center mb-10 relative">
            {/* Background concentric circles centered perfectly on the 500+ */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(700px, 120vw)", height: "min(700px, 120vw)", opacity: 0.1, pointerEvents: "none", zIndex: -1 }}>
              <motion.svg animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} viewBox="0 0 600 600" className="w-full h-full">
                {[280, 240, 195, 145].map((r) => <circle key={r} cx={300} cy={300} r={r} fill="none" stroke="white" strokeWidth={1} />)}
                <circle cx={300} cy={300} r={280} fill="none" stroke={LIME} strokeWidth={1.5} strokeDasharray="20 10" />
              </motion.svg>
            </div>
            
            <div style={{ position: "relative", width: 220, height: 220 }}>
              <motion.svg animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} width={220} height={220} viewBox="0 0 220 220" style={{ position: "absolute", inset: 0 }}>
                <circle cx={110} cy={110} r={100} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                <circle cx={110} cy={110} r={80} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={0.8} />
                <circle cx={110} cy={110} r={100} fill="none" stroke="rgba(200,240,62,0.4)" strokeWidth={1.2} strokeDasharray={`${2 * Math.PI * 100 * 0.75} ${2 * Math.PI * 100 * 0.25}`} strokeLinecap="round" style={{ transform: "rotate(-90deg)", transformOrigin: "110px 110px" }} />
              </motion.svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", color: "white", fontWeight: 500, lineHeight: 1 }}><AnimatedNumber value={500} />+</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.3rem" }}>Founders</span>
              </div>
            </div>
          </div>
          <Link to="/process" style={{ display: "inline-block", border: "1px solid rgba(200,240,62,0.4)", color: LIME, borderRadius: "999px", padding: "0.65rem 2rem", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", letterSpacing: "0.06em" }}>
            See how it works
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section style={{ background: BEIGE }} className="py-24 px-8">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a2e20", fontWeight: 500, textAlign: "center", marginBottom: "3rem", fontStyle: "italic" }}>Don't take our word for it</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} style={{ background: t.bg, borderRadius: "20px", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "rgba(0,0,0,0.15)", lineHeight: 1, display: "block", marginBottom: "-0.5rem" }}>"</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#1a2a1e", lineHeight: 1.75, flex: 1 }}>{t.quote}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid rgba(0,0,0,0.1)" }}>
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#1a2a1e", fontWeight: 600, lineHeight: 1.3 }}>{t.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", color: "rgba(26,42,30,0.6)", lineHeight: 1.3 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS TEASER ─────────────────────────────────────────── */}
      <section style={{ background: BEIGE }} className="pb-24 px-8">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a2e20", fontWeight: 500, textAlign: "center", marginBottom: "2.5rem", fontStyle: "italic" }}>Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: "Nigeria", img: NIGERIA_1, desc: "West Africa" },
              { name: "Canada", img: CANADA_1, desc: "North America" },
            ].map((loc) => (
              <Link key={loc.name} to="/locations" style={{ borderRadius: "20px", overflow: "hidden", position: "relative", aspectRatio: "16/9", display: "block", textDecoration: "none" }}>
                <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" style={{ filter: "brightness(0.75)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,30,20,0.7) 0%, rgba(15,30,20,0.1) 60%)" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.75rem" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, margin: 0 }}>{loc.name}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", marginTop: "0.25rem" }}>{loc.desc}</p>
                </div>
                <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
                  <span style={{ background: "rgba(200,240,62,0.2)", border: "1px solid rgba(200,240,62,0.4)", color: LIME, borderRadius: "999px", padding: "0.25rem 0.65rem", fontSize: "0.65rem", fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS TEASER ───────────────────────────────────────────── */}
      <section style={{ background: BEIGE }} className="pb-24 px-8">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div style={{ flex: "0 0 auto", width: "min(400px, 100%)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", lineHeight: 1.15, marginBottom: "1.25rem" }}>Process Evolved.<br />Together.</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#5a7a5a", lineHeight: 1.75, marginBottom: "2rem" }}>From discovery to onboarding in as little as 72 hours. Ibima's process is built around speed without sacrificing quality.</p>
              <div className="space-y-3 mb-8">
                {[{ n: "01", t: "Discovery Call" }, { n: "02", t: "Talent Matching" }, { n: "03", t: "Integrated Onboarding" }].map((s) => (
                  <div key={s.n} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#8aaa8a", minWidth: 24 }}>{s.n}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#1a2e20", fontWeight: 500 }}>{s.t}</span>
                  </div>
                ))}
              </div>
              <Link to="/process" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid rgba(30,58,40,0.3)", color: DARK_GREEN, borderRadius: "999px", padding: "0.6rem 1.75rem", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>
                See Full Process <ArrowRight size={13} />
              </Link>
            </div>
            <div className="flex-1">
              <div style={{ background: "rgba(255,255,255,0.5)", borderRadius: "20px", padding: "2rem", position: "relative" }}>
                <div style={{ position: "absolute", top: "1.25rem", right: "1.5rem", fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: LIME, fontStyle: "italic", fontWeight: 500 }}>ibima</div>
                <svg viewBox="0 0 500 300" className="w-full" style={{ height: "auto" }}>
                  {[0, 60, 120, 180, 240, 300].map((y) => <line key={y} x1={0} y1={y} x2={500} y2={y} stroke="rgba(30,58,40,0.07)" strokeWidth={1} />)}
                  {["Sourcing", "Matching", "Interview", "Offer", "Onboard"].map((label, i) => (
                    <text key={label} x={50 + i * 100} y={295} textAnchor="middle" fontSize={8} fill="rgba(30,58,40,0.35)" fontFamily="Inter, sans-serif">{label}</text>
                  ))}
                  <path d="M 50 240 C 100 220, 120 250, 150 200 S 220 240, 250 180 S 320 220, 350 200 S 420 230, 450 210" fill="none" stroke="rgba(30,58,40,0.2)" strokeWidth={1.5} strokeDasharray="6 4" />
                  <path d="M 50 240 C 120 200, 150 160, 250 130 S 370 90, 450 70" fill="none" stroke={DARK_GREEN} strokeWidth={2} strokeLinecap="round" />
                  <path d="M 50 260 C 130 230, 200 190, 350 140 S 420 100, 450 80" fill="none" stroke={LIME} strokeWidth={1.5} strokeLinecap="round" opacity={0.8} />
                  {[{ x: 50, y: 240 }, { x: 150, y: 200 }, { x: 250, y: 130 }, { x: 350, y: 100 }, { x: 450, y: 70 }].map((pt, i) => (
                    <g key={i}><circle cx={pt.x} cy={pt.y} r={4} fill={DARK_GREEN} /><circle cx={pt.x} cy={pt.y} r={8} fill={DARK_GREEN} fillOpacity={0.12} /></g>
                  ))}
                  <text x={260} y={45} fontSize={8} fill={DARK_GREEN} fontFamily="Inter, sans-serif" fontWeight={500}>Ibima Process</text>
                  <text x={290} y={225} fontSize={8} fill="rgba(30,58,40,0.4)" fontFamily="Inter, sans-serif">Traditional</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM TEASER ──────────────────────────────────────────────── */}
      <section style={{ background: BEIGE }} className="py-24 px-8">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#1a2e20", fontWeight: 500, textAlign: "center", fontStyle: "italic", marginBottom: "2.5rem" }}>Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[P3, P1, P6, P5, P2, P4].map((img, i) => {
              const member = [
                { name: "Sofia Mendez", role: "Creative Director" },
                { name: "Amara Kone", role: "Senior Designer" },
                { name: "Marcus Bell", role: "Head of Sales" },
                { name: "Layla Nasser", role: "UX Lead" },
                { name: "James Liu", role: "Full Stack Dev" },
                { name: "Daniel Reyes", role: "Growth Hacker" },
              ][i];
              return (
                <div key={i}>
                  <div style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "3/4", marginBottom: "0.75rem", position: "relative", background: "#c8c0b4" }}>
                    <img src={img} alt={member.name} className="w-full h-full object-cover" />
                    {i === 2 && <div style={{ position: "absolute", inset: 0, border: `2px solid ${LIME}`, borderRadius: "16px", pointerEvents: "none" }} />}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#1a2e20", fontWeight: 500, lineHeight: 1.3 }}>{member.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", color: "#7a9a7a", lineHeight: 1.4 }}>{member.role}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/team" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: DARK_GREEN, color: LIME, borderRadius: "999px", padding: "0.65rem 1.75rem", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>
              Meet the Full Team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "#f0ebe0" }} className="py-20 px-8">
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "1rem" }}>Ready to build your team?</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#6a8a6a", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 2rem" }}>Book a free discovery call and we'll match you with the right talent within 72 hours.</p>
          <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: DARK_GREEN, color: LIME, borderRadius: "999px", padding: "0.9rem 2.5rem", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", fontWeight: 500 }}>
            Book a Discovery Call <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
