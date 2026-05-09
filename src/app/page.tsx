"use client";
import { useState } from "react";
import { elections, countries } from "@/data/elections";
import ElectionView from "@/components/ElectionView";

type Step = "intro" | "country" | "year" | "result";

export default function Home() {
  const [step, setStep]       = useState<Step>("intro");
  const [country, setCountry] = useState<"iceland" | "luxembourg" | null>(null);
  const [year, setYear]       = useState<number | null>(null);

  const accent    = country === "luxembourg" ? "var(--gold)" : "var(--ice)";
  const accentDim = country === "luxembourg" ? "var(--gold-dim)" : "var(--ice-dim)";

  const found = elections.find(e => e.country === country && e.year === year);

  const reset = () => { setStep("intro"); setCountry(null); setYear(null); };

  // ── NAV BAR ──────────────────────────────────────────────────────────────────
  const Nav = () => (
    <header style={{
      position: "sticky", top: 0, zIndex: 200,
      background: "rgba(12,12,15,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      height: 56,
      display: "flex", alignItems: "center",
      padding: "0 32px",
      justifyContent: "space-between",
    }}>
      <button onClick={reset} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:7, height:7, borderRadius:"50%", background:"var(--ice)", boxShadow:"0 0 8px var(--ice)" }} />
        <span className="font-syne" style={{ fontSize:14, fontWeight:700, color:"var(--text)", letterSpacing:"0.06em" }}>
          ELECTION INTEL
        </span>
      </button>

      <div style={{ display:"flex", alignItems:"center", gap:16 }}>
        {/* breadcrumb */}
        {step !== "intro" && (
          <div className="font-mono" style={{ fontSize:11, color:"var(--text3)", display:"flex", gap:8, alignItems:"center" }}>
            <span style={{ color: country === "luxembourg" ? "var(--gold)" : "var(--ice)" }}>
              {country === "iceland" ? "🇮🇸 Iceland" : "🇱🇺 Luxembourg"}
            </span>
            {year && <><span>›</span><span style={{ color:"var(--text2)" }}>{year}</span></>}
          </div>
        )}
        <span className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.1em" }}>
          S25BINCE1M04005
        </span>
        {step !== "intro" && (
          <button onClick={reset} style={{
            background:"none", border:"1px solid var(--border2)", color:"var(--text3)",
            padding:"4px 14px", cursor:"pointer",
            fontFamily:"IBM Plex Mono, monospace", fontSize:10, letterSpacing:"0.08em",
            transition:"border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--text2)";(e.currentTarget as HTMLElement).style.color="var(--text2)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border2)";(e.currentTarget as HTMLElement).style.color="var(--text3)";}}
          >
            ← RESET
          </button>
        )}
      </div>
    </header>
  );

  // ── INTRO ─────────────────────────────────────────────────────────────────────
  if (step === "intro") return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      <Nav />
      <main style={{
        flex:1, display:"flex", flexDirection:"column", justifyContent:"center",
        maxWidth:1080, margin:"0 auto", width:"100%", padding:"64px 32px",
        position:"relative", zIndex:1,
      }}>
        <div className="anim-up d0" style={{ marginBottom:10 }}>
          <span className="font-mono" style={{ fontSize:11, color:"var(--ice)", letterSpacing:"0.2em" }}>
            ELECTORAL RESEARCH · 2016–2026
          </span>
        </div>

        <h1 className="anim-up d1 font-syne" style={{
          fontSize:"clamp(52px, 10vw, 110px)",
          fontWeight:800,
          lineHeight:0.92,
          letterSpacing:"-0.02em",
          color:"var(--text)",
          marginBottom:28,
        }}>
          ELECTION<br />
          <span className="font-serif" style={{ fontStyle:"italic", fontWeight:400, color:"var(--ice)" }}>Data</span>{" "}
          INTEL
        </h1>

        <p className="anim-up d2 font-syne" style={{ fontSize:17, color:"var(--text2)", fontWeight:400, maxWidth:500, lineHeight:1.65, marginBottom:48 }}>
          A structured breakdown of every parliamentary election in <strong style={{color:"var(--ice)"}}>Iceland</strong> and{" "}
          <strong style={{color:"var(--gold)"}}>Luxembourg</strong> from 2016 through 2026.
          Select a country and year to explore.
        </p>

        <div className="anim-up d3">
          <button
            onClick={() => setStep("country")}
            style={{
              background:"var(--ice)", color:"#000",
              border:"none", padding:"16px 36px",
              fontFamily:"Syne, sans-serif", fontWeight:700, fontSize:15,
              letterSpacing:"0.08em", cursor:"pointer",
              transition:"background 0.2s, transform 0.15s",
              display:"inline-flex", alignItems:"center", gap:12,
            }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="#fff";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="var(--ice)";}}
          >
            EXPLORE ELECTIONS <span style={{fontSize:18}}>→</span>
          </button>
        </div>

        {/* Quick stats */}
        <div className="anim-up d4" style={{
          display:"flex", gap:0, marginTop:72,
          borderTop:"1px solid var(--border)", paddingTop:32,
          flexWrap:"wrap",
        }}>
          {[
            { v:"06", l:"Total Elections", c:"var(--text)" },
            { v:"02", l:"Countries", c:"var(--text)" },
            { v:"4+2", l:"Iceland + Luxembourg", c:"var(--text2)" },
            { v:"~80%", l:"Avg. Iceland Turnout", c:"var(--ice)" },
            { v:"~88%", l:"Avg. Luxembourg Turnout", c:"var(--gold)" },
          ].map((s,i) => (
            <div key={i} style={{ padding:"0 32px 0 0", marginRight:32, borderRight: i < 4 ? "1px solid var(--border)" : "none" }}>
              <div className="font-syne" style={{ fontSize:32, fontWeight:800, color:s.c, lineHeight:1 }}>{s.v}</div>
              <div className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.1em", marginTop:6, textTransform:"uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Author */}
        <div className="anim-up d5" style={{ marginTop:40 }}>
          <span className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.12em" }}>
            ABEEHA HABIB · S25BINCE1M04005
          </span>
        </div>
      </main>
    </div>
  );

  // ── COUNTRY SELECT ────────────────────────────────────────────────────────────
  if (step === "country") return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      <Nav />
      <main style={{
        flex:1, display:"flex", flexDirection:"column", justifyContent:"center",
        maxWidth:1080, margin:"0 auto", width:"100%", padding:"64px 32px",
        position:"relative", zIndex:1,
      }}>
        <div className="anim-up d0">
          <span className="font-mono" style={{ fontSize:11, color:"var(--text3)", letterSpacing:"0.15em" }}>STEP 01 / 02</span>
        </div>
        <h2 className="anim-up d1 font-syne" style={{ fontSize:"clamp(40px,7vw,80px)", fontWeight:800, letterSpacing:"-0.02em", marginBottom:40, lineHeight:0.95 }}>
          SELECT<br />COUNTRY
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, maxWidth:740 }}>
          {(["iceland","luxembourg"] as const).map((c, i) => {
            const info = countries[c];
            const col  = c === "iceland" ? "var(--ice)" : "var(--gold)";
            const colD = c === "iceland" ? "var(--ice-dim)" : "var(--gold-dim)";
            return (
              <button
                key={c}
                onClick={() => { setCountry(c); setStep("year"); }}
                className={`anim-up d${i+2}`}
                style={{
                  background:"var(--bg3)", border:`1px solid var(--border2)`,
                  padding:"36px 32px", cursor:"pointer", textAlign:"left",
                  transition:"border-color 0.2s, background 0.2s",
                  position:"relative", overflow:"hidden",
                }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement; el.style.borderColor=col; el.style.background=colD;}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border2)"; el.style.background="var(--bg3)";}}
              >
                <div style={{ fontSize:44, marginBottom:14 }}>{info.flag}</div>
                <div className="font-syne" style={{ fontSize:24, fontWeight:800, color:"var(--text)", marginBottom:6, letterSpacing:"-0.01em" }}>
                  {info.name}
                </div>
                <div className="font-mono" style={{ fontSize:10, color:col, letterSpacing:"0.1em", marginBottom:16, textTransform:"uppercase" }}>
                  {info.localName}
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                  {[
                    `${info.elections.length} elections`,
                    info.system,
                    `${info.seats} seats · ${info.constituencies}`,
                    `Voting: ${info.voting}`,
                  ].map((txt) => (
                    <div key={txt} className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.06em" }}>
                      {txt}
                    </div>
                  ))}
                </div>
                <div style={{
                  position:"absolute", bottom:20, right:24,
                  fontFamily:"Syne, sans-serif", fontWeight:800,
                  fontSize:28, color:"var(--border2)",
                }}>
                  →
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );

  // ── YEAR SELECT ───────────────────────────────────────────────────────────────
  if (step === "year" && country) {
    const info = countries[country];
    const col  = country === "iceland" ? "var(--ice)" : "var(--gold)";
    const colD = country === "iceland" ? "var(--ice-dim)" : "var(--gold-dim)";
    return (
      <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column" }}>
        <Nav />
        <main style={{
          flex:1, display:"flex", flexDirection:"column", justifyContent:"center",
          maxWidth:1080, margin:"0 auto", width:"100%", padding:"64px 32px",
          position:"relative", zIndex:1,
        }}>
          <div className="anim-up d0">
            <span className="font-mono" style={{ fontSize:11, color:"var(--text3)", letterSpacing:"0.15em" }}>STEP 02 / 02</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:8 }}>
            <span style={{ fontSize:36 }}>{info.flag}</span>
            <h2 className="anim-up d1 font-syne" style={{ fontSize:"clamp(40px,7vw,80px)", fontWeight:800, letterSpacing:"-0.02em", lineHeight:0.95 }}>
              SELECT YEAR
            </h2>
          </div>
          <p className="anim-up d2 font-syne" style={{ fontSize:15, color:"var(--text2)", marginBottom:40 }}>
            {info.name} · {info.elections.length} elections covered
          </p>

          <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
            {info.elections.map((y, i) => {
              const el = elections.find(e => e.country === country && e.year === y);
              return (
                <button
                  key={y}
                  onClick={() => { setYear(y); setStep("result"); }}
                  className={`anim-up d${i+3}`}
                  style={{
                    background:"var(--bg3)", border:`1px solid var(--border2)`,
                    padding:"28px 32px", cursor:"pointer", textAlign:"left",
                    minWidth:190, transition:"border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLElement; el.style.borderColor=col; el.style.background=colD;}}
                  onMouseLeave={e=>{const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border2)"; el.style.background="var(--bg3)";}}
                >
                  <div className="font-syne" style={{ fontSize:52, fontWeight:800, color:col, lineHeight:1, marginBottom:10 }}>
                    {y}
                  </div>
                  <div className="font-syne" style={{ fontSize:13, color:"var(--text2)", marginBottom:4 }}>
                    {el?.date}
                  </div>
                  <div className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.06em" }}>
                    {el?.type}
                  </div>
                </button>
              );
            })}
          </div>

          <button onClick={() => setStep("country")} style={{
            marginTop:36, background:"none", border:"none",
            color:"var(--text3)", cursor:"pointer",
            fontFamily:"IBM Plex Mono, monospace", fontSize:11, letterSpacing:"0.08em",
            textAlign:"left", transition:"color 0.2s",
          }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color="var(--text2)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color="var(--text3)";}}
          >
            ← BACK TO COUNTRY
          </button>
        </main>
      </div>
    );
  }

  // ── RESULT ────────────────────────────────────────────────────────────────────
  if (step === "result" && found) return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      <Nav />
      <ElectionView
        election={found}
        onBack={() => setStep("year")}
        onReset={reset}
      />
    </div>
  );

  return null;
}
