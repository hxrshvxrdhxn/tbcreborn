import { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Brand Guidelines | Turbo Bytes Consulting",
  description: "Official visual identity, typography, and color guidelines for Turbo Bytes Consulting.",
};

function ColorSwatch({ name, hex, className, textColor }: { name: string; hex: string; className: string; textColor?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className={`h-32 w-full rounded-xl shadow-card flex items-end p-4 ${className}`}>
        <span className={`font-display font-semibold text-sm ${textColor || 'text-white'}`}>{hex}</span>
      </div>
      <div>
        <h4 className="font-display font-semibold text-ink">{name}</h4>
        <p className="text-sm text-mid-grey uppercase tracking-widest">{hex}</p>
      </div>
    </div>
  );
}

export default function BrandGuidelinesPage() {
  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      <div className="container-tbc">
        
        {/* HERO */}
        <Reveal>
          <div className="mb-24">
            <span className="eyebrow">Design System</span>
            <h1 className="text-display font-display font-bold text-ink mb-6">Brand Guidelines</h1>
            <p className="text-body-lg text-mid-grey max-w-text">
              The official visual identity, typography, and color specifications for Turbo Bytes Consulting. 
              Our aesthetic is rooted in precision, intelligence, and premium execution.
            </p>
          </div>
        </Reveal>

        {/* TYPOGRAPHY */}
        <Reveal delay={0.1}>
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="gold-rule"></span>
              <h2 className="section-heading">Typography</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Display Font */}
              <div>
                <div className="mb-6 flex justify-between items-baseline">
                  <h3 className="font-display text-2xl font-semibold text-ink">Inter</h3>
                  <span className="text-mid-grey text-sm tracking-widest uppercase">Display & Headings</span>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-card border border-light-grey mb-6">
                  <div className="font-display font-bold text-6xl text-ink mb-4 break-words">
                    Aa Bb Cc
                  </div>
                  <div className="font-display text-ink text-xl leading-relaxed mb-6">
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
                    a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
                    0 1 2 3 4 5 6 7 8 9 & ! @ # % *
                  </div>
                  <div className="space-y-3 pt-6 border-t border-light-grey">
                    <p className="font-display font-bold text-ink text-2xl">Bold 700</p>
                    <p className="font-display font-semibold text-ink text-2xl">SemiBold 600</p>
                    <p className="font-display font-medium text-ink text-2xl">Medium 500</p>
                    <p className="font-display font-normal text-ink text-2xl">Regular 400</p>
                  </div>
                </div>
                <p className="text-sm text-mid-grey">
                  Used for primary headings, buttons, eyebrows, and major UI elements. It communicates structural solidity and technology.
                </p>
              </div>

              {/* Body Font */}
              <div>
                <div className="mb-6 flex justify-between items-baseline">
                  <h3 className="font-sans text-2xl font-semibold text-ink">DM Sans</h3>
                  <span className="text-mid-grey text-sm tracking-widest uppercase">Body Text</span>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-card border border-light-grey mb-6">
                  <div className="font-sans font-bold text-6xl text-ink mb-4 break-words">
                    Aa Bb Cc
                  </div>
                  <div className="font-sans text-ink text-xl leading-relaxed mb-6">
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
                    a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
                    0 1 2 3 4 5 6 7 8 9 & ! @ # % *
                  </div>
                  <div className="space-y-3 pt-6 border-t border-light-grey">
                    <p className="font-sans font-medium text-ink text-2xl">Medium 500</p>
                    <p className="font-sans font-normal text-ink text-2xl">Regular 400</p>
                  </div>
                </div>
                <p className="text-sm text-mid-grey">
                  Used for all long-form body copy, paragraphs, and subtle supporting text. It ensures maximum readability and a clean, modern aesthetic.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* COLORS */}
        <Reveal delay={0.1}>
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="gold-rule"></span>
              <h2 className="section-heading">Color Palette</h2>
            </div>
            
            {/* Primary Colors */}
            <h3 className="font-display text-xl font-semibold text-ink mb-6">Core Identity</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <ColorSwatch name="TBC Ink" hex="#0D1B2A" className="bg-ink" />
              <ColorSwatch name="TBC Ivory" hex="#FAFAF8" className="bg-ivory border border-light-grey" textColor="text-ink" />
              <ColorSwatch name="Royal Blue" hex="#1B3A8C" className="bg-royal" />
              <ColorSwatch name="TBC Gold" hex="#C8960C" className="bg-gold" />
            </div>

            {/* Accents */}
            <h3 className="font-display text-xl font-semibold text-ink mb-6">Secondary & Accents</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <ColorSwatch name="Royal Mid" hex="#2952CC" className="bg-royal-mid" />
              <ColorSwatch name="Royal Light" hex="#EEF2FF" className="bg-royal-light" textColor="text-royal" />
              <ColorSwatch name="Gold Bright" hex="#E5AD0E" className="bg-gold-bright" />
              <ColorSwatch name="Gold Light" hex="#FFF8E1" className="bg-gold-light" textColor="text-gold" />
              <ColorSwatch name="Emerald" hex="#1A5C3A" className="bg-tbc-emerald" />
              <ColorSwatch name="Emerald Mid" hex="#247A4E" className="bg-tbc-emerald-mid" />
              <ColorSwatch name="Mid Grey" hex="#6B7280" className="bg-mid-grey" />
              <ColorSwatch name="Light Grey" hex="#F3F4F6" className="bg-light-grey" textColor="text-mid-grey" />
            </div>
          </section>
        </Reveal>

        {/* LOGO & MARK */}
        <Reveal delay={0.1}>
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="gold-rule"></span>
              <h2 className="section-heading">Logo & Marks</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primary Logo (Dark) */}
              <div className="bg-ink p-12 rounded-2xl flex items-center justify-center min-h-[300px]">
                <div className="flex items-center gap-4">
                  <span
                    className="font-display font-bold text-5xl text-white"
                    style={{ letterSpacing: "3px" }}
                  >
                    TBC
                  </span>
                  <span
                    className="font-display font-semibold text-gold leading-tight"
                    style={{ fontSize: "12px", letterSpacing: "0.5px" }}
                  >
                    TURBO BYTES<br />CONSULTING
                  </span>
                </div>
              </div>

              {/* Primary Logo (Light) */}
              <div className="bg-white border border-light-grey shadow-sm p-12 rounded-2xl flex items-center justify-center min-h-[300px]">
                <div className="flex items-center gap-4">
                  <span
                    className="font-display font-bold text-5xl text-ink"
                    style={{ letterSpacing: "3px" }}
                  >
                    TBC
                  </span>
                  <span
                    className="font-display font-semibold text-royal leading-tight"
                    style={{ fontSize: "12px", letterSpacing: "0.5px" }}
                  >
                    TURBO BYTES<br />CONSULTING
                  </span>
                </div>
              </div>

              {/* Monogram (Dark) */}
              <div className="bg-ink p-12 rounded-2xl flex flex-col items-center justify-center min-h-[300px] gap-6">
                <div className="w-24 h-24 bg-[#1C1C1C] rounded-3xl flex items-center justify-center shadow-lg border border-white/5">
                  <span className="font-display font-black text-4xl text-gold" style={{ letterSpacing: "-1.5px" }}>TBC</span>
                </div>
                <span className="text-white/40 text-sm font-display tracking-widest uppercase">Dark Icon</span>
              </div>

              {/* Monogram (Light) */}
              <div className="bg-white border border-light-grey p-12 rounded-2xl flex flex-col items-center justify-center min-h-[300px] gap-6 hero-grid">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-card border border-light-grey">
                  <span className="font-display font-black text-4xl text-royal" style={{ letterSpacing: "-1.5px" }}>TBC</span>
                </div>
                <span className="text-mid-grey text-sm font-display tracking-widest uppercase bg-white px-3 py-1 rounded-full border border-light-grey">Light Icon</span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* UI ELEMENTS */}
        <Reveal delay={0.1}>
          <section>
            <div className="flex items-center gap-4 mb-12">
              <span className="gold-rule"></span>
              <h2 className="section-heading">UI Elements</h2>
            </div>

            <div className="bg-white border border-light-grey rounded-2xl p-12 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Buttons */}
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-8">Buttons</h3>
                  <div className="flex flex-col gap-6 items-start">
                    <div>
                      <button className="btn-primary mb-3 block">Primary Button</button>
                      <p className="text-xs text-mid-grey">Used for main calls to action. Class: <code className="bg-light-grey px-1 py-0.5 rounded text-ink">.btn-primary</code></p>
                    </div>
                    <div>
                      <button className="btn-gold mb-3 block">Gold Button</button>
                      <p className="text-xs text-mid-grey">Used for high-contrast emphasis. Class: <code className="bg-light-grey px-1 py-0.5 rounded text-ink">.btn-gold</code></p>
                    </div>
                    <div className="bg-ink p-6 rounded-xl -ml-6 w-[calc(100%+3rem)]">
                      <button className="btn-ghost-gold mb-3 block">Ghost Button</button>
                      <p className="text-xs text-white/50">Used on dark backgrounds. Class: <code className="bg-white/10 px-1 py-0.5 rounded text-white">.btn-ghost-gold</code></p>
                    </div>
                  </div>
                </div>

                {/* Form Inputs & Tags */}
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-8">Form Elements & Tags</h3>
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="block font-display font-semibold text-ink text-sm mb-2">Input Label</label>
                      <input 
                        type="text" 
                        placeholder="Placeholder text..." 
                        className="w-full bg-ivory border border-light-grey rounded-lg px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all font-sans"
                        readOnly
                      />
                    </div>
                    
                    <div>
                      <span className="block font-display font-semibold text-ink text-sm mb-4">Tags</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-royal-light text-royal px-3 py-1 rounded-full text-xs font-semibold font-display tracking-wide uppercase">AI Strategy</span>
                        <span className="bg-gold-light text-gold px-3 py-1 rounded-full text-xs font-semibold font-display tracking-wide uppercase">Development</span>
                        <span className="bg-tbc-emerald-light text-tbc-emerald px-3 py-1 rounded-full text-xs font-semibold font-display tracking-wide uppercase">Active</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </Reveal>

      </div>
    </div>
  );
}
