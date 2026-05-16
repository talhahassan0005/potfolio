"use client";
import Link from "next/link";

const websitePlans = [
  {
    tier: "Starter",
    price: "400",
    currency: "$",
    usd: "",
    desc: "Perfect for personal portfolios, blogs, or small business landing pages.",
    features: [
      "Up to 7 pages",
      "Responsive design",
      "Basic animations",
      "Contact form",
      "Vercel deployment",
      "1 revision round",
    ],
    cta: "Get Started",
    color: "#94a3b8",
    featured: false,
  },
  {
    tier: "Professional",
    price: "750",
    currency: "$",
    usd: "",
    desc: "Full-featured business websites with custom design, CMS, and integrations.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "3D animations & effects",
      "CMS integration (Sanity/Contentful)",
      "Auth + user accounts",
      "Payment integration",
      "Performance optimization",
      "3 revision rounds",
      "1 month support",
    ],
    cta: "Most Popular",
    color: "#38bdf8",
    featured: true,
  },
  {
    tier: "Enterprise",
    price: "1800",
    currency: "$",
    usd: "",
    desc: "Large-scale platforms, SaaS products, or complex enterprise applications.",
    features: [
      "Unlimited pages",
      "Full custom architecture",
      "Multi-role dashboards",
      "Advanced API integrations",
      "Database design & optimization",
      "DevOps + CI/CD setup",
      "Ongoing maintenance",
      "Unlimited revisions",
      "Priority support",
    ],
    cta: "Let's Talk",
    color: "#a78bfa",
    featured: false,
  },
];

const aiPlans = [
  {
    tier: "AI Chatbot",
    price: "300",
    currency: "$",
    usd: "",
    desc: "Custom AI chatbot integrated into your website using OpenAI",
    features: [
      "GPT-4 / Gemini integration",
      "Custom personality & tone",
      "Embedded in your website",
      "Conversation history",
      "Mobile responsive chat UI",
      "Basic analytics",
    ],
    color: "#34d399",
    featured: false,
  },
  {
    tier: "AI-Powered App",
    price: "1700",
    currency: "$",
    usd: "",
    desc: "Full web app with AI features — document analysis, automation, recommendations.",
    features: [
      "Custom LLM integration",
      "Document / PDF processing",
      "AI search & recommendations",
      "Data pipelines",
      "Vector database (Pinecone/Supabase)",
      "Dashboard & analytics",
      "Auth + RBAC",
      "Production deployment",
    ],
    color: "#38bdf8",
    featured: true,
  },
  {
    tier: "AI Automation",
    price: "2000",
    currency: "$",
    usd: "",
    desc: "Automate business workflows using AI agents, scraping, and scheduled tasks.",
    features: [
      "N8N / custom automation",
      "Web scraping pipelines",
      "Email / Slack bots",
      "Scheduled AI tasks",
      "API integrations",
      "Error monitoring",
    ],
    color: "#fb923c",
    featured: false,
  },
];

const addons = [
  { label: "WhatsApp Bot Integration", price: "$150", color: "#25d366" },
  { label: "Monthly Maintenance", price: "$150/mo", color: "#a78bfa" },
  { label: "Speed / Core Web Vitals Fix", price: "$100", color: "#fb923c" },
  { label: "Admin Dashboard Add-on", price: "$250", color: "#f472b6" },
  { label: "Extra Revision Round", price: "$60", color: "#94a3b8" },
];

function PricingCard({ plan, idx }: { plan: typeof websitePlans[0]; idx: number }) {
  return (
    <div className={`pricing-card anim-fade-up d-${(idx + 1) * 200} ${plan.featured ? "featured" : ""}`}
      style={{ position: "relative" }}>
      {plan.featured && (
        <div style={{
          position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
          background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
          color: "#020408", padding: "6px 20px", borderRadius: 100,
          fontSize: 12, fontWeight: 800, fontFamily: "'Syne', sans-serif",
          whiteSpace: "nowrap", boxShadow: "0 0 20px rgba(56,189,248,0.4)",
        }}> MOST POPULAR</div>
      )}

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: plan.color, letterSpacing: "2px", marginBottom: 8 }}>
          {plan.tier.toUpperCase()}
        </div>
        {plan.price === "Custom" ? (
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, color: plan.color, lineHeight: 1 }}>
            Custom
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, color: "#e2e8f0", lineHeight: 1 }}>
              {plan.price}
            </div>
            <div>
              <div style={{ fontSize: 14, color: plan.color, fontWeight: 600 }}>{plan.currency}</div>
              {plan.usd && <div style={{ fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>{plan.usd}</div>}
            </div>
          </div>
        )}
        <p style={{ marginTop: 12, fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{plan.desc}</p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: `linear-gradient(90deg, ${plan.color}40, transparent)`, marginBottom: 24 }} />

      {/* Features */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#cbd5e1" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill={`${plan.color}20`} stroke={plan.color} strokeWidth="1.5"/>
              <path d="M8 12l3 3 5-5" stroke={plan.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="https://wa.me/923021419651" target="_blank" rel="noreferrer"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "13px 24px", borderRadius: 10, textDecoration: "none",
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14,
          transition: "all 0.3s ease",
          ...(plan.featured
            ? { background: "linear-gradient(135deg, #38bdf8, #a78bfa)", color: "#020408", boxShadow: "0 0 30px rgba(56,189,248,0.3)" }
            : { background: `${plan.color}15`, border: `1px solid ${plan.color}40`, color: plan.color }),
        }}>
        {plan.cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      {/* ── HERO ────────────────────────────────────── */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px", maxWidth: 800, margin: "0 auto" }}>
        <div className="badge anim-fade-up" style={{ marginBottom: 24 }}>
          <span className="status-dot" />
          Transparent Pricing
        </div>
        <h1 className="anim-fade-up d-100" style={{ fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 800, letterSpacing: "-2px", marginBottom: 20 }}>
          Clear Prices, <span className="gradient-text">Zero Surprises.</span>
        </h1>
        <p className="anim-fade-up d-200" style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 32px" }}>
          Know exactly what you're getting before we begin. All prices in USD.
          Need something custom? Let's talk.
        </p>
        <div className="anim-fade-up d-300" style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a href="https://wa.me/923021419651" target="_blank" rel="noreferrer" className="whatsapp-btn" style={{ padding: "12px 24px", fontSize: 14 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Discuss Your Project
          </a>
          <a href="mailto:talhahassaan0005@gmail.com" className="btn-secondary" style={{ fontSize: 14 }}>
            ✉ Email Me
          </a>
        </div>
      </section>

      {/* ── WEBSITE PLANS ───────────────────────────── */}
      <section style={{ padding: "40px 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="neon-divider" style={{ marginBottom: 60 }}>
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #38bdf8, #a78bfa, transparent)", opacity: 0.3 }} />
        </div>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>// website development</div>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-1px" }}>
            Website <span className="gradient-text">Packages</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, paddingTop: 20 }}>
          {websitePlans.map((p, i) => <PricingCard key={p.tier} plan={p} idx={i} />)}
        </div>
      </section>

      {/* ── AI PLANS ────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="neon-divider" style={{ marginBottom: 60 }}>
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #a78bfa, #f472b6, transparent)", opacity: 0.3 }} />
        </div>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12, color: "#a78bfa" }}>// ai & automation</div>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-1px" }}>
            AI Project <span className="gradient-text-2">Pricing</span>
          </h2>
          <p style={{ color: "#64748b", marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
            From simple chatbots to full AI-powered platforms — built with the latest LLM technologies.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, paddingTop: 20 }}>
          {aiPlans.map((p, i) => <PricingCard key={p.tier} plan={p as typeof websitePlans[0]} idx={i} />)}
        </div>
      </section>

      {/* ── ADD-ONS ──────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>// extras</div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.5px" }}>
            Add-ons & <span className="neon-cyan">Extras</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {addons.map((a, i) => (
            <div key={a.label} className={`glass glass-hover anim-fade-up d-${(i + 1) * 100}`}
              style={{ borderRadius: 12, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.color, flexShrink: 0, boxShadow: `0 0 8px ${a.color}` }} />
                <span style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>{a.label}</span>
              </div>
              <span style={{ fontSize: 13, color: a.color, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap", marginLeft: 12 }}>{a.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY HIRE ME ─────────────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(56,189,248,0.04), rgba(167,139,250,0.04))",
          border: "1px solid rgba(56,189,248,0.15)",
          borderRadius: 20, padding: "48px",
        }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 8 }}>
              Why Work With <span className="gradient-text">Me?</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { icon: "⚡", label: "Fast Delivery", desc: "Most projects delivered in 1–3 weeks, not months." },
              { icon: "🎯", label: "No Hidden Costs", desc: "Price agreed upfront. No surprise invoices later." },
              { icon: "🔧", label: "Full Stack", desc: "Frontend, backend, database, deployment — all in one." },
              { icon: "💬", label: "Direct Communication", desc: "Work directly with me via WhatsApp, no middlemen." },
              { icon: "🚀", label: "Production Ready", desc: "Deployed, optimized, and ready for real users." },
              { icon: "🔄", label: "Revisions Included", desc: "Every package includes revision rounds to ensure you're happy." },
            ].map(r => (
              <div key={r.label} style={{ textAlign: "center", padding: 20 }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{r.icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 6, color: "#e2e8f0" }}>{r.label}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <section style={{ padding: "0 24px 100px", maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 16 }}>
          Ready to start? <span className="neon-cyan">Let's go.</span>
        </h2>
        <p style={{ color: "#64748b", marginBottom: 32, fontSize: 16 }}>
          Send me a WhatsApp message describing your project and I'll reply within hours.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/923021419651" target="_blank" rel="noreferrer" className="btn-glow" style={{ fontSize: 16, padding: "16px 36px" }}>
            💬 WhatsApp Me Now
          </a>
          <Link href="/" className="btn-secondary">← Back to Portfolio</Link>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(56,189,248,0.08)", padding: "28px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#334155" }}>
            © 2025 Talha Hassan
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#334155" }}>
            Prices in USD • Subject to project complexity
          </div>
        </div>
      </footer>
    </main>
  );
}
