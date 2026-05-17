"use client";
import Link from "next/link";

const projects = [
  {
    num: "01",
    name: "TrueSofts Platform",
    url: "https://truesofts-nine.vercel.app/",
    description: "Enterprise-level software solutions platform with scalable architecture, modern UI/UX, and production-grade Next.js stack built for high performance.",
    highlights: ["Scalable Architecture", "Responsive UI/UX", "Next.js Stack"],
    tags: ["Next.js", "Web App", "Enterprise"],
    color: "#38bdf8",
  },
  {
    num: "02",
    name: "Visitor Management System",
    url: "https://visitor-management-sa.vercel.app/",
    description: "Intelligent corporate visitor tracking system with RBAC, security workflows, real-time registration, and database-backed operations.",
    highlights: ["Auth + RBAC", "Security Workflows", "Real-time DB"],
    tags: ["Auth", "RBAC", "Security"],
    color: "#a78bfa",
  },
  {
    num: "03",
    name: "FleetXchange Africa",
    url: "http://fleetxchange.africa/",
    description: "Robust marketplace for fleet management and vehicle exchange with dashboards, inventory management, and seamless transaction workflows.",
    highlights: ["Inventory Management", "Marketplace Workflows", "User Dashboards"],
    tags: ["Marketplace", "Dashboards", "Workflow"],
    color: "#34d399",
  },
  {
    num: "04",
    name: "Brewly",
    url: "https://www.brewly.ae/",
    description: "E-commerce platform for specialty coffee & brewing equipment with full catalog, cart, order management, and integrated payment flows.",
    highlights: ["Product Catalogs", "Cart + Checkout", "Order Management"],
    tags: ["E-commerce", "Payments", "Catalog"],
    color: "#fb923c",
  },
  {
    num: "05",
    name: "Pixel Ramp",
    url: "https://www.pixel-ramp.com/",
    description: "Creative agency website with cutting-edge UI/UX, interactive sections, micro-animations, and fully responsive layout that converts visitors.",
    highlights: ["UI/UX Focus", "Interactive Components", "Responsive Build"],
    tags: ["Frontend", "Agency", "Responsive"],
    color: "#f472b6",
  },
  {
    num: "06",
    name: "BabaHub",
    url: "https://babahub.co/",
    description: "Multi-vendor marketplace connecting businesses and consumers with advanced search, secure payment processing, and vendor dashboards.",
    highlights: ["Multi-vendor", "Search Experience", "Secure Transactions"],
    tags: ["Marketplace", "Multi-vendor", "Payments"],
    color: "#38bdf8",
  },
];

const skills = [
  "Next.js", "React", "TypeScript", "Node.js", "PHP", "PostgreSQL",
  "MongoDB", "REST APIs", "Auth + RBAC", "AI/ML Integration",
  "Data Engineering", "Performance + SEO",
];

const experience = [
  {
    icon: "⚡",
    title: "Full Stack Development",
    body: "React + Next.js frontend with production-grade backend patterns using Node.js, PHP, databases, and REST APIs.",
    color: "#38bdf8",
  },
  {
    icon: "🎨",
    title: "UI/UX Engineering",
    body: "Mobile-first responsive interfaces with clean component architecture, smooth animations, and pixel-perfect layout consistency.",
    color: "#a78bfa",
  },
  {
    icon: "🤖",
    title: "AI/ML Integration",
    body: "LLM APIs, intelligent automation, data pipelines, and building AI-powered features into production web applications.",
    color: "#34d399",
  },
];

export default function Home() {
  return (
    <main style={{ paddingTop: 68 }}>
      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{ minHeight: "calc(100vh - 68px)", display: "flex", alignItems: "center", padding: "80px 24px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", width: "100%" }}>
          {/* LEFT */}
          <div>
            <div className="badge anim-fade-up" style={{ marginBottom: 24 }}>
              <span className="status-dot" />
              Available for Projects
            </div>

            <h1 className="anim-fade-up d-100" style={{ fontSize: "clamp(44px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 24 }}>
              Building{" "}
              <span className="gradient-text">Digital</span>
              <br />
              Experiences That
              <br />
              <span className="neon-cyan">Actually Work.</span>
            </h1>

            <p className="anim-fade-up d-200" style={{ fontSize: 18, lineHeight: 1.7, color: "#94a3b8", marginBottom: 32, maxWidth: 480 }}>
              I'm <strong style={{ color: "#e2e8f0" }}>Talha Hassan</strong> — Software Engineer
              scalable web apps with <strong style={{ color: "#38bdf8" }}>Next.js</strong>,
              production-grade backend architecture, and <strong style={{ color: "#a78bfa" }}>AI/ML</strong> integration.
            </p>

            <div className="anim-fade-up d-300" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="#projects" className="btn-glow">View Projects →</a>
              <a href="https://wa.me/923021419651" target="_blank" rel="noreferrer" className="whatsapp-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:talhahassaan0005@gmail.com" className="btn-secondary">✉ Email</a>
            </div>

            {/* STATS */}
            <div className="anim-fade-up d-400" style={{ display: "flex", gap: 40 }}>
              {[
                { val: "6+", label: "Live Projects" },
                { val: "3+", label: "Years Exp." },
                { val: "100%", label: "Client Satisfaction" },
              ].map(s => (
                <div key={s.label}>
                  <div className="stat-value" style={{ fontSize: 32 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D SCENE */}
          <div className="anim-scale-in d-300" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 500 }}>
            <div style={{ position: "relative", width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Rings */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="ring ring-1" style={{ position: "absolute" }} />
                <div className="ring ring-2" style={{ position: "absolute" }} />
                <div className="ring ring-3" style={{ position: "absolute" }} />
              </div>

              {/* Floating 3D Spheres */}
              <div className="anim-float" style={{ 
                position: "absolute", 
                top: "10%", 
                left: "10%", 
                width: 60, 
                height: 60, 
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.4), rgba(56,189,248,0.1))",
                border: "1px solid rgba(56,189,248,0.3)",
                boxShadow: "0 0 30px rgba(56,189,248,0.4), inset 0 0 20px rgba(56,189,248,0.2)",
                animationDelay: "0s"
              }} />
              
              <div className="anim-float" style={{ 
                position: "absolute", 
                bottom: "12%", 
                right: "8%", 
                width: 50, 
                height: 50, 
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, rgba(167,139,250,0.4), rgba(167,139,250,0.1))",
                border: "1px solid rgba(167,139,250,0.3)",
                boxShadow: "0 0 25px rgba(167,139,250,0.4), inset 0 0 15px rgba(167,139,250,0.2)",
                animationDelay: "1s"
              }} />

              {/* Center 3D Cube */}
              <div className="cube-container" style={{ position: "relative", zIndex: 2 }}>
                <div className="cube">
                  <div className="cube-face front">UI</div>
                  <div className="cube-face back">API</div>
                  <div className="cube-face right">ML</div>
                  <div className="cube-face left">DB</div>
                  <div className="cube-face top">DX</div>
                  <div className="cube-face bottom">OPS</div>
                </div>
              </div>

              {/* Floating skill badges */}
              {[
                { label: "Next.js", top: "8%", left: "5%", color: "#38bdf8" },
                { label: "React", top: "8%", right: "5%", color: "#a78bfa" },
                { label: "Node.js", bottom: "15%", left: "2%", color: "#34d399" },
                { label: "AI/ML", bottom: "15%", right: "2%", color: "#fb923c" },
              ].map((b, i) => (
                <div key={b.label}
                  style={{
                    position: "absolute", ...(b.top ? { top: b.top } : {}), ...(b.bottom ? { bottom: b.bottom } : {}),
                    ...(b.left ? { left: b.left } : {}), ...(b.right ? { right: b.right } : {}),
                    background: "rgba(10,22,40,0.9)", border: `1px solid ${b.color}40`,
                    borderRadius: 8, padding: "8px 14px",
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600, color: b.color,
                    boxShadow: `0 0 16px ${b.color}20`,
                    animation: `floatBadge${i % 2 === 0 ? 'A' : 'B'} ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}>
                  {b.label}
                </div>
              ))}

              {/* Glow pulse behind cube */}
              <div style={{
                position: "absolute", width: 180, height: 180, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(56,189,248,0.15), transparent 70%)",
                animation: "glowPulse 3s ease-in-out infinite",
                zIndex: 1,
              }} />
              
              {/* Additional animated particles */}
              <div className="anim-bounce" style={{
                position: "absolute",
                top: "50%",
                right: "5%",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 15px #34d399",
                animationDelay: "0.5s"
              }} />
              
              <div className="anim-bounce" style={{
                position: "absolute",
                bottom: "25%",
                left: "12%",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#fb923c",
                boxShadow: "0 0 15px #fb923c",
                animationDelay: "1.2s"
              }} />
            </div>
          </div>
        </div>

        {/* Inline keyframes for floating badges & glow */}
        <style>{`
          @keyframes floatBadgeA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
          @keyframes floatBadgeB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
          @keyframes glowPulse { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }
          @media(max-width:900px){
            .hero-grid{grid-template-columns:1fr!important}
            .hero-3d{display:none!important}
          }
        `}</style>
      </section>

      {/* ── DIVIDER ─────────────────────────────────── */}
      <div className="neon-divider" style={{ maxWidth: 1200, margin: "0 auto 0", padding: "0 24px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #38bdf8, #a78bfa, transparent)", opacity: 0.3 }} />
      </div>

      {/* ── PROJECTS ────────────────────────────────── */}
      <section id="projects" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label anim-fade-up" style={{ marginBottom: 16 }}>// work samples</div>
          <h2 className="anim-fade-up d-100" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
            Projects That <span className="gradient-text">Ship.</span>
          </h2>
          <p className="anim-fade-up d-200" style={{ color: "#64748b", maxWidth: 500, margin: "0 auto", fontSize: 16, lineHeight: 1.6 }}>
            Live, production-deployed applications built with clean code and real users in mind.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p, i) => (
              <article
                key={p.name}
                className={`project-card anim-fade-up d-${(i % 4 + 1) * 100}`}
                onClick={() => window.open(p.url, "_blank")}
                onMouseEnter={(e) => {
                  if (typeof window === "undefined") return;
                  if (window.innerWidth < 768) return; // mobile safe
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateZ(0) rotateX(16deg) rotateY(-22deg) translateY(-14px)";
                  el.style.boxShadow = "0 40px 120px rgba(0,0,0,0.70), 0 0 44px rgba(56,189,248,0.18)";
                }}
                onMouseMove={(e) => {
                  if (typeof window === "undefined") return;
                  if (window.innerWidth < 768) return; // mobile safe
                  const el = e.currentTarget as HTMLElement;
                  const rect = el.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width; // 0..1
                  const y = (e.clientY - rect.top) / rect.height; // 0..1
                  const rx = (0.5 - y) * 10;
                  const ry = (x - 0.5) * 14;
                  el.style.transform = `translateZ(0) rotateX(${rx * 1.6}deg) rotateY(${ry * 1.6}deg) translateY(-14px)`;
                  el.style.boxShadow = "0 40px 120px rgba(0,0,0,0.70), 0 0 44px rgba(56,189,248,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateZ(0) rotateX(0deg) rotateY(0deg) translateY(0px)";
                  el.style.boxShadow = "";
                }}
                style={{
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                  perspective: 900,
                  willChange: "transform",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                }}
              >
              {/* Card top bar */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: p.color, opacity: 0.7, marginBottom: 6, letterSpacing: "1px" }}>
                    {p.num}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.5px" }}>{p.name}</h3>
                </div>
                <a href={p.url} target="_blank" rel="noreferrer"
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: p.color, fontSize: 18, textDecoration: "none",
                    transition: "all 0.2s ease", flexShrink: 0,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${p.color}25`; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${p.color}30`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${p.color}15`; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  ↗
                </a>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    background: `${p.color}10`, border: `1px solid ${p.color}25`,
                    color: p.color, padding: "4px 12px", borderRadius: 100,
                    fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace",
                  }}>{t}</span>
                ))}
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#94a3b8", marginBottom: 20 }}>{p.description}</p>

              {/* Highlights */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {p.highlights.map(h => (
                  <li key={h} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#cbd5e1" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.color, flexShrink: 0, boxShadow: `0 0 8px ${p.color}` }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div style={{ height: 1, background: `linear-gradient(90deg, ${p.color}30, transparent)`, marginBottom: 20 }} />

              <a href={p.url} target="_blank" rel="noreferrer"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: p.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                View Live Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </article>
          ))}
        <style>{`
          @media (max-width: 420px){
            #projects > div[style*="gridTemplateColumns"]{ gap: 16 !important; }
          }
        `}</style>
        </div>
      </section>

      {/* ── ABOUT + SKILLS ──────────────────────────── */}
      <section id="about" style={{ padding: "60px 24px 100px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="neon-divider" style={{ marginBottom: 80 }}>
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #38bdf8, #a78bfa, transparent)", opacity: 0.3 }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* About */}
          <div>
            <div className="section-label anim-slide-right" style={{ marginBottom: 16 }}>// about me</div>
            <h2 className="anim-slide-right d-100" style={{ fontSize: "clamp(32px, 3vw, 48px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 24 }}>
              Engineer who <span className="gradient-text-2">ships fast</span>,<br />
              builds to last.
            </h2>
            <p className="anim-slide-right d-200" style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              I'm a Full Stack Software Engineer passionate about building products that are fast, 
              scalable, and beautifully designed. My focus is on clean architecture, maintainable code, 
              and delivering real business value.
            </p>
            <p className="anim-slide-right d-300" style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              From enterprise platforms to e-commerce to AI-powered tools — I work end-to-end, 
              from UI design to database optimization.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="https://github.com/talhahassan0005" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: 13 }}>
                GitHub →
              </a>
              <a href="https://www.linkedin.com/in/talha-hassan-80a296227" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: 13 }}>
                LinkedIn →
              </a>
              <Link href="/pricing" className="btn-primary" style={{ fontSize: 13 }}>
                See Pricing →
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="section-label anim-fade-up" style={{ marginBottom: 16 }}>// tech stack</div>
            <div className="anim-fade-up d-100" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
              {skills.map((s, i) => (
                <span key={s} className={`skill-tag anim-fade-up d-${Math.min((i + 1) * 50, 800)}`}>{s}</span>
              ))}
            </div>

            {/* Experience cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {experience.map((e, i) => (
                <div key={e.title} className={`glass glass-hover anim-fade-up d-${(i + 2) * 200}`}
                  style={{ borderRadius: 12, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: `${e.color}15`, border: `1px solid ${e.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                  }}>{e.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 6, color: "#e2e8f0" }}>{e.title}</div>
                    <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{e.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────── */}
      <section id="contact" style={{ padding: "0 24px 120px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(56,189,248,0.05), rgba(167,139,250,0.05))",
          border: "1px solid rgba(56,189,248,0.2)",
          borderRadius: 24,
          padding: "60px 48px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Background decoration */}
          <div style={{
            position: "absolute", top: -80, right: -80,
            width: 300, height: 300, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: 48 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>// get in touch</div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
              Let's Build Something <span className="gradient-text">Incredible.</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
              Ready to start a project? I'm available immediately. Reach out via WhatsApp for fastest response.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <a href="https://wa.me/923021419651" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp: +92 335 4098545
            </a>
            <a href="mailto:talhahassaan0005@gmail.com" className="btn-primary">
              ✉ talhahassaan0005@gmail.com
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/talhahassan0005", color: "#94a3b8" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/talha-hassan-80a296227", color: "#38bdf8" },
              { label: "View Pricing", href: "/pricing", color: "#a78bfa" },
            ].map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                style={{
                  background: "rgba(10,22,40,0.8)", border: "1px solid rgba(56,189,248,0.15)",
                  borderRadius: 100, padding: "10px 24px",
                  color: l.color, textDecoration: "none", fontSize: 14, fontWeight: 600,
                  transition: "all 0.2s ease",
                }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(56,189,248,0.08)", padding: "28px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#334155" }}>
            © 2025 Talha Hassan • Built with Next.js + Tailwind
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#334155" }}>
            <span style={{ color: "#38bdf8" }}>⬡</span> Full Stack + AI Engineer
          </div>
        </div>
      </footer>
    </main>
  );
}
