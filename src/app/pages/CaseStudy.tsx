import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowUpRight, Heart, Bookmark, Share2, Eye, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

/* ─── Ibima design tokens ──────────────────────────────────────────── */
const DG = "#162c20";   // dark green
const MG = "#2d4a38";   // mid green
const CREAM = "#f5f3ef";
const LIME = "#c8f03e";
const CARD = "#ece8df";

/* ─── Unsplash assets ──────────────────────────────────────────────── */
const IMG_HERO_BG   = "https://images.unsplash.com/photo-1597245514561-8858803ae955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600";
const IMG_TORONTO   = "https://images.unsplash.com/photo-1558383768-8862f89c9790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_LAGOS     = "https://images.unsplash.com/photo-1744907895363-d351aa6019ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const IMG_FACE1     = "https://images.unsplash.com/photo-1663838847713-85cbdd3f9272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
const IMG_FACE2     = "https://images.unsplash.com/photo-1753162658307-a2fdbb4c8a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";

/* ─── Browser chrome frame ─────────────────────────────────────────── */
function BrowserFrame({ children, label, url = "ibima.co", dark = false }: {
  children: React.ReactNode;
  label?: string;
  url?: string;
  dark?: boolean;
}) {
  return (
    <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.18)", border: "1px solid rgba(0,0,0,0.07)" }}>
      {/* Chrome bar */}
      <div style={{ background: dark ? "#1e1e1e" : "#f0f0f0", padding: "0.55rem 1rem", display: "flex", alignItems: "center", gap: "0.6rem", borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"}` }}>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ background: dark ? "rgba(255,255,255,0.08)" : "white", borderRadius: 6, padding: "0.2rem 1rem", fontSize: "0.65rem", fontFamily: "'Inter',sans-serif", color: dark ? "rgba(255,255,255,0.35)" : "#999", minWidth: 180, textAlign: "center" }}>
            {url}
          </div>
        </div>
        <div style={{ width: 60 }} />
      </div>
      {label && (
        <div style={{ position: "absolute", top: 8, right: 12, fontSize: "0.58rem", fontFamily: "'Inter',sans-serif", color: dark ? "rgba(255,255,255,0.3)" : "#bbb", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
      )}
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}

/* ─── Phone frame ──────────────────────────────────────────────────── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 220, margin: "0 auto", background: "#111", borderRadius: 36, padding: "10px 8px", boxShadow: "0 28px 70px rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Notch */}
      <div style={{ background: "#111", height: 22, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 2 }}>
        <div style={{ width: 60, height: 8, background: "#000", borderRadius: 99 }} />
      </div>
      <div style={{ borderRadius: 28, overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>{children}</div>
      {/* Home bar */}
      <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 60, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 99 }} />
      </div>
    </div>
  );
}

/* ─── Section label ────────────────────────────────────────────────── */
function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "#bbb", fontWeight: 500 }}>{n}</span>
      <div style={{ width: 28, height: 1, background: "#ddd" }} />
      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "#aaa", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

/* ─── The mini concentric SVG (exact replica of Solutions page) ─────── */
function ConcentricMini() {
  return (
    <div style={{ width: 220, height: 220, position: "relative", flexShrink: 0 }}>
      <svg viewBox="0 0 220 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {[95, 76, 57, 40, 24].map((r, i) => (
          <circle key={r} cx={110} cy={110} r={r} fill="none" stroke={i === 0 ? LIME : `rgba(200,240,62,${0.12 + i * 0.06})`} strokeWidth={i === 0 ? 1.5 : 1} strokeDasharray={i === 0 ? "12 6" : i === 4 ? "none" : "none"} />
        ))}
        <circle cx={110} cy={110} r={16} fill={LIME} />
        <text x={110} y={114} textAnchor="middle" fill={DG} fontSize={7} fontFamily="Inter" fontWeight={700}>IBIMA</text>
        {/* Orbit labels */}
        {[
          { label: "Creative", angle: -70, r: 57 },
          { label: "Digital", angle: 20, r: 76 },
          { label: "CX & Sales", angle: 130, r: 57 },
          { label: "Ops", angle: 220, r: 76 },
        ].map(({ label, angle, r }) => {
          const rad = (angle * Math.PI) / 180;
          const x = 110 + r * Math.cos(rad);
          const y = 110 + r * Math.sin(rad);
          return (
            <g key={label}>
              <circle cx={x} cy={y} r={11} fill={MG} />
              <text x={x} y={y + 3} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize={4.5} fontFamily="Inter">{label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ─── Mini testimonial card ────────────────────────────────────────── */
function TestiCard({ bg, quote, name, role }: { bg: string; quote: string; name: string; role: string }) {
  return (
    <div style={{ background: bg, borderRadius: 12, padding: "1rem", flex: 1, minWidth: 0 }}>
      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.7rem", fontStyle: "italic", color: DG, lineHeight: 1.55, marginBottom: "0.65rem" }}>"{quote}"</p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: MG, flexShrink: 0, overflow: "hidden" }}>
          <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg,${MG},${DG})` }} />
        </div>
        <div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", fontWeight: 600, color: DG }}>{name}</p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.52rem", color: "rgba(22,44,32,0.5)" }}>{role}</p>
        </div>
      </div>
    </div>
  );
}

export function CaseStudy() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      style={{ background: "#ffffff", paddingTop: 80 }}>

      {/* ═══════════════════════════════════════════════════════════════
          BEHANCE CHROME TOP BAR
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ boxShadow: "inset 0 -1px 0 #ebebeb", background: "white", position: "sticky", top: 80, zIndex: 50, padding: isMobile ? "0.6rem 1rem" : "0.6rem 2rem" }}>
        
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PROJECT COVER — FULL BLEED
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ position: "relative", height: "min(680px, 80vw)", overflow: "hidden" }}>
        <img src={IMG_HERO_BG} alt="" className="w-full h-full object-cover" style={{ filter: "brightness(0.38) saturate(0.6)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 40%, ${DG} 100%)` }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: isMobile ? "1.5rem 1.25rem" : "3rem 4rem" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Brand Identity · Web Design · CRO</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: isMobile ? "clamp(2.8rem,14vw,4rem)" : "clamp(3.5rem,8vw,7rem)", fontWeight: 500, fontStyle: "italic", color: "white", lineHeight: 1, marginBottom: "0.5rem" }}>ibima</h1>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: isMobile ? "0.85rem" : "clamp(1rem,2vw,1.4rem)", fontStyle: "italic", color: "rgba(255,255,255,0.45)", maxWidth: 560 }}>Building an editorial-grade talent agency brand and multi-page web experience from brief to browser.</p>
        </div>

        {/* Stats overlay top-right — desktop only */}
        {!isMobile && <div style={{ position: "absolute", top: "2rem", right: "3rem", display: "flex", gap: "1.5rem" }}>
          {[{ n: "4.2k", l: "Appreciations" }, { n: "18.7k", l: "Views" }, { n: "312", l: "Saves" }].map(({ n, l }) => (
            <div key={l} style={{ textAlign: "center" }}>
              
              
            </div>
          ))}
        </div>
        }
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PROJECT META
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ background: "white", borderBottom: "1px solid #f0f0f0", padding: isMobile ? "1.5rem 1.25rem" : "2rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1.5rem 2rem" }}>
          {[
            { label: "Client", value: "Ibima" },
            { label: "Year", value: "2026" },
            { label: "Role", value: "Lead Designer" },
            { label: "Duration", value: "5 Weeks" },
            { label: "Tools", value: "Figma · React · Motion" },
            { label: "Deliverable", value: "Brand + Web" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "#bbb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{label}</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "#222", fontWeight: 500 }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 4rem" }}>

        {/* ═══════════════════════════════════════════════════════════
            01 — OVERVIEW
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: isMobile ? "3rem 0 2.5rem" : "5rem 0 4rem" }}>
          <SectionTag n="01" label="Overview" />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "4rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 500, fontStyle: "italic", color: "#111", lineHeight: 1.25, marginBottom: "1.25rem" }}>
                What if a talent agency looked like an editorial magazine?
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.85, marginBottom: "1rem" }}>
                Ibima needed a full brand and web presence that could compete with global agencies while communicating warmth, speed, and world-class quality. The category defaults to corporate blues and generic stock photography. Ibima needed to own a completely different register.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.85 }}>
                The result: a cream-and-dark-green editorial system with an electric lime accent, an italic Playfair Display logotype, and a CRO-first page hierarchy that converts founders who've never heard of the brand into booked discovery calls.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Challenge", text: "No brand coherence. Generic SaaS template. Zero emotional differentiation in a saturated offshore talent market." },
                { label: "Approach", text: "Editorial creative direction, CRO-informed architecture, motion system, and a design language distinct enough to be ownable." },
                { label: "Outcome", text: "+340% qualified inbound leads. 72hr first shortlist. 91% client satisfaction post-placement." },
              ].map(({ label, text }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", padding: "1rem 1.25rem", background: "#f8f8f8", borderRadius: 10, borderLeft: `3px solid ${LIME}` }}>
                  <div style={{ flexShrink: 0 }}>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{label}</p>
                  </div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#555", lineHeight: 1.65 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            02 — HERO DESIGN SNIPPET
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 5rem" }}>
          <SectionTag n="02" label="Hero Section" />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#999", marginBottom: "1.75rem", maxWidth: 540 }}>Full-bleed moody photography with the italic lime logotype anchoring the viewport. The word "ibima" at display scale IS the hero — no headline needed.</p>

          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}><div style={{ minWidth: 600 }}>
          <BrowserFrame url="ibima.co" dark>
            {/* HERO MOCKUP */}
            <div style={{ background: DG, height: 460, position: "relative", overflow: "hidden" }}>
              <img src={IMG_HERO_BG} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45, filter: "saturate(0.6)" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(22,44,32,0.7) 0%, rgba(22,44,32,0.2) 100%)` }} />
              {/* Nav */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontStyle: "italic", color: LIME, fontWeight: 500 }}>ibima</span>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  {["Solutions", "Talent", "Locations", "Process", "About"].map((l) => (
                    <span key={l} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.65)" }}>{l}</span>
                  ))}
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.3)", borderRadius: 99, padding: "0.3rem 0.9rem", fontSize: "0.6rem", fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.8)" }}>Book a Call</div>
              </div>
              {/* Logotype */}
              <div style={{ position: "absolute", bottom: "3rem", left: "2rem", zIndex: 10 }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(4rem,10vw,6.5rem)", fontStyle: "italic", fontWeight: 500, color: LIME, lineHeight: 1, letterSpacing: "-0.02em" }}>ibima</div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.9rem", fontStyle: "italic", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem" }}>to build.</p>
                <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <div style={{ background: LIME, borderRadius: 99, padding: "0.55rem 1.5rem", fontSize: "0.7rem", fontFamily: "'Inter',sans-serif", color: DG, fontWeight: 700 }}>Book a Discovery Call →</div>
                  <div style={{ border: "1px solid rgba(255,255,255,0.25)", borderRadius: 99, padding: "0.55rem 1.25rem", fontSize: "0.7rem", fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.7)" }}>See how it works</div>
                </div>
              </div>
              {/* Scroll indicator */}
              <div style={{ position: "absolute", bottom: "1.5rem", right: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
                <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.2)" }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.5rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", transform: "rotate(90deg)", transformOrigin: "center" }}>SCROLL</span>
              </div>
            </div>
          </BrowserFrame>
          </div></div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            03 — COLOUR SYSTEM
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 5rem" }}>
          <SectionTag n="03" label="Colour System" />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "3rem", alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#999", lineHeight: 1.75, marginBottom: "2rem" }}>
                The palette was built around contrast that feels warm rather than stark. Cream and forest green create the primary tension. A single electric lime powers every CTA. Secondary hues on testimonial cards add personality without breaking the system.
              </p>
              {/* Palette blocks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { hex: "#f5f3ef", name: "Cream", role: "Page background", text: "#333" },
                  { hex: "#162c20", name: "Forest", role: "Primary dark / hero BG", text: "white" },
                  { hex: "#2d4a38", name: "Moss", role: "Cards / hover states", text: "white" },
                  { hex: "#c8f03e", name: "Lime", role: "Accent / all primary CTAs", text: DG },
                  { hex: "#ece8df", name: "Linen", role: "Section cards", text: "#333" },
                  { hex: "#e8e054", name: "Citron", role: "Testimonial card A", text: DG },
                  { hex: "#a2cde8", name: "Sky", role: "Testimonial card B", text: DG },
                ].map(({ hex, name, role, text }) => (
                  <div key={hex} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.65rem 1rem", borderRadius: 8, background: "#f8f8f8" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: hex, border: "1px solid rgba(0,0,0,0.06)", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#222" }}>{name}</p>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "#aaa" }}>{role}</p>
                    </div>
                    <code style={{ fontFamily: "monospace", fontSize: "0.68rem", color: "#888", background: "#eee", padding: "0.15rem 0.4rem", borderRadius: 4 }}>{hex}</code>
                  </div>
                ))}
              </div>
            </div>

            {/* In-context colour demo */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Dark green hero swatch */}
              <div style={{ background: DG, borderRadius: 14, padding: "2rem 2rem 1.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(200,240,62,0.06)" }} />
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", fontStyle: "italic", color: LIME, lineHeight: 1, marginBottom: "0.5rem" }}>ibima</p>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.75rem", fontStyle: "italic", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>to build.</p>
                <div style={{ display: "inline-block", background: LIME, borderRadius: 99, padding: "0.4rem 1rem", fontSize: "0.62rem", fontFamily: "'Inter',sans-serif", color: DG, fontWeight: 700 }}>Book a Call →</div>
                <p style={{ marginTop: "0.75rem", fontSize: "0.55rem", color: "rgba(255,255,255,0.2)", fontFamily: "'Inter',sans-serif" }}>Forest #162c20 · Lime #c8f03e · Contrast 9:1 WCAG AAA</p>
              </div>

              {/* Testimonial cards row */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <TestiCard bg="#e8e054" quote="Ibima found us a senior creative in 4 days. Incredible." name="James O." role="CEO, Stackline" />
                <TestiCard bg="#a2cde8" quote="The retention rate is 92%. That's unheard of offshore." name="Sofia M." role="Founder, Petal" />
              </div>

              {/* Cream card */}
              <div style={{ background: CREAM, borderRadius: 14, padding: "1.25rem 1.5rem", border: "1px solid rgba(30,58,40,0.08)" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "#8aaa8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Available Now</p>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontStyle: "italic", color: DG }}>Adaeze Okafor</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color: "#7a9a7a" }}>Senior Brand Designer · Lagos</p>
                <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {["Figma", "Motion", "Brand Systems"].map((t) => (
                    <span key={t} style={{ background: "rgba(22,44,32,0.08)", borderRadius: 99, padding: "0.15rem 0.6rem", fontSize: "0.55rem", fontFamily: "'Inter',sans-serif", color: DG }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            04 — TYPOGRAPHY
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 5rem", borderTop: "1px solid #f0f0f0" }}>
          <SectionTag n="04" label="Typography" />
          <div style={{ background: CREAM, borderRadius: 20, overflow: "hidden" }}>
            {/* Type specimen header */}
            <div style={{ background: DG, padding: "2rem 2.5rem" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "rgba(200,240,62,0.5)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Typefaces</p>
              <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontStyle: "italic", color: "white", lineHeight: 1, marginBottom: "0.25rem" }}>Playfair Display</p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>HEADINGS · LOGOTYPE · QUOTES · ITALIC 500</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.8rem", color: "rgba(255,255,255,0.7)", lineHeight: 1, marginBottom: "0.25rem" }}>Inter</p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>BODY · LABELS · CTAs · NAV · REGULAR 400 / MEDIUM 500</p>
                </div>
              </div>
            </div>

            {/* Type scale */}
            <div style={{ padding: "1.5rem 2.5rem" }}>
              {[
                { label: "Display", sample: "ibima", size: "clamp(5rem,13vw,13rem)", font: "'Playfair Display',serif", style: "italic", weight: 500, color: DG },
                { label: "H1", sample: "World-class talent, embedded.", size: "clamp(2rem,5vw,4rem)", font: "'Playfair Display',serif", style: "italic", weight: 500, color: DG },
                { label: "H2", sample: "Our Solutions", size: "1.6rem", font: "'Playfair Display',serif", style: "italic", weight: 500, color: DG },
                { label: "Body", sample: "We embed full-time teams directly into your business — not outsourced, not temporary. Permanent talent, our end.", size: "0.88rem", font: "'Inter',sans-serif", style: "normal", weight: 400, color: "#5a7a5a" },
                { label: "Label", sample: "AVAILABLE NOW · NIGERIA", size: "0.62rem", font: "'Inter',sans-serif", style: "normal", weight: 500, color: "#8aaa8a" },
              ].map(({ label, sample, size, font, style: fStyle, weight, color }) => (
                <div key={label} style={{ borderBottom: "1px solid rgba(30,58,40,0.07)", padding: "0.9rem 0", display: "flex", alignItems: "baseline", gap: "1.5rem" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", color: "#bbb", letterSpacing: "0.08em", textTransform: "uppercase", minWidth: 48, flexShrink: 0 }}>{label}</span>
                  <p style={{ fontFamily: font, fontSize: size, fontStyle: fStyle, fontWeight: weight, color, lineHeight: 1.15, letterSpacing: label === "Label" ? "0.14em" : undefined, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: label === "Display" ? "nowrap" : "normal" }}>{sample}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            05 — SOLUTIONS PAGE SNIPPET
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 5rem", borderTop: "1px solid #f0f0f0" }}>
          <SectionTag n="05" label="Solutions Page" />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#999", lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: 540 }}>The concentric circle SVG diagram visualises how Ibima sits at the centre of every hire. Each orbit layer represents a talent category — interactive on click to reveal accordion detail.</p>

          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}><div style={{ minWidth: 600 }}>
          <BrowserFrame url="ibima.co/solutions">
            <div style={{ background: CREAM, minHeight: 420, display: "flex", flexDirection: "column" }}>
              {/* Mini nav */}
              <div style={{ background: DG, padding: "0.65rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.9rem", fontStyle: "italic", color: LIME }}>ibima</span>
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  {["Solutions", "Talent", "Locations", "Process", "About"].map((l) => (
                    <span key={l} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.52rem", color: l === "Solutions" ? LIME : "rgba(255,255,255,0.55)", fontWeight: l === "Solutions" ? 500 : 400 }}>{l}</span>
                  ))}
                </div>
                <div style={{ background: LIME, borderRadius: 99, padding: "0.25rem 0.75rem", fontSize: "0.5rem", fontFamily: "'Inter',sans-serif", color: DG, fontWeight: 700 }}>Book a Call</div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, padding: "2rem 2.5rem", display: "flex", gap: "3rem", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#8aaa8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Do</p>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontStyle: "italic", color: DG, lineHeight: 1.2, marginBottom: "0.85rem" }}>We source, vet and embed talent across four disciplines.</h2>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "#7a9a7a", lineHeight: 1.7, marginBottom: "1.25rem" }}>Every Ibima hire is full-time, fully embedded, and retained by you — not cycled through a staffing pool. We sit at the centre of your team, not on the periphery.</p>
                  {/* Accordion items */}
                  {[
                    { label: "Creative Roles", detail: "Brand designers, art directors, motion designers, copywriters." },
                    { label: "Digital Experts", detail: "Dev, product, SEO, growth, analytics." },
                    { label: "CX & Sales", detail: "Customer success, SDRs, account managers." },
                    { label: "Ops & Finance", detail: "Operations, EA, finance, HR." },
                  ].map((item, i) => (
                    <div key={item.label} style={{ borderBottom: "1px solid rgba(30,58,40,0.08)", padding: "0.5rem 0" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: DG, fontWeight: i === 0 ? 600 : 400 }}>{item.label}</span>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: i === 0 ? LIME : "#ccc" }}>{i === 0 ? "−" : "+"}</span>
                      </div>
                      {i === 0 && <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", color: "#7a9a7a", marginTop: "0.25rem", lineHeight: 1.5 }}>{item.detail}</p>}
                    </div>
                  ))}
                </div>
                <div style={{ flexShrink: 0 }}>
                  <ConcentricMini />
                </div>
              </div>
            </div>
          </BrowserFrame>
          </div></div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            06 — TALENT PAGE SNIPPET
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 5rem", borderTop: "1px solid #f0f0f0" }}>
          <SectionTag n="06" label="Talent Page" />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#999", lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: 540 }}>Circular headshots signal humanity, not corporate hierarchy. The 'Available Now' badge answers the founder's implicit question before they ask it. Filter by department and location inline.</p>

          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}><div style={{ minWidth: 600 }}>
          <BrowserFrame url="ibima.co/talent">
            <div style={{ background: CREAM, padding: "2rem 2.5rem", minHeight: 380 }}>
              {/* Mini nav */}
              <div style={{ background: DG, margin: "-2rem -2.5rem 2rem", padding: "0.65rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.9rem", fontStyle: "italic", color: LIME }}>ibima</span>
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  {["Solutions", "Talent", "Locations"].map((l) => (
                    <span key={l} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.52rem", color: l === "Talent" ? LIME : "rgba(255,255,255,0.55)", fontWeight: l === "Talent" ? 500 : 400 }}>{l}</span>
                  ))}
                </div>
                <div style={{ background: LIME, borderRadius: 99, padding: "0.25rem 0.75rem", fontSize: "0.5rem", fontFamily: "'Inter',sans-serif", color: DG, fontWeight: 700 }}>Book a Call</div>
              </div>

              {/* Heading */}
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#8aaa8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Available Talent</p>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontStyle: "italic", color: DG, lineHeight: 1.15 }}>Meet the people<br />who'll join your team.</h2>
              </div>

              {/* Filter chips */}
              <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                {["All Roles", "Creative", "Digital", "CX & Sales", "Nigeria", "Canada"].map((f, i) => (
                  <span key={f} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", padding: "0.25rem 0.7rem", borderRadius: 99, background: i === 0 ? DG : "white", color: i === 0 ? "white" : "#888", border: "1px solid #e0e0e0", cursor: "pointer" }}>{f}</span>
                ))}
              </div>

              {/* Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                {[
                  { name: "Adaeze Okafor", role: "Brand Designer", loc: "Lagos", img: IMG_FACE1, skills: ["Figma", "Motion"] },
                  { name: "Chidi Emeka", role: "UX Lead", loc: "Abuja", img: IMG_HERO_BG, skills: ["UX", "Product"] },
                  { name: "Amara Diallo", role: "Creative Director", loc: "Toronto", img: IMG_FACE2, skills: ["Brand", "Strategy"] },
                  { name: "Kofi Mensah", role: "Growth Lead", loc: "Vancouver", img: IMG_LAGOS, skills: ["SEO", "Analytics"] },
                ].map(({ name, role, loc, img, skills }) => (
                  <div key={name} style={{ background: "white", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(30,58,40,0.07)" }}>
                    <div style={{ position: "relative" }}>
                      <div style={{ aspectRatio: "1/1", overflow: "hidden", borderRadius: "50%", width: "70%", margin: "1rem auto 0" }}>
                        <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem", background: LIME, borderRadius: 99, padding: "0.12rem 0.4rem" }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.45rem", fontWeight: 700, color: DG }}>Available</span>
                      </div>
                    </div>
                    <div style={{ padding: "0.75rem" }}>
                      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.72rem", fontStyle: "italic", color: DG, fontWeight: 500 }}>{name}</p>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#8aaa8a", marginBottom: "0.4rem" }}>{role} · {loc}</p>
                      <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
                        {skills.map((s) => <span key={s} style={{ background: CARD, borderRadius: 99, padding: "0.1rem 0.4rem", fontSize: "0.45rem", fontFamily: "'Inter',sans-serif", color: DG }}>{s}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BrowserFrame>
          </div></div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            07 — TRUSTED BY FOUNDERS + TESTIMONIALS
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 5rem", borderTop: "1px solid #f0f0f0" }}>
          <SectionTag n="07" label="Social Proof Sections" />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#999", lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: 540 }}>The dark green "Trusted by Founders" break provides a tonal shift that resets attention before the testimonials. Coloured cards pattern-match to editorial rather than fake reviews.</p>

          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}><div style={{ minWidth: 560 }}>
          <BrowserFrame url="ibima.co" dark>
            {/* Trusted section */}
            <div style={{ background: DG, padding: "2.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", width: 280, height: 280, opacity: 0.06 }}>
                <svg viewBox="0 0 280 280"><circle cx={140} cy={140} r={120} fill="none" stroke="white" strokeWidth={1} /><circle cx={140} cy={140} r={85} fill="none" stroke="white" strokeWidth={1} /><circle cx={140} cy={140} r={50} fill="none" stroke="white" strokeWidth={1} /></svg>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "rgba(200,240,62,0.55)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Social Proof</p>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontStyle: "italic", color: "white", lineHeight: 1.2, marginBottom: "0.5rem" }}>Trusted by over 120<br />growth-stage founders.</h2>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: 360 }}>Across SaaS, e-commerce, fintech and consumer brands. Average retention: 18 months.</p>
              </div>

              {/* Mini logo strip */}
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", paddingTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap" }}>
                {["Notion", "Linear", "Figma", "Stripe", "Arc", "Loom", "Vercel"].map((l) => (
                  <span key={l} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.22)", fontWeight: 600, letterSpacing: "0.04em" }}>{l}</span>
                ))}
              </div>
            </div>

            {/* Testimonial cards */}
            <div style={{ background: CREAM, padding: "1.5rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
              {[
                { bg: "#e8e054", q: "We hired a brand lead on Monday. They shipped our rebrand 6 weeks later. Unreal.", name: "James O.", co: "Stackline" },
                { bg: "#a2cde8", q: "Ibima's vetting is the most thorough I've seen. Every candidate has been exceptional.", name: "Sofia M.", co: "Petal" },
                { bg: "#c8e8d4", q: "Having our ops team in Lagos and our dev team in Toronto is genuinely seamless.", name: "Kwame A.", co: "Paytr" },
              ].map(({ bg, q, name, co }) => (
                <div key={name} style={{ background: bg, borderRadius: 12, padding: "1rem" }}>
                  <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.65rem", fontStyle: "italic", color: DG, lineHeight: 1.55, marginBottom: "0.65rem" }}>"{q}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: MG }} />
                    <div>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", fontWeight: 600, color: DG }}>{name}</p>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.5rem", color: "rgba(22,44,32,0.5)" }}>{co}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BrowserFrame>
          </div></div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            08 — LOCATIONS + MOBILE SIDE BY SIDE
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 5rem", borderTop: "1px solid #f0f0f0" }}>
          <SectionTag n="08" label="Locations & Responsive" />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#999", lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: 540 }}>Location image cards anchor the service in real geography. The site is fully responsive — mobile collapses to a single-column scroll with the same editorial weight as desktop.</p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr auto", gap: "2rem", alignItems: "start" }}>
            <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}><div style={{ minWidth: 300 }}>
            <BrowserFrame url="ibima.co/locations">
              <div style={{ background: DG, padding: "1.5rem 2rem", minHeight: 480 }}>
                {/* Mini nav */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.9rem", fontStyle: "italic", color: LIME }}>ibima</span>
                  <div style={{ background: LIME, borderRadius: 99, padding: "0.25rem 0.75rem", fontSize: "0.5rem", fontFamily: "'Inter',sans-serif", color: DG, fontWeight: 700 }}>Book a Call</div>
                </div>

                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "rgba(200,240,62,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Hubs</p>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontStyle: "italic", color: "white", lineHeight: 1.2, marginBottom: "1.25rem" }}>Nigeria &amp;<br />Canada.</h2>

                {/* Image cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  {[
                    { label: "Lagos, Nigeria", sub: "Creative · Brand · CX", img: IMG_LAGOS },
                    { label: "Toronto, Canada", sub: "Digital · Product · Dev", img: IMG_TORONTO },
                  ].map(({ label, sub, img }) => (
                    <div key={label} style={{ borderRadius: 12, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
                      <img src={img} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55)" }} />
                      <div style={{ position: "absolute", bottom: "0.6rem", left: "0.75rem" }}>
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.75rem", fontStyle: "italic", color: "white", fontWeight: 500 }}>{label}</p>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.5rem", color: "rgba(255,255,255,0.5)" }}>{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.75rem" }}>
                  {[{ n: "120+", l: "Clients" }, { n: "72hrs", l: "First shortlist" }, { n: "92%", l: "Retention rate" }].map(({ n, l }) => (
                    <div key={l} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "0.65rem 0.5rem", textAlign: "center" }}>
                      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontStyle: "italic", color: LIME, lineHeight: 1 }}>{n}</p>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.5rem", color: "rgba(255,255,255,0.3)", marginTop: "0.2rem" }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </BrowserFrame>
            </div></div>

            {/* Phone mockup */}
            <div style={{ paddingTop: "1rem", display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}>
              {/* ── Solid iPhone 15 Pro mockup ── */}
              <div style={{ position: "relative", width: 248, flexShrink: 0 }}>

                {/* Volume up */}
                <div style={{ position: "absolute", left: -3, top: 88, width: 3, height: 30, background: "#2a2a2e", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 0 #111" }} />
                {/* Volume down */}
                <div style={{ position: "absolute", left: -3, top: 126, width: 3, height: 30, background: "#2a2a2e", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 0 #111" }} />
                {/* Action button */}
                <div style={{ position: "absolute", left: -3, top: 58, width: 3, height: 22, background: "#2a2a2e", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 0 #111" }} />
                {/* Power */}
                <div style={{ position: "absolute", right: -3, top: 100, width: 3, height: 44, background: "#2a2a2e", borderRadius: "0 2px 2px 0", boxShadow: "1px 0 0 #111" }} />

                {/* Phone body */}
                <div style={{
                  background: "linear-gradient(160deg, #1c1c1e 0%, #2a2a2e 40%, #1a1a1c 100%)",
                  borderRadius: 44,
                  padding: 3,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.10), 0 2px 4px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.45), 0 24px 56px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.08)",
                }}>
                  {/* Inner bezel */}
                  <div style={{ background: "#000", borderRadius: 42, overflow: "hidden", position: "relative" }}>

                    {/* Status bar */}
                    <div style={{ background: DG, padding: "10px 20px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.5rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>9:41</span>
                      {/* Dynamic Island */}
                      <div style={{ width: 72, height: 20, background: "#000", borderRadius: 99, position: "absolute", left: "50%", transform: "translateX(-50%)", top: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1a1a", border: "1px solid #333" }} />
                        <div style={{ width: 14, height: 5, borderRadius: 3, background: "#1a1a1a", border: "1px solid #2a2a2a" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <div style={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
                          {[5, 8, 11, 14].map((h, i) => (
                            <div key={i} style={{ width: 2.5, height: h * 0.7, background: i < 3 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)", borderRadius: 1 }} />
                          ))}
                        </div>
                        <svg width="12" height="9" viewBox="0 0 12 9">
                          <path d="M6 7.5a1 1 0 110 2 1 1 0 010-2z" fill="rgba(255,255,255,0.8)" />
                          <path d="M3.5 5.5C4.4 4.6 5.1 4.2 6 4.2s1.6.4 2.5 1.3" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                          <path d="M1.2 3C2.7 1.5 4.2.8 6 .8s3.3.7 4.8 2.2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                        </svg>
                        <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <div style={{ width: 18, height: 9, border: "1px solid rgba(255,255,255,0.5)", borderRadius: 2.5, padding: "1.5px", display: "flex" }}>
                            <div style={{ width: "78%", background: "rgba(255,255,255,0.85)", borderRadius: 1.5 }} />
                          </div>
                          <div style={{ width: 2, height: 4, background: "rgba(255,255,255,0.4)", borderRadius: "0 1px 1px 0" }} />
                        </div>
                      </div>
                    </div>

                    {/* Screen content */}
                    <div style={{ background: DG }}>
                      {/* Mobile hero */}
                      <div style={{ position: "relative", height: 195, overflow: "hidden" }}>
                        <img src={IMG_HERO_BG} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(22,44,32,0.5), rgba(22,44,32,0.9))" }} />
                        <div style={{ position: "absolute", top: "0.75rem", left: "1rem", right: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.8rem", fontStyle: "italic", color: LIME }}>ibima</span>
                          <div style={{ width: 16, height: 12, display: "flex", flexDirection: "column", gap: "3px" }}>
                            {[1, 2, 3].map((i) => <div key={i} style={{ height: 1.5, background: "rgba(255,255,255,0.6)", borderRadius: 1 }} />)}
                          </div>
                        </div>
                        <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontStyle: "italic", color: LIME, lineHeight: 1 }}>ibima</p>
                          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.5rem", fontStyle: "italic", color: "rgba(255,255,255,0.35)" }}>to build.</p>
                        </div>
                      </div>

                      {/* Mobile content */}
                      <div style={{ padding: "1rem" }}>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.48rem", color: "rgba(200,240,62,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.35rem" }}>What We Do</p>
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.85rem", fontStyle: "italic", color: "white", lineHeight: 1.25, marginBottom: "0.75rem" }}>Full-time teams embedded in your business.</p>
                        <div style={{ background: LIME, borderRadius: 99, padding: "0.45rem 1rem", display: "inline-block", fontSize: "0.55rem", fontFamily: "'Inter',sans-serif", color: DG, fontWeight: 700, marginBottom: "1rem" }}>Book a Discovery Call →</div>

                        {/* Mini talent cards mobile */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          {[
                            { name: "Adaeze Okafor", role: "Brand Designer · Lagos", img: IMG_FACE1 },
                            { name: "Amara Diallo", role: "Creative Dir · Toronto", img: IMG_FACE2 },
                          ].map(({ name, role, img }) => (
                            <div key={name} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "0.5rem 0.75rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                              <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                                <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                              <div>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.52rem", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{name}</p>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.46rem", color: "rgba(255,255,255,0.4)" }}>{role}</p>
                              </div>
                              <div style={{ marginLeft: "auto", background: LIME, borderRadius: 99, padding: "0.1rem 0.4rem" }}>
                                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.42rem", color: DG, fontWeight: 700 }}>Now</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Home indicator */}
                      <div style={{ padding: "0.5rem 0 0.75rem", display: "flex", justifyContent: "center" }}>
                        <div style={{ width: 80, height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 99 }} />
                      </div>
                    </div>

                    {/* Screen gloss */}
                    <div style={{ position: "absolute", inset: 0, borderRadius: 42, background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            09 — CONTACT / FOOTER
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 5rem", borderTop: "1px solid #f0f0f0" }}>
          <SectionTag n="09" label="Contact & Footer" />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#999", lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: 540 }}>4-field contact form (message optional) maximises completion rate. The dark green footer closes the loop on the brand language established in the hero.</p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
            {/* Contact form snippet */}
            <BrowserFrame url="ibima.co/contact">
              <div style={{ background: CREAM, padding: "2rem", minHeight: 360 }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#8aaa8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Get In Touch</p>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontStyle: "italic", color: DG, lineHeight: 1.2, marginBottom: "1.25rem" }}>Let's find your<br />next hire.</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {[
                    { label: "Name", placeholder: "Sofia Martinez" },
                    { label: "Company", placeholder: "Petal Studio" },
                    { label: "Email", placeholder: "sofia@petal.co" },
                    { label: "Role you're hiring for", placeholder: "Brand Designer" },
                  ].map(({ label, placeholder }) => (
                    <div key={label}>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#8aaa8a", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{label}</p>
                      <div style={{ background: "white", border: "1px solid rgba(30,58,40,0.12)", borderRadius: 8, padding: "0.5rem 0.75rem" }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.62rem", color: "#ccc" }}>{placeholder}</span>
                      </div>
                    </div>
                  ))}
                  <div style={{ background: DG, borderRadius: 99, padding: "0.6rem", textAlign: "center", marginTop: "0.25rem" }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: LIME, fontWeight: 700 }}>Book a Discovery Call →</span>
                  </div>
                </div>
              </div>
            </BrowserFrame>

            {/* Footer snippet */}
            <BrowserFrame url="ibima.co" dark>
              <div style={{ background: DG, padding: "2rem", minHeight: 360 }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontStyle: "italic", color: LIME, lineHeight: 1, marginBottom: "0.4rem" }}>ibima</p>
                  <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.65rem", fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>to build.</p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, marginTop: "0.65rem", maxWidth: 260 }}>Ibima embeds full-time teams directly into your business — no outsourcing, just across the table.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem", marginBottom: "1.5rem" }}>
                  {[
                    { title: "Solutions", links: ["Creative Roles", "Digital Experts", "CX & Sales"] },
                    { title: "Company", links: ["About", "Our Team", "Process", "Case Study"] },
                    { title: "Contact", links: ["Book a Call", "Nigeria", "Canada"] },
                  ].map((col) => (
                    <div key={col.title}>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.52rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.65rem" }}>{col.title}</p>
                      {col.links.map((l) => (
                        <p key={l} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.35rem" }}>{l}</p>
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1rem" }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.52rem", color: "rgba(255,255,255,0.2)" }}>© 2026 Ibima. All rights reserved.</p>
                </div>
              </div>
            </BrowserFrame>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            DESIGN DECISIONS STRIP
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: "2rem 0 6rem", borderTop: "1px solid #f0f0f0" }}>
          <SectionTag n="10" label="Key Design Decisions" />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { n: "01", title: "Italic logotype", desc: "Forward lean = momentum. Playfair italic at display scale IS the brand's visual signature.", color: LIME },
              { n: "02", title: "Cream not white", desc: "#f5f3ef reads as warm and editorial. Pure white would have made the brand feel clinical.", color: "#e8e054" },
              { n: "03", title: "Round headshots", desc: "Circle crops signal humanity and warmth — square corporate shots signal hierarchy and distance.", color: "#a2cde8" },
              { n: "04", title: "Coloured testimonials", desc: "Citron, sky, sage cards pattern-match to editorial — not fake review star ratings.", color: "#c8e8d4" },
              { n: "05", title: "4-field form only", desc: "Every extra field costs ~10% completion. Message is optional. Result: maximum lead volume.", color: "#e8c8e8" },
              { n: "06", title: "'Discovery Call' CTA", desc: "Specific, low-commitment language. Founders book a conversation, not a sales meeting.", color: "#fde8c8" },
            ].map(({ n, title, desc, color }) => (
              <div key={n} style={{ background: "#fafafa", borderRadius: 14, padding: "1.25rem", border: "1px solid #f0f0f0" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", fontWeight: 700, color: DG }}>{n}</span>
                </div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#222", fontWeight: 600, marginBottom: "0.3rem" }}>{title}</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.72rem", color: "#999", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BEHANCE FOOT — CREATOR CARD
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ borderTop: "1px solid #ebebeb", background: "white", padding: isMobile ? "2rem 1.25rem" : "3rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Appreciate row */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: "1rem" }}>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#222", fontWeight: 600, marginBottom: "0.2rem" }}>Did you enjoy this project?</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "#999" }}>Show some love by appreciating the work.</p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button style={{ display: "flex", alignItems: "center", gap: "0.4rem", border: "1px solid #e0e0e0", background: "white", borderRadius: 8, padding: "0.55rem 1.25rem", fontSize: "0.78rem", fontFamily: "'Inter',sans-serif", color: "#555", cursor: "pointer", fontWeight: 500 }}>
                <Heart size={14} /> Appreciate
              </button>
              <Link to="/contact" style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: DG, color: LIME, borderRadius: 8, padding: "0.55rem 1.25rem", fontSize: "0.78rem", fontFamily: "'Inter',sans-serif", textDecoration: "none", fontWeight: 600 }}>
                Work with Kelvin Edimeh <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["Brand Identity", "Web Design", "UI/UX", "CRO", "Motion Design", "Typography", "Design System", "React", "Tailwind", "Figma", "Editorial", "Agency"].map((tag) => (
              <span key={tag} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: "#0057ff", background: "rgba(0,87,255,0.07)", padding: "0.2rem 0.6rem", borderRadius: 4, cursor: "pointer" }}>{tag}</span>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", paddingTop: "1.5rem", borderTop: "1px solid #f0f0f0", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: DG, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.9rem", fontStyle: "italic", color: LIME }}>i</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "#222", fontWeight: 600 }}>Ibima Studio</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.68rem", color: "#aaa" }}>Brand · Web · Talent · Lagos &amp; Toronto</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              {[{ n: "4.2k", l: "Appreciations" }, { n: "18.7k", l: "Views" }, { n: "312", l: "Saves" }].map(({ n, l }) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#222", fontWeight: 600 }}>{n}</p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "#bbb" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
