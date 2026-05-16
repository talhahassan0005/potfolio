"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(2,4,8,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(56,189,248,0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16,
            color: "#020408", boxShadow: "0 0 20px rgba(56,189,248,0.4)",
          }}>TH</div>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: "#e2e8f0", lineHeight: 1.1 }}>Talha Hassan</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#38bdf8", opacity: 0.8, letterSpacing: "1px" }}>Full Stack • AI/ML</div>
          </div>
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {[
            { href: "/", label: "Home" },
            { href: "/#projects", label: "Projects" },
            { href: "/#about", label: "About" },
            { href: "/pricing", label: "Pricing" },
            { href: "/#contact", label: "Contact" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="nav-link"
              style={{ color: pathname === l.href ? "#38bdf8" : undefined }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="https://wa.me/923021419651" target="_blank" rel="noreferrer" className="btn-glow"
          style={{ padding: "9px 20px", fontSize: 13 }}>
          💬 Hire Me
        </a>
      </div>
    </header>
  );
}
