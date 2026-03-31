import { useState } from "react";
import { Link } from "react-router";
import { Search, MapPin, ArrowUpRight, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BEIGE, DARK_GREEN, LIME, CREAM_CARD, TALENT } from "../components/shared";

type Dept = "All" | "Creative" | "Digital" | "CX & Sales";
type Loc = "All" | "Nigeria" | "Canada";

export function Talent() {
  const [dept, setDept] = useState<Dept>("All");
  const [loc, setLoc] = useState<Loc>("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = TALENT.filter((t) => {
    if (dept !== "All" && t.dept !== dept) return false;
    if (loc !== "All" && t.location !== loc) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.role.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const depts: Dept[] = ["All", "Creative", "Digital", "CX & Sales"];
  const locs: Loc[] = ["All", "Nigeria", "Canada"];

  const pill = (active: boolean) => ({
    borderRadius: "999px",
    padding: "0.4rem 1rem",
    fontSize: "0.75rem",
    fontFamily: "'Inter', sans-serif",
    border: `1px solid ${active ? DARK_GREEN : "rgba(30,58,40,0.2)"}`,
    background: active ? DARK_GREEN : "transparent",
    color: active ? LIME : "#3a5a40",
    cursor: "pointer",
    transition: "all 0.2s",
  });

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ background: BEIGE }}>
      {/* Header */}
      <div style={{ paddingTop: "80px", background: DARK_GREEN, paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 0" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Browse Talent</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, marginBottom: "1rem", maxWidth: 600 }}>
            Find Your Next<br />Team Member
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.75 }}>
            Every talent on Ibima is vetted, skilled and ready to embed into your team. Browse by role, location or availability.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: CREAM_CARD, borderBottom: "1px solid rgba(30,58,40,0.08)", padding: "1.25rem 2rem", position: "sticky", top: 72, zIndex: 40 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
          {/* Search */}
          <div style={{ position: "relative", flex: "1 1 200px", maxWidth: 280 }}>
            <Search size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#8aaa8a" }} />
            <input
              type="text"
              placeholder="Search roles or names…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", paddingLeft: "2.2rem", paddingRight: "0.75rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", background: "white", border: "1px solid rgba(30,58,40,0.12)", borderRadius: "999px", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#1a2e20", outline: "none" }}
            />
          </div>

          {/* Dept filter */}
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {depts.map((d) => (
              <button key={d} onClick={() => setDept(d)} style={pill(dept === d)}>{d}</button>
            ))}
          </div>

          {/* Location filter */}
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {locs.map((l) => (
              <button key={l} onClick={() => setLoc(l)} style={pill(loc === l)}>{l}</button>
            ))}
          </div>

          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#8aaa8a", marginLeft: "auto" }}>
            {filtered.length} available
          </span>
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: "3rem 2rem 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "#8aaa8a", fontFamily: "'Inter', sans-serif" }}>
              No talent found. Try adjusting your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((person, i) => (
                <motion.div
                  key={person.name + i}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(30,58,40,0.08)",
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                  }}
                  onClick={() => setSelected(selected === i ? null : i)}
                  whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(22,44,32,0.10)" }}
                >
                  {/* Photo */}
                  <div style={{ aspectRatio: "3/2.5", overflow: "hidden", position: "relative" }}>
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover object-top" />
                    {/* Available badge */}
                    <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
                      <span style={{
                        background: person.available ? "rgba(200,240,62,0.9)" : "rgba(0,0,0,0.35)",
                        color: person.available ? DARK_GREEN : "white",
                        borderRadius: "999px",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.62rem",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}>
                        {person.available ? "Available" : "Placed"}
                      </span>
                    </div>
                    {/* Location */}
                    <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", background: "rgba(22,44,32,0.75)", color: "rgba(255,255,255,0.85)", borderRadius: "999px", padding: "0.2rem 0.6rem", fontSize: "0.6rem", fontFamily: "'Inter', sans-serif" }}>
                        <MapPin size={9} /> {person.location}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: "1.25rem" }}>
                    <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#1a2e20", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.2rem" }}>{person.name}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#8aaa8a", lineHeight: 1.4, marginBottom: "0.75rem" }}>{person.role}</p>

                    {/* Skills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.75rem" }}>
                      {person.skills.map((skill) => (
                        <span key={skill} style={{ background: "rgba(30,58,40,0.06)", borderRadius: "999px", padding: "0.18rem 0.55rem", fontSize: "0.65rem", fontFamily: "'Inter', sans-serif", color: "#3a5a40" }}>{skill}</span>
                      ))}
                    </div>

                    {/* Expand */}
                    <AnimatePresence>
                      {selected === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={{ overflow: "hidden" }}
                        >
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#5a7a5a", lineHeight: 1.65, marginBottom: "0.75rem", paddingTop: "0.25rem" }}>
                            {person.bio}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Link
                      to="/contact"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.3rem",
                        background: person.available ? DARK_GREEN : "rgba(30,58,40,0.08)",
                        color: person.available ? LIME : "#8aaa8a",
                        borderRadius: "999px",
                        padding: "0.5rem",
                        fontSize: "0.72rem",
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: "none",
                        fontWeight: 500,
                        pointerEvents: person.available ? "auto" : "none",
                      }}
                    >
                      {person.available ? (<>Book This Talent <ArrowUpRight size={12} /></>) : "Currently Placed"}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA bottom */}
      <section style={{ background: DARK_GREEN, padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "1rem" }}>
            Don't see the right fit?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Tell us what you need and we'll source the perfect candidate within 72 hours.
          </p>
          <Link
            to="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: LIME, color: DARK_GREEN, borderRadius: "999px", padding: "0.85rem 2rem", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", textDecoration: "none", fontWeight: 700 }}
          >
            Request Custom Talent <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}