// Crisp vector artwork for the "Three ways we work with you" cards.
// Drawn in a 400×250 frame (16:10) and centred, so nothing is cropped at any width.

const LINE = "#CFE8DA";
const ACCENT = "#7FD1A6";
const s = { fill: "none", stroke: LINE, strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, vectorEffect: "non-scaling-stroke" as const };

function Frame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E3F2A" />
          <stop offset="1" stopColor="#17603F" />
        </linearGradient>
        <pattern id={`dots-${id}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="#FFFFFF" opacity="0.07" />
        </pattern>
      </defs>
      <rect width="400" height="250" fill={`url(#bg-${id})`} />
      <rect width="400" height="250" fill={`url(#dots-${id})`} />
      {children}
    </svg>
  );
}

function NeuralNet() {
  const layers = [
    [70, 105, 140, 175],
    [55, 90, 125, 160, 195],
    [70, 105, 140, 175],
    [105, 140],
  ];
  const xs = [120, 180, 240, 300];
  const lines: JSX.Element[] = [];
  layers.forEach((col, li) => {
    if (li === layers.length - 1) return;
    col.forEach((y1, a) =>
      layers[li + 1].forEach((y2, b) =>
        lines.push(<line key={`${li}-${a}-${b}`} x1={xs[li]} y1={y1} x2={xs[li + 1]} y2={y2} {...s} opacity={0.22} />)
      )
    );
  });
  const path = [[120, 105], [180, 125], [240, 140], [300, 140]];
  return (
    <Frame id="ai">
      {lines}
      <polyline points={path.map((p) => p.join(",")).join(" ")} {...s} stroke={ACCENT} strokeWidth={2} />
      {layers.map((col, li) =>
        col.map((y) => <circle key={`${li}-${y}`} cx={xs[li]} cy={y} r="6" {...s} fill="#0E3F2A" />)
      )}
      {path.map(([x, y]) => <circle key={`p${x}`} cx={x} cy={y} r="6" fill={ACCENT} stroke="none" />)}
    </Frame>
  );
}

function Analysis() {
  const pts = [[105, 175], [140, 165], [175, 170], [210, 140], [245, 128], [280, 95], [310, 82]];
  return (
    <Frame id="consult">
      <line x1="90" y1="195" x2="320" y2="195" {...s} opacity={0.6} />
      <line x1="90" y1="60" x2="90" y2="195" {...s} opacity={0.6} />
      {[90, 125, 160].map((y) => <line key={y} x1="90" y1={y} x2="320" y2={y} {...s} opacity={0.12} />)}
      {[[115, 10], [150, 15], [185, 23], [220, 35], [255, 45]].map(([x, h]) => (
        <rect key={x} x={x - 7} y={195 - h} width="14" height={h} rx="2" fill={LINE} opacity={0.18} />
      ))}
      <polyline points={pts.map((p) => p.join(",")).join(" ")} {...s} stroke={ACCENT} strokeWidth={2} />
      {pts.map(([x, y]) => <circle key={x} cx={x} cy={y} r="3.5" fill={ACCENT} />)}
      <circle cx="245" cy="128" r="30" {...s} strokeWidth={2} />
      <line x1="267" y1="150" x2="290" y2="173" {...s} strokeWidth={3.5} />
    </Frame>
  );
}

function ProductSet() {
  const tile = (x: number, children: React.ReactNode, label: string) => (
    <g key={label} transform={`translate(${x},80)`}>
      <rect width="66" height="66" rx="12" {...s} fill="#0E3F2A" opacity={0.9} />
      {children}
      <text x="33" y="90" textAnchor="middle" fill={LINE} opacity={0.8} fontSize="11" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.5">{label}</text>
    </g>
  );
  return (
    <Frame id="products">
      {tile(46, <>
        {[10, 18, 26].map((r) => <circle key={r} cx="33" cy="33" r={r} {...s} opacity={1 - r / 40} />)}
        <circle cx="33" cy="33" r="3" fill={ACCENT} />
        <line x1="33" y1="33" x2="52" y2="20" {...s} stroke={ACCENT} />
      </>, "Slate")}
      {tile(130, <>
        {[0, 1, 2].map((i) => <rect key={i} x="16" y={44 - i * 11} width="34" height="7" rx="1.5" {...s} opacity={0.5 + i * 0.2} />)}
        <path d="M24 17 L30 23 L42 11" {...s} stroke={ACCENT} strokeWidth={2} />
      </>, "Distil")}
      {tile(214, <>
        <rect x="15" y="12" width="26" height="36" rx="2" {...s} opacity={0.7} />
        {[20, 27, 34].map((y) => <line key={y} x1="20" y1={y} x2="36" y2={y} {...s} opacity={0.45} />)}
        <circle cx="40" cy="40" r="9" {...s} stroke={ACCENT} strokeWidth={1.8} />
        <line x1="47" y1="47" x2="53" y2="53" {...s} stroke={ACCENT} strokeWidth={2.4} />
      </>, "Vantage")}
      {tile(298, <>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (-Math.PI / 2) + (i * Math.PI) / 3;
          const x = 33 + 19 * Math.cos(a), y = 33 + 19 * Math.sin(a);
          return (
            <g key={i}>
              <line x1="33" y1="33" x2={x} y2={y} {...s} opacity={0.45} />
              <circle cx={x} cy={y} r="3.5" {...s} fill="#0E3F2A" />
            </g>
          );
        })}
        <circle cx="33" cy="33" r="5" fill={ACCENT} />
      </>, "Meridian")}
    </Frame>
  );
}

export default function PracticeArt({ kind }: { kind: "ai" | "consulting" | "products" }) {
  if (kind === "ai") return <NeuralNet />;
  if (kind === "consulting") return <Analysis />;
  return <ProductSet />;
}
