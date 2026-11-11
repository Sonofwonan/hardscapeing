import React, { useState, useMemo } from 'react';

// ==========================================
// BESPOKE ARCHITECTURAL ICONS & GLYPHS
// ==========================================

function BespokeMonogram({ className = "w-6 h-6 text-[#855712]" }: { className?: string }) {
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

function BespokeKeystone({ className = "w-5 h-5 text-[#855712]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3">
      <path d="M3 21V14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14V21" strokeLinecap="round" />
      <path d="M6 21V14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14V21" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5" />
      <path d="M9.5 3H14.5L13.5 10H10.5L9.5 3Z" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
      <path d="M1 21H8M16 21H23" strokeLinecap="round" />
    </svg>
  );
}

function BespokeCapital({ className = "w-5 h-5 text-[#855712]" }: { className?: string }) {
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

function BespokeVault({ className = "w-5 h-5 text-[#855712]" }: { className?: string }) {
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

function BespokeBlueprintGlyph({ className = "w-5 h-5 text-[#855712]" }: { className?: string }) {
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
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" strokeLinecap="round" />
      <path d="M20 20L16 16" strokeLinecap="round" />
    </svg>
  );
}

// ==========================================
// CAD BLUEPRINT SCHEMATIC COMPONENT
// ==========================================

interface ArchitecturalBlueprintViewerProps {
  type: 'clifftop' | 'mosque' | 'atrium' | 'archaeological';
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

  return (
    <div className="bg-[#0C1524] border border-[#23354E] text-[#E2E8F0] font-mono text-xs overflow-hidden shadow-xl">
      <div className="bg-[#132238] border-b border-[#23354E] p-4 flex flex-wrap items-center justify-between gap-4 font-cinzel">
        <div className="flex items-center gap-3">
          <BespokeBlueprintGlyph className="w-5 h-5 text-[#E6C687]" />
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#E6C687] font-semibold">
              Structural CAD Schematic · {sheetNo}
            </div>
            <h4 className="text-white text-base tracking-wide font-medium">
              {title}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-[#CBD5E1]">
          <span>Scale: <strong className="text-white">{scale}</strong></span>
          <span>·</span>
          <span>Location: <strong className="text-white">{projectLocation.split('·')[0].trim()}</strong></span>
        </div>
      </div>

      <div className="bg-[#0A1320] border-b border-[#1E2E44] px-4 py-2.5 flex flex-wrap items-center gap-3 text-xs">
        <span className="text-[#94A3B8] uppercase tracking-wider font-cinzel text-[11px] font-semibold">
          Schematic Layers:
        </span>
        <button
          type="button"
          onClick={() => setShowPiles(!showPiles)}
          className={`px-3 py-1 border transition-colors ${
            showPiles ? 'bg-[#E6C687]/20 border-[#E6C687] text-[#F3E7C9] font-medium' : 'border-[#23354D] text-[#64748B]'
          }`}
        >
          {showPiles ? '✓' : '○'} Bedrock Micropiles & Anchors
        </button>
        <button
          type="button"
          onClick={() => setShowDimensions(!showDimensions)}
          className={`px-3 py-1 border transition-colors ${
            showDimensions ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-[#BAE6FD] font-medium' : 'border-[#23354D] text-[#64748B]'
          }`}
        >
          {showDimensions ? '✓' : '○'} Elevation Levels & Spans
        </button>
        <button
          type="button"
          onClick={() => setShowDrainage(!showDrainage)}
          className={`px-3 py-1 border transition-colors ${
            showDrainage ? 'bg-[#34D399]/20 border-[#34D399] text-[#A7F3D0] font-medium' : 'border-[#23354D] text-[#64748B]'
          }`}
        >
          {showDrainage ? '✓' : '○'} Hydrostatic Sub-Drainage
        </button>
      </div>

      <div className="relative aspect-[16/9] bg-[#070D18] p-6 overflow-hidden flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#475569" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cadGrid)" />
        </svg>

        <svg viewBox="0 0 800 450" className="w-full h-full max-h-[420px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(740, 40)">
            <circle cx="0" cy="0" r="16" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
            <path d="M0 -13L3 8L0 4L-3 8L0 -13Z" fill="#E6C687" />
            <text x="-4" y="-17" fill="#E6C687" fontSize="11" fontWeight="bold">N</text>
          </g>

          {type === 'clifftop' && (
            <g id="clifftopDrawing">
              <path 
                d="M 50 380 L 190 330 L 280 260 L 350 190 L 450 160 L 580 110 L 740 90" 
                stroke="#64748B" 
                strokeWidth="2.5" 
                strokeDasharray="4 2"
              />
              <text x="60" y="405" fill="#94A3B8" fontSize="12">Sea Level Datum ±0.00m</text>

              <rect x="270" y="200" width="120" height="60" fill="#152438" stroke="#E6C687" strokeWidth="1.8" />
              <rect x="380" y="145" width="130" height="60" fill="#152438" stroke="#E6C687" strokeWidth="1.8" />
              <rect x="500" y="95" width="150" height="55" fill="#152438" stroke="#E6C687" strokeWidth="1.8" />

              <line x1="270" y1="220" x2="390" y2="220" stroke="#E6C687" strokeWidth="0.8" opacity="0.6" />
              <line x1="270" y1="240" x2="390" y2="240" stroke="#E6C687" strokeWidth="0.8" opacity="0.6" />
              <line x1="380" y1="165" x2="510" y2="165" stroke="#E6C687" strokeWidth="0.8" opacity="0.6" />
              <line x1="380" y1="185" x2="510" y2="185" stroke="#E6C687" strokeWidth="0.8" opacity="0.6" />

              <path d="M 480 95 L 560 95 L 560 108 L 480 108 Z" fill="#34D399" fillOpacity="0.25" stroke="#34D399" strokeWidth="1.2" />
              <text x="485" y="90" fill="#34D399" fontSize="11" fontWeight="bold">Infinity Reflection Basin</text>

              {showPiles && (
                <g>
                  <line x1="290" y1="260" x2="230" y2="380" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="340" y1="260" x2="280" y2="400" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="410" y1="205" x2="330" y2="380" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="470" y1="205" x2="400" y2="400" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="230" cy="380" r="5" fill="#E6C687" />
                  <circle cx="280" cy="400" r="5" fill="#E6C687" />
                  <circle cx="330" cy="380" r="5" fill="#E6C687" />
                  <circle cx="400" cy="400" r="5" fill="#E6C687" />
                  <text x="240" y="420" fill="#F3E7C9" fontSize="11">Bedrock Tieback Anchors (-28.5m)</text>
                </g>
              )}

              {showDrainage && (
                <g>
                  <path d="M 275 255 L 385 255 L 385 195 L 505 195 L 505 145 L 640 145" stroke="#34D399" strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="275" cy="255" r="4" fill="#34D399" />
                  <circle cx="385" cy="255" r="4" fill="#34D399" />
                  <text x="510" y="138" fill="#34D399" fontSize="11">Hydrostatic Relief Conduit</text>
                </g>
              )}

              {showDimensions && (
                <g>
                  <line x1="270" y1="75" x2="650" y2="75" stroke="#38BDF8" strokeWidth="1.2" />
                  <text x="460" y="70" fill="#38BDF8" fontSize="12" textAnchor="middle" fontWeight="bold">TOTAL PROMENADE RUN: 48.60 m</text>
                  <text x="660" y="100" fill="#38BDF8" fontSize="11">+180.40m Upper Belvedere</text>
                  <text x="520" y="150" fill="#38BDF8" fontSize="11">+164.20m Mid Terrace</text>
                  <text x="400" y="205" fill="#38BDF8" fontSize="11">+148.00m Sea Rampart</text>
                </g>
              )}
            </g>
          )}

          {type === 'mosque' && (
            <g id="mosqueDrawing">
              <path d="M 320 220 C 320 120 480 120 480 220" stroke="#E6C687" strokeWidth="2.5" fill="#132337" fillOpacity="0.4" />
              <path d="M 360 220 C 360 150 440 150 440 220" stroke="#E6C687" strokeWidth="1.5" strokeDasharray="2 2" />
              <circle cx="400" cy="115" r="4" fill="#E6C687" />

              {[200, 240, 280, 520, 560, 600].map((colX, i) => (
                <g key={i}>
                  <rect x={colX - 4} y="180" width="8" height="120" fill="#E6C687" fillOpacity="0.8" />
                  <rect x={colX - 7} y="176" width="14" height="6" fill="#E6C687" />
                  <rect x={colX - 7} y="298" width="14" height="6" fill="#E6C687" />
                </g>
              ))}

              <rect x="150" y="304" width="500" height="20" fill="#1C314C" stroke="#E6C687" strokeWidth="1.5" />
              <rect x="290" y="306" width="220" height="12" fill="#38BDF8" fillOpacity="0.3" stroke="#38BDF8" />
              <text x="400" y="316" fill="#BAE6FD" fontSize="10" textAnchor="middle">White Marble Reflective Pool</text>

              {showDrainage && (
                <g>
                  <line x1="160" y1="335" x2="640" y2="335" stroke="#34D399" strokeWidth="1.5" strokeDasharray="4 2" />
                  <text x="400" y="352" fill="#34D399" fontSize="11" textAnchor="middle">Subterranean Radiant Cooling Matrix</text>
                </g>
              )}

              {showDimensions && (
                <g>
                  <line x1="150" y1="140" x2="650" y2="140" stroke="#38BDF8" strokeWidth="1" />
                  <text x="400" y="132" fill="#38BDF8" fontSize="12" textAnchor="middle">PERISTYLE COURTYARD SPAN: 82.00 m</text>
                </g>
              )}
            </g>
          )}

          {type === 'atrium' && (
            <g id="atriumDrawing">
              <path d="M 200 160 L 400 80 L 600 160" stroke="#38BDF8" strokeWidth="2.5" />
              <path d="M 220 160 L 400 100 L 580 160" stroke="#E6C687" strokeWidth="1.5" strokeDasharray="3 2" />
              
              <rect x="180" y="160" width="40" height="180" fill="#16273B" stroke="#E6C687" strokeWidth="1.8" />
              <rect x="580" y="160" width="40" height="180" fill="#16273B" stroke="#E6C687" strokeWidth="1.8" />
              <line x1="220" y1="340" x2="580" y2="340" stroke="#E6C687" strokeWidth="2" />
              
              <text x="400" y="70" fill="#38BDF8" fontSize="12" textAnchor="middle">Structural Glass Lantern (+24.50m)</text>
              <text x="400" y="325" fill="#E6C687" fontSize="11" textAnchor="middle">Pietra Serena Sandstone Paved Loggia</text>

              {showDimensions && (
                <g>
                  <line x1="180" y1="365" x2="620" y2="365" stroke="#38BDF8" strokeWidth="1" />
                  <text x="400" y="380" fill="#38BDF8" fontSize="11" textAnchor="middle">ATRIUM CLEAR SPAN: 36.40 m</text>
                </g>
              )}
            </g>
          )}

          {type === 'archaeological' && (
            <g id="archaeologicalDrawing">
              {[
                { x: 180, y: 120, w: 140, h: 45 },
                { x: 330, y: 120, w: 150, h: 45 },
                { x: 490, y: 120, w: 130, h: 45 },
                { x: 160, y: 170, w: 160, h: 50 },
                { x: 325, y: 170, w: 155, h: 50 },
                { x: 485, y: 170, w: 150, h: 50 },
                { x: 140, y: 225, w: 170, h: 55 },
                { x: 315, y: 225, w: 165, h: 55 },
                { x: 485, y: 225, w: 165, h: 55 },
              ].map((b, i) => (
                <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill="#182A3E" stroke="#E6C687" strokeWidth="1.6" />
              ))}
              
              <text x="400" y="100" fill="#E6C687" fontSize="12" textAnchor="middle">Classical Ashlar Fortification Core</text>

              {showPiles && (
                <g>
                  <line x1="200" y1="280" x2="200" y2="380" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="390" y1="280" x2="390" y2="380" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="580" y1="280" x2="580" y2="380" stroke="#F3E7C9" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="200" cy="380" r="5" fill="#E6C687" />
                  <circle cx="390" cy="380" r="5" fill="#E6C687" />
                  <circle cx="580" cy="380" r="5" fill="#E6C687" />
                  <text x="400" y="405" fill="#F3E7C9" fontSize="11" textAnchor="middle">Reversible Stainless Tension Tendons (ICOMOS Compliant)</text>
                </g>
              )}
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

// ==========================================
// DATA STRUCTURES
// ==========================================

interface ProjectPlanDoc {
  sheetNo: string;
  title: string;
  category: string;
  scale: string;
  fileSize: string;
}

interface Project {
  id: number;
  title: string;
  category: 'clifftop' | 'mosque' | 'museum' | 'antiquity';
  categoryLabel: string;
  location: string;
  image: string;
  blueprintType: 'clifftop' | 'mosque' | 'atrium' | 'archaeological';
  blueprintTitle: string;
  blueprintScale: string;
  blueprintRef: string;
  description: string;
  extendedDescription: string;
  materials: string[];
  protocols: string[];
  planDocs: ProjectPlanDoc[];
  stats: {
    budget: string;
    duration: string;
    client: string;
    completion: string;
    scopeSqFt: string;
  };
}

interface Leader {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  oversight: string[];
}

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'commissions' | 'directorate' | 'gallery' | 'estimator' | 'heritage' | 'client-portal'>('home');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalItem, setModalItem] = useState<Project | null>(null);
  const [modalActiveSubTab, setModalActiveSubTab] = useState<'overview' | 'blueprint' | 'plans'>('overview');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Estimator State
  const [estimatorDomain, setEstimatorDomain] = useState<'estate' | 'mosque' | 'palace' | 'heritage'>('estate');
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

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // 4 DIRECTORATE LEADERS
  const leaders: Leader[] = [
    {
      id: "peter",
      name: "Peter Van Hoff",
      role: "Managing Principal & Atelier Director",
      credentials: "M.Arch ETH Zürich · Royal Institute of British Architects (RIBA)",
      bio: "Peter leads the atelier's architectural vision and master commissions across North America, Europe, and the Mediterranean. With three decades directing clifftop estates and monumental public hardscaping, he balances classical proportions with cutting-edge structural innovation.",
      image: "/src/assets/images/portrait_peter_van_hoff_1794421041103.jpg",
      oversight: ["Master Architectural Direction", "Sovereign Design Review", "Consortium Ethics"]
    },
    {
      id: "corinne",
      name: "Corinne W Smith",
      role: "Director of Geotechnical & Structural Engineering",
      credentials: "PE, SE · Ph.D. Geotechnical Engineering, UC Berkeley",
      bio: "Corinne oversees deep bedrock micro-piling, post-tensioned cantilevered slabs, and coastal slope stabilization. Her pioneering non-percussive anchoring techniques safeguard steep hillside estates and monumental ramparts against seismic and hydrostatic pressures.",
      image: "/src/assets/images/corinne_w_smith.jpeg",
      oversight: ["Bedrock Micropile Systems", "Seismic Base Isolation", "Hydrostatic Siphons"]
    },
    {
      id: "jefferey",
      name: "Jefferey T Montgomery",
      role: "Director of Sovereign Commissions & Private Estates",
      credentials: "B.A. Dartmouth College · Senior Member, International Society of Trustees",
      bio: "Jefferey oversees discreet liaison with private family offices, sovereign trusts, and philanthropic foundations. He guarantees absolute client privacy, fiduciary transparency, and bespoke execution for private estate hardscaping and private sanctuary developments.",
      image: "/src/assets/images/portrait_jefferey_t_montgomery_1794421043329.jpg",
      oversight: ["Private Family Office Liaison", "Fiduciary Governance", "Non-Disclosure Compliance"]
    },
    {
      id: "gabriel",
      name: "Gabriel Derrickson",
      role: "Chief Conservator & Director of Heritage Charters",
      credentials: "M.Sc. Architectural Conservation, University of Rome La Sapienza · Fellow, ICOMOS",
      bio: "Gabriel leads the atelier's heritage preservation practice, ensuring all interventions strictly comply with the Venice Charter 1964. He directs quarry provenance verification, traditional lime mortar synthesis, and reversible non-invasive structural grouting for antiquities.",
      image: "/src/assets/images/portrait_gabriel_derrickson_1794421044313.jpg",
      oversight: ["ICOMOS Venice Charter Oversight", "Quarry Petrography Dossiers", "Reversible Conservation"]
    }
  ];

  // 12 CURATED COMPLETED MASTERWORKS (Clean thumbnails, no Roman numerals, no ongoing works)
  const projects: Project[] = [
    {
      id: 1,
      title: "Villa Medicea Cliffside Terraces",
      category: "clifftop",
      categoryLabel: "Clifftop Estate",
      location: "Cap d'Ail · Monaco & French Riviera",
      image: "/src/assets/images/villa_cliffside_terrace_1794056500832.jpg",
      blueprintType: "clifftop",
      blueprintTitle: "Terrace Retaining Bastion & Micropile Section",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-EST-084-SEC-B",
      description: "Four-tier dry-stack Istrian limestone retaining terraces, cascading infinity reflection basins, and Mediterranean arboriculture anchored into steep coastal dolomite cliffs.",
      extendedDescription: "Perched 180 meters above the Mediterranean coastline, the Villa Medicea commission required delicate micro-anchoring on steep dolomite slopes. We implemented custom subterranean hydrostatic drainage relief channels and sourced authentic Istrian limestone hand-dressed by master stonemasons.",
      materials: ["Hand-Dressed Istrian Limestone", "Basalt Sub-base Matrix", "Hydraulic Pozzolanic Lime Mortar", "Titanium Anchors"],
      protocols: ["Seismic Slope Stabilization", "Saline Atmospheric Barrier", "Hydrostatic Pressure Equalization"],
      planDocs: [
        { sheetNo: "A-101", title: "Master Ground Terracing Plan", category: "Architectural", scale: "1:100", fileSize: "18.4 MB" },
        { sheetNo: "S-204", title: "Geotechnical Tieback Anchor Details", category: "Structural", scale: "1:25", fileSize: "24.1 MB" },
        { sheetNo: "M-08", title: "Istrian Limestone Provenance Dossier", category: "Geological", scale: "N/A", fileSize: "8.6 MB" }
      ],
      stats: { budget: "$3,850,000", duration: "16 Weeks", client: "Private Family Office", completion: "Autumn 2025", scopeSqFt: "14,500 sq.ft." }
    },
    {
      id: 2,
      title: "Sultan Qaboos Royal Colonnade",
      category: "mosque",
      categoryLabel: "Grand Mosque",
      location: "Muscat Governorate · Sultanate of Oman",
      image: "/src/assets/images/mosque_courtyard_marble_1794058073956.jpg",
      blueprintType: "mosque",
      blueprintTitle: "Congregational Courtyard & Minaret Caisson Engineering",
      blueprintScale: "1:100 Metric",
      blueprintRef: "DWG-MSQ-OMN-001",
      description: "Hand-dressed Thassos crystalline white marble colonnades, monumental minarets, multi-layered reflective courtyard pools, and intricate lapis and gold Islamic geometric inlays.",
      extendedDescription: "Spanning a monumental congregational courtyard, this completed masterwork features precision water-jet marble inlays, subterranean thermal radiant sub-cooling for barefoot pilgrims, and non-destructive seismological reinforcement of the central minaret.",
      materials: ["Greek Thassos Pure White Marble", "Omani Desert Rose Travertine", "Afghan Lapis Lazuli Inlays", "24-Karat Gold Mosaic Leaf"],
      protocols: ["Sub-surface Thermal Sub-cooling", "Sacred Geometry Optical Alignment", "Zero-Porosity Sealant System"],
      planDocs: [
        { sheetNo: "M-101", title: "Hypostyle Column Grid & Radiant Cooling", category: "Mechanical/Arch", scale: "1:100", fileSize: "32.0 MB" },
        { sheetNo: "S-502", title: "90m Minaret Seismological Core Detail", category: "Structural", scale: "1:50", fileSize: "28.4 MB" }
      ],
      stats: { budget: "$28,500,000", duration: "28 Months", client: "Ministry of Endowments", completion: "Spring 2026", scopeSqFt: "485,000 sq.ft." }
    },
    {
      id: 3,
      title: "Grand Belvedere Palace Water Amphitheater",
      category: "museum",
      categoryLabel: "Palace & Museum",
      location: "Vienna Royal Precinct · Austria",
      image: "/src/assets/images/grand_palace_hardscaping_1794058074270.jpg",
      blueprintType: "atrium",
      blueprintTitle: "Baroque Cascade Hydraulic Piping & Masonry Core",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-BELV-HYD-02",
      description: "Tiered travertine water stairways, cascading fountains, ornate stone balustrades, and restored imperial parterre gardens for a baroque royal residence.",
      extendedDescription: "Restoration and expansion of the monumental 18th-century water cascade at the Belvedere grounds. Our consortium replaced degraded sandstone cores with identical Austrian St. Margarethen calcarenite and installed hidden variable-frequency hydraulic recirculation.",
      materials: ["Austrian St. Margarethen Calcarenite", "Adnet Limestone Flagstones", "Cast Bronze Fountain Nozzles", "Lead-Capped Coping Stones"],
      protocols: ["Monument Preservation Act", "Closed-Loop Hydraulic Conservation", "Biological Biocide Regimen"],
      planDocs: [
        { sheetNo: "H-201", title: "Subterranean VFD Hydraulic Recirculation System", category: "Hydraulic", scale: "1:50", fileSize: "14.2 MB" }
      ],
      stats: { budget: "$14,200,000", duration: "18 Months", client: "Austrian Federal Monuments Authority", completion: "Summer 2025", scopeSqFt: "64,000 sq.ft." }
    },
    {
      id: 4,
      title: "National Antiquities Museum Atrium Modernization",
      category: "museum",
      categoryLabel: "Palace & Museum",
      location: "Ringstraße · Vienna, Austria",
      image: "/src/assets/images/museum_atrium_marble_1794056502385.jpg",
      blueprintType: "atrium",
      blueprintTitle: "Imperial Atrium Structural Glass Lantern & HVAC Trench",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-MUS-VIE-102",
      description: "Transformation of a 19th-century Neo-Renaissance atrium with climate-regulated structural glass, fiber-optic antiquities illumination, and Adnet honey marble galleries.",
      extendedDescription: "Modernizing a historic museum atrium without disturbing irreplaceable Hellenistic and Roman sculptures required zero-vibration micro-trenching, non-percussive diamond core boring, and acoustic dampening panels.",
      materials: ["Austrian Adnet Honey Marble", "Ultra-Clear Low-Iron Structural Glass", "Patinated Architectural Bronze", "Seismic Base Isolators"],
      protocols: ["Zero-Vibration Threshold (<0.15 mm/s)", "Microclimatic Air Curtains", "Particulate & Humidity Governance"],
      planDocs: [
        { sheetNo: "A-301", title: "Glass Lantern Structural Tension Truss", category: "Architectural", scale: "1:25", fileSize: "17.6 MB" }
      ],
      stats: { budget: "$12,400,000", duration: "14 Months", client: "Federal Ministry of Culture", completion: "Spring 2026", scopeSqFt: "26,000 sq.ft." }
    },
    {
      id: 5,
      title: "Aegina Acropolis Ashlar Wall Stabilization",
      category: "antiquity",
      categoryLabel: "Heritage & Antiquity",
      location: "Saronic Gulf · Aegina, Greece",
      image: "/src/assets/images/acropolis_stone_wall_1794056512464.jpg",
      blueprintType: "archaeological",
      blueprintTitle: "Ashlar Masonry Reversible Tendon Cross-Section",
      blueprintScale: "1:20 Metric",
      blueprintRef: "DWG-ANC-AEG-07",
      description: "Non-invasive structural grouting, seismic isolation joints, and traditional mortar replication to secure 4th-century BCE ashlar fortifications against coastal erosion.",
      extendedDescription: "Working under strict international preservation guidelines, our conservators synthesized a pozzolanic grout matching the chemical fingerprint of classical Greek mortars. Reversible stainless-steel tension tendons reinforce leaning colonnades without piercing historical stone.",
      materials: ["Santorini Volcanic Pozzolan", "Pure Air Lime CL-90", "Marine-Grade 316L Stainless Tendons", "Parian Marble Inlays"],
      protocols: ["ICOMOS Venice Charter 1964", "Reversible Engineering Standard", "Sub-Millimeter Photogrammetric Alignment"],
      planDocs: [
        { sheetNo: "U-102", title: "ICOMOS Reversible Intervention Dossier", category: "Conservation", scale: "N/A", fileSize: "16.4 MB" }
      ],
      stats: { budget: "$5,100,000", duration: "24 Months", client: "Ephorate of Antiquities", completion: "Winter 2025", scopeSqFt: "18,200 sq.ft." }
    },
    {
      id: 6,
      title: "Kyoto Daitoku-ji Imperial Sanctuary Hardscaping",
      category: "antiquity",
      categoryLabel: "Heritage & Antiquity",
      location: "Kita Ward · Kyoto, Japan",
      image: "/src/assets/images/kyoto_zen_garden_1794056511443.jpg",
      blueprintType: "archaeological",
      blueprintTitle: "Zen Sanctuary Hydraulic Drainage & Boulder Anchors",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-KYO-DTK-01",
      description: "Restoration of a Muromachi-period sanctuary garden featuring raked Shirakawa granitic gravel, hand-positioned Kurama volcanic boulders, and cedar verandas.",
      extendedDescription: "Preserving historical Zen temple courtyards requires balancing centuries-old stonemasonry techniques with invisible subterranean drainage to manage torrential typhoon runoff without shifting raked granitic sands.",
      materials: ["Kyoto Shirakawa Granitic Gravel", "Kurama Natural Volcanic Stone", "Hinoki Cypress Timbers", "Charcoal Filtration Base"],
      protocols: ["Cultural Affairs Oversight", "Traditional Sukiya Masonry Guilds", "Sub-surface Aquifer Replenishment"],
      planDocs: [
        { sheetNo: "J-01", title: "Typhoon Hydraulic Runoff Sub-Base Scheme", category: "Civil", scale: "1:50", fileSize: "11.2 MB" }
      ],
      stats: { budget: "$4,200,000", duration: "12 Months", client: "Imperial Household Cultural Guild", completion: "Spring 2025", scopeSqFt: "16,000 sq.ft." }
    },
    {
      id: 7,
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
      extendedDescription: "Engineered for sovereign state events, our team engineered massive thermal expansion joints accommodating 50°C summer heat variations without marble cracking.",
      materials: ["Macedonian Sivec White Marble", "Italian Lasa Bianco Floor Pavers", "Mother of Pearl Floral Inlays", "Titanium Expansion Joint Strips"],
      protocols: ["Extreme Thermal Cyclic Testing", "Specular Reflectivity Water Calibration", "Acoustic Prayer Amplification"],
      planDocs: [
        { sheetNo: "M-401", title: "Thermal Cyclic Expansion Joint Detail", category: "Structural", scale: "1:10", fileSize: "15.8 MB" }
      ],
      stats: { budget: "$22,000,000", duration: "20 Months", client: "Presidency of Presidential Affairs", completion: "Autumn 2025", scopeSqFt: "115,000 sq.ft." }
    },
    {
      id: 8,
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
      materials: ["Tivoli Vein-Cut Roman Travertine", "Campanian Tuff Stone Core", "Post-Tensioned Carbon Fiber Tendons", "Hand-Forged Bronze Railings"],
      protocols: ["Amalfi Coast Landscape Preservation", "Post-Tension Seismic Tension Audit", "Saline Corrosion Shield"],
      planDocs: [
        { sheetNo: "S-101", title: "Cantilevered Slab Stress & Bending Diagram", category: "Structural", scale: "1:25", fileSize: "21.0 MB" }
      ],
      stats: { budget: "$6,800,000", duration: "18 Weeks", client: "Private European Estate Trust", completion: "Spring 2025", scopeSqFt: "18,500 sq.ft." }
    },
    {
      id: 9,
      title: "Florence Uffizi Gallery Loggia Classical Repaving",
      category: "museum",
      categoryLabel: "Palace & Museum",
      location: "Piazza degli Uffizi · Florence, Italy",
      image: "/src/assets/images/florence_uffizi_loggia_1794312385726.jpg",
      blueprintType: "atrium",
      blueprintTitle: "Vasari Corridor Foundation & Pietra Serena Paving Plan",
      blueprintScale: "1:100 Metric",
      blueprintRef: "DWG-UFF-FLR-01",
      description: "Restoration of the Renaissance Vasari loggia with hand-quarried Pietra Serena grey sandstone flagstones, subterranean rainwater diversion, and brass expansion inlays.",
      extendedDescription: "Commissioned by cultural heritage authorities, our master stonemasons reopened a historic quarry in Firenzuola to obtain authentic Pietra Serena sandstone matching Giorgio Vasari's original 1560 grain structure.",
      materials: ["Firenzuola Pietra Serena Sandstone", "Carrara Bianco Marble Thresholds", "Natural Hydraulic Lime NHL 3.5", "Phosphor Bronze Joint Seals"],
      protocols: ["Historical Pigment Match", "Pedestrian Micro-Vibration Isolation", "Subterranean Rainwater Flumes"],
      planDocs: [
        { sheetNo: "F-102", title: "Pietra Serena Petrographic Authenticity Seal", category: "Heritage", scale: "N/A", fileSize: "12.0 MB" }
      ],
      stats: { budget: "$8,900,000", duration: "10 Months", client: "Gallerie degli Uffizi & Heritage Directorate", completion: "Summer 2025", scopeSqFt: "32,000 sq.ft." }
    },
    {
      id: 10,
      title: "Petra Royal Tombs Siq Monumental Drainage",
      category: "antiquity",
      categoryLabel: "Heritage & Antiquity",
      location: "Ma'an Governorate · Hashemite Kingdom of Jordan",
      image: "/src/assets/images/petra_sandstone_monument_1794312385963.jpg",
      blueprintType: "archaeological",
      blueprintTitle: "Nabataean Hydraulic Dam & Sandstone Siphon Plan",
      blueprintScale: "1:150 Metric",
      blueprintRef: "DWG-ANC-PTR-05",
      description: "Restoration of ancient 1st-century CE Nabataean hydraulic diversion tunnels, flood retention terraces, and sandstone retaining bastions to safeguard carved facades.",
      extendedDescription: "To shield the fragile rose sandstone tombs from flash-flood scouring, our consortium combined traditional lime-ashlar weir reconstruction with hidden subterranean stainless overflow flumes.",
      materials: ["Local Disi Sandstone", "Crushed Ceramic Pozzolana", "High-Nickel Stainless Weirs", "Erosion-Control Coir Geotextile"],
      protocols: ["World Heritage Compliance", "Flash Flood Hazard Mitigation Index", "Non-Intrusive Core Stabilization"],
      planDocs: [
        { sheetNo: "U-404", title: "100-Year Flash Flood Hydraulic Flow Vector", category: "Hydrology", scale: "1:150", fileSize: "26.5 MB" }
      ],
      stats: { budget: "$9,500,000", duration: "30 Months", client: "Petra Development Authority", completion: "Winter 2025", scopeSqFt: "85,000 sq.ft." }
    },
    {
      id: 11,
      title: "Konya Seljuk Sacred Sanctuary Courtyard",
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
      materials: ["Afyon White & Honey Marble", "Traditional Cobalt & Turquoise Faience", "Hydraulic Horasan Mortar", "Under-floor Thermal Barrier"],
      protocols: ["Traditional Foundations Standard", "Sacred Geometry Astro-Alignment", "Non-Chemical Glaze Stabilization"],
      planDocs: [
        { sheetNo: "V-10", title: "Horasan Lime Mortar Chemical Analysis", category: "Conservation", scale: "N/A", fileSize: "14.0 MB" }
      ],
      stats: { budget: "$7,300,000", duration: "16 Months", client: "Directorate General of Foundations", completion: "Spring 2025", scopeSqFt: "34,000 sq.ft." }
    },
    {
      id: 12,
      title: "Villa Balbianello Tiered Balustrade Terraces",
      category: "clifftop",
      categoryLabel: "Clifftop Estate",
      location: "Lake Como · Lombardy, Italy",
      image: "/src/assets/images/lake_como_villa_terrace_1794312399785.jpg",
      blueprintType: "clifftop",
      blueprintTitle: "Lake Scour Sub-surface Grout & Terrace Section",
      blueprintScale: "1:50 Metric",
      blueprintRef: "DWG-EST-BAL-01",
      description: "Restoration of 18th-century tiered balustrade terraces, lakeside loggias, century-old plane trees, and hand-carved Moltrasio limestone boat dock cryptoporticus.",
      extendedDescription: "Dramatically extending into Lake Como on the Lavedo peninsula, this iconic villa's terrace walls required complete stone re-grouting and micro-pinning to counter wave scour, coupled with custom heating cables to prevent frost cracking.",
      materials: ["Moltrasio Local Limestone", "Carrara Marble Balustrade Spindles", "Sub-surface Heating Fiber Cables", "Hydraulic Roman Pozzolan"],
      protocols: ["National Trust Compliance", "Underwater Scour Protection", "Heritage Plane Tree Root Safeguard"],
      planDocs: [
        { sheetNo: "FAI-09", title: "Submerged Foundation Inspection Log", category: "Marine Heritage", scale: "1:50", fileSize: "15.0 MB" }
      ],
      stats: { budget: "$5,400,000", duration: "14 Weeks", client: "FAI National Trust of Italy", completion: "Spring 2025", scopeSqFt: "22,000 sq.ft." }
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

  const galleryProjects = useMemo(() => {
    if (galleryCategory === 'all') return projects;
    return projects.filter(p => p.category === galleryCategory);
  }, [projects, galleryCategory]);

  const counts = useMemo(() => {
    return {
      all: projects.length,
      clifftop: projects.filter(p => p.category === 'clifftop').length,
      mosque: projects.filter(p => p.category === 'mosque').length,
      museum: projects.filter(p => p.category === 'museum').length,
      antiquity: projects.filter(p => p.category === 'antiquity').length,
    };
  }, [projects]);

  // Estimator Calculations
  const getBaseRate = () => {
    switch(estimatorDomain) {
      case 'estate': return 320;
      case 'mosque': return 650;
      case 'palace': return 520;
      case 'heritage': return 420;
      default: return 350;
    }
  };

  const getTierMultiplier = () => {
    switch(tier) {
      case 'standard': return 1.0;
      case 'luxury': return 1.35;
      case 'museum-grade': return 1.75;
      case 'heritage-certified': return 2.2;
      default: return 1.2;
    }
  };

  const baseSubtotal = Math.round(scopeSize * getBaseRate() * getTierMultiplier());
  const calculatedEstimate = baseSubtotal 
    + (includeConsortium ? 75000 : 0)
    + (includeSeismicSensors ? 45000 : 0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessKeyInput.trim() || !pinInput.trim()) {
      showToast('Please enter both client identifier and security PIN.');
      return;
    }
    setClientAuth({
      isAuthenticated: true,
      clientName: accessKeyInput.includes('@') ? accessKeyInput.split('@')[0].toUpperCase() : accessKeyInput.toUpperCase(),
      projectCode: 'AM-VAULT-2026',
      role: 'Trustee / Senior Curator'
    });
    showToast('Vault credentials verified.');
  };

  const handleDemoLogin = () => {
    setAccessKeyInput('curator@vienna-antiquities.at');
    setPinInput('AM-VIENNA-2026');
    setClientAuth({
      isAuthenticated: true,
      clientName: 'VIENNA ANTIQUITIES CONSORTIUM',
      projectCode: 'AM-AUT-VIE-01',
      role: 'Board Trustee & Senior Curator'
    });
    showToast('Demo Trustee Credentials Loaded.');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] font-sans antialiased selection:bg-[#855712] selection:text-white flex flex-col justify-between">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1917] text-[#FAF8F5] px-5 py-3.5 border border-[#855712]/40 shadow-2xl flex items-center gap-3 font-cinzel text-xs tracking-wider animate-in fade-in slide-in-from-bottom-3 duration-300">
          <BespokeMonogram className="w-5 h-5 text-[#E6C687] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Header */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E7E2D5] shadow-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          
          {/* Brand Wordmark */}
          <button 
            type="button"
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3.5 text-left group shrink-0"
          >
            <BespokeMonogram className="w-8 h-8 text-[#855712] group-hover:rotate-12 transition-transform duration-500" />
            <div>
              <div className="font-cinzel text-lg tracking-[0.2em] font-semibold text-[#1C1917] uppercase">
                Aureus & Monument
              </div>
              <div className="text-[11px] font-sans text-[#78716C] tracking-wide font-normal">
                Architectural Atelier · Tucson, Arizona
              </div>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-cinzel tracking-wider uppercase">
            <button 
              type="button"
              onClick={() => setActiveTab('home')}
              className={`py-2 transition-colors relative whitespace-nowrap ${activeTab === 'home' ? 'text-[#855712] font-semibold' : 'text-[#44403C] hover:text-[#1C1917]'}`}
            >
              Home
              {activeTab === 'home' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#855712]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('commissions')}
              className={`py-2 transition-colors relative whitespace-nowrap ${activeTab === 'commissions' ? 'text-[#855712] font-semibold' : 'text-[#44403C] hover:text-[#1C1917]'}`}
            >
              Commissions ({projects.length})
              {activeTab === 'commissions' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#855712]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('directorate')}
              className={`py-2 transition-colors relative whitespace-nowrap ${activeTab === 'directorate' ? 'text-[#855712] font-semibold' : 'text-[#44403C] hover:text-[#1C1917]'}`}
            >
              Directorate
              {activeTab === 'directorate' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#855712]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`py-2 transition-colors relative whitespace-nowrap ${activeTab === 'gallery' ? 'text-[#855712] font-semibold' : 'text-[#44403C] hover:text-[#1C1917]'}`}
            >
              Archive Gallery
              {activeTab === 'gallery' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#855712]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('estimator')}
              className={`py-2 transition-colors relative whitespace-nowrap ${activeTab === 'estimator' ? 'text-[#855712] font-semibold' : 'text-[#44403C] hover:text-[#1C1917]'}`}
            >
              Calculator
              {activeTab === 'estimator' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#855712]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('heritage')}
              className={`py-2 transition-colors relative whitespace-nowrap ${activeTab === 'heritage' ? 'text-[#855712] font-semibold' : 'text-[#44403C] hover:text-[#1C1917]'}`}
            >
              Charters
              {activeTab === 'heritage' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#855712]" />}
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('client-portal')}
              className={`py-2 transition-colors relative flex items-center gap-1.5 whitespace-nowrap ${activeTab === 'client-portal' ? 'text-[#855712] font-semibold' : 'text-[#44403C] hover:text-[#1C1917]'}`}
            >
              <BespokeVault className="w-4 h-4 text-[#855712]" />
              <span>Client Vault</span>
              {activeTab === 'client-portal' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#855712]" />}
            </button>
          </nav>

          {/* Primary Action & Contact Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="tel:+18679881524" 
              className="hidden sm:inline-block text-xs font-mono text-[#78716C] hover:text-[#855712] tracking-wider transition-colors"
            >
              +1 (867) 988-1524
            </a>
            <button 
              type="button"
              onClick={() => setActiveTab('estimator')}
              className="px-5 py-2.5 bg-[#855712] hover:bg-[#6D470E] text-white text-xs font-cinzel font-medium tracking-[0.16em] uppercase transition-colors shadow-xs"
            >
              Inquire
            </button>
          </div>
        </div>

        {/* Mobile Navigation Strip */}
        <div className="lg:hidden bg-[#F7F4EE] border-t border-[#E7E2D5] px-4 py-2 flex items-center gap-2 overflow-x-auto text-xs font-cinzel uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'home' ? 'bg-[#855712] text-white border-[#855712]' : 'bg-white text-[#44403C] border-[#E7E2D5]'}`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('commissions')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'commissions' ? 'bg-[#855712] text-white border-[#855712]' : 'bg-white text-[#44403C] border-[#E7E2D5]'}`}
          >
            Commissions
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('directorate')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'directorate' ? 'bg-[#855712] text-white border-[#855712]' : 'bg-white text-[#44403C] border-[#E7E2D5]'}`}
          >
            Directorate
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('gallery')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'gallery' ? 'bg-[#855712] text-white border-[#855712]' : 'bg-white text-[#44403C] border-[#E7E2D5]'}`}
          >
            Gallery
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('estimator')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'estimator' ? 'bg-[#855712] text-white border-[#855712]' : 'bg-white text-[#44403C] border-[#E7E2D5]'}`}
          >
            Calculator
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('heritage')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'heritage' ? 'bg-[#855712] text-white border-[#855712]' : 'bg-white text-[#44403C] border-[#E7E2D5]'}`}
          >
            Charters
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('client-portal')}
            className={`shrink-0 px-3 py-1.5 border transition-colors ${activeTab === 'client-portal' ? 'bg-[#855712] text-white border-[#855712]' : 'bg-white text-[#44403C] border-[#E7E2D5]'}`}
          >
            Vault
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex-1 w-full">
        
        {/* ======================================================== */}
        {/* TAB: HOMEPAGE / LANDING PAGE (DEFAULT VIEW) */}
        {/* ======================================================== */}
        {activeTab === 'home' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            
            {/* Hero Section */}
            <section className="bg-white border border-[#E7E2D5] p-6 sm:p-10 lg:p-14 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Narrative */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-[0.25em] text-[#855712] font-semibold">
                    <span>Atelier Established in Tucson, Arizona</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1917] leading-[1.12] font-normal">
                    Master Hardscaping & Monumental Heritage Conservation
                  </h1>

                  <p className="text-sm sm:text-base text-[#44403C] leading-relaxed max-w-lg">
                    Aureus & Monument Atelier designs, engineers, and conserves private clifftop estate terraces, sacred grand mosque courtyards, and museum-grade architectural landmarks.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab('commissions')}
                      className="px-6 py-3.5 bg-[#855712] hover:bg-[#6D470E] text-white text-xs font-cinzel tracking-[0.18em] uppercase transition-colors shadow-xs"
                    >
                      Explore Commissions ({projects.length})
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('directorate')}
                      className="px-6 py-3.5 bg-[#FBF9F5] hover:bg-[#F3EFE8] border border-[#E7E2D5] text-[#1C1917] text-xs font-cinzel tracking-[0.18em] uppercase transition-colors"
                    >
                      Meet the Directorate
                    </button>
                  </div>

                  <div className="pt-4 border-t border-[#F3EFE8] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#78716C] font-cinzel">
                    <span>4500 E Skyline Dr, Tucson, AZ</span>
                    <span>·</span>
                    <a href="tel:+18679881524" className="hover:text-[#855712] text-[#44403C] font-mono">+1 (867) 988-1524</a>
                    <span>·</span>
                    <a href="mailto:aureusmonument@email.com" className="hover:text-[#855712] text-[#44403C]">aureusmonument@email.com</a>
                  </div>
                </div>

                {/* Right Hero Visual Plate */}
                <div 
                  className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-[#1C1917] border border-[#E7E2D5] shadow-md group cursor-pointer"
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
                    alt="Featured Clifftop Estate: Villa Medicea"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-[#1C1917]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-5 py-2.5 bg-white text-[#1C1917] text-xs font-cinzel uppercase tracking-[0.16em] flex items-center gap-2 shadow-lg font-medium">
                      <BespokeZoom className="w-4 h-4 text-[#855712]" />
                      Inspect Monograph
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1C1917]/90 backdrop-blur-xs px-4 py-3 border border-white/10 text-white flex items-center justify-between text-xs">
                    <div>
                      <div className="font-serif-luxury text-base font-normal">Villa Medicea Cliffside Terraces</div>
                      <div className="text-[11px] font-cinzel text-[#E6C687]">Cap d'Ail · Monaco & French Riviera</div>
                    </div>
                    <span className="text-xs text-[#CBD5E1] font-cinzel">View Dossier →</span>
                  </div>
                </div>

              </div>
            </section>

            {/* Core Architectural Pillars */}
            <section className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#855712] font-semibold">
                  Disciplines & Capabilities
                </span>
                <h2 className="text-3xl font-serif-luxury text-[#1C1917] font-normal">
                  Four Pillars of Atelier Excellence
                </h2>
                <p className="text-sm text-[#44403C]">
                  Every commission combines ancient stonemasonry guilds with modern geotechnical engineering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    no: "01",
                    title: "Clifftop Estate Bastions",
                    desc: "Multi-tiered dry-stack limestone retaining walls, post-tensioned cantilevered terraces, and deep bedrock micropile stabilization on steep coastal topography.",
                    materials: "Istrian Limestone · Roman Travertine"
                  },
                  {
                    no: "02",
                    title: "Sacred Grand Mosques",
                    desc: "Monumental crystalline marble hypostyle peristyles, reflective courtyard basins, subterranean radiant cooling, and sacred geometric lapis inlays.",
                    materials: "Greek Thassos · Sivec White Marble"
                  },
                  {
                    no: "03",
                    title: "Palaces & Museum Atriums",
                    desc: "Classical loggia repaving, imperial water amphitheaters, variable-frequency hydraulic cascades, and zero-vibration structural glass enclosures.",
                    materials: "Pietra Serena · Adnet Marble"
                  },
                  {
                    no: "04",
                    title: "Heritage & Antiquities",
                    desc: "ICOMOS Venice Charter 1964 certified restoration, non-invasive pozzolanic mortars, and reversible stainless structural tendon reinforcement.",
                    materials: "Santorini Pozzolan · Parian Marble"
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="bg-white border border-[#E7E2D5] p-6 space-y-4 hover:border-[#855712] transition-colors shadow-xs">
                    <span className="font-mono text-xs text-[#855712] font-semibold block">{pillar.no}.</span>
                    <h3 className="font-serif-luxury text-xl text-[#1C1917] font-normal">{pillar.title}</h3>
                    <p className="text-xs text-[#44403C] leading-relaxed">{pillar.desc}</p>
                    <div className="pt-3 border-t border-[#F3EFE8] text-[11px] font-cinzel text-[#78716C]">
                      {pillar.materials}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Leadership Spotlight Preview */}
            <section className="bg-white border border-[#E7E2D5] p-8 lg:p-12 space-y-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E7E2D5] pb-6">
                <div>
                  <span className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#855712] font-semibold">
                    Atelier Governance
                  </span>
                  <h2 className="text-3xl font-serif-luxury text-[#1C1917] font-normal mt-1">
                    The Atelier Directorate
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('directorate')}
                  className="text-xs font-cinzel text-[#855712] hover:text-[#6D470E] font-semibold uppercase tracking-wider"
                >
                  View Complete Profiles →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {leaders.map((leader) => (
                  <div key={leader.id} className="space-y-3 group cursor-pointer" onClick={() => setActiveTab('directorate')}>
                    <div className="aspect-square overflow-hidden bg-[#F3EFE8] border border-[#E7E2D5]">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif-luxury text-lg text-[#1C1917] group-hover:text-[#855712] transition-colors font-medium">
                        {leader.name}
                      </h4>
                      <p className="text-xs text-[#855712] font-cinzel font-medium mt-0.5">
                        {leader.role}
                      </p>
                      <p className="text-xs text-[#78716C] mt-1 line-clamp-2">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Masterworks Carousel/Grid Preview */}
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E7E2D5] pb-5">
                <div>
                  <span className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#855712] font-semibold">
                    Curated Archive
                  </span>
                  <h2 className="text-3xl font-serif-luxury text-[#1C1917] font-normal mt-1">
                    Featured Master Commissions
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('commissions')}
                  className="text-xs font-cinzel text-[#855712] hover:text-[#6D470E] font-semibold uppercase tracking-wider"
                >
                  View All 12 Works →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((proj) => (
                  <article
                    key={proj.id}
                    onClick={() => {
                      setModalItem(proj);
                      setModalActiveSubTab('overview');
                    }}
                    className="bg-white border border-[#E7E2D5] hover:border-[#855712] transition-all cursor-pointer group shadow-xs overflow-hidden flex flex-col justify-between"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#F3EFE8] relative">
                      <img 
                        src={proj.image} 
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#1C1917]/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 bg-white text-[#1C1917] text-xs font-cinzel uppercase tracking-wider">
                          Inspect Monograph
                        </span>
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="text-xs text-[#855712] font-cinzel uppercase tracking-wider font-semibold">
                        {proj.categoryLabel}
                      </div>
                      <h3 className="font-serif-luxury text-lg text-[#1C1917] group-hover:text-[#855712] transition-colors leading-snug font-normal">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#78716C]">
                        {proj.location}
                      </p>
                      <p className="text-xs text-[#44403C] line-clamp-2 pt-1">
                        {proj.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Direct Contact Banner */}
            <section className="bg-[#1C1917] text-[#FAF8F5] p-8 sm:p-12 border border-[#855712]/30 shadow-xl space-y-6">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#E6C687] font-semibold">
                  Tucson, Arizona Atelier
                </span>
                <h3 className="text-3xl font-serif-luxury text-white font-normal">
                  Initiate an Architectural Commission
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  Our directorate conducts private consultations for sovereign trusts, estate managers, and cultural authorities worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10 text-xs font-cinzel">
                <div>
                  <span className="text-[#94A3B8] block text-[11px] uppercase">Studio Address</span>
                  <span className="text-white font-medium mt-1 block">4500 E Skyline Drive, Suite 240<br/>Tucson, AZ 85718</span>
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[11px] uppercase">Direct Inquiries</span>
                  <a href="mailto:aureusmonument@email.com" className="text-[#E6C687] hover:underline font-mono mt-1 block text-sm">
                    aureusmonument@email.com
                  </a>
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[11px] uppercase">Telephone</span>
                  <a href="tel:+18679881524" className="text-[#E6C687] hover:underline font-mono mt-1 block text-sm">
                    +1 (867) 988-1524
                  </a>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: DIRECTORATE / LEADERSHIP SECTION */}
        {/* ======================================================== */}
        {activeTab === 'directorate' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#855712] uppercase font-semibold">
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917] font-normal">
                Atelier Directorate
              </h2>
              <p className="text-sm text-[#44403C]">
                Meet the four principals directing our architectural engineering, sovereign commissions, structural safety, and heritage charters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((leader) => (
                <div key={leader.id} className="bg-white border border-[#E7E2D5] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-xs hover:border-[#855712] transition-colors">
                  <div className="sm:w-44 shrink-0">
                    <div className="aspect-square overflow-hidden bg-[#F3EFE8] border border-[#E7E2D5]">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif-luxury text-2xl text-[#1C1917] font-normal">{leader.name}</h3>
                      <div className="text-xs font-cinzel text-[#855712] font-semibold uppercase tracking-wider mt-0.5">
                        {leader.role}
                      </div>
                      <div className="text-[11px] text-[#78716C] font-mono mt-1">
                        {leader.credentials}
                      </div>
                      <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed mt-3">
                        {leader.bio}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F3EFE8]">
                      <span className="text-[10px] font-cinzel uppercase text-[#78716C] tracking-wider block mb-1">
                        Principal Oversight
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.oversight.map((item, i) => (
                          <span key={i} className="text-[11px] bg-[#FBF9F5] border border-[#E7E2D5] px-2 py-0.5 text-[#1C1917] font-sans">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-[#E7E2D5] p-8 text-center space-y-4">
              <h3 className="font-serif-luxury text-2xl text-[#1C1917]">Direct Directorate Engagement</h3>
              <p className="text-sm text-[#44403C] max-w-xl mx-auto">
                All major commissions are personally led by our Managing Principal and designated Directorate partners from initial geotechnical feasibility to final stonemasonry sign-off.
              </p>
              <div className="pt-2">
                <a 
                  href="mailto:aureusmonument@email.com" 
                  className="inline-block px-6 py-3 bg-[#855712] hover:bg-[#6D470E] text-white text-xs font-cinzel uppercase tracking-[0.16em] transition-colors"
                >
                  Contact Directorate Directly
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: COMMISSIONS CATALOGUE (12 CLEAN THUMBNAILS, NO ROMAN NUMERALS) */}
        {/* ======================================================== */}
        {activeTab === 'commissions' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            
            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E7E2D5] pb-5">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#1C1917] font-normal">
                  Permanent Architectural Archive
                </h2>
                <p className="text-xs text-[#78716C] mt-1 font-sans">
                  Explore verified stone masonry, hydraulic cascades, and heritage conservations.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-72">
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by title, material, or city..."
                  className="w-full bg-white border border-[#D5CCBD] px-4 py-2 text-xs font-sans text-[#1C1917] placeholder:text-[#8C827A] focus:outline-none focus:border-[#855712]"
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2 text-[#78716C] hover:text-[#1C1917] text-xs font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Typology Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-cinzel uppercase tracking-wider">
              {[
                { id: 'all', label: `All Works (${counts.all})` },
                { id: 'clifftop', label: `Clifftop Estates (${counts.clifftop})` },
                { id: 'mosque', label: `Grand Mosques (${counts.mosque})` },
                { id: 'museum', label: `Palaces & Museums (${counts.museum})` },
                { id: 'antiquity', label: `Heritage & Antiquities (${counts.antiquity})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedDomain(tab.id)}
                  className={`px-4 py-2 border transition-all ${
                    selectedDomain === tab.id 
                      ? 'bg-[#855712] text-white border-[#855712] font-semibold shadow-xs' 
                      : 'bg-white text-[#44403C] border-[#E7E2D5] hover:border-[#855712]/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Projects Grid: Clean Thumbnails with Zero Roman Numerals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => {
                    setModalItem(project);
                    setModalActiveSubTab('overview');
                  }}
                  className="group bg-white border border-[#E7E2D5] hover:border-[#855712] transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  {/* Clean Visual Media Plate (No Roman Numerals on Image) */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F3EFE8]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Clean Hover Inspection Overlay */}
                    <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <span className="px-4 py-2 bg-white text-[#1C1917] text-xs font-cinzel uppercase tracking-[0.16em] flex items-center gap-2 shadow-lg font-medium">
                        <BespokeZoom className="w-4 h-4 text-[#855712]" />
                        Inspect Monograph & Plans →
                      </span>
                    </div>
                  </div>

                  {/* Clean Descriptive Typography */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-xs text-[#855712] font-cinzel uppercase tracking-wider font-semibold">
                        {project.categoryLabel} · {project.location.split('·')[0].trim()}
                      </div>
                      <h3 className="text-lg font-serif-luxury text-[#1C1917] group-hover:text-[#855712] transition-colors leading-snug mt-1 font-normal">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#44403C] leading-relaxed mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F3EFE8] flex items-center justify-between text-xs text-[#78716C]">
                      <span>{project.stats.scopeSqFt}</span>
                      <span className="text-[#855712] font-cinzel font-semibold group-hover:translate-x-1 transition-transform">
                        View Dossier →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: ARCHIVE GALLERY (CLEAN THUMBNAILS & FULLSCREEN LIGHTBOX) */}
        {/* ======================================================== */}
        {activeTab === 'gallery' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#855712] uppercase font-semibold">
                Permanent Photographic Archive
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917] font-normal">
                Sovereign Architectural Gallery
              </h2>
              <p className="text-sm text-[#44403C] leading-relaxed">
                High-resolution photographic plates of completed estates, sacred colonnades, and museum atriums. Select any plate to inspect in full resolution.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#E7E2D5] pb-5 text-xs font-cinzel uppercase tracking-wider">
              {[
                { id: 'all', label: `All Plates (${projects.length})` },
                { id: 'clifftop', label: `Clifftop Estates (${counts.clifftop})` },
                { id: 'mosque', label: `Grand Mosques (${counts.mosque})` },
                { id: 'museum', label: `Palaces & Museums (${counts.museum})` },
                { id: 'antiquity', label: `Antiquities (${counts.antiquity})` },
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setGalleryCategory(f.id)}
                  className={`px-4 py-2 transition-all border ${
                    galleryCategory === f.id
                      ? 'bg-[#855712] text-white border-[#855712] font-semibold shadow-xs'
                      : 'bg-white text-[#44403C] border-[#E7E2D5] hover:border-[#855712]/60'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Grid of Clean Thumbnails */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryProjects.map((proj) => {
                const projectIndex = projects.findIndex(p => p.id === proj.id);
                return (
                  <div
                    key={proj.id}
                    className="group bg-white border border-[#E7E2D5] hover:border-[#855712] transition-all duration-300 shadow-xs flex flex-col overflow-hidden"
                  >
                    {/* Clean Image Stage */}
                    <div 
                      className="relative aspect-4/3 overflow-hidden bg-[#1C1917] cursor-pointer"
                      onClick={() => setLightboxIndex(projectIndex)}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                      />

                      <div className="absolute inset-0 bg-[#1C1917]/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <span className="px-4 py-2 bg-white text-[#1C1917] text-xs font-cinzel uppercase tracking-[0.16em] flex items-center gap-2 shadow-lg font-medium">
                          <BespokeZoom className="w-4 h-4 text-[#855712]" />
                          Inspect Plate
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-xs font-cinzel text-[#855712] uppercase tracking-wider font-semibold">
                          {proj.categoryLabel}
                        </div>
                        <h3 
                          onClick={() => setLightboxIndex(projectIndex)}
                          className="font-serif-luxury text-base text-[#1C1917] hover:text-[#855712] cursor-pointer mt-1 line-clamp-1 transition-colors font-medium"
                        >
                          {proj.title}
                        </h3>
                        <p className="text-xs text-[#78716C] mt-0.5">
                          {proj.location}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#F3EFE8] flex items-center justify-between text-xs font-cinzel">
                        <button
                          type="button"
                          onClick={() => setLightboxIndex(projectIndex)}
                          className="text-[#855712] hover:text-[#6D470E] flex items-center gap-1 font-semibold"
                        >
                          <BespokeZoom className="w-3.5 h-3.5" />
                          <span>Fullscreen</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setModalItem(proj);
                            setModalActiveSubTab('overview');
                          }}
                          className="text-[#44403C] hover:text-[#1C1917] px-3 py-1 bg-[#FBF9F5] border border-[#E7E2D5]"
                        >
                          Monograph →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: COMMISSION CALCULATOR */}
        {/* ======================================================== */}
        {activeTab === 'estimator' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
            <div className="text-center space-y-2">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#855712] uppercase font-semibold">
                Investment Modeling
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917] font-normal">
                Scope & Capital Allocation Calculator
              </h2>
              <p className="text-sm text-[#44403C] max-w-xl mx-auto">
                Model capital expenditure for clifftop promontory terraces, grand mosque courtyards, and museum atriums based on certified stone provenance.
              </p>
            </div>

            <div className="bg-white border border-[#E7E2D5] p-8 lg:p-10 space-y-8 shadow-xs">
              
              <div className="space-y-3">
                <label className="text-xs font-cinzel uppercase tracking-[0.16em] text-[#855712] font-semibold block">
                  Select Architectural Typology
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'estate', label: 'Clifftop Estate', sub: 'Retaining Bastions' },
                    { id: 'mosque', label: 'Grand Mosque', sub: 'Thassos Marble' },
                    { id: 'palace', label: 'Palace & Museum', sub: 'Travertine Cascades' },
                    { id: 'heritage', label: 'Heritage Sanctuary', sub: 'Non-Invasive Masonry' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setEstimatorDomain(d.id as any)}
                      className={`p-3.5 text-left border transition-all ${
                        estimatorDomain === d.id 
                          ? 'bg-[#FBF9F5] border-[#855712] shadow-xs ring-1 ring-[#855712]' 
                          : 'bg-white border-[#E7E2D5] hover:border-[#855712]/50'
                      }`}
                    >
                      <div className="font-cinzel text-xs font-semibold text-[#1C1917]">{d.label}</div>
                      <div className="text-xs text-[#78716C] mt-0.5">{d.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-cinzel">
                  <span className="uppercase tracking-[0.16em] text-[#855712] font-semibold">
                    Scope of Surface Masonry & Terracing
                  </span>
                  <span className="text-[#855712] font-mono font-semibold text-base">
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
                  className="w-full accent-[#855712] bg-[#E7E2D5] h-2 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#78716C] font-mono">
                  <span>2,000 sq.ft. (Private Terrace)</span>
                  <span>45,000 sq.ft. (Sovereign Courtyard)</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-cinzel uppercase tracking-[0.16em] text-[#855712] font-semibold block">
                  Material Sourcing & Engineering Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                  {[
                    { id: 'standard', name: 'Imperial Ashlar', desc: 'Regional quarry limestone' },
                    { id: 'luxury', name: 'Master Provenance', desc: 'Hand-dressed Istrian & Thassos' },
                    { id: 'museum-grade', name: 'Seismic Micro-Piling', desc: 'Titan tiebacks & isolation' },
                    { id: 'heritage-certified', name: 'Sovereign Heritage', desc: 'UNESCO-compliant mortar & seals' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTier(t.id)}
                      className={`p-3 text-left border transition-all ${
                        tier === t.id
                          ? 'bg-[#FBF9F5] border-[#855712] ring-1 ring-[#855712]'
                          : 'bg-white border-[#E7E2D5] hover:border-[#855712]/50'
                      }`}
                    >
                      <div className="font-cinzel font-semibold text-[#1C1917]">{t.name}</div>
                      <div className="text-xs text-[#78716C] mt-1">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#FBF9F5] border border-[#D5CCBD] space-y-3 text-xs">
                <span className="font-cinzel text-xs uppercase tracking-[0.16em] text-[#855712] font-semibold block">
                  Consortium Oversight & Sensor Matrices
                </span>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={includeConsortium}
                    onChange={(e) => setIncludeConsortium(e.target.checked)}
                    className="accent-[#855712] w-4 h-4"
                  />
                  <span className="text-[#44403C]">
                    Include Heritage Impact Assessment (HIA) & International Historical Permitting ($75,000)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={includeSeismicSensors}
                    onChange={(e) => setIncludeSeismicSensors(e.target.checked)}
                    className="accent-[#855712] w-4 h-4"
                  />
                  <span className="text-[#44403C]">
                    Embed Continuous Hydrostatic Pressure Relief & Seismographic Sensor Array ($45,000)
                  </span>
                </label>
              </div>

              <div className="pt-6 border-t border-[#E7E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-cinzel text-[#78716C] uppercase tracking-wider block font-semibold">
                    Projected Commission Capital
                  </span>
                  <div className="font-serif-luxury text-3xl sm:text-4xl text-[#1C1917] mt-1 font-normal">
                    ${calculatedEstimate.toLocaleString()} <span className="text-base text-[#78716C] font-sans">USD</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowProposalModal(true)}
                  className="px-8 py-3.5 bg-[#855712] hover:bg-[#6D470E] text-white text-xs font-cinzel tracking-[0.18em] uppercase transition-colors shadow-xs"
                >
                  Generate Specification Dossier
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: CHARTERS & HERITAGE PROVENANCE */}
        {/* ======================================================== */}
        {activeTab === 'heritage' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
            <div className="text-center space-y-2">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#855712] uppercase font-semibold">
                Consortium Preservation Charters
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917] font-normal">
                International Standards & Mineral Provenance
              </h2>
              <p className="text-sm text-[#44403C] max-w-xl mx-auto">
                Every stone quarried and every anchor driven complies with internationally recognized non-invasive preservation conventions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  code: "ICOMOS 1964",
                  title: "Venice Charter Compliance",
                  desc: "All structural mortars, tiebacks, and sub-surface shoring must be reversible and identifiable, preserving original stratigraphic integrity."
                },
                {
                  code: "UNI EN 1469",
                  title: "Natural Stone Provenance",
                  desc: "Complete isotopic fingerprinting guaranteeing genuine origin from verified quarries in Greece, Istria, Austria, and Italy."
                },
                {
                  code: "DIN 4150-3",
                  title: "Structural Vibration Control",
                  desc: "Continuous seismographic monitoring ensuring non-destructive installation remains below 0.15 mm/s on sensitive monuments."
                }
              ].map((c, i) => (
                <div key={i} className="bg-white border border-[#E7E2D5] p-6 space-y-3 shadow-xs">
                  <div className="text-xs font-cinzel text-[#855712] tracking-[0.16em] uppercase font-semibold">
                    {c.code}
                  </div>
                  <h3 className="font-serif-luxury text-xl text-[#1C1917] font-normal">{c.title}</h3>
                  <p className="text-sm text-[#44403C] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-[#E7E2D5] p-6 lg:p-8 space-y-4">
              <h3 className="font-serif-luxury text-2xl text-[#1C1917] font-normal">The Atelier Quality Commitment</h3>
              <p className="text-sm text-[#44403C] leading-relaxed">
                Aureus & Monument operates under strict non-disclosure conventions. Our master commissions are executed with historical artisan guilds, ensuring that every piece of marble, travertine, and pozzolana lime harmonizes seamlessly with natural topography and timeless architecture.
              </p>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: PRIVATE CLIENT VAULT */}
        {/* ======================================================== */}
        {activeTab === 'client-portal' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
            <div className="text-center space-y-2">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#855712] uppercase font-semibold">
                Client Records & Vault
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1917] font-normal">
                Confidential Project Records
              </h2>
              <p className="text-sm text-[#44403C] max-w-xl mx-auto">
                Secure access for Sovereign Trust trustees, curators, and estate directors to inspect architectural plans, petrographic certifications, and warranty documents.
              </p>
            </div>

            {!clientAuth.isAuthenticated ? (
              <div className="bg-white border border-[#E7E2D5] p-8 max-w-md mx-auto space-y-6 shadow-xs">
                <form onSubmit={handleLogin} className="space-y-4 text-xs">
                  <div>
                    <label className="font-cinzel text-xs uppercase tracking-[0.14em] text-[#855712] font-semibold block mb-1.5">
                      Trustee Identity / Access Key
                    </label>
                    <input 
                      type="text" 
                      value={accessKeyInput}
                      onChange={(e) => setAccessKeyInput(e.target.value)}
                      placeholder="trustee@familyoffice.mc"
                      className="w-full bg-[#FBF9F5] border border-[#D5CCBD] p-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#855712]"
                    />
                  </div>
                  <div>
                    <label className="font-cinzel text-xs uppercase tracking-[0.14em] text-[#855712] font-semibold block mb-1.5">
                      Commission Security PIN
                    </label>
                    <input 
                      type="password" 
                      value={pinInput}
                      onChange={(e) => setPinInput(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-[#FBF9F5] border border-[#D5CCBD] p-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#855712]"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-[#855712] hover:bg-[#6D470E] text-white font-cinzel text-xs tracking-[0.18em] uppercase transition-colors"
                  >
                    Authenticate Vault Key
                  </button>
                </form>

                <div className="pt-4 border-t border-[#E7E2D5] text-center">
                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="text-xs font-cinzel text-[#855712] hover:text-[#1C1917] underline uppercase tracking-wider font-medium"
                  >
                    Load Sample Trustee Credentials (Vienna Antiquities)
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white border border-[#E7E2D5] p-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#855712] font-semibold">
                      Authenticated Session · {clientAuth.projectCode}
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-[#1C1917] mt-0.5 font-normal">
                      {clientAuth.clientName}
                    </h3>
                    <p className="text-xs text-[#78716C] mt-0.5">{clientAuth.role}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setClientAuth({ isAuthenticated: false, clientName: '', projectCode: '', role: '' });
                      showToast('Vault session closed.');
                    }}
                    className="px-4 py-2 bg-white border border-[#E7E2D5] text-xs font-cinzel uppercase tracking-wider hover:bg-[#FBF9F5]"
                  >
                    Lock Vault
                  </button>
                </div>

                <div className="bg-white border border-[#E7E2D5] p-6 space-y-4">
                  <h3 className="font-serif-luxury text-2xl text-[#1C1917] font-normal">Certified Commission Dossiers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { title: "25-Year Structural Integrity Warranty Certificate", date: "Jan 15, 2026", size: "4.2 MB PDF" },
                      { title: "Thassos & Adnet Marble Petrographic Authenticity", date: "Jan 12, 2026", size: "6.8 MB PDF" },
                      { title: "Master Ground Terracing CAD Plan A-101", date: "Dec 05, 2025", size: "24.5 MB DWG" },
                      { title: "Micro-Vibration & Seismographic Audit Log", date: "Nov 28, 2025", size: "14.2 MB PDF" },
                    ].map((doc, idx) => (
                      <div key={idx} className="p-4 bg-[#FBF9F5] border border-[#E7E2D5] flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm text-[#1C1917]">{doc.title}</h4>
                          <span className="text-xs text-[#78716C] mt-0.5 block">{doc.date} · {doc.size}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => showToast(`Accessing certified file: ${doc.title}...`)}
                          className="px-3.5 py-1.5 text-xs font-cinzel bg-white border border-[#E7E2D5] text-[#855712] hover:bg-[#F3EFE8] font-medium"
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
      {/* FULL-SCREEN LIGHTBOX VIEWER */}
      {/* ======================================================== */}
      {lightboxIndex !== null && projects[lightboxIndex] && (() => {
        const activeProj = projects[lightboxIndex];
        return (
          <div className="fixed inset-0 z-50 bg-[#0C0A09]/95 backdrop-blur-md flex flex-col justify-between overflow-hidden select-none animate-in fade-in duration-200">
            <div className="bg-[#141210]/90 border-b border-white/10 px-6 py-4 flex items-center justify-between z-10 shrink-0">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-serif-luxury text-xl text-white font-normal">
                    {activeProj.title}
                  </h3>
                  <div className="text-xs text-[#CBD5E1] font-cinzel tracking-wider">
                    {activeProj.location} · {activeProj.categoryLabel}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-xs font-mono text-[#E6C687] tracking-widest border border-white/10 px-3 py-1.5 bg-black/40">
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
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#855712] hover:bg-[#6D470E] text-white text-xs font-cinzel uppercase tracking-[0.16em] transition-colors"
                >
                  View Monograph →
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-cinzel uppercase tracking-wider border border-white/20 transition-colors"
                  title="Close (Esc)"
                >
                  ✕ Close
                </button>
              </div>
            </div>

            <div className="relative flex-1 flex items-center justify-center p-4 sm:p-6 min-h-0 overflow-hidden">
              <button
                type="button"
                onClick={() => setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : projects.length - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center text-2xl font-light hover:border-[#E6C687] transition-all cursor-pointer shadow-lg"
              >
                ‹
              </button>

              <div className="relative max-h-full max-w-5xl w-full flex flex-col items-center justify-center px-10">
                <img
                  src={activeProj.image}
                  alt={activeProj.title}
                  className="max-h-[62vh] w-auto max-w-full object-contain border border-white/15 shadow-2xl transition-all duration-300"
                />

                <div className="mt-3 max-w-4xl w-full bg-[#141210]/90 backdrop-blur-xs border border-white/10 px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <p className="text-[#E2E8F0] font-light text-center sm:text-left line-clamp-1 text-sm">
                    {activeProj.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#E6C687] shrink-0 font-medium">
                    <span>{activeProj.stats.scopeSqFt}</span>
                    <span>·</span>
                    <span>{activeProj.stats.completion}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(prev => (prev !== null && prev < projects.length - 1 ? prev + 1 : 0))}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center text-2xl font-light hover:border-[#E6C687] transition-all cursor-pointer shadow-lg"
              >
                ›
              </button>
            </div>

            <div className="bg-[#141210]/95 border-t border-white/10 px-6 py-3 shrink-0">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {projects.map((proj, idx) => {
                  const isActive = idx === lightboxIndex;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className={`relative shrink-0 w-20 h-14 border transition-all overflow-hidden ${
                        isActive
                          ? 'border-[#E6C687] ring-2 ring-[#855712] scale-105 opacity-100'
                          : 'border-white/20 opacity-50 hover:opacity-90 hover:border-white/50'
                      }`}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })()}

      {/* ======================================================== */}
      {/* MONOGRAPH MODAL */}
      {/* ======================================================== */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-[#1C1917]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-[#D5CCBD] max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 my-8">
            
            <div className="bg-[#FBF9F5] border-b border-[#E7E2D5] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#855712] font-semibold">
                  {modalItem.categoryLabel}
                </span>
                <h3 className="font-serif-luxury text-2xl text-[#1C1917] font-normal">
                  {modalItem.title}
                </h3>
              </div>
              <button 
                type="button"
                onClick={() => setModalItem(null)}
                className="px-3.5 py-1.5 bg-white hover:bg-[#F3EFE8] border border-[#E7E2D5] text-[#1C1917] text-xs font-cinzel uppercase tracking-wider"
              >
                ✕ Close
              </button>
            </div>

            <div className="bg-[#F7F4EE] border-b border-[#E7E2D5] px-6 py-2.5 flex flex-wrap items-center gap-2 text-xs font-cinzel uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setModalActiveSubTab('overview')}
                className={`px-4 py-2 transition-colors ${
                  modalActiveSubTab === 'overview'
                    ? 'bg-white text-[#1C1917] font-semibold border border-[#E7E2D5] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Overview & Monograph
              </button>

              <button
                type="button"
                onClick={() => setModalActiveSubTab('blueprint')}
                className={`px-4 py-2 transition-colors flex items-center gap-1.5 ${
                  modalActiveSubTab === 'blueprint'
                    ? 'bg-white text-[#1C1917] font-semibold border border-[#E7E2D5] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                <BespokeBlueprintGlyph className="w-4 h-4 text-[#855712]" />
                <span>Structural CAD Section</span>
              </button>

              <button
                type="button"
                onClick={() => setModalActiveSubTab('plans')}
                className={`px-4 py-2 transition-colors ${
                  modalActiveSubTab === 'plans'
                    ? 'bg-white text-[#1C1917] font-semibold border border-[#E7E2D5] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Plan Dossiers ({modalItem.planDocs.length})
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              
              {modalActiveSubTab === 'overview' && (
                <div className="space-y-6">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#FBF9F5] border border-[#E7E2D5]">
                    <img 
                      src={modalItem.image} 
                      alt={modalItem.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <div className="text-xs text-[#855712] font-cinzel tracking-[0.2em] uppercase font-semibold">
                      {modalItem.location}
                    </div>
                    <p className="text-[#332F2B] text-sm leading-relaxed mt-2">
                      {modalItem.extendedDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#FBF9F5] border border-[#E7E2D5]">
                      <h5 className="font-cinzel text-xs text-[#855712] uppercase tracking-[0.16em] mb-2 font-semibold">
                        Natural Stone & Materials
                      </h5>
                      <ul className="space-y-1 text-xs text-[#44403C]">
                        {modalItem.materials.map((mat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-[#855712]">·</span>
                            <span>{mat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-[#FBF9F5] border border-[#E7E2D5]">
                      <h5 className="font-cinzel text-xs text-[#855712] uppercase tracking-[0.16em] mb-2 font-semibold">
                        Engineering Protocols
                      </h5>
                      <ul className="space-y-1 text-xs text-[#44403C]">
                        {modalItem.protocols.map((proto, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-[#855712]">·</span>
                            <span>{proto}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3.5 bg-[#FBF9F5] border border-[#E7E2D5]">
                      <span className="text-xs font-cinzel text-[#78716C] uppercase block">Surface Scope</span>
                      <span className="font-serif-luxury text-lg text-[#1C1917] font-medium">{modalItem.stats.scopeSqFt}</span>
                    </div>
                    <div className="p-3.5 bg-[#FBF9F5] border border-[#E7E2D5]">
                      <span className="text-xs font-cinzel text-[#78716C] uppercase block">Timeline</span>
                      <span className="font-serif-luxury text-lg text-[#1C1917] font-medium">{modalItem.stats.duration}</span>
                    </div>
                    <div className="p-3.5 bg-[#FBF9F5] border border-[#E7E2D5]">
                      <span className="text-xs font-cinzel text-[#78716C] uppercase block">Client Entity</span>
                      <span className="font-serif-luxury text-lg text-[#1C1917] truncate block font-medium">{modalItem.stats.client}</span>
                    </div>
                    <div className="p-3.5 bg-[#FBF9F5] border border-[#E7E2D5]">
                      <span className="text-xs font-cinzel text-[#78716C] uppercase block">Completed</span>
                      <span className="font-serif-luxury text-lg text-[#1C1917] font-medium">{modalItem.stats.completion}</span>
                    </div>
                  </div>
                </div>
              )}

              {modalActiveSubTab === 'blueprint' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif-luxury text-2xl text-[#1C1917] font-normal">
                      Architectural Elevation & Structural Section
                    </h4>
                    <p className="text-xs text-[#57534E] mt-1">
                      Vector schematic illustrating bedrock micropiles, hydrostatic drainage siphons, and dimension callouts.
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

              {modalActiveSubTab === 'plans' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif-luxury text-2xl text-[#1C1917] font-normal">
                      Archival Architectural Plans & Dossiers
                    </h4>
                    <p className="text-xs text-[#57534E] mt-1">
                      Official sheets, stone provenance records, and historical preservation clearances.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {modalItem.planDocs.map((doc, idx) => (
                      <div key={idx} className="p-4 bg-[#FBF9F5] border border-[#E7E2D5] flex items-center justify-between hover:border-[#855712] transition-colors">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-semibold text-[#855712] bg-[#F7F4EE] px-2 py-0.5 border border-[#D5CCBD]">
                              Sheet {doc.sheetNo}
                            </span>
                            <h5 className="font-medium text-sm text-[#1C1917]">{doc.title}</h5>
                          </div>
                          <div className="text-xs text-[#78716C] mt-1">
                            Category: {doc.category} · Scale: {doc.scale} · File: {doc.fileSize}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => showToast(`Opening Sheet ${doc.sheetNo}: ${doc.title}...`)}
                          className="px-4 py-2 bg-[#855712] hover:bg-[#6D470E] text-white text-xs font-cinzel uppercase tracking-wider"
                        >
                          Inspect PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-[#E7E2D5] flex items-center justify-between">
                <span className="text-xs font-serif-luxury italic text-[#78716C]">
                  Aureus & Monument Atelier Dossier
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setModalItem(null);
                      setActiveTab('estimator');
                    }}
                    className="px-5 py-2.5 bg-[#855712] hover:bg-[#6D470E] text-white text-xs font-cinzel tracking-[0.16em] uppercase transition-colors"
                  >
                    Calculate Similar Scope
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalItem(null)}
                    className="px-5 py-2.5 bg-white hover:bg-[#FBF9F5] border border-[#E7E2D5] text-[#1C1917] text-xs font-cinzel tracking-[0.16em] uppercase transition-colors"
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
        <div className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-[#D5CCBD] max-w-2xl w-full p-8 sm:p-10 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200 my-8">
            
            <div className="text-center pb-6 border-b border-[#E7E2D5] space-y-1">
              <div className="flex justify-center mb-2">
                <BespokeMonogram className="w-10 h-10 text-[#855712]" />
              </div>
              <h4 className="font-cinzel text-lg tracking-[0.25em] text-[#1C1917] uppercase font-semibold">
                Aureus & Monument
              </h4>
              <p className="text-xs font-cinzel tracking-[0.2em] text-[#855712] uppercase font-medium">
                Architectural Atelier · Tucson, Arizona
              </p>
              <p className="text-xs text-[#78716C] pt-1">
                Charter Ref: AM-TUC-2026-X99 · Date: November 2026
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#F7F4EE]">
                <span className="text-[#57534E]">Commission Typology</span>
                <span className="text-[#1C1917] capitalize font-medium">{estimatorDomain}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F7F4EE]">
                <span className="text-[#57534E]">Masonry Scale</span>
                <span className="text-[#1C1917] font-mono tabular-nums">{scopeSize.toLocaleString()} sq. ft.</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F7F4EE]">
                <span className="text-[#57534E]">Material & Engineering Tier</span>
                <span className="text-[#1C1917] capitalize font-medium">{tier.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F7F4EE]">
                <span className="text-[#57534E]">Base Hardscaping & Masonry Allocation</span>
                <span className="text-[#1C1917] font-mono tabular-nums">${baseSubtotal.toLocaleString()} USD</span>
              </div>
              {includeConsortium && (
                <div className="flex justify-between py-1.5 border-b border-[#F7F4EE]">
                  <span className="text-[#57534E]">Heritage Impact Assessment & Review</span>
                  <span className="text-[#1C1917] font-mono tabular-nums">$75,000 USD</span>
                </div>
              )}
              {includeSeismicSensors && (
                <div className="flex justify-between py-1.5 border-b border-[#F7F4EE]">
                  <span className="text-[#57534E]">Continuous Seismic & Hydrostatic Sensor Array</span>
                  <span className="text-[#1C1917] font-mono tabular-nums">$45,000 USD</span>
                </div>
              )}
              <div className="flex justify-between pt-3 text-base font-serif-luxury border-t border-[#E7E2D5]">
                <span className="text-[#1C1917] font-medium">Total Projected Investment</span>
                <span className="text-[#855712] font-semibold">${calculatedEstimate.toLocaleString()} USD</span>
              </div>
            </div>

            <div className="p-4 bg-[#FBF9F5] border border-[#D5CCBD] text-xs text-[#44403C] leading-relaxed">
              ✦ <strong>Atelier Guarantee:</strong> All commissions directed by Peter Van Hoff, Corinne W Smith, Jefferey T Montgomery, and Gabriel Derrickson include an unconditional 25-year structural warranty, certified stone provenance dossiers from historical European quarries, and compliant municipal clearances.
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowProposalModal(false);
                  showToast('Your preliminary charter has been submitted to the Directorate in Tucson, AZ.');
                }}
                className="flex-1 py-3.5 bg-[#855712] hover:bg-[#6D470E] text-white font-cinzel text-xs tracking-[0.18em] uppercase transition-colors"
              >
                Confirm Commission Inquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  showToast('Printing specification dossier...');
                  window.print();
                }}
                className="py-3.5 px-6 bg-white hover:bg-[#FBF9F5] border border-[#E7E2D5] text-[#1C1917] font-cinzel text-xs tracking-[0.16em] uppercase transition-colors"
              >
                Print Specification
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer with Tucson, AZ Address and Contact Info */}
      <footer className="border-t border-[#E7E2D5] bg-[#F7F4EE] py-14 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <BespokeMonogram className="w-7 h-7 text-[#855712]" />
              <span className="font-cinzel text-sm tracking-[0.2em] text-[#1C1917] font-semibold uppercase">
                Aureus & Monument
              </span>
            </div>
            <p className="text-[#57534E] text-xs leading-relaxed">
              Master architectural hardscaping, private estate terracing, grand mosque courtyards, and international heritage monument preservation.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-cinzel font-semibold uppercase tracking-[0.2em] text-[#855712] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#44403C]">
              <li><button type="button" onClick={() => setActiveTab('home')} className="hover:text-[#855712]">Atelier Home</button></li>
              <li><button type="button" onClick={() => setActiveTab('commissions')} className="hover:text-[#855712]">Commissions ({projects.length})</button></li>
              <li><button type="button" onClick={() => setActiveTab('directorate')} className="hover:text-[#855712]">The Directorate</button></li>
              <li><button type="button" onClick={() => setActiveTab('gallery')} className="hover:text-[#855712]">Media Gallery</button></li>
              <li><button type="button" onClick={() => setActiveTab('estimator')} className="hover:text-[#855712]">Scope Calculator</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-cinzel font-semibold uppercase tracking-[0.2em] text-[#855712] mb-3">
              Directorate Leadership
            </h4>
            <ul className="space-y-1.5 text-xs text-[#44403C]">
              <li><span className="font-medium text-[#1C1917]">Peter Van Hoff</span> · Managing Principal</li>
              <li><span className="font-medium text-[#1C1917]">Corinne W Smith</span> · Structural & Geotechnical</li>
              <li><span className="font-medium text-[#1C1917]">Jefferey T Montgomery</span> · Sovereign Commissions</li>
              <li><span className="font-medium text-[#1C1917]">Gabriel Derrickson</span> · Heritage Charters</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-cinzel font-semibold uppercase tracking-[0.2em] text-[#855712] mb-3">
              Tucson Studio & Contact
            </h4>
            <div className="text-xs text-[#44403C] leading-relaxed font-sans space-y-1">
              <div>4500 E Skyline Drive, Suite 240<br/>Tucson, AZ 85718, United States</div>
              <div className="pt-2">
                <a href="mailto:aureusmonument@email.com" className="text-[#855712] hover:underline font-medium block">
                  aureusmonument@email.com
                </a>
                <a href="tel:+18679881524" className="text-[#1C1917] hover:text-[#855712] font-mono block">
                  +1 (867) 988-1524
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 mt-10 border-t border-[#E7E2D5] text-center text-xs text-[#78716C] font-cinzel tracking-wider">
          © 2026 Aureus & Monument Architectural Atelier · Tucson, Arizona · Master Commissions & Heritage Archive
        </div>
      </footer>

    </div>
  );
}
