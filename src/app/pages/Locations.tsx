import { Link } from "react-router";
import { MapPin, Clock, Users, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {
  BEIGE, DARK_GREEN, LIME, CREAM_CARD,
  NIGERIA_1, NIGERIA_2, NIGERIA_3,
  CANADA_1, CANADA_2, CANADA_3,
} from "../components/shared";

const locations = [
  {
    city: "Nigeria",
    country: "West Africa",
    tagline: "Africa's largest talent market.",
    desc: "Nigeria is home to the continent's fastest-growing tech and creative ecosystem. With over 200 million people, a booming startup scene backed by billions in venture capital, and a deeply entrepreneurial culture, Lagos and Abuja are producing world-class talent at scale.",
    img: NIGERIA_1,
    img2: NIGERIA_2,
    img3: NIGERIA_3,
    timezone: "WAT (UTC+1)",
    overlap: "Full overlap with EU, strong AM overlap with EST",
    talent: "9,000+",
    avgSaving: "up to 70%",
    highlights: [
      "Africa's largest economy and fastest-growing tech hub",
      "Home to the 'Silicon Savanna' — world-class startup ecosystem",
      "High English proficiency across all disciplines",
      "Exceptional creative, tech and sales talent density",
    ],
    departments: ["Brand Designers", "Copywriters", "Motion Designers", "Full Stack Devs", "SDRs"],
    color: "#e8e054",
  },
  {
    city: "Canada",
    country: "North America",
    tagline: "World-class talent, North America-aligned.",
    desc: "Canada is one of the world's top talent markets for technology, design and business. With a diverse, highly educated workforce, strong English and French capabilities, and full alignment with US business hours, Canadian talent delivers enterprise-grade quality at a fraction of US costs.",
    img: CANADA_1,
    img2: CANADA_2,
    img3: CANADA_3,
    timezone: "EST/PST (UTC-5 to UTC-8)",
    overlap: "Full overlap with US & Latin America",
    talent: "7,500+",
    avgSaving: "up to 40%",
    highlights: [
      "Full US time zone alignment — zero lag in communication",
      "World-class universities producing elite engineering and design talent",
      "Highly multicultural workforce with global perspective",
      "Strong regulatory alignment with US business practices",
    ],
    departments: ["Art Directors", "UX Designers", "Full Stack Devs", "Customer Success", "Data Analysts"],
    color: "#a2cde8",
  },
];

export function Locations() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ background: BEIGE }}>
      {/* Header */}
      <div style={{ paddingTop: "80px", background: DARK_GREEN, paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 0" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Where we operate
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, marginBottom: "1rem", maxWidth: 600 }}>
            Our Locations
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.75 }}>
            Two premier talent hubs — Nigeria and Canada — chosen for their exceptional talent depth, time zone coverage, and cultural alignment with fast-moving global businesses.
          </p>
        </div>
      </div>

      {/* Quick stats strip */}
      <div style={{ background: CREAM_CARD, borderBottom: "1px solid rgba(30,58,40,0.08)", padding: "1.5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "Active Talent", value: "16,500+" },
            { label: "Avg. Cost Saving", value: "Up to 70%" },
            { label: "Time Zones", value: "2" },
            { label: "Placements", value: "500+" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: DARK_GREEN, fontWeight: 500, lineHeight: 1, marginBottom: "0.25rem" }}>{s.value}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Location sections */}
      {locations.map((loc, li) => (
        <section key={loc.city} style={{ padding: "5rem 2rem", background: li % 2 === 0 ? BEIGE : "#ede9e0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Hero image */}
            <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative", aspectRatio: "21/8", marginBottom: "3rem" }}>
              <img src={loc.img} alt={loc.city} className="w-full h-full object-cover" style={{ filter: "brightness(0.7)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,30,20,0.75) 0%, rgba(15,30,20,0.1) 60%)" }} />
              <div style={{ position: "absolute", bottom: "2rem", left: "2.5rem" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1, margin: 0 }}>
                  {loc.city}
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", marginTop: "0.4rem" }}>
                  {loc.country}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-16 items-start">
              {/* Left */}
              <div style={{ flex: "0 0 auto", width: "min(400px, 100%)" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: DARK_GREEN, fontStyle: "italic", fontWeight: 500, marginBottom: "1rem" }}>
                  "{loc.tagline}"
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#5a6e5a", lineHeight: 1.75, marginBottom: "2rem" }}>
                  {loc.desc}
                </p>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                  {[
                    { icon: Clock, label: "Timezone", value: loc.timezone },
                    { icon: Users, label: "Active Talent", value: loc.talent },
                    { icon: TrendingUp, label: "Cost Saving", value: loc.avgSaving },
                    { icon: MapPin, label: "Overlap", value: loc.overlap },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} style={{ background: "white", borderRadius: "14px", padding: "1rem", border: "1px solid rgba(30,58,40,0.08)" }}>
                      <Icon size={14} color={DARK_GREEN} style={{ marginBottom: "0.5rem", opacity: 0.6 }} />
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{label}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#1a2e20", fontWeight: 600 }}>{value}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/talent"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: DARK_GREEN, color: LIME, borderRadius: "999px", padding: "0.65rem 1.5rem", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                >
                  Browse {loc.city} Talent <ArrowUpRight size={13} />
                </Link>
              </div>

              {/* Right */}
              <div className="flex-1">
                {/* Highlights */}
                <div style={{ marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#8aaa8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                    Why {loc.city}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {loc.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: loc.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0.05rem" }}>
                          <span style={{ fontSize: "0.6rem", fontWeight: 700, color: DARK_GREEN }}>✓</span>
                        </div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#3a5a40", lineHeight: 1.5 }}>{h}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Departments */}
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#8aaa8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                    Top Roles
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {loc.departments.map((d) => (
                      <span key={d} style={{ background: loc.color, borderRadius: "999px", padding: "0.3rem 0.85rem", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", color: DARK_GREEN, fontWeight: 500 }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div style={{ borderRadius: "14px", overflow: "hidden", aspectRatio: "4/3" }}>
                    <img src={loc.img2} alt={loc.city} className="w-full h-full object-cover" />
                  </div>
                  <div style={{ borderRadius: "14px", overflow: "hidden", aspectRatio: "4/3" }}>
                    <img src={loc.img3} alt={`${loc.city} office`} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why these hubs */}
      <section style={{ background: DARK_GREEN, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Why Nigeria & Canada?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 600, margin: "0 auto 3rem" }}>
            We chose Nigeria for Africa's most explosive talent market and EU time zone alignment. We chose Canada for full US overlap and world-class, diverse talent. Together, they cover every time zone that matters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Elite Talent Density", desc: "Both Nigeria and Canada punch above their weight in creative, tech and sales talent — trained at world-class institutions with global ambition." },
              { title: "Time Zone Coverage", desc: "Nigeria covers EU and morning EST. Canada covers full US hours. Together, your team can operate across 18 hours of the business day." },
              { title: "English Proficiency", desc: "Both markets have high English fluency as a first or primary working language — seamless communication from day one." },
            ].map((card) => (
              <div key={card.title} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: "2rem", border: "1px solid rgba(255,255,255,0.08)", textAlign: "left" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: LIME, fontStyle: "italic", fontWeight: 500, marginBottom: "0.75rem" }}>{card.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "3rem", background: LIME, color: DARK_GREEN, borderRadius: "999px", padding: "0.9rem 2.5rem", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", fontWeight: 700 }}
          >
            Book a Discovery Call <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
