import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Check } from "lucide-react";
import { motion } from "motion/react";
import { BEIGE, DARK_GREEN, LIME, CREAM_CARD } from "../components/shared";

const services = ["Creative Roles", "Digital Experts", "CX & Sales", "Full-Time Embed", "Part-Time Talent", "Project Sprint"];

export function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", location: "", phone: "", message: "", services: [] as string[], budget: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) =>
    setForm((f) => ({ ...f, services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s] }));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: CREAM_CARD,
    border: "1px solid rgba(30,58,40,0.12)",
    borderRadius: "12px",
    padding: "0.8rem 1rem",
    fontSize: "0.85rem",
    fontFamily: "'Inter', sans-serif",
    color: "#1a2e20",
    outline: "none",
    boxSizing: "border-box",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ background: BEIGE }}>
      {/* Header */}
      <div style={{ paddingTop: "80px", background: DARK_GREEN, paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 0" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Let's talk
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, marginBottom: "1rem" }}>
            Are you Ibima?
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", maxWidth: 480, lineHeight: 1.75 }}>
            Book a discovery call and we'll have a shortlist of candidates ready within 72 hours.
          </p>
        </div>
      </div>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Left — contact info */}
            <div style={{ flex: "0 0 auto", width: "min(320px, 100%)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", lineHeight: 1.15, marginBottom: "1rem" }}>
                We want to hear from you
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#6a8a6a", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Tell us about your team, your growth plans, and what kind of talent you're looking for. We'll take it from there.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                {[
                  { Icon: Mail, label: "Email", value: "hello@ibima.co" },
                  { Icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                  { Icon: Clock, label: "Response time", value: "Within 4 hours" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: 36, height: 36, background: CREAM_CARD, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(30,58,40,0.1)" }}>
                      <Icon size={15} color={DARK_GREEN} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.1rem" }}>{label}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#1a2e20", fontWeight: 500 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offices */}
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#8aaa8a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Our Offices</p>
                {[
                  { city: "Nigeria", address: "Victoria Island, Lagos, Nigeria", tz: "WAT (UTC+1)" },
                  { city: "Canada", address: "Downtown Toronto, Ontario, Canada", tz: "EST (UTC-5)" },
                ].map((office) => (
                  <div key={office.city} style={{ marginBottom: "1.25rem", paddingLeft: "0.75rem", borderLeft: `2px solid ${LIME}` }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#1a2e20", fontWeight: 600, marginBottom: "0.2rem" }}>{office.city}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#8aaa8a", lineHeight: 1.5 }}>{office.address}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#aacaaa" }}>{office.tz}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="flex-1">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ background: DARK_GREEN, borderRadius: "24px", padding: "4rem", textAlign: "center" }}
                >
                  <div style={{ width: 64, height: 64, background: LIME, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                    <Check size={28} color={DARK_GREEN} strokeWidth={3} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "white", fontWeight: 500, fontStyle: "italic", marginBottom: "0.75rem" }}>Message sent!</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 360, margin: "0 auto" }}>
                    We'll be in touch within 4 hours. In the meantime, feel free to browse our talent roster.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Name *</label>
                      <input type="text" required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Company *</label>
                      <input type="text" required placeholder="Company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Work Email *</label>
                    <input type="email" required placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Location</label>
                      <select value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="">Select country</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>Germany</option>
                        <option>Netherlands</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Phone</label>
                      <input type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                      Services Interested In
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {services.map((s) => {
                        const active = form.services.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            style={{
                              border: `1px solid ${active ? DARK_GREEN : "rgba(30,58,40,0.2)"}`,
                              background: active ? DARK_GREEN : "transparent",
                              color: active ? LIME : "#3a5a40",
                              borderRadius: "999px",
                              padding: "0.35rem 0.9rem",
                              fontSize: "0.72rem",
                              fontFamily: "'Inter', sans-serif",
                              cursor: "pointer",
                              transition: "all 0.2s",
                            }}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Monthly Budget</label>
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select range</option>
                      <option>Under $1,500/mo</option>
                      <option>$1,500 – $3,000/mo</option>
                      <option>$3,000 – $6,000/mo</option>
                      <option>$6,000 – $12,000/mo</option>
                      <option>$12,000+/mo</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8aaa8a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Tell us more</label>
                    <textarea
                      placeholder="What does your team look like? What do you need? What's your timeline?"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: DARK_GREEN,
                      color: LIME,
                      borderRadius: "999px",
                      padding: "0.95rem 2.5rem",
                      fontSize: "0.85rem",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: "0.04em",
                      alignSelf: "flex-start",
                      transition: "opacity 0.2s",
                    }}
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}