import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';

// ==========================================
// BESPOKE ARCHITECTURAL ICONS & GLYPHS
// ==========================================

function BespokeMonogram({ className = "w-6 h-6 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" opacity="0.4" />
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 34L24 14L32 34" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 28H29" strokeLinecap="round" />
      <path d="M14 34H18M30 34H34" strokeLinecap="round" />
      <path d="M24 14V34" strokeWidth="0.8" opacity="0.4" />
      <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  );
}

function BespokeCrane({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      {/* Tower crane architectural silhouette */}
      <path d="M4 22V5L19 2M4 5H21M4 9L21 2M4 14L10 9M4 19L14 9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 5V13M13 13H17" strokeLinecap="round" />
      <path d="M2 22H8" strokeLinecap="round" />
    </svg>
  );
}

function BespokeMinaret({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <path d="M12 2V4M10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6V8H10V6Z" strokeLinejoin="round" />
      <path d="M9 8H15V12H9V8Z" />
      <path d="M8 12H16V14H8V12Z" />
      <path d="M9 14V22M15 14V22" strokeLinecap="round" />
      <path d="M6 22H18" strokeLinecap="round" />
      <circle cx="12" cy="2" r="0.75" fill="currentColor" />
    </svg>
  );
}

function BespokeKeystone({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <path d="M3 21V14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14V21" strokeLinecap="round" />
      <path d="M6 21V14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14V21" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5" />
      <path d="M9.5 3H14.5L13.5 10H10.5L9.5 3Z" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
      <path d="M1 21H8M16 21H23" strokeLinecap="round" />
    </svg>
  );
}

function BespokeCapital({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <path d="M2 4H22" strokeLinecap="round" />
      <path d="M4 6H20" strokeLinecap="round" />
      <path d="M4 6C4 9 7 9 7 11" strokeLinecap="round" />
      <path d="M20 6C20 9 17 9 17 11" strokeLinecap="round" />
      <path d="M7 11C9 11 10 10 12 10C14 10 15 11 17 11" strokeLinecap="round" />
      <path d="M6 13H18" strokeLinecap="round" />
      <path d="M7 13V21M17 21V13" strokeLinecap="round" />
      <path d="M10 13V21M14 21V13" strokeLinecap="round" strokeDasharray="1 2" opacity="0.5" />
      <path d="M5 21H19" strokeLinecap="round" />
    </svg>
  );
}

function BespokeCaliper({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="5" r="2" />
      <path d="M11 6.5L5 21M13 6.5L19 21" strokeLinecap="round" />
      <path d="M7.5 15C9 14.5 15 14.5 16.5 15" strokeLinecap="round" />
      <circle cx="12" cy="14.6" r="0.75" fill="currentColor" />
    </svg>
  );
}

function BespokeMedallion({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="7" strokeDasharray="1.5 2" opacity="0.6" />
      <path d="M12 7V17M7 12H17" strokeLinecap="round" strokeWidth="0.8" opacity="0.4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

function BespokeVault({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <rect x="4" y="9" width="16" height="12" rx="1" strokeLinejoin="round" />
      <path d="M8 9V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9" strokeLinecap="round" />
      <circle cx="12" cy="15" r="2" />
      <path d="M12 17V19" strokeLinecap="round" />
      <circle cx="12" cy="15" r="4" strokeDasharray="1.5 2" opacity="0.4" />
    </svg>
  );
}

function BespokeCompassRose({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function BespokeBlueprintGlyph({ className = "w-5 h-5 text-[#9E7730]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9H21M9 3V21M3 15H21M15 3V21" strokeWidth="0.75" strokeDasharray="1 2" opacity="0.4" />
      <path d="M6 18L18 6" strokeLinecap="round" />
      <circle cx="6" cy="18" r="1.5" fill="currentColor" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

function BespokeZoom({ className = "w-4 h-4 text-current" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M15 3H21V9M9 21H3V15M21 3L14 10M3 21L10 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


// ==========================================
// ARCHITECTURAL CAD BLUEPRINT & DIAGRAM COMPONENT
// ==========================================

interface ArchitecturalBlueprintViewerProps {
  type: 'clifftop' | 'mosque' | 'crane-site' | 'atrium' | 'archaeological';
  title: string;
  sheetNo: string;
  scale: string;
  projectLocation: string;
}

function ArchitecturalBlueprintViewer({
  type,
  title,
  sheetNo,
  scale,
  projectLocation
}: ArchitecturalBlueprintViewerProps) {
  const [showPiles, setShowPiles] = useState<boolean>(true);
  const [showDimensions, setShowDimensions] = useState<boolean>(true);
  const [showDrainage, setShowDrainage] = useState<boolean>(true);
  const [showSeismic, setShowSeismic] = useState<boolean>(true);
  const [activeCallout, setActiveCallout] = useState<string | null>(null);

  return (
    <div className="bg-[#0D1826] border border-[#23354D] text-[#BACAD9] font-mono text-xs overflow-hidden shadow-2xl">
      {/* CAD Title Block Header */}
      <div className="bg-[#132235] border-b border-[#23354D] p-4 flex flex-wrap items-center justify-between gap-4 font-cinzel">
        <div className="flex items-center gap-3">
          <BespokeBlueprintGlyph className="w-5 h-5 text-[#E6C687]" />
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#E6C687]">
              Architectural Structural CAD Schematic · {sheetNo}
            </div>
            <h4 className="text-white text-base tracking-wide font-medium">
              {title}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#8EA2B8]">
          <span>Scale: <strong className="text-white">{scale}</strong></span>
          <span>·</span>
          <span>Datum: <strong className="text-white">NGF IGN69 (+180.40m)</strong></span>
          <span>·</span>
          <span className="text-emerald-400 font-sans text-[10px] px-2 py-0.5 bg-emerald-950/60 border border-emerald-500/40 uppercase">
            Approved For Construction (AFC)
          </span>
        </div>
      </div>

      {/* Layer Toggles Toolbar */}
      <div className="bg-[#0B1420] border-b border-[#1E2E44] px-4 py-2 flex flex-wrap items-center gap-3 text-[11px]">
        <span className="text-[#647C96] uppercase tracking-wider font-cinzel text-[10px]">
          CAD Overlay Layers:
        </span>
        <button
          type="button"
          onClick={() => setShowPiles(!showPiles)}
          className={`px-2.5 py-1 border transition-colors ${
            showPiles ? 'bg-[#E6C687]/20 border-[#E6C687] text-[#F3E7C9]' : 'border-[#23354D] text-[#55697D]'
          }`}
        >
          {showPiles ? '✓' : '○'} Deep Micropiles & Bedrock (Tiebacks)
        </button>
        <button
          type="button"
          onClick={() => setShowDimensions(!showDimensions)}
          className={`px-2.5 py-1 border transition-colors ${
            showDimensions ? 'bg-[#4FA3D1]/20 border-[#4FA3D1] text-[#97D4F5]' : 'border-[#23354D] text-[#55697D]'
          }`}
        >
          {showDimensions ? '✓' : '○'} Dimension Callouts & Levels
        </button>
        <button
          type="button"
          onClick={() => setShowDrainage(!showDrainage)}
          className={`px-2.5 py-1 border transition-colors ${
            showDrainage ? 'bg-[#3CCB88]/20 border-[#3CCB88] text-[#86E4B9]' : 'border-[#23354D] text-[#55697D]'
          }`}
        >
          {showDrainage ? '✓' : '○'} Hydrostatic Sub-Drainage
        </button>
        <button
          type="button"
          onClick={() => setShowSeismic(!showSeismic)}
          className={`px-2.5 py-1 border transition-colors ${
            showSeismic ? 'bg-[#E06D53]/20 border-[#E06D53] text-[#F6AA99]' : 'border-[#23354D] text-[#55697D]'
          }`}
        >
          {showSeismic ? '✓' : '○'} Seismic Core & Dampers
        </button>
      </div>

      {/* Interactive CAD Drawing Canvas */}
      <div className="relative aspect-[16/9] bg-[#09111B] p-6 overflow-hidden flex items-center justify-center">
        
        {/* CAD Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4B6A8E" strokeWidth="0.5" />
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#6C8FB8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cadGrid)" />
        </svg>

        {/* Dynamic Architectural Vector Schematics */}
        <svg viewBox="0 0 800 450" className="w-full h-full max-h-[420px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          {/* North Arrow & Scale Bar */}
          <g transform="translate(730, 40)">
            <circle cx="0" cy="0" r="18" stroke="#4FA3D1" strokeWidth="1" opacity="0.6" />
            <path d="M0 -15L4 10L0 5L-4 10L0 -15Z" fill="#E6C687" />
            <text x="-4" y="-20" fill="#E6C687" fontSize="10" fontFamily="sans-serif">N</text>
          </g>

          {/* CLIFTON / TOWER CRANE / MOSQUE VECTOR DRAWINGS */}
          {type === 'clifftop' || type === 'crane-site' ? (
            <g id="clifftopSection">
              {/* Natural Coastal Dolomite Cliff Profile */}
              <path 
                d="M 50 380 L 180 340 L 260 280 L 320 210 L 420 180 L 560 120 L 750 90" 
                stroke="#6B8299" 
                strokeWidth="2.5" 
                strokeDasharray="4 2"
              />
              <text x="60" y="400" fill="#6B8299" fontSize="11">Sea Level Datum 0.00m (Mediterranean)</text>
              <path d="M 50 380 L 200 380 L 200 420 L 50 420 Z" fill="#132B45" opacity="0.4" />

              {/* Terraced Retaining Bastion Walls (Ashlar Limestone) */}
              <rect x="250" y="220" width="120" height="60" fill="#182A3E" stroke="#E6C687" strokeWidth="1.8" />
              <rect x="360" y="160" width="140" height="60" fill="#182A3E" stroke="#E6C687" strokeWidth="1.8" />
              <rect x="490" y="100" width="160" height="60" fill="#182A3E" stroke="#E6C687" strokeWidth="1.8" />

              {/* Stone Ashlar Joint Lines */}
              <line x1="250" y1="240" x2="370" y2="240" stroke="#E6C687" strokeWidth="0.75" opacity="0.5" />
              <line x1="250" y1="260" x2="370" y2="260" stroke="#E6C687" strokeWidth="0.75" opacity="0.5" />
              <line x1="360" y1="180" x2="500" y2="180" stroke="#E6C687" strokeWidth="0.75" opacity="0.5" />
              <line x1="360" y1="200" x2="500" y2="200" stroke="#E6C687" strokeWidth="0.75" opacity="0.5" />

              {/* Infinity Reflection Basin & Cantilever */}
              <path d="M 460 100 L 550 100 L 550 115 L 460 115 Z" fill="#3CCB88" fillOpacity="0.3" stroke="#3CCB88" strokeWidth="1" />
              <text x="470" y="94" fill="#3CCB88" fontSize="10">Infinity Basin (140 m³)</text>

              {/* Tower Crane Footing & Mast (if crane-site or ongoing) */}
              <g id="towerCraneSchematic" opacity="0.9">
                <rect x="200" y="270" width="30" height="15" fill="#E06D53" stroke="#FFFFFF" strokeWidth="1" />
                <line x1="215" y1="270" x2="215" y2="40" stroke="#E6C687" strokeWidth="2.5" />
                <line x1="215" y1="40" x2="160" y2="55" stroke="#E6C687" strokeWidth="2" /> {/* Counter-jib */}
                <rect x="150" y="50" width="16" height="12" fill="#E06D53" /> {/* Counterweight */}
                <line x1="215" y1="40" x2="360" y2="40" stroke="#E6C687" strokeWidth="2" /> {/* Jib */}
                <line x1="280" y1="40" x2="280" y2="110" stroke="#E6C687" strokeWidth="1" strokeDasharray="2 2" />
                <rect x="272" y="110" width="16" height="10" fill="#E6C687" /> {/* 8-Ton Monolith Lift */}
                <text x="140" y="30" fill="#E6C687" fontSize="10">Liebherr 280 EC-H (70m Jib)</text>
              </g>

              {/* LAYER: Deep Micropiles & Bedrock Ties */}
              {showPiles && (
                <g id="pilesLayer">
                  {/* Bedrock Drilling Anchors */}
                  <line x1="280" y1="280" x2="210" y2="390" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="330" y1="280" x2="270" y2="410" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="400" y1="220" x2="320" y2="390" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="460" y1="220" x2="390" y2="410" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="530" y1="160" x2="440" y2="380" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  
                  {/* Grout bulbs */}
                  <circle cx="210" cy="390" r="5" fill="#E6C687" />
                  <circle cx="270" cy="410" r="5" fill="#E6C687" />
                  <circle cx="320" cy="390" r="5" fill="#E6C687" />
                  <circle cx="390" cy="410" r="5" fill="#E6C687" />
                  <circle cx="440" cy="380" r="5" fill="#E6C687" />
                  <text x="215" y="425" fill="#F3E7C9" fontSize="10">Titan Dywidag Anchors (-28.50m Bedrock)</text>
                </g>
              )}

              {/* LAYER: Hydrostatic Sub-drainage */}
              {showDrainage && (
                <g id="drainageLayer">
                  <path d="M 255 275 L 365 275 L 365 215 L 495 215 L 495 155 L 640 155" stroke="#3CCB88" strokeWidth="2" strokeDasharray="4 3" />
                  <circle cx="255" cy="275" r="4" fill="#3CCB88" />
                  <circle cx="365" cy="275" r="4" fill="#3CCB88" />
                  <circle cx="495" cy="215" r="4" fill="#3CCB88" />
                  <text x="505" y="145" fill="#3CCB88" fontSize="10">Perforated Hydrostatic Relief Siphon</text>
                </g>
              )}

              {/* LAYER: Dimension Callouts */}
              {showDimensions && (
                <g id="dimensionsLayer">
                  {/* Horizontal span */}
                  <line x1="250" y1="80" x2="650" y2="80" stroke="#4FA3D1" strokeWidth="1" />
                  <path d="M 250 76 L 250 84 M 650 76 L 650 84" stroke="#4FA3D1" strokeWidth="1.5" />
                  <text x="420" y="74" fill="#4FA3D1" fontSize="11" textAnchor="middle">TOTAL CANOPY RUN: 48.60 m</text>

                  {/* Vertical Elevation Markers */}
                  <g transform="translate(680, 100)">
                    <path d="M 0 0 L 10 -5 L 10 5 Z" fill="#4FA3D1" />
                    <line x1="10" y1="0" x2="40" y2="0" stroke="#4FA3D1" strokeWidth="1" />
                    <text x="45" y="4" fill="#4FA3D1" fontSize="10">+180.40m Upper Promenade</text>
                  </g>
                  <g transform="translate(540, 160)">
                    <path d="M 0 0 L 10 -5 L 10 5 Z" fill="#4FA3D1" />
                    <line x1="10" y1="0" x2="40" y2="0" stroke="#4FA3D1" strokeWidth="1" />
                    <text x="45" y="4" fill="#4FA3D1" fontSize="10">+164.20m Mid Terrace</text>
                  </g>
                  <g transform="translate(400, 220)">
                    <path d="M 0 0 L 10 -5 L 10 5 Z" fill="#4FA3D1" />
                    <line x1="10" y1="0" x2="40" y2="0" stroke="#4FA3D1" strokeWidth="1" />
                    <text x="45" y="4" fill="#4FA3D1" fontSize="10">+148.00m Sea Bastion</text>
                  </g>
                </g>
              )}

              {/* LAYER: Seismic Dampers */}
              {showSeismic && (
                <g id="seismicLayer">
                  <rect x="360" y="215" width="20" height="10" fill="#E06D53" stroke="#FFF" strokeWidth="1" />
                  <rect x="490" y="155" width="20" height="10" fill="#E06D53" stroke="#FFF" strokeWidth="1" />
                  <text x="385" y="224" fill="#F6AA99" fontSize="10">Elastomeric Lead-Rubber Bearing (LRB)</text>
                </g>
              )}
            </g>
          ) : type === 'mosque' ? (
            <g id="mosqueSection">
              {/* Grand Mosque Symmetrical Elevation & Courtyard Peristyle */}
              {/* Central Dome & Arch */}
              <path d="M 320 220 C 320 120 480 120 480 220" stroke="#E6C687" strokeWidth="2.5" fill="#132337" fillOpacity="0.4" />
              <path d="M 360 220 C 360 150 440 150 440 220" stroke="#E6C687" strokeWidth="1.5" strokeDasharray="2 2" />
              <circle cx="400" cy="115" r="4" fill="#E6C687" />
              <line x1="400" y1="100" x2="400" y2="120" stroke="#E6C687" strokeWidth="2" />

              {/* Monumental 90m Minaret Left */}
              <rect x="180" y="60" width="36" height="280" fill="#182A3E" stroke="#E6C687" strokeWidth="1.8" />
              <path d="M 180 60 L 198 25 L 216 60 Z" fill="#E6C687" />
              <line x1="180" y1="120" x2="216" y2="120" stroke="#E6C687" strokeWidth="1" />
              <line x1="180" y1="190" x2="216" y2="190" stroke="#E6C687" strokeWidth="1" />
              <line x1="180" y1="260" x2="216" y2="260" stroke="#E6C687" strokeWidth="1" />

              {/* Monumental 90m Minaret Right */}
              <rect x="584" y="60" width="36" height="280" fill="#182A3E" stroke="#E6C687" strokeWidth="1.8" />
              <path d="M 584 60 L 602 25 L 620 60 Z" fill="#E6C687" />
              <line x1="584" y1="120" x2="620" y2="120" stroke="#E6C687" strokeWidth="1" />
              <line x1="584" y1="190" x2="620" y2="190" stroke="#E6C687" strokeWidth="1" />

              {/* Courtyard White Marble Arcade Colonnade */}
              <rect x="220" y="220" width="360" height="120" fill="#101D2D" stroke="#E6C687" strokeWidth="1.5" />
              {[250, 290, 330, 370, 410, 450, 490, 530].map((cx, idx) => (
                <g key={idx}>
                  <rect x={cx} y="240" width="8" height="100" fill="#E6C687" opacity="0.8" />
                  <path d={`M ${cx - 6} 240 C ${cx - 6} 228 ${cx + 14} 228 ${cx + 14} 240`} stroke="#E6C687" strokeWidth="1" fill="none" />
                </g>
              ))}

              {/* Deep Caisson Foundation below Ground */}
              {showPiles && (
                <g id="mosquePiles">
                  <rect x="175" y="340" width="46" height="80" fill="#F3E7C9" fillOpacity="0.1" stroke="#F3E7C9" strokeWidth="1.5" strokeDasharray="3 2" />
                  <rect x="579" y="340" width="46" height="80" fill="#F3E7C9" fillOpacity="0.1" stroke="#F3E7C9" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="140" y="430" fill="#F3E7C9" fontSize="10">Deep Rotary Bored Caisson (-38m)</text>
                </g>
              )}

              {/* Radiant Sub-cooling piping beneath Courtyard */}
              {showDrainage && (
                <g id="coolingPipes">
                  <path d="M 230 350 L 570 350" stroke="#3CCB88" strokeWidth="3" strokeDasharray="6 3" />
                  <text x="320" y="370" fill="#3CCB88" fontSize="10">Closed-Loop Radiant Chilled Water Loop (18°C)</text>
                </g>
              )}

              {/* Dimensions */}
              {showDimensions && (
                <g id="mosqueDims">
                  <line x1="180" y1="15" x2="620" y2="15" stroke="#4FA3D1" strokeWidth="1" />
                  <text x="400" y="10" fill="#4FA3D1" fontSize="11" textAnchor="middle">COURTYARD SPAN: 140.00 METERS</text>
                  <text x="635" y="50" fill="#4FA3D1" fontSize="10">+91.50m Minaret Finial</text>
                </g>
              )}
            </g>
          ) : (
            <g id="museumOrAntiquitySection">
              {/* Classical Peristyle & Cross-Section with Structural Glass Vault */}
              <rect x="160" y="140" width="480" height="200" fill="#132337" stroke="#E6C687" strokeWidth="2" />
              {/* Glass Vault Lantern */}
              <path d="M 240 140 Q 400 60 560 140" stroke="#4FA3D1" strokeWidth="3" fill="#4FA3D1" fillOpacity="0.15" />
              <line x1="320" y1="140" x2="320" y2="85" stroke="#4FA3D1" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="400" y1="140" x2="400" y2="62" stroke="#4FA3D1" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="480" y1="140" x2="480" y2="85" stroke="#4FA3D1" strokeWidth="1.5" strokeDasharray="2 2" />

              {/* Classical Corinthian Fluted Columns */}
              {[200, 280, 360, 440, 520, 600].map((colX, idx) => (
                <g key={idx}>
                  <rect x={colX} y="160" width="16" height="180" fill="#E6C687" opacity="0.85" />
                  <rect x={colX - 4} y="152" width="24" height="8" fill="#E6C687" />
                  <rect x={colX - 4} y="335" width="24" height="8" fill="#E6C687" />
                </g>
              ))}

              {/* Seismic Isolator Base Dampers */}
              {showSeismic && (
                <g id="museumBaseIsolators">
                  {[200, 280, 360, 440, 520, 600].map((bX, idx) => (
                    <g key={idx}>
                      <rect x={bX - 2} y="345" width="20" height="14" fill="#E06D53" stroke="#FFF" strokeWidth="0.8" />
                      <line x1={bX - 2} y1="352" x2={bX + 18} y2="352" stroke="#FFF" strokeWidth="0.5" />
                    </g>
                  ))}
                  <text x="320" y="380" fill="#F6AA99" fontSize="10">Zero-Vibration Friction Pendulum Isolators</text>
                </g>
              )}

              {/* Non-destructive grout injection ports */}
              {showPiles && (
                <g id="groutPorts">
                  <line x1="160" y1="240" x2="100" y2="240" stroke="#F3E7C9" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="160" cy="240" r="4" fill="#F3E7C9" />
                  <text x="20" y="244" fill="#F3E7C9" fontSize="10">Reversible Pozzolan Port</text>
                </g>
              )}

              {/* Dimensions */}
              {showDimensions && (
                <g id="museumDims">
                  <line x1="160" y1="40" x2="640" y2="40" stroke="#4FA3D1" strokeWidth="1" />
                  <text x="400" y="32" fill="#4FA3D1" fontSize="11" textAnchor="middle">IMPERIAL ATRIUM CLEAR SPAN: 36.40 METERS</text>
                </g>
              )}
            </g>
          )}

          {/* Interactive Inspection Hotspots */}
          <g id="inspectionPins">
            <g 
              className="cursor-pointer" 
              onClick={() => setActiveCallout("Geotechnical Piling: Sunk 28.5 meters into maritime limestone bedrock to resist 160 km/h mistral wind shear.")}
            >
              <circle cx="280" cy="280" r="12" fill="#E6C687" fillOpacity="0.2" className="animate-ping" />
              <circle cx="280" cy="280" r="6" fill="#E6C687" />
              <text x="292" y="275" fill="#E6C687" fontSize="10">PIN A</text>
            </g>

            <g 
              className="cursor-pointer" 
              onClick={() => setActiveCallout("Retaining Bastion: Hand-carved 8-ton Istrian limestone monolithic blocks placed by Liebherr 280 EC-H crane.")}
            >
              <circle cx="490" cy="120" r="12" fill="#4FA3D1" fillOpacity="0.2" className="animate-ping" />
              <circle cx="490" cy="120" r="6" fill="#4FA3D1" />
              <text x="502" y="115" fill="#4FA3D1" fontSize="10">PIN B</text>
            </g>

            <g 
              className="cursor-pointer" 
              onClick={() => setActiveCallout("Seismic Dissipation: Lead-rubber bearings isolate the upper living suites from micro-seismic harmonic vibrations.")}
            >
              <circle cx="360" cy="215" r="12" fill="#E06D53" fillOpacity="0.2" className="animate-ping" />
              <circle cx="360" cy="215" r="6" fill="#E06D53" />
              <text x="372" y="210" fill="#E06D53" fontSize="10">PIN C</text>
            </g>
          </g>

        </svg>

        {/* Selected PIN Callout Box */}
        {activeCallout && (
          <div className="absolute bottom-4 left-4 right-4 bg-[#132235]/95 border border-[#E6C687] p-3 text-white flex items-center justify-between gap-4 z-30 shadow-xl">
            <div className="flex items-center gap-2.5">
              <span className="text-[#E6C687] text-base">✦</span>
              <p className="text-xs text-[#E1EBF5] font-sans leading-relaxed">
                {activeCallout}
              </p>
            </div>
            <button 
              type="button" 
              onClick={() => setActiveCallout(null)}
              className="text-[#8EA2B8] hover:text-white text-xs px-2 py-1 border border-[#23354D]"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>

      {/* CAD Footer Metadata Bar */}
      <div className="bg-[#132235] border-t border-[#23354D] px-6 py-3 flex flex-wrap items-center justify-between text-[11px] text-[#8EA2B8]">
        <div className="flex items-center gap-4">
          <span>Project Loc: <strong className="text-white">{projectLocation}</strong></span>
          <span>·</span>
          <span>Consortium Seal: <strong className="text-[#E6C687]">AM-VERIFIED-2026</strong></span>
        </div>
        <div className="text-[10px] text-[#647C96]">
          Click interactive PINS (A, B, C) on the blueprint to reveal engineering specifications.
        </div>
      </div>
    </div>
  );
}

// ==========================================
// DATA MODEL INTERFACES
// ==========================================

interface ProjectPlanDoc {
  sheetNo: string;
  title: string;
  category: string;
  scale: string;
  fileSize: string;
  date: string;
}

interface Project {
  id: number;
  romanId: string;
  title: string;
  category: 'clifftop' | 'mosque' | 'cranes' | 'museum' | 'antiquity';
  categoryLabel: string;
  location: string;
  image: string; // main high-resolution photographic plate
  blueprintType: 'clifftop' | 'mosque' | 'crane-site' | 'atrium' | 'archaeological';
  blueprintTitle: string;
  blueprintScale: string;
  blueprintRef: string;
  description: string;
  extendedDescription: string;
  stage: 'Ongoing Development' | 'Completed Commission' | 'UNESCO Conservation';
  machineryOnSite?: string[];
  materials: string[];
  protocols: string[];
  planDocs: ProjectPlanDoc[];
  stats: {
    budget: string;
    duration: string;
    sustainability: string;
    client: string;
    completion: string;
    scopeSqFt: string;
  };
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'gallery' | 'estimator' | 'heritage' | 'client-portal'>('portfolio');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalItem, setModalItem] = useState<Project | null>(null);
  const [modalActiveSubTab, setModalActiveSubTab] = useState<'overview' | 'blueprint' | 'plans'>('overview');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Estimator State
  const [estimatorDomain, setEstimatorDomain] = useState<'estate' | 'museum' | 'archaeological' | 'hospitality'>('estate');
  const [scopeSize, setScopeSize] = useState<number>(8500);
  const [tier, setTier] = useState<string>('luxury');
  const [includeConsortium, setIncludeConsortium] = useState<boolean>(true);
  const [includeSeismicSensors, setIncludeSeismicSensors] = useState<boolean>(false);
  const [showProposalModal, setShowProposalModal] = useState<boolean>(false);

  // Client Portal State
  const [clientAuth, setClientAuth] = useState<{
    isAuthenticated: boolean;
    clientName: string;
    projectCode: string;
    role: string;
  }>({
    isAuthenticated: false,
    clientName: '',
    projectCode: '',
    role: '',
  });
  const [accessKeyInput, setAccessKeyInput] = useState('');
  const [pinInput, setPinInput] = useState('');
  const [portalMilestonePlate, setPortalMilestonePlate] = useState<'rigging' | 'shoring' | 'promenade'>('rigging');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // 16 COMPREHENSIVE ARCHITECTURAL COMMISSIONS
  // Fully equipped with Before & After imagery, short video scene reels, CAD blueprint data, and engineering documents.
  const projects: Project[] = [
    {
      id: 1,
      romanId: "I",
      title: "Villa Medicea Cliffside Terraces",
      category: "clifftop",
      categoryLabel: "Clifftop Estate",
      location: "Cap d'Ail · Monaco & French Riviera",
      image: "/src/assets/images/villa_cliffside_terrace_1794056500832.jpg",
      blueprintType: "clifftop",
      blueprintTitle: "Terrace Retaining Bastion & Micropile Section",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-EST-084-SEC-B",
      description: "Four-month architectural commission featuring dry-stack Istrian limestone retaining terraces, cascading infinity reflection basins, and Mediterranean arboriculture on coastal cliffs.",
      extendedDescription: "Perched 180 meters above the Mediterranean coastline, the Villa Medicea commission required delicate micro-anchoring to prevent seismic displacement on steep dolomite slopes. We implemented custom subterranean hydrostatic drainage relief channels and sourced authentic Istrian limestone hand-dressed by master stonemasons.",
      stage: "Completed Commission",
      machineryOnSite: ["Liebherr 85EC Spider Crane", "Brokk 170 Demolition Robot", "Geotechnical Hydro-coring Rig"],
      materials: ["Hand-Dressed Istrian Limestone", "Basalt Sub-base Matrix", "Hydraulic Pozzolanic Lime Mortar", "Corrosion-Proof Titanium Anchors"],
      protocols: ["Seismic Slope Stabilization", "Saline Atmospheric Barrier", "Hydrostatic Pressure Equalization"],
      planDocs: [
        { sheetNo: "A-101", title: "Master Ground Terracing Plan", category: "Architectural", scale: "1:100", fileSize: "18.4 MB", date: "Aug 2025" },
        { sheetNo: "S-204", title: "Geotechnical Tieback Anchor Details", category: "Structural", scale: "1:25", fileSize: "24.1 MB", date: "Sep 2025" },
        { sheetNo: "M-08", title: "Istrian Limestone Quarry Provenance Dossier", category: "Geological", scale: "N/A", fileSize: "8.6 MB", date: "Oct 2025" }
      ],
      stats: { budget: "$3,850,000", duration: "16 Weeks", sustainability: "LEED Platinum Certified", client: "Private Family Office", completion: "Autumn 2025", scopeSqFt: "14,500 sq.ft." }
    },
    {
      id: 2,
      romanId: "II",
      title: "Sultan Qaboos Royal Grand Mosque Colonnade",
      category: "mosque",
      categoryLabel: "Grand Mosque",
      location: "Muscat Governorate · Sultanate of Oman",
      image: "/src/assets/images/mosque_courtyard_marble_1794058073956.jpg",
      blueprintType: "mosque",
      blueprintTitle: "Congregational Courtyard & Minaret Caisson Engineering",
      blueprintScale: "1:100 Metric",
      blueprintRef: "DWG-MSQ-OMN-001",
      description: "Hand-dressed Thassos crystalline white marble colonnades, monumental minarets, multi-layered reflective courtyard pools, and intricate lapis and gold Islamic geometric inlays.",
      extendedDescription: "Spanning a monumental 45,000 square meter congregational courtyard, this development required precision water-jet marble inlays, subterranean thermal radiant sub-cooling for barefoot pilgrims, and non-destructive seismological reinforcement of the 90-meter central minaret.",
      stage: "Ongoing Development",
      machineryOnSite: ["Potain MDT 389 Tower Cranes (x4)", "Laser Water-Jet Inlay Cutters", "Cat 336 Excavator Fleet"],
      materials: ["Greek Thassos Pure White Marble", "Omani Desert Rose Travertine", "Afghan Lapis Lazuli Inlays", "24-Karat Gold Mosaic Leaf"],
      protocols: ["Sub-surface Thermal Sub-cooling", "Sacred Geometry Optical Alignment", "Zero-Porosity Sealant System"],
      planDocs: [
        { sheetNo: "M-101", title: "Hypostyle Column Grid & Radiant Cooling", category: "Mechanical/Arch", scale: "1:100", fileSize: "32.0 MB", date: "Jan 2026" },
        { sheetNo: "S-502", title: "90m Minaret Seismological Core Detail", category: "Structural", scale: "1:50", fileSize: "28.4 MB", date: "Feb 2026" }
      ],
      stats: { budget: "$28,500,000", duration: "28 Months", sustainability: "Net-Zero Thermal Mass", client: "Ministry of Endowments & Religious Affairs", completion: "Winter 2026", scopeSqFt: "485,000 sq.ft." }
    },
    {
      id: 3,
      romanId: "III",
      title: "Cap Ferrat Promontory Mega-Estate Development",
      category: "cranes",
      categoryLabel: "Ongoing Cranes & Machinery",
      location: "Saint-Jean-Cap-Ferrat · French Riviera",
      image: "/src/assets/images/cranes_clifftop_construction_1794058074178.jpg",
      blueprintType: "crane-site",
      blueprintTitle: "Promontory Crane Slew Radii & Soil Anchoring Plan",
      blueprintScale: "1:200 Metric",
      blueprintRef: "DWG-CIV-CAP-04",
      description: "Active mega-scale engineering development with 5 tower cranes and heavy hydraulic machinery excavating coastal dolomite cliffs for a sovereign 12-tier villa compound.",
      extendedDescription: "This monumental active site features five heavy Liebherr luffing jib tower cranes lifting 8-ton monolithic ashlar blocks onto steep coastal retaining bastions. Subterranean deep geotechnical piling stabilizes the entire cliff face against marine erosion while multi-tiered cantilevered terraces take shape.",
      stage: "Ongoing Development",
      machineryOnSite: ["Liebherr 280 EC-H 12 Litronic Cranes (x5)", "Bauer BG 36 Rotary Drilling Rig", "Volvo EC480E Heavy Excavators (x6)", "Putzmeister Concrete Booms"],
      materials: ["Chassagne French Limestone", "Reinforced Post-Tensioned Carbon Concrete", "Marine 316L Stainless Reinforcement", "Dolomitic Riprap Armor"],
      protocols: ["Continuous Acoustic Marine Sensor Grid", "Dynamic Seismograph Live Telemetry", "High-Angle Slope Silt Retention"],
      planDocs: [
        { sheetNo: "C-001", title: "Crane Slew Radius & High-Wind Load Chart", category: "Civil/Safety", scale: "1:200", fileSize: "19.5 MB", date: "Oct 2026" },
        { sheetNo: "GEO-12", title: "Marine Foundation Acoustic Monitoring", category: "Geotechnical", scale: "N/A", fileSize: "12.8 MB", date: "Nov 2026" }
      ],
      stats: { budget: "$44,000,000", duration: "36 Months", sustainability: "Zero-Runoff Marine Seal", client: "Confidential Sovereign Trust", completion: "Spring 2027", scopeSqFt: "92,000 sq.ft." }
    },
    {
      id: 4,
      romanId: "IV",
      title: "Grand Belvedere Palace Monumental Water Amphitheater",
      category: "museum",
      categoryLabel: "Classical Palace & Museum",
      location: "Vienna Royal Precinct · Austria",
      image: "/src/assets/images/grand_palace_hardscaping_1794058074270.jpg",
      blueprintType: "atrium",
      blueprintTitle: "Baroque Cascade Hydraulic Piping & Masonry Core",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-BELV-HYD-02",
      description: "Tiered travertine water stairways, monumental cascading fountains, ornate stone balustrades, and restored imperial parterre gardens for a baroque royal residence.",
      extendedDescription: "Restoration and expansion of the monumental 18th-century water cascade at the Belvedere grounds. Our consortium replaced degraded sandstone cores with identical Austrian St. Margarethen calcarenite, installed hidden Variable Frequency Drive hydraulic recirculation, and restored 24 classical river deity statues.",
      stage: "Completed Commission",
      machineryOnSite: ["Kranlyft Maeda Mini Spider Crane", "Ultrasonic Scalpel Cleaners", "Low-Pressure Micro-Air Abrasion"],
      materials: ["Austrian St. Margarethen Calcarenite", "Adnet Limestone Flagstones", "Cast Bronze Fountain Nozzles", "Lead-Capped Coping Stones"],
      protocols: ["Vienna Monument Preservation Act", "Closed-Loop Hydraulic Conservation", "Biological Biocide Regimen"],
      planDocs: [
        { sheetNo: "H-201", title: "Subterranean VFD Hydraulic Recirculation System", category: "Hydraulic", scale: "1:50", fileSize: "14.2 MB", date: "May 2025" }
      ],
      stats: { budget: "$14,200,000", duration: "18 Months", sustainability: "100% Water Recirculation", client: "Austrian Federal Monuments Authority (BDA)", completion: "Summer 2025", scopeSqFt: "64,000 sq.ft." }
    },
    {
      id: 5,
      romanId: "V",
      title: "Maritime Citadel Ramparts Deep Geotechnical Stabilization",
      category: "cranes",
      categoryLabel: "Ongoing Cranes & Machinery",
      location: "Adriatic Sea Ramparts · Republic of Croatia",
      image: "/src/assets/images/geotechnical_machinery_site_1794058074902.jpg",
      blueprintType: "crane-site",
      blueprintTitle: "Marine Citadel Submarine Tieback Cross-Section",
      blueprintScale: "1:75 Metric",
      blueprintRef: "DWG-CIT-ADR-09",
      description: "Heavy LB 28 rotary drilling rig and hydraulic excavators anchoring centuries-old coastal fortress bastions with micro-piles and tension tiebacks directly into bedrock.",
      extendedDescription: "To secure a 15th-century fortified citadel rampart threatened by rising sea swells, our structural division mobilized a specialized tracked Liebherr LB 28 drill rig on an engineered work platform. Over 140 self-drilling hollow core anchors were installed without generating percussive shockwaves.",
      stage: "Ongoing Development",
      machineryOnSite: ["Liebherr LB 28 Geotechnical Rotary Rig", "Volvo ECR235E Short Radius Excavator", "Atlas Copco Drilling Compressors", "Titan Grouters"],
      materials: ["Brač Island Fine Limestone", "Titan Ischebeck Micropiles", "Sulfate-Resistant Marine Grout", "Basalt Fiber Geogrid"],
      protocols: ["Non-Percussive Rotary Core Boring", "Hydrodynamic Surge Dissipation", "UNESCO Venice Charter Oversight"],
      planDocs: [
        { sheetNo: "GEO-01", title: "Submarine Anchor Grid & Wave Surge Calculations", category: "Marine Engineering", scale: "1:75", fileSize: "22.3 MB", date: "Sep 2026" }
      ],
      stats: { budget: "$18,900,000", duration: "22 Months", sustainability: "Marine Ecosystem Safe", client: "Ministry of Culture & Media", completion: "Autumn 2026", scopeSqFt: "38,000 sq.ft." }
    },
    {
      id: 6,
      romanId: "VI",
      title: "National Antiquities Museum Atrium Modernization",
      category: "museum",
      categoryLabel: "Museum Modernization",
      location: "Ringstraße · Vienna, Austria",
      image: "/src/assets/images/museum_atrium_marble_1794056502385.jpg",
      blueprintType: "atrium",
      blueprintTitle: "Imperial Atrium Structural Glass Lantern & HVAC Trench",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-MUS-VIE-102",
      description: "Transformation of a 19th-century Neo-Renaissance atrium with climate-regulated structural glass, fiber-optic antiquities illumination, and Adnet marble galleries.",
      extendedDescription: "Modernizing a historic museum atrium without disturbing irreplaceable Hellenistic and Roman sculptures required zero-vibration micro-trenching, non-percussive geotechnical diamond core boring, and acoustic dampening panels.",
      stage: "Completed Commission",
      machineryOnSite: ["Electric Zero-Emission Mini Excavator", "Diamond Wire Core Saws", "Laser Metrology Trackers"],
      materials: ["Austrian Adnet Honey Marble", "Ultra-Clear Low-Iron Structural Glass", "Patinated Architectural Bronze", "Seismic Base Isolators"],
      protocols: ["Zero-Vibration Threshold (<0.15 mm/s)", "Microclimatic Air Curtains", "Particulate & Relative Humidity Governance"],
      planDocs: [
        { sheetNo: "A-301", title: "Glass Lantern Structural Tension Truss", category: "Architectural", scale: "1:25", fileSize: "17.6 MB", date: "Jan 2026" }
      ],
      stats: { budget: "$12,400,000", duration: "14 Months", sustainability: "Zero-Vibration Engineering", client: "Federal Ministry of Culture", completion: "Spring 2026", scopeSqFt: "26,000 sq.ft." }
    },
    {
      id: 7,
      romanId: "VII",
      title: "Aegina Acropolis Ashlar Wall Stabilization",
      category: "antiquity",
      categoryLabel: "Archaeological Preservation",
      location: "Saronic Gulf · Aegina, Greece",
      image: "/src/assets/images/acropolis_stone_wall_1794056512464.jpg",
      blueprintType: "archaeological",
      blueprintTitle: "Ashlar Masonry Reversible Tendon Cross-Section",
      blueprintScale: "1:20 Metric",
      blueprintRef: "DWG-ANC-AEG-07",
      description: "Non-invasive structural grouting, seismic isolation joints, and traditional mortar replication to secure 4th-century BCE ashlar fortifications against coastal erosion.",
      extendedDescription: "Working under strict UNESCO supervision, our conservators synthesized a pozzolanic grout matching the chemical fingerprint of classical Greek mortars. Reversible stainless-steel tension tendons reinforce leaning peristyle colonnades without piercing historical stones.",
      stage: "UNESCO Conservation",
      machineryOnSite: ["Custom Lightweight Aluminum Scaffolding", "Micro-Grout Vacuum Injectors", "Thermal Drone Scanners"],
      materials: ["Santorini Volcanic Pozzolan", "Pure Air Lime CL-90", "Marine-Grade 316L Stainless Tendons", "Hand-Quarried Parian Marble Inlays"],
      protocols: ["ICOMOS Venice Charter 1964", "Reversible Engineering Standard", "Sub-Millimeter Photogrammetric Alignment"],
      planDocs: [
        { sheetNo: "U-102", title: "ICOMOS Reversible Intervention Dossier", category: "Conservation", scale: "N/A", fileSize: "16.4 MB", date: "Nov 2025" }
      ],
      stats: { budget: "$5,100,000", duration: "24 Months", sustainability: "UNESCO Heritage Compliant", client: "Ephorate of Antiquities", completion: "Winter 2025", scopeSqFt: "18,200 sq.ft." }
    },
    {
      id: 8,
      romanId: "VIII",
      title: "Kyoto Daitoku-ji Imperial Sanctuary Hardscaping",
      category: "antiquity",
      categoryLabel: "Heritage Sanctuary",
      location: "Kita Ward · Kyoto, Japan",
      image: "/src/assets/images/kyoto_zen_garden_1794056511443.jpg",
      blueprintType: "archaeological",
      blueprintTitle: "Zen Sanctuary Hydraulic Drainage & Boulder Anchors",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-KYO-DTK-01",
      description: "Restoration of a Muromachi-period sanctuary garden featuring raked Shirakawa granitic gravel, hand-positioned Kurama volcanic boulders, and cedar verandas.",
      extendedDescription: "Preserving historical Zen temple courtyards requires balancing centuries-old stonemasonry techniques with invisible subterranean drainage to manage torrential typhoon runoff without shifting raked granitic sands.",
      stage: "Completed Commission",
      machineryOnSite: ["Zero-Impact Rubber-Track Mini Transporters", "Hand Pneumatic Tampers", "Seismic Micro-Sensors"],
      materials: ["Kyoto Shirakawa Granitic Gravel", "Kurama Natural Volcanic Stone", "Hinoki Cypress Timbers", "Charcoal Filtration Base"],
      protocols: ["Agency for Cultural Affairs (Bunkacho) Oversight", "Traditional Sukiya Masonry Guilds", "Sub-surface Aquifer Replenishment"],
      planDocs: [
        { sheetNo: "J-01", title: "Typhoon Hydraulic Runoff Sub-Base Scheme", category: "Civil", scale: "1:50", fileSize: "11.2 MB", date: "Apr 2025" }
      ],
      stats: { budget: "$4,200,000", duration: "12 Months", sustainability: "100% Permeable Substrate", client: "Imperial Household Cultural Guild", completion: "Spring 2025", scopeSqFt: "16,000 sq.ft." }
    },
    {
      id: 9,
      romanId: "IX",
      title: "Sheikh Zayed Grand Pavilion Reflective Hardscaping",
      category: "mosque",
      categoryLabel: "Grand Mosque",
      location: "Abu Dhabi Emirate · United Arab Emirates",
      image: "/src/assets/images/sheikh_zayed_courtyard_1794312369396.jpg",
      blueprintType: "mosque",
      blueprintTitle: "Reflective Basin Radiant Sub-Cooling Matrix",
      blueprintScale: "1:100 Metric",
      blueprintRef: "DWG-MSQ-AUH-09",
      description: "Expansion of monumental water basins, Macedonian Sivec white marble arcades, and inlaid semiprecious lapis floral courtyards.",
      extendedDescription: "Commissioned to expand external perimeter promenades for sovereign state events, our team engineered massive thermal expansion joints accommodating 50°C summer heat variations without marble cracking.",
      stage: "Completed Commission",
      machineryOnSite: ["Liebherr 550 H-C Tower Crane", "Hydro-demolition Robotic Arms", "Thermal Camera Drones"],
      materials: ["Macedonian Sivec White Marble", "Italian Lasa Bianco Floor Pavers", "Mother of Pearl Floral Inlays", "Titanium Expansion Joint Strips"],
      protocols: ["Extreme Thermal Cyclic Testing (-5°C to +55°C)", "Specular Reflectivity Water Calibration", "Acoustic Prayer Amplification"],
      planDocs: [
        { sheetNo: "M-401", title: "Thermal Cyclic Expansion Joint Detail", category: "Structural", scale: "1:10", fileSize: "15.8 MB", date: "May 2025" }
      ],
      stats: { budget: "$22,000,000", duration: "20 Months", sustainability: "Solar-Powered Water Filtration", client: "Presidency of Presidential Affairs", completion: "Autumn 2025", scopeSqFt: "115,000 sq.ft." }
    },
    {
      id: 10,
      romanId: "X",
      title: "Promontory Belvedere Cliffside Estate",
      category: "clifftop",
      categoryLabel: "Clifftop Estate",
      location: "Amalfi Coast · Campania, Italy",
      image: "/src/assets/images/amalfi_cliff_terrace_1794312370486.jpg",
      blueprintType: "clifftop",
      blueprintTitle: "Amalfi Cliff Cantilever Post-Tension Slab",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-EST-AMF-03",
      description: "Three-tier cantilevered terraces anchored into volcanic tuff sea cliffs with integrated infinity plunge pools and Amalfi lemon pergolas.",
      extendedDescription: "Overhanging the Tyrrhenian Sea by 14 meters, this private estate required post-tensioned carbon fiber rebar rods embedded 22 meters into the volcanic cliff face to support a cantilevered stone pavilion.",
      stage: "Completed Commission",
      machineryOnSite: ["Airborne Heavy-Lift Helicopter Service", "Spider Mini Crawler Crane", "High-Pressure Hydraulic Diamond Saws"],
      materials: ["Tivoli Vein-Cut Roman Travertine", "Campanian Tuff Stone Core", "Post-Tensioned Carbon Fiber Tendons", "Hand-Forged Bronze Railings"],
      protocols: ["UNESCO Amalfi Coast Landscape Preservation", "Post-Tension Seismic Tension Audit", "Saline Corrosion Shield"],
      planDocs: [
        { sheetNo: "S-101", title: "Cantilevered Slab Stress & Bending Diagram", category: "Structural", scale: "1:25", fileSize: "21.0 MB", date: "Mar 2025" }
      ],
      stats: { budget: "$6,800,000", duration: "18 Weeks", sustainability: "Zero-Invasive Slope Anchoring", client: "Private European Estate Trust", completion: "Spring 2025", scopeSqFt: "18,500 sq.ft." }
    },
    {
      id: 11,
      romanId: "XI",
      title: "Alpine St. Moritz Mountain Fortress Crane Works",
      category: "cranes",
      categoryLabel: "Ongoing Cranes & Machinery",
      location: "Engadin Valley · Grisons, Switzerland",
      image: "/src/assets/images/alpine_stone_fortress_1794312371092.jpg",
      blueprintType: "crane-site",
      blueprintTitle: "Alpine Permafrost Anchor & Heated Sub-Base",
      blueprintScale: "1:100 Metric",
      blueprintRef: "DWG-ALP-STM-02",
      description: "Heavy crawler crane installation positioning 12-ton Valser quartzite blocks on a sheer alpine ridge with geothermal sub-surface slab heating.",
      extendedDescription: "Constructed at an altitude of 2,150 meters, this alpine fortress development deployed a specialized Liebherr LR 1300 crawler crane fitted with arctic hydraulic fluid packages to operate through sub-zero blizzards.",
      stage: "Ongoing Development",
      machineryOnSite: ["Liebherr LR 1300 Crawler Crane", "Menzi Muck Walking Excavator", "Geothermal Core Borers (x3)"],
      materials: ["Swiss Valser Quartzite", "Geothermal Glycol PEX Loop", "High-Strength Cryogenic Steel", "Local Engadin Granite Boulders"],
      protocols: ["Alpine Permafrost Protection Protocol", "Sub-Zero Hydraulic Fluid Certification", "Avalanche Deflection Shoring"],
      planDocs: [
        { sheetNo: "G-08", title: "Geothermal Snow-Melt Sub-Slab Hydronics", category: "Thermal", scale: "1:50", fileSize: "17.4 MB", date: "Sep 2026" }
      ],
      stats: { budget: "$31,000,000", duration: "24 Months", sustainability: "Geothermal Zero-Emission Heating", client: "Swiss Private Bank Consortium", completion: "Late 2026", scopeSqFt: "52,000 sq.ft." }
    },
    {
      id: 12,
      romanId: "XII",
      title: "Florence Uffizi Gallery Loggia Classical Repaving",
      category: "museum",
      categoryLabel: "Palaces & Museums",
      location: "Piazza degli Uffizi · Florence, Italy",
      image: "/src/assets/images/florence_uffizi_loggia_1794312385726.jpg",
      blueprintType: "atrium",
      blueprintTitle: "Vasari Corridor Foundation & Pietra Serena Paving Plan",
      blueprintScale: "1:100 Metric",
      blueprintRef: "DWG-UFF-FLR-01",
      description: "Restoration of the Renaissance Vasari loggia with hand-quarried Pietra Serena grey sandstone flagstones, subterranean rainwater diversion, and brass expansion inlays.",
      extendedDescription: "Commissioned by the Italian Ministry of Cultural Heritage, our master stonemasons reopened a historic quarry in Firenzuola to obtain authentic Pietra Serena sandstone matching Giorgio Vasari's original 1560 grain structure.",
      stage: "Completed Commission",
      machineryOnSite: ["Laser Surface Interferometers", "Ultrasonic Scalpel Systems", "Vacuum Extraction Paving Trolleys"],
      materials: ["Firenzuola Pietra Serena Sandstone", "Carrara Bianco Marble Thresholds", "Natural Hydraulic Lime NHL 3.5", "Phosphor Bronze Joint Seals"],
      protocols: ["Soprintendenza Archeologia Belle Arti oversight", "Vasarian Historical Pigment Match", "Pedestrian Micro-Vibration Isolation"],
      planDocs: [
        { sheetNo: "F-102", title: "Pietra Serena Petrographic Authenticity Seal", category: "Heritage", scale: "N/A", fileSize: "12.0 MB", date: "Jan 2025" }
      ],
      stats: { budget: "$8,900,000", duration: "10 Months", sustainability: "100% Traditional Mortar Formula", client: "Gallerie degli Uffizi & Ministry of Heritage", completion: "Summer 2025", scopeSqFt: "32,000 sq.ft." }
    },
    {
      id: 13,
      romanId: "XIII",
      title: "Petra Royal Tombs Siq Monumental Drainage & Terraces",
      category: "antiquity",
      categoryLabel: "Archaeological Preservation",
      location: "Ma'an Governorate · Hashemite Kingdom of Jordan",
      image: "/src/assets/images/petra_sandstone_monument_1794312385963.jpg",
      blueprintType: "archaeological",
      blueprintTitle: "Nabataean Hydraulic Dam & Sandstone Siphon Plan",
      blueprintScale: "1:150 Metric",
      blueprintRef: "DWG-ANC-PTR-05",
      description: "Restoration of ancient 1st-century CE Nabataean hydraulic diversion tunnels, flood retention terraces, and sandstone retaining bastions to safeguard carved monument facades.",
      extendedDescription: "To shield the fragile rose sandstone tombs from flash-flood scouring, our consortium combined traditional lime-ashlar weir reconstruction with hidden subterranean stainless overflow flumes.",
      stage: "UNESCO Conservation",
      machineryOnSite: ["Lightweight Pneumatic Core Drills", "LiDAR 3D Topographic Scanners", "Solar Dewatering Pumps"],
      materials: ["Local Disi Sandstone", "Crushed Ceramic Pozzolana", "High-Nickel Stainless Weirs", "Erosion-Control Coir Geotextile"],
      protocols: ["UNESCO World Heritage Centre Compliance", "Flash Flood Hazard Mitigation Index", "Non-Intrusive Core Stabilization"],
      planDocs: [
        { sheetNo: "U-404", title: "100-Year Flash Flood Hydraulic Flow Vector", category: "Hydrology", scale: "1:150", fileSize: "26.5 MB", date: "Jul 2025" }
      ],
      stats: { budget: "$9,500,000", duration: "30 Months", sustainability: "Passive Flood Control Hydraulics", client: "Petra Development & Tourism Authority (PDTRA)", completion: "Winter 2026", scopeSqFt: "85,000 sq.ft." }
    },
    {
      id: 14,
      romanId: "XIV",
      title: "Konya Seljuk Sacred Sanctuary Courtyard Restoration",
      category: "mosque",
      categoryLabel: "Grand Mosque",
      location: "Central Anatolia · Konya, Turkey",
      image: "/src/assets/images/seljuk_mosque_courtyard_1794312386347.jpg",
      blueprintType: "mosque",
      blueprintTitle: "Seljuk Dome Thrust & Radiant Floor Matrix",
      blueprintScale: "1:75 Metric",
      blueprintRef: "DWG-MSQ-KNY-02",
      description: "Restoration of a 13th-century Seljuk sacred courtyard with turquoise glazed faience mosaic inlays, Afyon sugar marble floor paving, and octagonal marble ablution fountains.",
      extendedDescription: "This sensitive sacred site required ground-penetrating radar to map subterranean Seljuk brick vaults before installing a low-temperature radiant heating grid beneath the restored marble flags.",
      stage: "Completed Commission",
      machineryOnSite: ["Ground Penetrating Radar Array", "Ceramic Ultrasonic Scalers", "Low-Profile Electric Mini Excavator"],
      materials: ["Afyon White & Honey Marble", "Traditional Cobalt & Turquoise Faience", "Hydraulic Horasan Mortar", "Under-floor Thermal Barrier"],
      protocols: ["General Directorate of Foundations (Vakıflar) Standard", "Sacred Geometry Astro-Alignment", "Non-Chemical Glaze Stabilization"],
      planDocs: [
        { sheetNo: "V-10", title: "Horasan Lime Mortar Chemical Analysis", category: "Conservation", scale: "N/A", fileSize: "14.0 MB", date: "Aug 2025" }
      ],
      stats: { budget: "$7,300,000", duration: "16 Months", sustainability: "Low-Temperature Radiant Mass", client: "Directorate General of Foundations", completion: "Spring 2026", scopeSqFt: "34,000 sq.ft." }
    },
    {
      id: 15,
      romanId: "XV",
      title: "Monemvasia Sea-Cliff Citadel Helical Piling & Shoring",
      category: "cranes",
      categoryLabel: "Ongoing Cranes & Machinery",
      location: "Laconia Coast · Peloponnese, Greece",
      image: "/src/assets/images/monemvasia_citadel_cliff_1794312400083.jpg",
      blueprintType: "crane-site",
      blueprintTitle: "Monemvasia Bedrock Helical Tieback Grid",
      blueprintScale: "1:100 Metric",
      blueprintRef: "DWG-CIV-MNV-07",
      description: "Ongoing coastal cliff stabilization with heavy drill rigs and modular shoring platforms securing medieval stone gate towers and sea-facing garrison ramparts.",
      extendedDescription: "Accessible only by a narrow causeway, this medieval Gibraltar of Greece required modular spider cranes and crawler drill rigs to be transported by sea barge. Our crew is currently drilling 35-meter helical tiebacks into the subterranean limestone cavern system.",
      stage: "Ongoing Development",
      machineryOnSite: ["Comacchio MC 15 Geotechnical Drill", "Bauer Grouting Container Unit", "Liebherr 550 H-C Tower Crane", "Barge Landing Craft"],
      materials: ["Laconia Red & Grey Limestone", "Epoxy-Coated High-Tensile Steel Strands", "Thixotropic Grout Compound", "Carbon Fiber Near-Surface Wrap"],
      protocols: ["Daily Seismometric Vibrational Audit", "Coastal Saline Salt-Fog Resistance", "Reversible External Shoring Trusses"],
      planDocs: [
        { sheetNo: "M-02", title: "Barge Landing & Rockfall Mitigation Log", category: "Geotechnical", scale: "1:100", fileSize: "20.1 MB", date: "Oct 2026" }
      ],
      stats: { budget: "$16,500,000", duration: "26 Months", sustainability: "Bedrock Structural Integrity", client: "Regional Government of Peloponnese", completion: "Winter 2026", scopeSqFt: "44,000 sq.ft." }
    },
    {
      id: 16,
      romanId: "XVI",
      title: "Villa Balbianello Tiered Balustrade Terraces",
      category: "clifftop",
      categoryLabel: "Clifftop Estate",
      location: "Lake Como · Lombardy, Italy",
      image: "/src/assets/images/lake_como_villa_terrace_1794312399785.jpg",
      blueprintType: "clifftop",
      blueprintTitle: "Lake Scour Sub-surface Grout & Terrace Section",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-EST-BAL-01",
      description: "Restoration of 18th-century tiered balustrade terraces, lakeside loggias, century-old candelabra plane trees, and hand-carved Moltrasio limestone boat dock cryptoporticus.",
      extendedDescription: "Dramatically extending into Lake Como on the Lavedo peninsula, this iconic villa's terrace walls required complete underwater stone re-grouting and micro-pinning to counter wave scour, coupled with custom heating cables embedded beneath terrace flagstones to prevent winter frost cracking.",
      stage: "Completed Commission",
      machineryOnSite: ["Underwater Diver Grouting Units", "Mini Barge Spider Crane", "Ultrasonic Rock Scanners"],
      materials: ["Moltrasio Local Limestone", "Carrara Marble Balustrade Spindles", "Sub-surface Heating Fiber Cables", "Hydraulic Roman Pozzolan"],
      protocols: ["FAI (Fondo Ambiente Italiano) Compliance", "Underwater Scour Protection", "Heritage Plane Tree Root Safeguard"],
      planDocs: [
        { sheetNo: "FAI-09", title: "Lake Como Submerged Foundation Inspection Log", category: "Marine Heritage", scale: "1:50", fileSize: "15.0 MB", date: "Apr 2025" }
      ],
      stats: { budget: "$5,400,000", duration: "14 Weeks", sustainability: "Zero Lake Turbidity Impact", client: "FAI National Trust of Italy", completion: "Spring 2025", scopeSqFt: "22,000 sq.ft." }
    }
  ];

  // Filtering & Search
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedDomain === 'all' || project.category === selectedDomain;
      const matchesSearch = searchQuery.trim() === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedDomain, searchQuery]);

  // Counts for Category Tabs
  const counts = useMemo(() => {
    return {
      all: projects.length,
      clifftop: projects.filter(p => p.category === 'clifftop').length,
      mosque: projects.filter(p => p.category === 'mosque').length,
      cranes: projects.filter(p => p.category === 'cranes').length,
      museum: projects.filter(p => p.category === 'museum').length,
      antiquity: projects.filter(p => p.category === 'antiquity').length,
    };
  }, [projects]);

  // Gallery Projects Filter
  const galleryProjects = useMemo(() => {
    if (galleryCategory === 'all') return projects;
    return projects.filter(p => p.category === galleryCategory);
  }, [projects, galleryCategory]);

  // Lightbox keyboard navigation (Esc to close, Left/Right arrows to cycle)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : projects.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < projects.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, projects.length]);

  // Estimator Calculations
  const getBaseRate = () => {
    switch(estimatorDomain) {
      case 'estate': return 350;
      case 'museum': return 850;
      case 'archaeological': return 1200;
      case 'hospitality': return 450;
      default: return 400;
    }
  };

  const getTierMultiplier = () => {
    switch(tier) {
      case 'standard': return 1.0;
      case 'luxury': return 1.35;
      case 'museum-grade': return 1.85;
      case 'heritage-certified': return 2.4;
      default: return 1.35;
    }
  };

  const baseSubtotal = Math.round(scopeSize * getBaseRate() * getTierMultiplier());
  const consortiumFee = includeConsortium ? 75000 : 0;
  const seismicSensorFee = includeSeismicSensors ? 45000 : 0;
  const calculatedEstimate = baseSubtotal + consortiumFee + seismicSensorFee;

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setClientAuth({
      isAuthenticated: true,
      clientName: accessKeyInput.trim() ? accessKeyInput.split('@')[0].toUpperCase() : 'VILLA MEDICEA FAMILY OFFICE',
      projectCode: 'AM-2026-EU-084',
      role: 'Principal Trustee / Project Director'
    });
    showToast('Secure vault unlocked. Encrypted construction milestone reels connected.');
  };

  const handleDemoLogin = () => {
    setAccessKeyInput('curator@antiquities-vienna.at');
    setPinInput('8842-ARCH-2026');
    setClientAuth({
      isAuthenticated: true,
      clientName: 'VIENNA ANTIQUITIES TRUSTEES',
      projectCode: 'AM-AT-9021',
      role: 'Consortium Director & Chief Conservator'
    });
    showToast('Demo Vault unlocked: Vienna Museum Atrium Modernization');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans-luxury selection:bg-[#9E7730]/20 selection:text-[#1C1917]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-white border border-[#D9C496] text-[#292524] px-5 py-3.5 shadow-xl shadow-[#1C1917]/5 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <BespokeMedallion className="w-5 h-5 text-[#9E7730] shrink-0" />
          <p className="text-xs leading-relaxed font-serif-luxury text-base text-[#1C1917]">{toastMessage}</p>
        </div>
      )}

      {/* Minimal Top Archival Bar */}
      <div className="bg-[#F4EFEA] border-b border-[#E8E2D5] px-6 py-1.5 text-[10px] font-cinzel tracking-[0.22em] text-[#78644A] text-center uppercase flex items-center justify-center gap-3">
        <span>Aureus & Monument · Sovereign Commissions & Structural Archive</span>
      </div>

      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          
          {/* Brand Wordmark */}
          <button 
            type="button"
            onClick={() => setActiveTab('portfolio')} 
            className="flex items-center gap-3.5 text-left shrink-0 group focus:outline-none"
          >
            <BespokeMonogram className="w-9 h-9 text-[#9E7730] group-hover:scale-105 transition-transform" />
            <span className="font-cinzel text-lg tracking-[0.2em] text-[#1C1917] font-semibold uppercase whitespace-nowrap">
              Aureus & Monument
            </span>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-cinzel tracking-[0.18em] uppercase">
            <button 
              type="button"
              onClick={() => setActiveTab('portfolio')}
              className={`py-2 transition-colors relative ${activeTab === 'portfolio' ? 'text-[#9E7730] font-semibold' : 'text-[#57534E] hover:text-[#1C1917]'}`}
            >
              Commissions ({projects.length})
              {activeTab === 'portfolio' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9E7730]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`py-2 transition-colors relative ${activeTab === 'gallery' ? 'text-[#9E7730] font-semibold' : 'text-[#57534E] hover:text-[#1C1917]'}`}
            >
              Media Gallery (16)
              {activeTab === 'gallery' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9E7730]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('estimator')}
              className={`py-2 transition-colors relative ${activeTab === 'estimator' ? 'text-[#9E7730] font-semibold' : 'text-[#57534E] hover:text-[#1C1917]'}`}
            >
              Commission Calculator
              {activeTab === 'estimator' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9E7730]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('heritage')}
              className={`py-2 transition-colors relative ${activeTab === 'heritage' ? 'text-[#9E7730] font-semibold' : 'text-[#57534E] hover:text-[#1C1917]'}`}
            >
              Charters & Provenance
              {activeTab === 'heritage' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9E7730]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('client-portal')}
              className={`py-2 transition-colors relative flex items-center gap-2 ${activeTab === 'client-portal' ? 'text-[#9E7730] font-semibold' : 'text-[#57534E] hover:text-[#1C1917]'}`}
            >
              <BespokeVault className="w-3.5 h-3.5 text-[#9E7730]" />
              <span>Client Vault</span>
              {activeTab === 'client-portal' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9E7730]" />}
            </button>
          </nav>

          {/* Direct CTA */}
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={() => setActiveTab('estimator')}
              className="px-5 py-2.5 bg-[#9E7730] hover:bg-[#886524] text-white text-xs font-cinzel tracking-[0.16em] uppercase transition-colors shadow-xs"
            >
              Initiate Inquiry
            </button>
          </div>
        </div>

        {/* Mobile Navigation Strip */}
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8E2D5] px-4 py-2 flex items-center gap-2 overflow-x-auto text-[11px] font-cinzel uppercase tracking-wider scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('portfolio')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'portfolio' ? 'bg-[#9E7730] text-white border-[#9E7730]' : 'bg-white text-[#57534E] border-[#E8E2D5]'}`}
          >
            Commissions ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('gallery')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'gallery' ? 'bg-[#9E7730] text-white border-[#9E7730]' : 'bg-white text-[#57534E] border-[#E8E2D5]'}`}
          >
            Gallery (16)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('estimator')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'estimator' ? 'bg-[#9E7730] text-white border-[#9E7730]' : 'bg-white text-[#57534E] border-[#E8E2D5]'}`}
          >
            Calculator
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('heritage')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'heritage' ? 'bg-[#9E7730] text-white border-[#9E7730]' : 'bg-white text-[#57534E] border-[#E8E2D5]'}`}
          >
            Charters
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('client-portal')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'client-portal' ? 'bg-[#9E7730] text-white border-[#9E7730]' : 'bg-white text-[#57534E] border-[#E8E2D5]'}`}
          >
            Vault
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        
        {/* ======================================================== */}
        {/* TAB 1: PORTFOLIO & MEDIA SHOWCASE */}
        {/* ======================================================== */}
        {activeTab === 'portfolio' && (
          <div className="space-y-16">
            
            {/* Minimalist Architectural Hero & Transformation Showcase */}
            <section className="bg-white border border-[#E8E2D5] p-6 lg:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Narrative: Sharp, Confident, Uncluttered */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="text-[10px] font-cinzel uppercase tracking-[0.25em] text-[#9E7730]">
                    Architectural Transformation
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-[#1C1917] leading-[1.15]">
                    Raw Earth to Classical Splendor
                  </h1>

                  <p className="text-xs text-[#78716C] font-light leading-relaxed max-w-md">
                    Explore 16 sovereign master commissions with high-resolution photographic plates, interactive engineering CAD elevations, and official consortium charters.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        const villaProject = projects.find(p => p.id === 1);
                        if (villaProject) {
                          setModalItem(villaProject);
                          setModalActiveSubTab('overview');
                        }
                      }}
                      className="px-4 py-2.5 bg-[#9E7730] hover:bg-[#886524] text-white text-xs font-cinzel tracking-[0.16em] uppercase flex items-center gap-2 shadow-sm transition-all"
                    >
                      <BespokeZoom className="w-3.5 h-3.5" />
                      <span>Inspect Monograph & Plans</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('gallery')}
                      className="px-4 py-2.5 bg-white hover:bg-[#FAF8F5] border border-[#E8E2D5] text-[#1C1917] text-xs font-cinzel tracking-[0.16em] uppercase flex items-center gap-2 transition-all"
                    >
                      <span>Media Gallery (16)</span>
                    </button>
                  </div>
                </div>

                {/* Right Featured Architectural Plate */}
                <div 
                  className="lg:col-span-7 relative aspect-[16/11] overflow-hidden bg-[#1C1917] border border-[#E8E2D5] shadow-md group cursor-pointer"
                  onClick={() => {
                    const villaProject = projects.find(p => p.id === 1);
                    if (villaProject) {
                      setModalItem(villaProject);
                      setModalActiveSubTab('overview');
                    }
                  }}
                >
                  <img 
                    src="/src/assets/images/villa_cliffside_terrace_1794056500832.jpg" 
                    alt="Featured Commission: Villa Medicea Cliffside Terraces"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/95 text-[#1C1917] text-[10px] font-cinzel font-semibold tracking-wider uppercase border border-[#E8E2D5] shadow-xs">
                      Featured Plate I · Cap d'Ail
                    </span>
                    <span className="px-2.5 py-1 bg-black/75 text-[#D9C496] text-[10px] font-cinzel tracking-wider uppercase border border-white/20">
                      Completed Commission
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/95 text-[#1C1917] text-xs font-cinzel uppercase tracking-[0.16em] flex items-center gap-2 shadow-lg">
                      <BespokeZoom className="w-3.5 h-3.5 text-[#9E7730]" />
                      Open Full Architectural Monograph
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-xs px-4 py-2 border border-white/10 text-white flex items-center justify-between text-xs">
                    <span className="font-serif-luxury text-sm">Villa Medicea Cliffside Bastions</span>
                    <span className="text-[11px] font-mono text-[#D9C496]">Monaco & French Riviera</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Quiet Architectural Stat Ribbon */}
            <div className="py-3 px-6 bg-[#FAF7F2] border border-[#E8E2D5] text-center text-xs font-cinzel tracking-[0.16em] text-[#705322] uppercase flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span>16 Master Commissions</span>
              <span className="text-[#D9C496]">·</span>
              <span>14 Active Tower Cranes</span>
              <span className="text-[#D9C496]">·</span>
              <span>Thassos & Istrian Sourcing</span>
              <span className="text-[#D9C496]">·</span>
              <span>UNESCO Heritage Compliant</span>
            </div>

            {/* Commissions Catalogue (16 Media-First Visual Plates) */}
            <section className="space-y-6">
              
              {/* Filter & Search Header */}
              <div className="space-y-4 border-b border-[#E8E2D5] pb-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#1C1917]">
                    Selected Commissions
                  </h2>

                  {/* Search input */}
                  <div className="relative w-full md:w-64">
                    <input 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search commissions..."
                      className="w-full bg-white border border-[#E8E2D5] px-3.5 py-1.5 text-xs font-sans text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#9E7730]"
                    />
                    {searchQuery && (
                      <button 
                        type="button" 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1.5 text-[#78716C] text-xs hover:text-[#1C1917]"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F4EFEA] border border-[#E8E2D5] text-xs font-cinzel">
                  {[
                    { id: 'all', label: `All (${counts.all})` },
                    { id: 'clifftop', label: `Clifftops (${counts.clifftop})` },
                    { id: 'mosque', label: `Mosques (${counts.mosque})` },
                    { id: 'cranes', label: `Cranes & Sites (${counts.cranes})` },
                    { id: 'museum', label: `Palaces (${counts.museum})` },
                    { id: 'antiquity', label: `Antiquities (${counts.antiquity})` },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedDomain(tab.id)}
                      className={`px-3 py-1.5 uppercase tracking-[0.12em] transition-all ${
                        selectedDomain === tab.id 
                          ? 'bg-white text-[#1C1917] font-semibold shadow-xs' 
                          : 'text-[#78716C] hover:text-[#1C1917]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 16 Projects Grid (Clean Visual Plates) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    onClick={() => {
                      setModalItem(project);
                      setModalActiveSubTab('overview');
                    }}
                    className="group bg-white border border-[#E8E2D5] hover:border-[#9E7730] transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-lg"
                  >
                    {/* Visual Media Plate */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F4EFEA]">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Minimal Plate Num */}
                      <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 border border-[#E8E2D5] text-[10px] font-cinzel text-[#1C1917] tracking-wider uppercase">
                        {project.romanId}
                      </div>

                      {/* Minimal Stage Dot */}
                      <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 border border-[#E8E2D5] text-[10px] font-cinzel text-[#705322] tracking-wider uppercase flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.stage === 'Ongoing Development' ? 'bg-amber-600' : 'bg-emerald-600'}`}></span>
                        <span>{project.stage === 'Ongoing Development' ? 'Ongoing' : 'Completed'}</span>
                      </div>

                      {/* Clean Photographic Inspection Overlay */}
                      <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <span className="px-3.5 py-1.5 bg-white/95 text-[#1C1917] text-xs font-cinzel uppercase tracking-[0.16em] flex items-center gap-1.5 shadow-lg">
                          <BespokeZoom className="w-3.5 h-3.5 text-[#9E7730]" />
                          Inspect Monograph & Plans →
                        </span>
                      </div>
                    </div>

                    {/* Clean Minimal Typography (No Text Clutter) */}
                    <div className="p-4 flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-serif-luxury text-[#1C1917] group-hover:text-[#9E7730] transition-colors leading-snug font-medium">
                          {project.title}
                        </h3>
                        <div className="text-[11px] text-[#78716C] font-cinzel tracking-wider uppercase mt-0.5">
                          <span>{project.location.split('·')[0].trim()}</span>
                          <span className="mx-1.5 text-[#D9C496]">·</span>
                          <span className="text-[#9E7730]">{project.categoryLabel}</span>
                        </div>
                      </div>
                      <span className="text-[#9E7730] text-sm font-cinzel group-hover:translate-x-1 transition-transform shrink-0">
                        →
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: MEDIA GALLERY (RESPONSIVE GRID & LIGHTBOX) */}
        {/* ======================================================== */}
        {activeTab === 'gallery' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            {/* Gallery Intro Banner */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#9E7730] uppercase">
                Visual Archive · 16 Master Photographic Plates
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917]">
                Sovereign Media Gallery
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C] font-light leading-relaxed">
                Inspect all completed master commissions, clifftop promontories, sacred courtyards, tower crane installations, and imperial atriums in high-resolution master plates. Click any image to launch the interactive full-screen Lightbox.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#E8E2D5] pb-6">
              {[
                { id: 'all', label: `All Plates (${projects.length})` },
                { id: 'clifftop', label: `Clifftop Estates (${counts.clifftop})` },
                { id: 'mosque', label: `Grand Mosques (${counts.mosque})` },
                { id: 'cranes', label: `Active Cranes & Sites (${counts.cranes})` },
                { id: 'museum', label: `Palaces & Museums (${counts.museum})` },
                { id: 'antiquity', label: `Antiquities (${counts.antiquity})` },
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setGalleryCategory(f.id)}
                  className={`px-4 py-2 text-xs font-cinzel uppercase tracking-wider transition-all border ${
                    galleryCategory === f.id
                      ? 'bg-[#9E7730] text-white border-[#9E7730] shadow-xs'
                      : 'bg-white text-[#57534E] border-[#E8E2D5] hover:border-[#9E7730]/60'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Responsive Grid of 16 High-Res Project Plates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryProjects.map((proj) => {
                const projectIndex = projects.findIndex(p => p.id === proj.id);
                return (
                  <div
                    key={proj.id}
                    className="group bg-white border border-[#E8E2D5] hover:border-[#9E7730] transition-all duration-300 shadow-xs flex flex-col overflow-hidden"
                  >
                    {/* Image Stage with Hover Zoom & Inspect Overlay */}
                    <div 
                      className="relative aspect-4/3 overflow-hidden bg-[#1C1917] cursor-pointer"
                      onClick={() => setLightboxIndex(projectIndex)}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[#1C1917] text-[10px] font-cinzel font-semibold tracking-wider uppercase border border-[#E8E2D5] shadow-xs">
                          Plate {proj.romanId}
                        </span>
                        <span className={`px-2 py-0.5 text-[9px] font-cinzel uppercase border backdrop-blur-xs ${
                          proj.stage === 'Completed Commission'
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                            : proj.stage === 'Ongoing Development'
                            ? 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                            : 'bg-blue-950/80 text-blue-300 border-blue-500/30'
                        }`}>
                          {proj.stage === 'Completed Commission' ? 'Completed' : proj.stage === 'Ongoing Development' ? 'Site Active' : 'Preservation'}
                        </span>
                      </div>

                      {/* Hover Overlay with Inspect CTA */}
                      <div className="absolute inset-0 bg-[#1C1917]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <span className="px-4 py-2 bg-white/95 text-[#1C1917] text-xs font-cinzel uppercase tracking-[0.16em] flex items-center gap-2 shadow-lg">
                          <BespokeZoom className="w-3.5 h-3.5 text-[#9E7730]" />
                          Inspect Plate ⤢
                        </span>
                      </div>
                    </div>

                    {/* Metadata Card Info */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-[10px] font-cinzel text-[#9E7730] uppercase tracking-wider">
                          {proj.location} · {proj.categoryLabel}
                        </div>
                        <h3 
                          onClick={() => setLightboxIndex(projectIndex)}
                          className="font-serif-luxury text-lg text-[#1C1917] hover:text-[#9E7730] cursor-pointer mt-1 line-clamp-1 transition-colors"
                        >
                          {proj.title}
                        </h3>
                      </div>

                      {/* Quick Action Footer */}
                      <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-between text-xs font-cinzel">
                        <button
                          type="button"
                          onClick={() => setLightboxIndex(projectIndex)}
                          className="text-[#9E7730] hover:text-[#7A5B1E] flex items-center gap-1 font-semibold"
                        >
                          <BespokeZoom className="w-3.5 h-3.5" />
                          <span>Lightbox</span>
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setModalItem(proj);
                              setModalActiveSubTab('overview');
                            }}
                            className="text-[#78716C] hover:text-[#1C1917] px-3 py-1 bg-[#FAF8F5] border border-[#E8E2D5]"
                          >
                            Dossier & Plans →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: COMMISSION CALCULATOR */}
        {/* ======================================================== */}
        {activeTab === 'estimator' && (
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#9E7730] uppercase">
                Directorate Commission Calculator
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917]">
                Architectural Scope & Investment Allocation
              </h2>
              <p className="text-sm text-[#57534E] font-light max-w-xl mx-auto">
                Model capital expenditure for clifftop promontory estates, grand mosque courtyards, heavy tower crane operations, and museum atriums.
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D5] p-8 lg:p-10 space-y-8 shadow-xs">
              
              {/* Domain Selector */}
              <div className="space-y-3">
                <label className="text-xs font-cinzel uppercase tracking-[0.16em] text-[#705322] font-semibold block">
                  Select Architectural Typology
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'estate', label: 'Clifftop Estate', sub: 'Retaining Bastions' },
                    { id: 'museum', label: 'Grand Mosque', sub: 'Thassos Marble' },
                    { id: 'archaeological', label: 'Heavy Civil & Cranes', sub: 'Piling & Drilling' },
                    { id: 'hospitality', label: 'Museum Atrium', sub: 'Structural Glass' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setEstimatorDomain(d.id as any)}
                      className={`p-3 text-left border transition-all ${
                        estimatorDomain === d.id 
                          ? 'bg-[#FAF7F2] border-[#9E7730] shadow-xs' 
                          : 'bg-white border-[#E8E2D5] hover:border-[#9E7730]/50'
                      }`}
                    >
                      <div className="font-cinzel text-xs font-semibold text-[#1C1917]">{d.label}</div>
                      <div className="text-[10px] text-[#78716C] mt-0.5">{d.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-cinzel">
                  <span className="uppercase tracking-[0.16em] text-[#705322] font-semibold">
                    Scope of Surface Masonry / Excavation
                  </span>
                  <span className="text-[#9E7730] font-mono font-semibold text-sm">
                    {scopeSize.toLocaleString()} sq. ft.
                  </span>
                </div>
                <input 
                  type="range"
                  min="2000"
                  max="45000"
                  step="500"
                  value={scopeSize}
                  onChange={(e) => setScopeSize(Number(e.target.value))}
                  className="w-full accent-[#9E7730] bg-[#E8E2D5] h-1.5 cursor-pointer"
                />
              </div>

              {/* Engineering Tier */}
              <div className="space-y-3">
                <label className="text-xs font-cinzel uppercase tracking-[0.16em] text-[#705322] font-semibold block">
                  Material Sourcing & Engineering Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                  {[
                    { id: 'standard', name: 'Imperial Ashlar', desc: 'Sourced regional limestone' },
                    { id: 'luxury', name: 'Master Provenance', desc: 'Hand-dressed Istrian & Thassos' },
                    { id: 'museum-grade', name: 'Seismic Micro-Piling', desc: 'Titan tiebacks & spider cranes' },
                    { id: 'heritage-certified', name: 'Sovereign Consortium', desc: 'Tower crane fleet + UNESCO seal' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTier(t.id)}
                      className={`p-3 text-left border transition-all ${
                        tier === t.id
                          ? 'bg-[#FAF7F2] border-[#9E7730] ring-1 ring-[#9E7730]'
                          : 'bg-white border-[#E8E2D5] hover:border-[#9E7730]/50'
                      }`}
                    >
                      <div className="font-cinzel font-semibold text-[#1C1917]">{t.name}</div>
                      <div className="text-[10px] text-[#78716C] mt-1 font-light">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Options */}
              <div className="p-4 bg-[#FAF7F2] border border-[#D9C496] space-y-3 text-xs">
                <span className="font-cinzel text-[11px] uppercase tracking-[0.16em] text-[#705322] font-semibold block">
                  Consortium Oversight & Sensor Matrices
                </span>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={includeConsortium}
                    onChange={(e) => setIncludeConsortium(e.target.checked)}
                    className="accent-[#9E7730] w-4 h-4"
                  />
                  <span className="text-[#57534E]">
                    Include Senior Directorate HIA (Heritage Impact Assessment) & Historical Permitting ($75,000)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={includeSeismicSensors}
                    onChange={(e) => setIncludeSeismicSensors(e.target.checked)}
                    className="accent-[#9E7730] w-4 h-4"
                  />
                  <span className="text-[#57534E]">
                    Embed Continuous Hydrostatic Pressure Relief & Seismographic Sensor Grid ($45,000)
                  </span>
                </label>
              </div>

              {/* Estimate Ledger Result */}
              <div className="pt-6 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-cinzel text-[#78716C] uppercase tracking-wider block">
                    Projected Commission Capital
                  </span>
                  <div className="font-serif-luxury text-3xl sm:text-4xl text-[#1C1917] mt-1">
                    ${calculatedEstimate.toLocaleString()} <span className="text-base text-[#78716C] font-sans">USD</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowProposalModal(true)}
                  className="px-8 py-3.5 bg-[#9E7730] hover:bg-[#886524] text-white text-xs font-cinzel tracking-[0.18em] uppercase transition-colors shadow-sm"
                >
                  Generate Formal Charter Dossier
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: CHARTERS & HERITAGE PROVENANCE */}
        {/* ======================================================== */}
        {activeTab === 'heritage' && (
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#9E7730] uppercase">
                Consortium Preservation Charters
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917]">
                Venice Charter Compliance & Mineral Provenance
              </h2>
              <p className="text-sm text-[#57534E] font-light max-w-xl mx-auto">
                Every stone quarried and every anchor driven complies with international non-invasive preservation conventions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  code: "ICOMOS 1964",
                  title: "Venice Charter Strict Compliance",
                  desc: "All structural mortars, tiebacks, and sub-surface shoring must be reversible and identifiable, preserving original stratigraphic integrity."
                },
                {
                  code: "UNI EN 1469",
                  title: "Natural Stone Provenance Dossiers",
                  desc: "Complete isotopic fingerprinting guaranteeing genuine origin from verified quarries in Greece, Istria, Austria, and Italy."
                },
                {
                  code: "DIN 4150-3",
                  title: "Structural Vibration Governance",
                  desc: "Continuous seismographic monitoring ensuring drilling and crane loads remain below 0.15 mm/s on sensitive historical monuments."
                }
              ].map((c, i) => (
                <div key={i} className="bg-white border border-[#E8E2D5] p-6 space-y-3 shadow-xs">
                  <div className="text-[11px] font-cinzel text-[#9E7730] tracking-[0.16em] uppercase font-semibold">
                    {c.code}
                  </div>
                  <h3 className="font-serif-luxury text-lg text-[#1C1917]">{c.title}</h3>
                  <p className="text-xs text-[#57534E] font-light leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: PRIVATE CLIENT VAULT */}
        {/* ======================================================== */}
        {activeTab === 'client-portal' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#9E7730] uppercase">
                Encrypted Client Vault
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917]">
                Milestone Scene Reels & Project Dossiers
              </h2>
              <p className="text-sm text-[#57534E] font-light max-w-xl mx-auto">
                Secure access for Sovereign Trust trustees, master curators, and estate directors to inspect construction scene milestones, before & after comparisons, and CAD plans.
              </p>
            </div>

            {!clientAuth.isAuthenticated ? (
              <div className="bg-white border border-[#E8E2D5] p-8 max-w-md mx-auto space-y-6 shadow-xs">
                <form onSubmit={handleLogin} className="space-y-4 text-xs">
                  <div>
                    <label className="font-cinzel text-[11px] uppercase tracking-[0.14em] text-[#705322] block mb-1">
                      Trustee Identity / Access Key
                    </label>
                    <input 
                      type="text" 
                      value={accessKeyInput}
                      onChange={(e) => setAccessKeyInput(e.target.value)}
                      placeholder="trustee@familyoffice.mc"
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D5] p-3 text-xs focus:outline-none focus:border-[#9E7730]"
                    />
                  </div>
                  <div>
                    <label className="font-cinzel text-[11px] uppercase tracking-[0.14em] text-[#705322] block mb-1">
                      Cryptographic Commission PIN
                    </label>
                    <input 
                      type="password" 
                      value={pinInput}
                      onChange={(e) => setPinInput(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D5] p-3 text-xs focus:outline-none focus:border-[#9E7730]"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-[#9E7730] hover:bg-[#886524] text-white font-cinzel text-xs tracking-[0.18em] uppercase transition-colors"
                  >
                    Authenticate Vault Key
                  </button>
                </form>

                <div className="pt-4 border-t border-[#E8E2D5] text-center">
                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="text-xs font-cinzel text-[#705322] hover:text-[#1C1917] underline uppercase tracking-wider"
                  >
                    Load Sample Trustee Credentials (Vienna Antiquities)
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Vault Auth Header */}
                <div className="bg-white border border-[#E8E2D5] p-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#9E7730]">
                      Authenticated Trustee Session · {clientAuth.projectCode}
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-[#1C1917] mt-0.5">
                      {clientAuth.clientName}
                    </h3>
                    <p className="text-xs text-[#78716C] mt-0.5">{clientAuth.role}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setClientAuth({ isAuthenticated: false, clientName: '', projectCode: '', role: '' });
                      showToast('Vault session safely terminated.');
                    }}
                    className="px-4 py-2 bg-white border border-[#E8E2D5] text-xs font-cinzel uppercase tracking-wider hover:bg-[#FAF8F5]"
                  >
                    Lock Vault
                  </button>
                </div>

                {/* Milestone Photographic Inspection Plates */}
                <div className="bg-white border border-[#E8E2D5] p-6 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <BespokeCrane className="w-5 h-5 text-[#9E7730]" />
                      <h3 className="font-serif-luxury text-xl text-[#1C1917]">
                        Active Construction Milestone Photographic Plates
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 bg-[#F4EFEA] p-1 border border-[#E8E2D5] text-xs font-cinzel">
                      <button 
                        type="button"
                        onClick={() => setPortalMilestonePlate('rigging')} 
                        className={`px-3 py-1 ${portalMilestonePlate === 'rigging' ? 'bg-[#9E7730] text-white font-semibold' : 'text-[#78716C]'}`}
                      >
                        Plate 01: Tower Cranes
                      </button>
                      <button 
                        type="button"
                        onClick={() => setPortalMilestonePlate('shoring')} 
                        className={`px-3 py-1 ${portalMilestonePlate === 'shoring' ? 'bg-[#9E7730] text-white font-semibold' : 'text-[#78716C]'}`}
                      >
                        Plate 02: Piling & Shoring
                      </button>
                      <button 
                        type="button"
                        onClick={() => setPortalMilestonePlate('promenade')} 
                        className={`px-3 py-1 ${portalMilestonePlate === 'promenade' ? 'bg-[#9E7730] text-white font-semibold' : 'text-[#78716C]'}`}
                      >
                        Plate 03: Completed Terrace
                      </button>
                    </div>
                  </div>

                  {/* High-Resolution Photographic Stage */}
                  <div className="relative aspect-video overflow-hidden bg-black border border-[#E8E2D5] group">
                    <img 
                      src={
                        portalMilestonePlate === 'rigging'
                          ? "/src/assets/images/cranes_clifftop_construction_1794058074178.jpg"
                          : portalMilestonePlate === 'shoring'
                          ? "/src/assets/images/geotechnical_machinery_site_1794058074902.jpg"
                          : "/src/assets/images/villa_cliffside_terrace_1794056500832.jpg"
                      }
                      alt="Milestone Archival Plate"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-xs px-3 py-1.5 text-white text-[11px] font-cinzel tracking-wider uppercase border border-white/20">
                      {portalMilestonePlate === 'rigging' && 'Milestone Plate 01: Liebherr 280 EC-H High-Angle Rigging'}
                      {portalMilestonePlate === 'shoring' && 'Milestone Plate 02: Bedrock Rotary Tieback Drilling & Shoring'}
                      {portalMilestonePlate === 'promenade' && 'Milestone Plate 03: Completed Classical Marble Promenade'}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-xs px-3 py-1 text-[#D9C496] text-[10px] font-cinzel uppercase tracking-widest border border-white/10">
                      Master Photographic Archive · Sovereign Seal AM-2026
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between text-xs font-cinzel text-[#78716C]">
                      <span>Commission Milestone Execution</span>
                      <span className="text-[#9E7730] font-semibold tabular-nums">78% Executed</span>
                    </div>
                    <div className="h-1.5 bg-[#E8E2D5] overflow-hidden">
                      <div className="h-full bg-[#9E7730] w-[78%]"></div>
                    </div>
                  </div>
                </div>

                {/* Confidential Dossiers */}
                <div className="bg-white border border-[#E8E2D5] p-6 space-y-4">
                  <h3 className="font-serif-luxury text-xl text-[#1C1917]">Approved Architectural Plans & Dossiers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { title: "Heavy Crane Wind-Shear Test Dossier", date: "Nov 04, 2026", size: "18.4 MB PDF" },
                      { title: "Geotechnical Core Borings Audit", date: "Nov 02, 2026", size: "14.2 MB PDF" },
                      { title: "Thassos Marble Petrographic Certificate", date: "Oct 28, 2026", size: "6.8 MB PDF" },
                      { title: "Master Ground Terracing CAD Plan A-101", date: "Sep 30, 2026", size: "24.5 MB DWG" },
                    ].map((doc, idx) => (
                      <div key={idx} className="p-3 bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-[#1C1917]">{doc.title}</h4>
                          <span className="text-[10px] text-[#78716C]">{doc.date} · {doc.size}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => showToast(`Downloading official dossier ${doc.title}...`)}
                          className="px-3 py-1 text-[11px] font-cinzel bg-white border border-[#E8E2D5] text-[#705322] hover:bg-[#FAF7F2]"
                        >
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      {/* ======================================================== */}
      {/* INTERACTIVE FULL-SCREEN LIGHTBOX VIEWER */}
      {/* ======================================================== */}
      {lightboxIndex !== null && projects[lightboxIndex] && (() => {
        const activeProj = projects[lightboxIndex];
        return (
          <div className="fixed inset-0 z-50 bg-[#0C0A09]/95 backdrop-blur-md flex flex-col justify-between overflow-hidden select-none animate-in fade-in duration-200">
            {/* Top Bar */}
            <div className="bg-[#141210]/90 border-b border-white/10 px-6 py-4 flex items-center justify-between z-10 shrink-0">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-cinzel uppercase tracking-[0.2em] text-[#D9C496] px-2.5 py-1 border border-[#D9C496]/40 bg-[#D9C496]/10">
                  Plate {activeProj.romanId}
                </span>
                <div>
                  <h3 className="font-serif-luxury text-xl text-white font-medium">
                    {activeProj.title}
                  </h3>
                  <div className="text-[11px] text-[#A8A29E] font-cinzel tracking-wider">
                    {activeProj.location} · {activeProj.categoryLabel}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-xs font-mono text-[#D9C496] tracking-widest border border-white/10 px-3 py-1.5 bg-black/40">
                  {lightboxIndex + 1} / {projects.length}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    const p = activeProj;
                    setLightboxIndex(null);
                    setModalItem(p);
                    setModalActiveSubTab('overview');
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#9E7730] hover:bg-[#886524] text-white text-xs font-cinzel uppercase tracking-[0.16em] transition-colors"
                >
                  Dossier & Plans →
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-cinzel uppercase tracking-wider border border-white/20 transition-colors"
                  title="Press Escape to Close"
                >
                  ✕ Close (Esc)
                </button>
              </div>
            </div>

            {/* Central Stage with Left/Right Arrows */}
            <div className="relative flex-1 flex items-center justify-center p-4 sm:p-6 min-h-0 overflow-hidden">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : projects.length - 1))}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center text-2xl font-light hover:border-[#D9C496] transition-all cursor-pointer shadow-lg"
                title="Previous Plate (Left Arrow)"
              >
                ‹
              </button>

              {/* Main Image Container */}
              <div className="relative max-h-full max-w-5xl w-full flex flex-col items-center justify-center px-10">
                <img
                  src={activeProj.image}
                  alt={activeProj.title}
                  className="max-h-[60vh] w-auto max-w-full object-contain border border-white/15 shadow-2xl transition-all duration-300"
                />

                {/* Subtitle Caption & Metrics */}
                <div className="mt-3 max-w-4xl w-full bg-[#141210]/80 backdrop-blur-xs border border-white/10 px-5 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <p className="text-[#D6D3D1] font-light text-center sm:text-left line-clamp-1">
                    {activeProj.description}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[#D9C496] shrink-0">
                    <span>{activeProj.stats.budget}</span>
                    <span>·</span>
                    <span>{activeProj.stats.duration}</span>
                    <span>·</span>
                    <span className="text-[#A8A29E]">{activeProj.stats.client}</span>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => setLightboxIndex(prev => (prev !== null && prev < projects.length - 1 ? prev + 1 : 0))}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center text-2xl font-light hover:border-[#D9C496] transition-all cursor-pointer shadow-lg"
                title="Next Plate (Right Arrow)"
              >
                ›
              </button>
            </div>

            {/* Bottom Thumbnail Strip Carousel */}
            <div className="bg-[#141210]/95 border-t border-white/10 px-6 py-3 shrink-0">
              <div className="flex items-center justify-between mb-2 text-[10px] font-cinzel text-[#A8A29E] uppercase tracking-wider">
                <span>Select Plate ({projects.length} Total Master Compositions)</span>
                <span className="hidden sm:inline">Use Left/Right keyboard arrows to navigate · Esc to close</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {projects.map((proj, idx) => {
                  const isActive = idx === lightboxIndex;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className={`relative shrink-0 w-20 h-14 border transition-all overflow-hidden ${
                        isActive
                          ? 'border-[#D9C496] ring-2 ring-[#9E7730] scale-105 opacity-100'
                          : 'border-white/20 opacity-50 hover:opacity-90 hover:border-white/50'
                      }`}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0.5 right-1 text-[9px] font-cinzel bg-black/80 px-1 text-white">
                        {proj.romanId}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })()}


      {/* ======================================================== */}
      {/* COMPREHENSIVE MONOGRAPH MODAL (With Before/After, Blueprint & Docs) */}
      {/* ======================================================== */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-[#D9C496] max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 my-8">
            
            {/* Modal Header Bar */}
            <div className="bg-[#FAF7F2] border-b border-[#E8E2D5] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#9E7730]">
                  Plate {modalItem.romanId} · {modalItem.categoryLabel}
                </span>
                <h3 className="font-serif-luxury text-2xl text-[#1C1917]">
                  {modalItem.title}
                </h3>
              </div>
              <button 
                type="button"
                onClick={() => setModalItem(null)}
                className="px-3 py-1.5 bg-white hover:bg-[#F4EFEA] border border-[#E8E2D5] text-[#1C1917] text-xs font-cinzel uppercase tracking-wider"
              >
                ✕ Close
              </button>
            </div>

            {/* Sub-tab Navigation */}
            <div className="bg-[#F5EFE9] border-b border-[#E8E2D5] px-6 py-2 flex flex-wrap items-center gap-2 text-xs font-cinzel">
              <button
                type="button"
                onClick={() => setModalActiveSubTab('overview')}
                className={`px-4 py-2 uppercase tracking-wider transition-colors ${
                  modalActiveSubTab === 'overview'
                    ? 'bg-white text-[#1C1917] font-semibold border border-[#E8E2D5] shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Overview & Monograph
              </button>

              <button
                type="button"
                onClick={() => setModalActiveSubTab('blueprint')}
                className={`px-4 py-2 uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                  modalActiveSubTab === 'blueprint'
                    ? 'bg-white text-[#1C1917] font-semibold border border-[#E8E2D5] shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                <BespokeBlueprintGlyph className="w-3.5 h-3.5 text-[#9E7730]" />
                <span>Interactive CAD Blueprint</span>
              </button>
              <button
                type="button"
                onClick={() => setModalActiveSubTab('plans')}
                className={`px-4 py-2 uppercase tracking-wider transition-colors ${
                  modalActiveSubTab === 'plans'
                    ? 'bg-white text-[#1C1917] font-semibold border border-[#E8E2D5] shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Plan Docs ({modalItem.planDocs.length})
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              
              {/* SUBTAB: OVERVIEW */}
              {modalActiveSubTab === 'overview' && (
                <div className="space-y-6">
                  {/* Hero image with short scene button */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                    <img 
                      src={modalItem.image} 
                      alt={modalItem.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />

                  </div>

                  <div>
                    <div className="text-xs text-[#9E7730] font-cinzel tracking-[0.2em] uppercase">{modalItem.location}</div>
                    <p className="text-[#57534E] text-sm leading-relaxed font-light mt-2">
                      {modalItem.extendedDescription}
                    </p>
                  </div>

                  {/* Active machinery */}
                  {modalItem.machineryOnSite && (
                    <div className="p-4 bg-[#FAF7F2] border border-[#D9C496]">
                      <h5 className="font-cinzel text-[11px] text-[#705322] uppercase tracking-[0.16em] mb-2 font-semibold flex items-center gap-2">
                        <BespokeCrane className="w-4 h-4 text-[#9E7730]" />
                        <span>Active Tower Cranes & Heavy Machinery Deployed</span>
                      </h5>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {modalItem.machineryOnSite.map((m, idx) => (
                          <span key={idx} className="bg-white px-2.5 py-1 border border-[#E8E2D5] text-[#1C1917] font-mono text-[11px]">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stats Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D5]">
                      <span className="text-[10px] font-cinzel text-[#78716C] uppercase block">Total Investment</span>
                      <span className="font-serif-luxury text-base text-[#9E7730] font-semibold">{modalItem.stats.budget}</span>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D5]">
                      <span className="text-[10px] font-cinzel text-[#78716C] uppercase block">Execution Period</span>
                      <span className="font-serif-luxury text-base text-[#1C1917]">{modalItem.stats.duration}</span>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D5]">
                      <span className="text-[10px] font-cinzel text-[#78716C] uppercase block">Client Entity</span>
                      <span className="font-serif-luxury text-base text-[#1C1917] truncate block">{modalItem.stats.client}</span>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D5]">
                      <span className="text-[10px] font-cinzel text-[#78716C] uppercase block">Completion</span>
                      <span className="font-serif-luxury text-base text-[#1C1917]">{modalItem.stats.completion}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SUBTAB: CAD BLUEPRINT */}
              {modalActiveSubTab === 'blueprint' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif-luxury text-xl text-[#1C1917]">
                      Approved Engineering Elevation & Section
                    </h4>
                    <p className="text-xs text-[#57534E] font-light mt-1">
                      Vector schematic depicting deep bedrock micropiles, hydrostatic drainage siphons, dimension callouts, and lead-rubber seismic bearings.
                    </p>
                  </div>

                  <ArchitecturalBlueprintViewer 
                    type={modalItem.blueprintType}
                    title={modalItem.blueprintTitle}
                    sheetNo={modalItem.blueprintRef}
                    scale={modalItem.blueprintScale}
                    projectLocation={modalItem.location}
                  />
                </div>
              )}

              {/* SUBTAB: PLAN DOCS & DOSSIERS */}
              {modalActiveSubTab === 'plans' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif-luxury text-xl text-[#1C1917]">
                      Approved Architectural Plans & Permits
                    </h4>
                    <p className="text-xs text-[#57534E] font-light mt-1">
                      Official consortium sheets, soil mechanics surveys, and UNESCO Venice Charter compliance reports.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {modalItem.planDocs.map((doc, idx) => (
                      <div key={idx} className="p-4 bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-between hover:border-[#9E7730] transition-colors">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-semibold text-[#9E7730] bg-[#FAF7F2] px-2 py-0.5 border border-[#D9C496]">
                              Sheet {doc.sheetNo}
                            </span>
                            <h5 className="font-medium text-sm text-[#1C1917]">{doc.title}</h5>
                          </div>
                          <div className="text-[11px] text-[#78716C] mt-1">
                            Category: {doc.category} · Scale: {doc.scale} · File: {doc.fileSize} · Approved: {doc.date}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => showToast(`Opening Sheet ${doc.sheetNo}: ${doc.title}...`)}
                          className="px-4 py-2 bg-[#9E7730] hover:bg-[#886524] text-white text-xs font-cinzel uppercase tracking-wider"
                        >
                          Inspect PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#E8E2D5] flex items-center justify-between">
                <span className="text-xs font-serif-luxury italic text-[#78716C]">
                  Aureus & Monument Monograph AM-MONO-{modalItem.romanId}
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setModalItem(null);
                      setActiveTab('estimator');
                    }}
                    className="px-5 py-2.5 bg-[#9E7730] hover:bg-[#886524] text-white text-xs font-cinzel tracking-[0.16em] uppercase transition-colors"
                  >
                    Calculate Similar Scope
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalItem(null)}
                    className="px-5 py-2.5 bg-white hover:bg-[#FAF8F5] border border-[#E8E2D5] text-[#1C1917] text-xs font-cinzel tracking-[0.16em] uppercase transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* FORMAL PROPOSAL MODAL */}
      {/* ======================================================== */}
      {showProposalModal && (
        <div className="fixed inset-0 z-50 bg-[#1C1917]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-[#D9C496] max-w-2xl w-full p-8 sm:p-10 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200 my-8">
            
            <div className="text-center pb-6 border-b border-[#E8E2D5] space-y-1">
              <div className="flex justify-center mb-2">
                <BespokeMonogram className="w-10 h-10 text-[#9E7730]" />
              </div>
              <h4 className="font-cinzel text-lg tracking-[0.25em] text-[#1C1917] uppercase font-semibold">
                Aureus & Monument
              </h4>
              <p className="text-xs font-cinzel tracking-[0.2em] text-[#9E7730] uppercase">
                Architectural Consortium · Monaco & Vienna
              </p>
              <p className="text-[11px] text-[#78716C] pt-1">
                Charter Ref: AM-EST-2026-X99 · Date: November 2026
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#F4EFEA]">
                <span className="text-[#57534E]">Commission Typology</span>
                <span className="text-[#1C1917] capitalize font-medium">{estimatorDomain}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F4EFEA]">
                <span className="text-[#57534E]">Masonry Scale</span>
                <span className="text-[#1C1917] font-mono tabular-nums">{scopeSize.toLocaleString()} sq. ft.</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F4EFEA]">
                <span className="text-[#57534E]">Material & Engineering Tier</span>
                <span className="text-[#1C1917] capitalize font-medium">{tier.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F4EFEA]">
                <span className="text-[#57534E]">Base Hardscaping & Masonry Allocation</span>
                <span className="text-[#1C1917] font-mono tabular-nums">${baseSubtotal.toLocaleString()} USD</span>
              </div>
              {includeConsortium && (
                <div className="flex justify-between py-1.5 border-b border-[#F4EFEA]">
                  <span className="text-[#57534E]">Master Consortium Directorate Review & HIA</span>
                  <span className="text-[#1C1917] font-mono tabular-nums">$75,000 USD</span>
                </div>
              )}
              {includeSeismicSensors && (
                <div className="flex justify-between py-1.5 border-b border-[#F4EFEA]">
                  <span className="text-[#57534E]">Continuous Seismic & Hydrostatic Sensor Array</span>
                  <span className="text-[#1C1917] font-mono tabular-nums">$45,000 USD</span>
                </div>
              )}
              <div className="flex justify-between pt-3 text-base font-serif-luxury border-t border-[#E8E2D5]">
                <span className="text-[#1C1917] font-medium">Total Projected Investment</span>
                <span className="text-[#9E7730] font-semibold">${calculatedEstimate.toLocaleString()} USD</span>
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#D9C496] text-xs text-[#57534E] leading-relaxed font-light">
              ✦ <strong>Sovereign Guarantee:</strong> All Aureus & Monument commissions include an unconditional 25-year structural warranty, certified stone provenance dossiers from historical European quarries, and compliant municipal/UNESCO historical clearances.
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowProposalModal(false);
                  showToast('Your preliminary charter has been received by the Consortium Senior Directorate.');
                }}
                className="flex-1 py-3.5 bg-[#9E7730] hover:bg-[#886524] text-white font-cinzel text-xs tracking-[0.18em] uppercase transition-colors"
              >
                Confirm Commission Inquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  showToast('Printing charter dossier...');
                  window.print();
                }}
                className="py-3.5 px-6 bg-white hover:bg-[#FAF8F5] border border-[#E8E2D5] text-[#1C1917] font-cinzel text-xs tracking-[0.16em] uppercase transition-colors"
              >
                Print Specification
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#E8E2D5] bg-[#F4EFEA] py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <BespokeMonogram className="w-7 h-7 text-[#9E7730]" />
              <span className="font-cinzel text-sm tracking-[0.2em] text-[#1C1917] font-semibold uppercase">
                Aureus & Monument
              </span>
            </div>
            <p className="text-[#78716C] text-xs leading-relaxed font-light">
              Master architectural hardscaping, private estate terracing, grand mosque courtyards, heavy tower crane developments, and UNESCO-compliant monument preservation.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-cinzel font-semibold uppercase tracking-[0.2em] text-[#705322] mb-3">
              Commissions (16)
            </h4>
            <ul className="space-y-2 text-xs text-[#57534E]">
              <li><button type="button" onClick={() => setActiveTab('gallery')} className="hover:text-[#9E7730] font-medium text-[#9E7730]">Master Media Gallery (16)</button></li>
              <li><button type="button" onClick={() => { setActiveTab('portfolio'); setSelectedDomain('clifftop'); }} className="hover:text-[#9E7730]">Clifftop Estates ({counts.clifftop})</button></li>
              <li><button type="button" onClick={() => { setActiveTab('portfolio'); setSelectedDomain('mosque'); }} className="hover:text-[#9E7730]">Grand Mosques ({counts.mosque})</button></li>
              <li><button type="button" onClick={() => { setActiveTab('portfolio'); setSelectedDomain('cranes'); }} className="hover:text-[#9E7730]">Active Cranes & Sites ({counts.cranes})</button></li>
              <li><button type="button" onClick={() => { setActiveTab('portfolio'); setSelectedDomain('museum'); }} className="hover:text-[#9E7730]">Palaces & Museums ({counts.museum})</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-cinzel font-semibold uppercase tracking-[0.2em] text-[#705322] mb-3">
              Directorate
            </h4>
            <ul className="space-y-2 text-xs text-[#57534E]">
              <li><button type="button" onClick={() => setActiveTab('gallery')} className="hover:text-[#9E7730]">Photographic Archive</button></li>
              <li><button type="button" onClick={() => setActiveTab('estimator')} className="hover:text-[#9E7730]">Scope & Cost Calculator</button></li>
              <li><button type="button" onClick={() => setActiveTab('heritage')} className="hover:text-[#9E7730]">Conservation Protocols</button></li>
              <li><button type="button" onClick={() => setActiveTab('client-portal')} className="hover:text-[#9E7730]">Private Client Vault</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-cinzel font-semibold uppercase tracking-[0.2em] text-[#705322] mb-3">
              Global Consulates
            </h4>
            <p className="text-xs text-[#57534E] leading-relaxed font-light">
              Monaco · Vienna · Muscat · Kyoto · Athens<br/>
              dossier@aureusmonument.com<br/>
              +377 98 90 200 (Monaco Principal)
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 mt-12 border-t border-[#E8E2D5] text-center text-xs text-[#78716C] font-cinzel tracking-wider">
          © 2026 Aureus & Monument Architectural Consortium · 16 Sovereign Photographic Plates & CAD Plans Archive
        </div>
      </footer>

    </div>
  );
}
