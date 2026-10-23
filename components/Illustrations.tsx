// Vector illustrations drawn in code, so they stay sharp at any screen density and weigh almost
// nothing. One visual language throughout: thin forest-green strokes, pale green fills, one bright
// accent for "the part that software fixes". Moving dots are hidden for reduced-motion users
// (see .tbc-flow in globals.css).

const FOREST = "#13563A";
const ACCENT = "#167A4E";
const PALE = "#E3F1E8";
const PALER = "#F1F8F4";
const s = { fill: "none", stroke: FOREST, strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

// Dark versions (on forest backgrounds), matching PracticeArt.
const DLINE = "#CFE8DA";
const DACCENT = "#7FD1A6";
const ds = { ...s, stroke: DLINE, strokeWidth: 1.5 };

/* ── Small building blocks ─────────────────────────────── */

function Chat({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M0 8a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v30a8 8 0 0 1-8 8H24l-14 12v-12H8a8 8 0 0 1-8-8z" {...s} fill="#fff" />
      <line x1="14" y1="16" x2="62" y2="16" {...s} opacity={0.45} />
      <line x1="14" y1="28" x2="46" y2="28" {...s} opacity={0.45} />
    </g>
  );
}

function Sheet({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width="92" height="68" rx="6" {...s} fill="#fff" />
      <rect width="92" height="16" rx="6" fill={PALE} />
      {[34, 50].map((yy) => <line key={yy} x1="0" y1={yy} x2="92" y2={yy} {...s} opacity={0.3} />)}
      {[30, 61].map((xx) => <line key={xx} x1={xx} y1="16" x2={xx} y2="68" {...s} opacity={0.3} />)}
      <line x1="36" y1="42" x2="56" y2="42" stroke="#B42318" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

function Phone({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width="44" height="76" rx="9" {...s} fill="#fff" />
      <line x1="16" y1="8" x2="28" y2="8" {...s} opacity={0.5} />
      <path d="M12 46c4-10 16-10 20 0" {...s} opacity={0.5} />
      <circle cx="22" cy="32" r="6" {...s} opacity={0.5} />
    </g>
  );
}

function Papers({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="10" y="-8" width="62" height="78" rx="4" {...s} fill={PALER} transform="rotate(6 41 31)" />
      <rect width="62" height="78" rx="4" {...s} fill="#fff" />
      {[16, 26, 36, 46].map((yy, i) => <line key={yy} x1="10" y1={yy} x2={i === 3 ? 34 : 52} y2={yy} {...s} opacity={0.4} />)}
    </g>
  );
}

function Person({ x, y, r = 18, accent = false }: { x: number; y: number; r?: number; accent?: boolean }) {
  const c = accent ? ACCENT : FOREST;
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r={r * 1.9} fill={accent ? PALE : PALER} />
      <circle cy={-r * 0.45} r={r * 0.45} fill="none" stroke={c} strokeWidth="1.8" />
      <path d={`M${-r * 0.85} ${r * 0.85}c0-${r * 0.75} ${r * 1.7}-${r * 0.75} ${r * 1.7} 0`} fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}

/* ── Today vs with software ─────────────────────────────── */

export function ProcessToday() {
  // Everything routes through one person; the lines cross and loop.
  const P = { x: 280, y: 215 };
  const ends = [
    [130, 110], [395, 95], [130, 330], [430, 320], [300, 380], [470, 205],
  ];
  return (
    <svg viewBox="0 0 560 440" className="w-full h-auto" role="img" aria-label="Today: work passes through chats, spreadsheets, calls and paper, all depending on one person">
      <rect x="0.5" y="0.5" width="559" height="439" rx="24" fill="#fff" stroke={FOREST} strokeOpacity="0.1" />
      {ends.map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} C ${(x + P.x) / 2 + (i % 2 ? 70 : -70)} ${y + (i % 3 ? -60 : 60)}, ${P.x + (i % 2 ? -50 : 50)} ${P.y + (i % 2 ? 60 : -60)}, ${P.x} ${P.y}`} {...s} strokeDasharray="4 6" opacity={0.55} />
      ))}
      <path d="M130 110 C 230 40, 330 160, 395 95" {...s} strokeDasharray="4 6" opacity={0.35} />
      <path d="M130 330 C 220 420, 360 260, 430 320" {...s} strokeDasharray="4 6" opacity={0.35} />
      <Chat x={70} y={70} />
      <Sheet x={350} y={60} />
      <Phone x={108} y={292} />
      <Papers x={400} y={282} />
      <g transform="translate(450,180)">
        <circle cx="20" cy="25" r="22" {...s} fill="#fff" />
        <path d="M20 12v13l9 6" {...s} />
      </g>
      <g transform="translate(270,360)">
        <rect width="60" height="40" rx="5" {...s} fill="#fff" />
        <path d="M0 6l30 18 30-18" {...s} opacity={0.6} />
      </g>
      <Person {...P} r={20} />
      <g transform={`translate(${P.x + 26},${P.y - 46})`}>
        <circle r="11" fill="#B42318" />
        <text y="4.5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Inter, system-ui, sans-serif">!</text>
      </g>
    </svg>
  );
}

export function ProcessWithSoftware() {
  const stages = [90, 210, 330, 450];
  const y = 150;
  return (
    <svg viewBox="0 0 560 440" className="w-full h-auto" role="img" aria-label="With software: each step flows into the next and the figures reach you automatically">
      <rect width="560" height="440" rx="24" fill={PALE} />
      <path d={`M${stages[0]} ${y} H ${stages[3]}`} {...s} stroke={ACCENT} strokeWidth={2.4} />
      {stages.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={y} r="26" fill="#fff" stroke={ACCENT} strokeWidth="2" />
          {i === 0 && <path d={`M${x - 9} ${y - 8}h18v16h-18z M${x - 9} ${y - 8}l9 7 9-7`} {...s} stroke={ACCENT} />}
          {i === 1 && <path d={`M${x - 10} ${y}l7 7 13-14`} {...s} stroke={ACCENT} strokeWidth={2.2} />}
          {i === 2 && <path d={`M${x - 9} ${y + 9}v-18h12l6 6v12z`} {...s} stroke={ACCENT} />}
          {i === 3 && <path d={`M${x - 13} ${y + 7}h18v-14h-18z M${x + 5} ${y - 3}h6l4 5v5h-10`} {...s} stroke={ACCENT} />}
        </g>
      ))}
      <g className="tbc-flow">
        {[0, 1.3, 2.6].map((d) => (
          <circle key={d} r="5" fill={ACCENT}>
            <animateMotion dur="3.9s" begin={`${d}s`} repeatCount="indefinite" path={`M${stages[0]} ${y} H ${stages[3]}`} />
          </circle>
        ))}
      </g>
      {/* dashboard */}
      <g transform="translate(70,240)">
        <rect width="300" height="150" rx="12" fill="#fff" stroke={FOREST} strokeOpacity="0.25" />
        <rect x="18" y="18" width="80" height="10" rx="5" fill={PALE} />
        {[46, 70, 58, 92, 80, 108].map((h, i) => (
          <rect key={i} x={24 + i * 44} y={132 - h} width="26" height={h} rx="4" fill={i === 5 ? ACCENT : PALE} />
        ))}
      </g>
      {/* phone with the morning report */}
      <g transform="translate(400,232)">
        <rect width="96" height="168" rx="16" fill="#fff" stroke={FOREST} strokeOpacity="0.35" strokeWidth="1.6" />
        <rect x="12" y="26" width="72" height="44" rx="8" fill={PALE} />
        <text x="48" y="54" textAnchor="middle" fontSize="15" fontWeight="700" fill={ACCENT} fontFamily="Inter, system-ui, sans-serif">9:00</text>
        {[86, 100, 114].map((yy, i) => <rect key={yy} x="14" y={yy} width={i === 2 ? 40 : 68} height="6" rx="3" fill={PALE} />)}
      </g>
      <Person x={480} y={84} r={13} accent />
    </svg>
  );
}

/* ── Pillar icons: listen / build / stay ─────────────────── */

export function PillarIcon({ kind }: { kind: "listen" | "build" | "stay" }) {
  return (
    <svg viewBox="0 0 96 96" className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
      <circle cx="48" cy="48" r="46" fill={PALE} />
      {kind === "listen" && (
        <>
          <path d="M24 34a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H40l-9 8v-8h-1a6 6 0 0 1-6-6z" {...s} fill="#fff" />
          {[34, 40, 46, 52].map((x, i) => <line key={x} x1={x} y1={41 - [3, 7, 5, 2][i]} x2={x} y2={41 + [3, 7, 5, 2][i]} {...s} stroke={ACCENT} strokeWidth={2.2} />)}
          <path d="M66 44c4 2 6 6 6 10s-2 8-6 10" {...s} opacity={0.5} />
        </>
      )}
      {kind === "build" && (
        <>
          <rect x="26" y="52" width="20" height="16" rx="3" {...s} fill="#fff" />
          <rect x="50" y="52" width="20" height="16" rx="3" {...s} fill="#fff" />
          <rect x="38" y="32" width="20" height="16" rx="3" fill={ACCENT} />
          <path d="M33 30l-6 6 6 6M63 30l6 6-6 6" {...s} opacity={0.5} />
        </>
      )}
      {kind === "stay" && (
        <>
          <path d="M48 24l18 7v15c0 12-8 20-18 25-10-5-18-13-18-25V31z" {...s} fill="#fff" />
          <path d="M40 47l6 6 11-12" {...s} stroke={ACCENT} strokeWidth={2.4} />
        </>
      )}
    </svg>
  );
}

/* ── Icons for the dark "why TBC" band ──────────────────── */

export function WhyIcon({ kind }: { kind: "process" | "delivery" | "outcome" }) {
  return (
    <svg viewBox="0 0 64 64" className="w-14 h-14 mb-5" aria-hidden="true">
      {kind === "process" && (
        <>
          <circle cx="12" cy="32" r="6" {...ds} />
          <circle cx="32" cy="16" r="6" {...ds} />
          <circle cx="32" cy="48" r="6" {...ds} />
          <circle cx="52" cy="32" r="7" fill={DACCENT} />
          <path d="M17 29l10-9M17 35l10 9M37 19l10 9M37 45l10-9" {...ds} />
        </>
      )}
      {kind === "delivery" && (
        <>
          <circle cx="24" cy="32" r="14" {...ds} />
          <circle cx="40" cy="32" r="14" {...ds} stroke={DACCENT} strokeWidth={2} />
        </>
      )}
      {kind === "outcome" && (
        <>
          {[22, 14, 6].map((r) => <circle key={r} cx="32" cy="32" r={r} {...ds} opacity={r === 6 ? 1 : 0.6} />)}
          <circle cx="32" cy="32" r="3" fill={DACCENT} />
          <path d="M32 32l20-20M46 10h8v8" {...ds} stroke={DACCENT} strokeWidth={2} />
        </>
      )}
    </svg>
  );
}

/* ── Large dark scenes for industries and the calculator ── */

function DarkFrame({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 640 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E3F2A" />
          <stop offset="1" stopColor="#1B6C47" />
        </linearGradient>
        <pattern id={`d-${id}`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="#FFFFFF" opacity="0.07" />
        </pattern>
      </defs>
      <rect width="640" height="400" fill={`url(#g-${id})`} />
      <rect width="640" height="400" fill={`url(#d-${id})`} />
      {children}
    </svg>
  );
}

export function FactoryScene() {
  const roof = "M90 210 L90 150 L150 120 L150 150 L210 120 L210 150 L270 120 L270 150 L330 120 L330 210";
  return (
    <DarkFrame id="factory" label="A factory with a production line and a live order board">
      <path d={roof} {...ds} />
      <rect x="360" y="70" width="22" height="140" {...ds} />
      <path d="M371 60c-10-14 10-20 0-34" {...ds} opacity={0.4} />
      <line x1="60" y1="210" x2="580" y2="210" {...ds} opacity={0.5} />
      {/* conveyor */}
      <rect x="90" y="270" width="420" height="16" rx="8" {...ds} />
      {[110, 170, 230, 290, 350, 410, 470].map((x) => <circle key={x} cx={x} cy="278" r="4" {...ds} opacity={0.5} />)}
      <g className="tbc-flow">
        {[0, 1.6, 3.2].map((d) => (
          <rect key={d} x="-14" y="-28" width="28" height="24" rx="3" fill={DACCENT} opacity="0.9">
            <animateMotion dur="4.8s" begin={`${d}s`} repeatCount="indefinite" path="M110 270 H 490" />
          </rect>
        ))}
      </g>
      {/* gear */}
      <g transform="translate(520,120)">
        <circle r="26" {...ds} />
        <circle r="9" {...ds} />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return <line key={i} x1={Math.cos(a) * 26} y1={Math.sin(a) * 26} x2={Math.cos(a) * 36} y2={Math.sin(a) * 36} {...ds} strokeWidth={4} />;
        })}
      </g>
      {/* order board */}
      <g transform="translate(410,300)">
        <rect width="170" height="72" rx="10" fill="#0E3F2A" stroke={DLINE} strokeOpacity="0.5" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="14" y={14 + i * 16} width="70" height="6" rx="3" fill={DLINE} opacity="0.35" />
            <circle cx="150" cy={17 + i * 16} r="4.5" fill={i < 2 ? DACCENT : DLINE} opacity={i < 2 ? 1 : 0.4} />
          </g>
        ))}
      </g>
    </DarkFrame>
  );
}

export function DistributionScene() {
  return (
    <DarkFrame id="distribution" label="A warehouse with racks, a delivery van and a route to customers">
      {/* racks */}
      {[70, 170].map((x) => (
        <g key={x}>
          <rect x={x} y="90" width="80" height="150" {...ds} />
          {[140, 190].map((y) => <line key={y} x1={x} y1={y} x2={x + 80} y2={y} {...ds} />)}
          {[0, 1, 2].map((r) => [0, 1].map((c) => (
            <rect key={`${r}${c}`} x={x + 8 + c * 36} y={100 + r * 50} width="28" height="30" rx="3" fill={DLINE} opacity={(r + c + x) % 3 === 0 ? 0.6 : 0.18} />
          )))}
        </g>
      ))}
      <line x1="40" y1="240" x2="600" y2="240" {...ds} opacity={0.5} />
      {/* van */}
      <g transform="translate(290,180)">
        <path d="M0 8h80v52H0z M80 26h28l18 18v16H80" {...ds} />
        <circle cx="22" cy="62" r="9" {...ds} fill="#0E3F2A" />
        <circle cx="104" cy="62" r="9" {...ds} fill="#0E3F2A" />
      </g>
      {/* route */}
      <path d="M430 300 C 470 250, 520 330, 560 270 S 600 190, 560 150" {...ds} strokeDasharray="5 7" />
      {[[430, 300], [560, 270], [560, 150]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <path d="M0 0c-8-10-12-15-12-21a12 12 0 0 1 24 0c0 6-4 11-12 21z" fill={i === 2 ? DACCENT : "#0E3F2A"} stroke={DLINE} strokeWidth="1.5" />
        </g>
      ))}
      <g className="tbc-flow">
        <circle r="6" fill={DACCENT}>
          <animateMotion dur="5s" repeatCount="indefinite" path="M430 300 C 470 250, 520 330, 560 270 S 600 190, 560 150" />
        </circle>
      </g>
      {/* chat → order */}
      <g transform="translate(70,290)">
        <path d="M0 8a8 8 0 0 1 8-8h70a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H24l-12 10v-10H8a8 8 0 0 1-8-8z" fill="#0E3F2A" stroke={DLINE} strokeWidth="1.5" />
        <rect x="14" y="14" width="44" height="5" rx="2.5" fill={DLINE} opacity="0.4" />
        <path d="M100 22h60" {...ds} stroke={DACCENT} strokeWidth={2} />
        <path d="M152 15l8 7-8 7" {...ds} stroke={DACCENT} strokeWidth={2} />
        <rect x="172" y="2" width="56" height="42" rx="6" fill="#0E3F2A" stroke={DACCENT} strokeWidth="1.8" />
        <path d="M186 23l7 7 13-14" {...ds} stroke={DACCENT} strokeWidth={2.2} />
      </g>
    </DarkFrame>
  );
}

export function CostScene() {
  // A gauge reading "high" with hour bars stacking up, for the process cost calculator.
  return (
    <DarkFrame id="cost" label="A gauge showing the yearly cost of a manual process">
      <g transform="translate(220,250)">
        <path d="M-150 0 A150 150 0 0 1 150 0" {...ds} strokeWidth={14} opacity={0.25} />
        <path d="M-150 0 A150 150 0 0 1 106 -106" fill="none" stroke={DACCENT} strokeWidth="14" strokeLinecap="round" />
        {Array.from({ length: 11 }).map((_, i) => {
          const a = Math.PI + (i * Math.PI) / 10;
          return <line key={i} x1={Math.cos(a) * 122} y1={Math.sin(a) * 122} x2={Math.cos(a) * 132} y2={Math.sin(a) * 132} {...ds} opacity={0.6} />;
        })}
        <line x1="0" y1="0" x2="74" y2="-74" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <circle r="10" fill="#fff" />
      </g>
      <g transform="translate(440,110)">
        {[60, 92, 124, 156, 188].map((h, i) => (
          <rect key={i} x={i * 30} y={200 - h} width="20" height={h} rx="4" fill={i === 4 ? DACCENT : DLINE} opacity={i === 4 ? 1 : 0.3} />
        ))}
        <line x1="-6" y1="200" x2="150" y2="200" {...ds} opacity={0.5} />
      </g>
    </DarkFrame>
  );
}

/* ── Covers for the guide cards ─────────────────────────── */

export function GuideCover({ variant }: { variant: number }) {
  const v = variant % 8;
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="180" fill={v % 2 ? PALE : "#DCEDE3"} />
      {v === 0 && [30, 60, 90, 120].map((r) => <circle key={r} cx="260" cy="150" r={r} {...s} opacity={0.35} />)}
      {v === 1 && [0, 1, 2, 3, 4].map((i) => <rect key={i} x={40 + i * 48} y={140 - (i + 1) * 20} width="30" height={(i + 1) * 20} rx="4" fill={i === 4 ? ACCENT : "#fff"} />)}
      {v === 2 && <path d="M0 120 C 60 60, 120 160, 180 100 S 280 40, 320 80" {...s} stroke={ACCENT} strokeWidth={3} />}
      {v === 3 && [0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={30 + (i % 3) * 92} y={30 + Math.floor(i / 3) * 66} width="76" height="50" rx="8" fill={i === 4 ? ACCENT : "#fff"} />)}
      {v === 4 && (
        <>
          <path d="M60 90h70M190 90h70" {...s} strokeWidth={2.4} />
          {[60, 160, 260].map((x, i) => <circle key={x} cx={x} cy="90" r="22" fill={i === 1 ? ACCENT : "#fff"} stroke={FOREST} strokeOpacity="0.4" />)}
        </>
      )}
      {v === 5 && Array.from({ length: 9 }).map((_, i) => <line key={i} x1={i * 40} y1="0" x2={i * 40 + 120} y2="180" {...s} opacity={0.25} />)}
      {v === 6 && (
        <>
          <path d="M160 30 L250 150 L70 150 Z" {...s} fill="#fff" />
          <path d="M160 30 L205 90 L115 90 Z" fill={ACCENT} />
        </>
      )}
      {v === 7 && [0, 1, 2].map((i) => <path key={i} d={`M40 ${60 + i * 30} h${200 - i * 50}`} {...s} strokeWidth={10} stroke={i === 0 ? ACCENT : "#fff"} />)}
    </svg>
  );
}
