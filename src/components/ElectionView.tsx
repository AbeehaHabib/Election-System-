"use client";
import { ElectionEntry, countries } from "@/data/elections";

interface Props {
  election: ElectionEntry;
  onBack: () => void;
  onReset: () => void;
}

const fmt = (n: number | null) => (n ? n.toLocaleString() : "—");

export default function ElectionView({ election, onBack, onReset }: Props) {
  const isLux    = election.country === "luxembourg";
  const accent   = isLux ? "var(--gold)" : "var(--ice)";
  const accentDim= isLux ? "var(--gold-dim)" : "var(--ice-dim)";
  const countryInfo = countries[election.country];

  const majority  = election.majorityNeeded;
  const seated    = election.parties.filter(p => p.seats > 0);
  const eliminated= election.parties.filter(p => p.seats === 0 && p.eliminated);

  return (
    <div style={{ flex:1, position:"relative", zIndex:1 }}>

      {/* ── HERO ── */}
      <div style={{
        background:"var(--bg2)",
        borderBottom:"1px solid var(--border)",
        padding:"44px 40px 36px",
        position:"relative", overflow:"hidden",
      }}>
        {/* Watermark */}
        <div className="font-syne" style={{
          position:"absolute", right:-16, top:"50%",
          transform:"translateY(-50%)",
          fontSize:"28vw", fontWeight:800,
          color:"var(--border)", lineHeight:1,
          userSelect:"none", opacity:0.35,
          pointerEvents:"none",
        }}>
          {election.year}
        </div>

        <div style={{ position:"relative", zIndex:2 }}>
          {/* Top label row */}
          <div className="anim-up d0" style={{ display:"flex", alignItems:"center", gap:14, marginBottom:10 }}>
            <span style={{ fontSize:28 }}>{countryInfo.flag}</span>
            <span className="font-mono" style={{ fontSize:11, color:"var(--text3)", letterSpacing:"0.14em" }}>
              {countryInfo.name.toUpperCase()} · {election.date}
            </span>
            <span className="font-mono" style={{
              fontSize:9, letterSpacing:"0.1em", padding:"2px 8px",
              border:`1px solid ${election.type === "Snap Election" ? "var(--red)" : accent}`,
              color: election.type === "Snap Election" ? "var(--red)" : accent,
            }}>
              {election.type.toUpperCase()}
            </span>
          </div>

          <h1 className="anim-up d1 font-syne" style={{
            fontSize:"clamp(48px,8vw,100px)", fontWeight:800,
            lineHeight:0.9, letterSpacing:"-0.02em", color:"var(--text)",
            marginBottom:6,
          }}>
            {election.year}
            <span className="font-serif" style={{ fontStyle:"italic", fontWeight:400, color:accent, marginLeft:16 }}>
              {election.title}
            </span>
          </h1>

          <p className="anim-up d2 font-syne" style={{
            fontSize:15, color:"var(--text2)", maxWidth:620,
            lineHeight:1.65, marginTop:16,
          }}>
            {election.systemDetail}
          </p>

          {/* Trigger badge */}
          {election.trigger && (
            <div className="anim-up d3" style={{
              marginTop:16,
              display:"inline-flex", gap:10, alignItems:"center",
              background:"rgba(248,113,113,0.08)",
              border:"1px solid rgba(248,113,113,0.25)",
              padding:"8px 16px",
            }}>
              <span style={{ fontSize:13 }}>⚡</span>
              <span className="font-mono" style={{ fontSize:11, color:"var(--red)", letterSpacing:"0.06em" }}>
                {election.trigger}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        minHeight:"calc(100vh - 280px)",
      }}>

        {/* LEFT — Seat chart + parties */}
        <div style={{ borderRight:"1px solid var(--border)", padding:"36px 40px" }}>

          {/* Seat bar */}
          <div className="anim-up d0" style={{ marginBottom:32 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:14 }}>
              <span className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.14em", textTransform:"uppercase" }}>
                Seat Distribution
              </span>
              <span className="font-mono" style={{ fontSize:10, color:"var(--text3)" }}>
                {election.totalSeats} total · majority: {majority}
              </span>
            </div>

            <div style={{
              display:"flex", height:44,
              border:"1px solid var(--border2)",
              overflow:"hidden", position:"relative",
            }}>
              {seated.map((p, i) => {
                const pct = (p.seats / election.totalSeats) * 100;
                return (
                  <div key={i} style={{
                    width:`${pct}%`, background:p.color,
                    position:"relative", transition:"opacity 0.2s",
                    flexShrink:0,
                  }}
                    title={`${p.name}: ${p.seats} seats`}
                  >
                    {pct > 11 && (
                      <span className="font-syne" style={{
                        position:"absolute", left:"50%", top:"50%",
                        transform:"translate(-50%,-50%)",
                        fontSize:12, fontWeight:700,
                        color:"rgba(0,0,0,0.75)", whiteSpace:"nowrap",
                      }}>{p.seats}</span>
                    )}
                  </div>
                );
              })}
              {/* Majority line */}
              <div style={{
                position:"absolute",
                left:`${(majority / election.totalSeats) * 100}%`,
                top:0, bottom:0, width:2,
                background:accent, zIndex:4,
              }} />
            </div>
            <div className="font-mono" style={{ fontSize:9, color:accent, textAlign:"right", marginTop:5, letterSpacing:"0.08em" }}>
              ▲ MAJORITY LINE ({majority})
            </div>
          </div>

          {/* Coalition highlight */}
          <div className="anim-up d1" style={{
            background: accentDim,
            border:`1px solid ${accent}`,
            padding:"14px 18px", marginBottom:24,
            display:"flex", justifyContent:"space-between", alignItems:"center",
          }}>
            <div>
              <div className="font-mono" style={{ fontSize:9, color:accent, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:5 }}>Coalition Formed</div>
              <div className="font-syne" style={{ fontSize:14, fontWeight:600, color:"var(--text)", lineHeight:1.4 }}>{election.coalition}</div>
            </div>
            <div className="font-syne" style={{ fontSize:36, fontWeight:800, color:accent, flexShrink:0, marginLeft:16 }}>
              {election.coalitionSeats}
            </div>
          </div>

          {/* Party table */}
          <div className="anim-up d2">
            <div className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.14em", marginBottom:12, textTransform:"uppercase" }}>
              Parties &amp; Results
            </div>
            <div style={{ display:"flex", flexDirection:"column" }}>
              {election.parties.map((p, i) => (
                <div key={i} className={`anim-side d${Math.min(i+3,8)}`} style={{
                  display:"grid",
                  gridTemplateColumns:"4px 1fr auto auto",
                  gap:12, alignItems:"center",
                  padding:"10px 0",
                  borderBottom:"1px solid var(--border)",
                  opacity: p.eliminated ? 0.45 : 1,
                }}>
                  <div style={{ width:4, height:36, background:p.color, borderRadius:2, alignSelf:"stretch" }} />
                  <div>
                    <div className="font-syne" style={{
                      fontSize:13, fontWeight: p.ruling ? 600 : 400,
                      color: p.ruling ? "var(--text)" : "var(--text2)",
                      display:"flex", alignItems:"center", gap:8, flexWrap:"wrap",
                    }}>
                      {p.name}
                      {p.ruling && (
                        <span style={{
                          fontSize:8, fontFamily:"IBM Plex Mono, monospace",
                          background:accent, color:"#000",
                          padding:"1px 6px", letterSpacing:"0.08em",
                        }}>
                          COALITION
                        </span>
                      )}
                      {p.eliminated && (
                        <span style={{
                          fontSize:8, fontFamily:"IBM Plex Mono, monospace",
                          border:"1px solid var(--red)", color:"var(--red)",
                          padding:"1px 6px", letterSpacing:"0.08em",
                        }}>
                          ELIMINATED
                        </span>
                      )}
                    </div>
                    <div className="font-mono" style={{ fontSize:10, color:"var(--text3)", marginTop:2 }}>
                      {p.ideology}
                    </div>
                  </div>
                  <div className="font-syne" style={{ fontSize:26, fontWeight:800, color: p.seats > 0 ? "var(--text)" : "var(--text3)", textAlign:"right" }}>
                    {p.seats > 0 ? p.seats : "—"}
                  </div>
                  <div className="font-mono" style={{ fontSize:11, color:"var(--text3)", width:44, textAlign:"right" }}>
                    {p.voteShare > 0 ? `${p.voteShare}%` : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Turnout + PM + Outcome */}
        <div style={{ padding:"36px 40px", display:"flex", flexDirection:"column", gap:24 }}>

          {/* PM Card */}
          <div className="anim-up d0" style={{
            background:"var(--bg3)", border:"1px solid var(--border2)",
            padding:"20px 24px",
          }}>
            <div className="font-mono" style={{ fontSize:9, color:"var(--text3)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:10 }}>
              Prime Minister
            </div>
            <div className="font-syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:4 }}>
              {election.pm}
            </div>
            <div className="font-mono" style={{ fontSize:11, color:accent, letterSpacing:"0.06em" }}>
              {election.pmParty}
            </div>
          </div>

          {/* Turnout */}
          {election.turnout && (
            <div className="anim-up d1">
              <div className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.14em", marginBottom:12, textTransform:"uppercase" }}>
                Voter Turnout
              </div>

              {/* Big number */}
              <div style={{
                background:"var(--bg3)", border:"1px solid var(--border2)",
                padding:"20px 24px", marginBottom:2,
              }}>
                <div className="font-mono" style={{ fontSize:9, color:"var(--text3)", letterSpacing:"0.1em", marginBottom:8 }}>TURNOUT RATE</div>
                <div className="font-syne" style={{
                  fontSize:60, fontWeight:800, lineHeight:1,
                  color: (election.turnout.percentage ?? 0) > 85 ? "var(--green)" : accent,
                }}>
                  {election.turnout.percentage}%
                </div>
                {/* Bar */}
                <div style={{ height:3, background:"var(--border)", marginTop:12 }}>
                  <div style={{
                    width:`${election.turnout.percentage}%`, height:"100%",
                    background: (election.turnout.percentage ?? 0) > 85 ? "var(--green)" : accent,
                    transition:"width 1.2s ease",
                  }} />
                </div>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:2 }}>
                {[
                  { l:"Registered", v: fmt(election.turnout.registered) },
                  { l:"Votes Cast", v: fmt(election.turnout.cast) },
                  { l:"Invalid Ballots", v: election.turnout.invalid ?? "—" },
                  { l:"Blank Ballots", v: election.turnout.blank ?? "—" },
                ].map(s => (
                  <div key={s.l} style={{
                    background:"var(--bg3)", border:"1px solid var(--border)",
                    padding:"14px 16px",
                  }}>
                    <div className="font-mono" style={{ fontSize:9, color:"var(--text3)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:6 }}>{s.l}</div>
                    <div className="font-syne" style={{ fontSize:16, fontWeight:600, color:"var(--text)" }}>{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          <div className="anim-up d2">
            <div className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.14em", marginBottom:10, textTransform:"uppercase" }}>
              Outcome
            </div>
            <div style={{
              background:"var(--bg3)",
              border:"1px solid var(--border2)",
              borderLeft:`3px solid ${accent}`,
              padding:"18px 20px",
            }}>
              <p className="font-syne" style={{ fontSize:14, color:"var(--text2)", lineHeight:1.75 }}>
                {election.outcome}
              </p>
            </div>
          </div>

          {/* Notable */}
          {election.notable && (
            <div className="anim-up d3" style={{
              background:"rgba(253,230,138,0.05)",
              border:"1px solid rgba(253,230,138,0.2)",
              padding:"14px 18px",
              display:"flex", gap:10, alignItems:"flex-start",
            }}>
              <span style={{ fontSize:14, flexShrink:0 }}>★</span>
              <p className="font-syne" style={{ fontSize:13, color:"var(--yellow)", lineHeight:1.6 }}>
                {election.notable}
              </p>
            </div>
          )}

          {/* Nav buttons */}
          <div className="anim-up d4" style={{ display:"flex", gap:10, marginTop:"auto", paddingTop:8 }}>
            <button onClick={onBack} style={{
              flex:1, background:"none",
              border:"1px solid var(--border2)", color:"var(--text2)",
              padding:"12px", cursor:"pointer",
              fontFamily:"Syne, sans-serif", fontWeight:600,
              fontSize:13, letterSpacing:"0.06em",
              transition:"border-color 0.2s",
            }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--text2)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border2)";}}
            >
              ← DIFFERENT YEAR
            </button>
            <button onClick={onReset} style={{
              flex:1, background:accent, color:"#000",
              border:`1px solid ${accent}`,
              padding:"12px", cursor:"pointer",
              fontFamily:"Syne, sans-serif", fontWeight:700,
              fontSize:13, letterSpacing:"0.06em",
              transition:"background 0.2s",
            }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="#fff";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background=accent;}}
            >
              START OVER →
            </button>
          </div>
        </div>
      </div>

      {/* Sources footer */}
      <div style={{ borderTop:"1px solid var(--border)", padding:"16px 40px" }}>
        <span className="font-mono" style={{ fontSize:10, color:"var(--text3)", letterSpacing:"0.08em" }}>
          Sources: {countryInfo.sources}
        </span>
      </div>
    </div>
  );
}
