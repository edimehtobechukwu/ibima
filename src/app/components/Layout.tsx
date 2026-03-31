import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { DARK_GREEN, LIME, BEIGE } from "./shared";

const NAV_LINKS = [
  { label: "Solutions", to: "/solutions" },
  { label: "Talent", to: "/talent" },
  { label: "Locations", to: "/locations" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
];

/* ── Animated hamburger icon ─────────────────────────────────────── */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div style={{ width: 24, height: 18, position: "relative", cursor: "pointer" }}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={
            open
              ? i === 0
                ? { top: "50%", rotate: 45, translateY: "-50%" }
                : i === 2
                ? { top: "50%", rotate: -45, translateY: "-50%" }
                : { opacity: 0, scaleX: 0 }
              : { top: `${i * 50}%`, rotate: 0, translateY: "0%", opacity: 1, scaleX: 1 }
          }
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 2,
            background: "white",
            borderRadius: 2,
            display: "block",
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const transparent = isHome && !scrolled && !mobileOpen;
  const bg = transparent ? "transparent" : DARK_GREEN;
  const textColor = "rgba(255,255,255,0.85)";
  const activeColor = LIME;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: bg,
          transition: "background 0.35s ease",
          backdropFilter: transparent ? "none" : "blur(12px)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: LIME,
              fontSize: "1.5rem",
              fontWeight: 500,
              fontStyle: "italic",
              textDecoration: "none",
              letterSpacing: "0.02em",
              position: "relative",
              zIndex: 110,
            }}
          >
            ibima
          </Link>

          {/* Desktop links */}
          <div style={{ alignItems: "center", gap: "2rem" }} className="hidden md:flex">
            {NAV_LINKS.map(({ label, to }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  style={{
                    color: active ? LIME : textColor,
                    fontSize: "0.78rem",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: active ? 500 : 400,
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              style={{
                background: location.pathname === "/contact" ? LIME : "transparent",
                color: location.pathname === "/contact" ? DARK_GREEN : "white",
                border: `1px solid ${location.pathname === "/contact" ? LIME : "rgba(255,255,255,0.4)"}`,
                borderRadius: "999px",
                padding: "0.45rem 1.25rem",
                fontSize: "0.75rem",
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "all 0.2s",
              }}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.35rem",
              position: "relative",
              zIndex: 110,
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* ── Full-screen mobile drawer ─────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 98,
                background: "rgba(0,0,0,0.45)",
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(340px, 92vw)",
                zIndex: 99,
                background: DARK_GREEN,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              {/* Decorative concentric circles */}
              <div style={{ position: "absolute", top: -60, right: -60, width: 260, height: 260, opacity: 0.06, pointerEvents: "none" }}>
                <svg viewBox="0 0 260 260" style={{ width: "100%", height: "100%" }}>
                  {[110, 85, 60, 38].map((r) => (
                    <circle key={r} cx={130} cy={130} r={r} fill="none" stroke={LIME} strokeWidth={1} />
                  ))}
                </svg>
              </div>

              {/* Top spacer for navbar height */}
              <div style={{ height: 72, flexShrink: 0 }} />

              {/* Nav links */}
              <div style={{ padding: "2rem 2.5rem", flex: 1 }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.58rem",
                  color: `${LIME}88`,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}>
                  Navigation
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {NAV_LINKS.map(({ label, to }, i) => {
                    const active = location.pathname === to;
                    return (
                      <motion.div
                        key={to}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.06 + i * 0.06, duration: 0.3, ease: "easeOut" }}
                      >
                        <Link
                          to={to}
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "0.75rem",
                            padding: "1rem 0",
                            borderBottom: "1px solid rgba(255,255,255,0.07)",
                            textDecoration: "none",
                            color: active ? LIME : "rgba(255,255,255,0.85)",
                          }}
                        >
                          <span style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.58rem",
                            color: active ? `${LIME}99` : "rgba(255,255,255,0.25)",
                            letterSpacing: "0.06em",
                            minWidth: 24,
                          }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.65rem",
                            fontStyle: "italic",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            letterSpacing: "-0.01em",
                          }}>
                            {label}
                          </span>
                          {active && (
                            <span style={{ marginLeft: "auto", color: LIME, opacity: 0.6 }}>
                              <ArrowUpRight size={14} />
                            </span>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.32, ease: "easeOut" }}
                  style={{ marginTop: "2.5rem" }}
                >
                  <Link
                    to="/contact"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                      background: LIME,
                      color: DARK_GREEN,
                      borderRadius: "999px",
                      padding: "0.9rem 2rem",
                      fontSize: "0.85rem",
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: "none",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Book a Discovery Call <ArrowUpRight size={15} />
                  </Link>
                </motion.div>
              </div>

              {/* Footer strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                style={{
                  padding: "1.5rem 2.5rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.25)" }}>
                  Lagos · Abuja · Toronto · Vancouver
                </span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.75rem", fontStyle: "italic", color: `${LIME}55` }}>
                  ibima
                </span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer style={{ background: DARK_GREEN }} className="pt-16 pb-8 px-8">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div style={{ maxWidth: 300 }}>
            <Link
              to="/"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: LIME,
                fontSize: "2rem",
                fontWeight: 500,
                fontStyle: "italic",
                display: "block",
                marginBottom: "1rem",
                textDecoration: "none",
              }}
            >
              ibima
            </Link>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}>
              Ibima embeds full-time teams directly integrated into your business — no outsourcing, just across the table.
            </p>
          </div>

          <div className="flex gap-12 md:gap-16 flex-wrap">
            {[
              { title: "Solutions", links: [{ label: "Creative Roles", to: "/solutions" }, { label: "Digital Experts", to: "/solutions" }, { label: "CX & Sales", to: "/solutions" }] },
              { title: "Company", links: [{ label: "About", to: "/about" }, { label: "Our Team", to: "/team" }, { label: "Locations", to: "/locations" }, { label: "Process", to: "/process" }, { label: "Case Study", to: "/case-study" }] },
              { title: "Contact", links: [{ label: "Book a Call", to: "/contact" }, { label: "hello@ibima.co", to: "/contact" }, { label: "Nigeria", to: "/locations" }, { label: "Canada", to: "/locations" }] },
            ].map((col) => (
              <div key={col.title}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  {col.title}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                border: `1px solid rgba(200,240,62,0.35)`,
                color: LIME,
                borderRadius: "999px",
                padding: "0.65rem 1.5rem",
                fontSize: "0.78rem",
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
              }}
            >
              Book Our Talent Team <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", maxWidth: 500, lineHeight: 1.6 }}>
            Ibima embeds full-time teams directly integrated into your business — no outsourcing, just across the table.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.25)" }}>
            © 2026 Ibima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  const { pathname } = useLocation();

  // scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div style={{ background: BEIGE, minHeight: "100vh" }}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}