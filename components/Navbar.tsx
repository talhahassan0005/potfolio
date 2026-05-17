"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
      <div className="navbar" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
        
        {/* Desktop Navigation */}
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
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
        
        {/* Desktop Hire Button */}
        <a href="https://wa.me/923021419651" target="_blank" rel="noreferrer" className="btn-glow hire-btn-desktop"
          style={{ padding: "9px 20px", fontSize: 13 }}>
          💬 Hire Me
        </a>
        
        {/* Mobile Hamburger Menu */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid rgba(56,189,248,0.3)",
            borderRadius: 8,
            padding: 8,
            cursor: "pointer",
            color: "#38bdf8",
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{
          background: "rgba(10,22,40,0.98)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(56,189,248,0.1)",
          padding: "20px 24px",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { href: "/", label: "Home" },
              { href: "/#projects", label: "Projects" },
              { href: "/#about", label: "About" },
              { href: "/pricing", label: "Pricing" },
              { href: "/#contact", label: "Contact" },
            ].map(l => (
              <Link 
                key={l.href} 
                href={l.href} 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  color: pathname === l.href ? "#38bdf8" : "#94a3b8",
                  fontSize: 16,
                  fontWeight: 600,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(56,189,248,0.1)",
                }}>
                {l.label}
              </Link>
            ))}
            <a 
              href="https://wa.me/923021419651" 
              target="_blank" 
              rel="noreferrer" 
              className="whatsapp-btn"
              style={{ 
                marginTop: 16,
                padding: "12px 24px",
                fontSize: 14,
                textAlign: "center",
                justifyContent: "center",
              }}>
              💬 Hire Me on WhatsApp
            </a>
          </nav>
        </div>
      )}
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links, .hire-btn-desktop {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
