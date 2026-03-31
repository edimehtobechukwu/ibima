import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Phone, Search, Users, Zap, Heart, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BEIGE, DARK_GREEN, LIME, CREAM_CARD, HANDSHAKE, REMOTE_WORK } from "../components/shared";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Discovery Call",
    subtitle: "We learn everything about your team",
    desc: "We start with a 30-minute call to understand your team's needs, culture, work style, tools, and exactly what kind of person would thrive in your environment. This isn't a sales call — it's research.",
    detail: "We'll cover: role requirements, team dynamics, communication preferences, time zone needs, and must-haves vs. nice-to-haves. You'll leave with a clear profile we'll work from.",
    duration: "30 minutes",
    color: "#e8e054",
  },
  {
    num: "02",
    icon: Search,
    title: "Talent Matching",
    subtitle: "We source and vet your candidates",
    desc: "Our talent team scours our vetted network across Nigeria and Canada to find candidates that match not just on skills, but on personality, work ethic and ambition.",
    detail: "Every candidate we send has been interviewed by Ibima, had their work reviewed, completed a skills assessment, and been reference-checked. You only see the best 3.",
    duration: "24–72 hours",
    color: "#a2cde8",
  },
  {
    num: "03",
    icon: Users,
    title: "You Interview",
    subtitle: "Meet your shortlist, choose your hire",
    desc: "We send you a shortlist of 3 vetted candidates with full profiles, work samples and Ibima's internal assessment. You meet them directly — no intermediaries.",
    detail: "We handle all scheduling, prep the candidates, and send you a structured interview guide. Most founders make their hire after the first round.",
    duration: "2–5 days",
    color: "#d4d0c8",
  },
  {
    num: "04",
    icon: Zap,
    title: "Offer & Contracts",
    subtitle: "Ibima handles all the legal complexity",
    desc: "Once you've chosen your hire, Ibima handles the employment contract, IP assignment, local compliance and payroll setup. You get a simple monthly invoice.",
    detail: "No local entity needed. No payroll complexity. We're the employer of record across both markets, fully compliant with Nigerian and Canadian labour law.",
    duration: "1–2 days",
    color: "#c8e8d4",
  },
  {
    num: "05",
    icon: Heart,
    title: "Integrated Onboarding",
    subtitle: "Your hire is embedded, not outsourced",
    desc: "We run a structured onboarding process to get your new hire up to speed on your tools, brand, team norms and ways of working. They feel like a full team member from day one.",
    detail: "Ibima's CS team checks in weekly for the first month, and monthly thereafter. If something isn't working, we fix it — including replacing the hire within 30 days, no questions asked.",
    duration: "Week 1–4",
    color: "#e8c8e8",
  },
];

const faqs = [
  { q: "How quickly can I get someone started?", a: "Most clients have their first candidate shortlist within 72 hours of the discovery call. From first contact to hire starting, the typical timeline is 2–3 weeks." },
  { q: "What if the hire isn't the right fit?", a: "Every Ibima engagement comes with a 30-day replacement guarantee. If it's not working within the first month, we'll find you a replacement at no additional cost." },
  { q: "Do I need a local entity or legal presence?", a: "No. Ibima acts as the employer of record in both Nigeria and Canada. You get a simple monthly invoice with no local entity, payroll, or legal complexity." },
  { q: "How does Ibima vet candidates?", a: "Every candidate goes through a structured Ibima interview, a practical skills assessment, portfolio or work sample review, and a reference check before they ever see your shortlist." },
  { q: "Can I hire multiple people across both locations?", a: "Absolutely. Many Ibima clients have teams in both Nigeria and Canada simultaneously — mixing creative roles in Lagos with sales or CS teams in Toronto." },
  { q: "What's included in the monthly fee?", a: "The fee covers your hire's salary, Ibima's HR and admin, local compliance, payroll processing, and ongoing account management. No hidden fees." },
];

export function Process() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ background: BEIGE }}>
      {/* Header */}
      <div style={{ paddingTop: "80px", background: DARK_GREEN, paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "2.5rem 1.25rem 0" : "4rem 2rem 0" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(200,240,62,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            How it works
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, marginBottom: "1rem", maxWidth: 600 }}>
            Process Evolved.<br />Together.
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.75 }}>
            From first call to first day — Ibima's five-step process is designed to move fast without cutting corners.
          </p>
        </div>
      </div>

      {/* Timeline strip */}
      <div style={{ background: CREAM_CARD, padding: "1.5rem 2rem", borderBottom: "1px solid rgba(30,58,40,0.08)", overflowX: "auto" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "0", alignItems: "center", minWidth: 500 }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.4rem", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: DARK_GREEN }}>{s.num}</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#3a5a40", fontWeight: 500, whiteSpace: "nowrap" }}>{s.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", color: "#8aaa8a" }}>{s.duration}</p>
              </div>
              {i < steps.length - 1 && <div style={{ height: 1, flex: "0 0 1.5rem", background: "rgba(30,58,40,0.15)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Steps detail */}
      <section style={{ padding: isMobile ? "3rem 1.25rem" : "5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "3rem" : "5rem" }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : (i % 2 === 0 ? "row" : "row-reverse"),
                    gap: isMobile ? "1.5rem" : "3rem",
                    alignItems: isMobile ? "stretch" : "center",
                  }}
                >
                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "14px", background: step.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={20} color={DARK_GREEN} />
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#8aaa8a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Step {step.num}</p>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2 }}>{step.title}</h3>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#5a7a5a", lineHeight: 1.75, marginBottom: "1rem", fontStyle: "italic" }}>
                      "{step.subtitle}"
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#4a6a4a", lineHeight: 1.75, marginBottom: "1rem" }}>
                      {step.desc}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#7a9a7a", lineHeight: 1.7 }}>
                      {step.detail}
                    </p>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1rem", background: step.color, borderRadius: "999px", padding: "0.3rem 0.85rem" }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", color: DARK_GREEN, fontWeight: 600 }}>⏱ {step.duration}</span>
                    </div>
                  </div>

                  {/* Visual card */}
                  <div style={{ flex: "0 0 auto", width: isMobile ? "100%" : "min(380px, 100%)" }}>
                    <div style={{ background: "white", borderRadius: "24px", padding: isMobile ? "1.5rem" : "2rem", border: "1px solid rgba(30,58,40,0.08)", boxShadow: "0 4px 24px rgba(22,44,32,0.06)" }}>
                      <div style={{ width: "100%", height: 6, background: "#f0ebe0", borderRadius: "999px", marginBottom: "1.5rem", overflow: "hidden" }}>
                        <div style={{ width: `${(i + 1) * 20}%`, height: "100%", background: step.color, borderRadius: "999px", transition: "width 1s ease" }} />
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#8aaa8a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Completion</p>
                      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: DARK_GREEN, fontWeight: 500, marginBottom: "0.5rem" }}>{(i + 1) * 20}%</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#7a9a7a", lineHeight: 1.6 }}>
                        {["Discovery done. Profile created.", "Candidates sourced and vetted.", "Shortlist reviewed. Offer pending.", "Paperwork signed. Start date confirmed.", "Your new hire is live. 🎉"][i]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <section style={{ padding: isMobile ? "0 1.25rem 3rem" : "0 2rem 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}>
              <img src={HANDSHAKE} alt="Partnership" className="w-full h-full object-cover" />
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}>
              <img src={REMOTE_WORK} alt="Remote team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: CREAM_CARD, padding: isMobile ? "3rem 1.25rem" : "5rem 2rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a2e20", fontWeight: 500, fontStyle: "italic", textAlign: "center", marginBottom: "3rem" }}>
            Frequently Asked
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(30,58,40,0.12)", borderBottom: i === faqs.length - 1 ? "1px solid rgba(30,58,40,0.12)" : "none" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#1a2e20", fontWeight: 500, lineHeight: 1.4 }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
                    <ChevronDown size={18} color="#8aaa8a" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#5a7a5a", lineHeight: 1.75, paddingBottom: "1.25rem" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DARK_GREEN, padding: isMobile ? "3.5rem 1.25rem" : "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginBottom: "1rem" }}>
            Ready to start?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Book your discovery call today. Candidates ready in 72 hours.
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