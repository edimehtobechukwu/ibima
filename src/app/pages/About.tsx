import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { BEIGE, DARK_GREEN, LIME, CREAM_CARD, TEAM_OFFICE, HANDSHAKE, OFFICE_MODERN, TESTIMONIALS } from "../components/shared";

const milestones = [
  { year: "2019", title: "Founded in Lagos", desc: "Sofia and James started Ibima with a single client and a big belief: offshore talent could be world-class if treated with the same care as local hires." },
  { year: "2020", title: "Expanded to Canada", desc: "Recognising the incredible talent pool in North America, Ibima opened its second hub in Toronto — perfectly aligned with US and global business hours." },
  { year: "2021", title: "100 Placements", desc: "Reached our first 100 placements across Creative, Digital and CX roles. Every single one vetted, embedded and retained." },
  { year: "2022", title: "Series A raise", desc: "Raised $4.2M to invest in our vetting infrastructure, account management team, and talent development programs." },
  { year: "2023", title: "500 Founders Served", desc: "Over 500 founders trusted Ibima to build their teams. NPS of 78. 30-day retention rate of 94%." },
  { year: "2024", title: "Ibima Academy launched", desc: "Launched our talent development program to upskill promising candidates and fast-track them into Ibima-ready roles." },
];

const stats = [
  { value: "500+", label: "Founders served" },
  { value: "94%", label: "30-day retention" },
  { value: "72h", label: "Avg. to shortlist" },
  { value: "78", label: "NPS score" },
];

export function About() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ background: BEIGE }}>
      {/* Header */}
      <div style={{ paddingTop: "80px", background: DARK_GREEN, paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 0" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Our story
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, marginBottom: "1rem", maxWidth: 640 }}>
            We believe the best talent doesn't live in your city
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.75 }}>
            Ibima was built to close the gap between exceptional offshore talent and the founders who need them.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: CREAM_CARD, borderBottom: "1px solid rgba(30,58,40,0.08)", padding: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center", flex: "1 1 140px" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", color: DARK_GREEN, fontWeight: 500, lineHeight: 1, marginBottom: "0.3rem" }}>{s.value}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#7a9a7a", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Mission</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                Make offshore talent indistinguishable from local talent
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#5a7a5a", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                The offshore talent industry has a reputation problem. Most agencies treat it as arbitrage — ship cheap labour, collect a fee. We built Ibima to be the antidote.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#5a7a5a", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Every Ibima talent is vetted for skills, communication, ambition and cultural adaptability. They don't work "for" your company — they work "as" your company. The distinction is everything.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#5a7a5a", lineHeight: 1.8 }}>
                We've built our entire model around one belief: when the talent is exceptional and the integration is seamless, geography becomes irrelevant.
              </p>
            </div>
            <div style={{ flex: "0 0 auto", width: "min(480px, 100%)" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/3" }}>
                <img src={HANDSHAKE} alt="Partnership" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: CREAM_CARD, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", textAlign: "center", marginBottom: "4rem" }}>
            Our Journey
          </h2>
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(30,58,40,0.12)", transform: "translateX(-50%)" }} className="hidden md:block" />

            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: "flex",
                    flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                    gap: "2rem",
                    alignItems: "flex-start",
                    textAlign: i % 2 === 0 ? "right" : "left",
                  }}
                  className="flex-col md:!flex-row"
                >
                  <div style={{ flex: 1 }} className={i % 2 !== 0 ? "md:text-right" : ""}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#3a7a4a", fontStyle: "italic", fontWeight: 500, marginBottom: "0.25rem" }}>
                      {m.year}
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#1a2e20", fontWeight: 500, marginBottom: "0.5rem" }}>{m.title}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#6a8a6a", lineHeight: 1.7 }}>{m.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div style={{ flexShrink: 0, width: 16, height: 16, borderRadius: "50%", background: DARK_GREEN, border: "3px solid white", boxShadow: "0 0 0 2px rgba(30,58,40,0.2)", marginTop: "0.25rem", alignSelf: "flex-start" }} className="hidden md:block" />

                  <div style={{ flex: 1 }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section style={{ padding: "5rem 2rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/5", gridRow: "span 1" }}>
              <img src={TEAM_OFFICE} alt="Team" className="w-full h-full object-cover" />
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/5" }}>
              <img src={OFFICE_MODERN} alt="Office" className="w-full h-full object-cover" />
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/5" }}>
              <img src={HANDSHAKE} alt="Partnership" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", textAlign: "center", marginBottom: "3rem" }}>
            What founders say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TESTIMONIALS.slice(0, 2).map((t, i) => (
              <div key={i} style={{ background: t.bg, borderRadius: "20px", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", color: "rgba(0,0,0,0.12)", lineHeight: 1 }}>"</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#1a2a1e", lineHeight: 1.75, flex: 1 }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(0,0,0,0.08)" }}>
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#1a2a1e", fontWeight: 600 }}>{t.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(26,42,30,0.6)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DARK_GREEN, padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "1rem" }}>
            Build with us
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Ready to hire world-class talent without the local price tag?
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: LIME, color: DARK_GREEN, borderRadius: "999px", padding: "0.85rem 2rem", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", fontWeight: 700 }}
            >
              Book a Call <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/talent"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", padding: "0.85rem 2rem", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
            >
              Browse Talent
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}