import { Link } from "react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { BEIGE, DARK_GREEN, LIME, CREAM_CARD, TEAM_OFFICE, IBIMA_TEAM, TESTIMONIALS } from "../components/shared";

const values = [
  { title: "Quality, uncompromised", desc: "Every candidate we send has been rigorously vetted. If we wouldn't hire them ourselves, we won't recommend them to you.", color: "#e8e054" },
  { title: "Speed with care", desc: "We move fast — 72-hour shortlists — but we never sacrifice cultural fit for speed. Both matter.", color: "#a2cde8" },
  { title: "Direct, not transactional", desc: "We tell you the truth about candidates. If someone isn't quite right, we'll say so and find you someone better.", color: "#d4d0c8" },
  { title: "Embedded, not outsourced", desc: "Our talent works as part of your team, not alongside it. That distinction is everything.", color: "#c8e8d4" },
];

export function Team() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ background: BEIGE }}>
      {/* Header */}
      <div style={{ paddingTop: "80px", background: DARK_GREEN, paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 0" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>The people behind Ibima</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, marginBottom: "1rem", maxWidth: 600 }}>
            Meet Our Team
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.75 }}>
            We're a small, opinionated team who believe offshore talent is the future of building great companies. We've lived on both sides of the equation.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {IBIMA_TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(30,58,40,0.08)",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative", background: "#c8c0b4" }}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(22,44,32,0.6), transparent)" }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "0.2rem" }}>{member.name}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#3a7a4a", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "0.75rem" }}>{member.role}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#6a8a6a", lineHeight: 1.65, marginBottom: "1rem" }}>{member.bio}</p>
                  <button
                    style={{ display: "flex", alignItems: "center", gap: "0.3rem", background: "none", border: "none", cursor: "pointer", padding: 0, color: "#8aaa8a" }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={15} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem" }}>Connect</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office photo */}
      <section style={{ padding: "0 2rem 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "21/8" }}>
            <img src={TEAM_OFFICE} alt="Ibima team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: CREAM_CARD, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#7a9a7a", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", marginBottom: "0.75rem" }}>
            What we believe
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", textAlign: "center", marginBottom: "3rem" }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} style={{ background: v.color, borderRadius: "20px", padding: "2rem" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: DARK_GREEN, fontWeight: 500, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(22,44,32,0.75)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials from team perspective */}
      <section style={{ padding: "5rem 2rem", background: BEIGE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", textAlign: "center", marginBottom: "3rem" }}>
            What founders say about us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(3, 6).map((t, i) => (
              <div key={i} style={{ background: t.bg, borderRadius: "20px", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", color: "rgba(0,0,0,0.12)", lineHeight: 1 }}>"</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#1a2a1e", lineHeight: 1.75, flex: 1 }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(0,0,0,0.08)" }}>
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#1a2a1e", fontWeight: 600 }}>{t.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", color: "rgba(26,42,30,0.6)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team CTA */}
      <section style={{ background: DARK_GREEN, padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "1rem" }}>
            Build your team with us
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Whether you're hiring your first offshore team member or your fifteenth — we've done this before.
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