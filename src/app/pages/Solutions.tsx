import { Link } from "react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { BEIGE, DARK_GREEN, LIME, CREAM_CARD, TEAM_OFFICE, REMOTE_WORK, SOLUTION_ROLES } from "../components/shared";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

const engagements = [
  {
    type: "Full-Time Embed",
    price: "From $3,200/mo",
    desc: "Your hire works exclusively for you, embedded in your team's workflows, tools and culture. Ibima handles HR, payroll and compliance.",
    features: ["40 hrs/week dedicated", "Direct Slack/tools access", "Ibima HR & compliance", "Monthly performance check-ins", "30-day replacement guarantee"],
  },
  {
    type: "Part-Time Talent",
    price: "From $1,600/mo",
    desc: "20 hours per week of focused, high-quality work. Ideal for growing teams that need specialized skills without full-time commitment.",
    features: ["20 hrs/week dedicated", "Flexible scheduling", "Ibima HR & compliance", "Bi-monthly check-ins", "30-day replacement guarantee"],
    highlighted: false,
  },
  {
    type: "Project Sprint",
    price: "From $4,500",
    desc: "A time-boxed engagement for specific deliverables — a brand refresh, an MVP, a campaign. Clear scope, clear output.",
    features: ["Fixed scope & deliverables", "Dedicated talent pod", "Weekly milestone reviews", "Ibima project oversight", "IP fully transferred"],
  },
];

export function Solutions() {
  return (
    <motion.div {...fade} style={{ background: BEIGE }}>
      {/* Page header */}
      <div style={{ paddingTop: "80px", background: DARK_GREEN, paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 0" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            What we offer
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, marginBottom: "1rem", maxWidth: 600 }}>
            Our Solutions
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.75 }}>
            Three talent verticals. One seamless process. Premium offshore talent embedded directly into your team.
          </p>
        </div>
      </div>

      {/* Solutions sections */}
      {SOLUTION_ROLES.map((section, si) => (
        <section
          key={section.dept}
          style={{ background: si % 2 === 0 ? BEIGE : "#ede9e0", padding: "5rem 2rem" }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="flex flex-col md:flex-row gap-16 items-start">
              {/* Left info */}
              <div style={{ flex: "0 0 auto", width: "min(340px, 100%)" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: section.color,
                    borderRadius: "12px",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: DARK_GREEN,
                    fontWeight: 600,
                  }}
                >
                  {String(si + 1).padStart(2, "0")}
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1a2e20", fontWeight: 500, lineHeight: 1.2, marginBottom: "1rem" }}>
                  {section.dept}
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#5a6e5a", lineHeight: 1.75, marginBottom: "2rem" }}>
                  {section.description}
                </p>
                <Link
                  to="/contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: DARK_GREEN, color: LIME, borderRadius: "999px", padding: "0.6rem 1.5rem", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                >
                  Hire {section.dept.split(" ")[0]} <ArrowUpRight size={13} />
                </Link>
              </div>

              {/* Role cards */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.roles.map((role) => (
                  <div
                    key={role.title}
                    style={{
                      background: "white",
                      borderRadius: "16px",
                      padding: "1.5rem",
                      border: "1px solid rgba(30,58,40,0.08)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#1a2e20", fontWeight: 600, lineHeight: 1.3 }}>
                        {role.title}
                      </h3>
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#6a8a6a", lineHeight: 1.65 }}>
                      {role.desc}
                    </p>
                    <Link
                      to="/talent"
                      style={{ display: "inline-block", marginTop: "1rem", fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: DARK_GREEN, fontWeight: 500, textDecoration: "none", borderBottom: `1px solid ${DARK_GREEN}`, paddingBottom: "1px" }}
                    >
                      View Available →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Engagement Models */}
      <section style={{ background: CREAM_CARD, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#7a9a7a", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", marginBottom: "0.75rem" }}>
            Flexible Engagements
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a2e20", fontWeight: 500, textAlign: "center", marginBottom: "0.75rem", fontStyle: "italic" }}>
            How You Hire
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#6a8a6a", textAlign: "center", maxWidth: 480, margin: "0 auto 3rem", lineHeight: 1.75 }}>
            Choose the engagement model that fits your stage, budget and velocity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagements.map((eng, i) => (
              <div
                key={eng.type}
                style={{
                  background: i === 0 ? DARK_GREEN : "white",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: i === 0 ? "none" : "1px solid rgba(30,58,40,0.1)",
                  position: "relative",
                }}
              >
                {i === 0 && (
                  <span style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: LIME, color: DARK_GREEN, borderRadius: "999px", padding: "0.2rem 0.65rem", fontSize: "0.62rem", fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.06em" }}>
                    POPULAR
                  </span>
                )}
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: i === 0 ? "white" : "#1a2e20", fontWeight: 500, marginBottom: "0.4rem" }}>
                  {eng.type}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: i === 0 ? LIME : DARK_GREEN, fontWeight: 600, marginBottom: "1rem" }}>
                  {eng.price}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: i === 0 ? "rgba(255,255,255,0.55)" : "#6a8a6a", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {eng.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                  {eng.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Check size={13} color={i === 0 ? LIME : DARK_GREEN} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: i === 0 ? "rgba(255,255,255,0.7)" : "#4a6a4a" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: i === 0 ? LIME : "transparent",
                    color: i === 0 ? DARK_GREEN : DARK_GREEN,
                    border: i === 0 ? "none" : `1px solid rgba(30,58,40,0.3)`,
                    borderRadius: "999px",
                    padding: "0.65rem",
                    fontSize: "0.78rem",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    fontWeight: i === 0 ? 600 : 400,
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image section */}
      <section style={{ padding: "5rem 2rem", background: BEIGE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}>
              <img src={TEAM_OFFICE} alt="Ibima team" className="w-full h-full object-cover" />
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}>
              <img src={REMOTE_WORK} alt="Remote work" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DARK_GREEN, padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "1rem" }}>
            Ready to hire world-class talent?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Book a call and we'll have candidates ready within 72 hours.
          </p>
          <Link
            to="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: LIME, color: DARK_GREEN, borderRadius: "999px", padding: "0.9rem 2.5rem", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", fontWeight: 700 }}
          >
            Book a Discovery Call <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
