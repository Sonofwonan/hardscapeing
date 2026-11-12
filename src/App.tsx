import React, { useState, useMemo } from 'react';
import { 
  Compass, 
  Layers, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Check, 
  X, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Hammer,
  Droplets,
  Flame,
  Landmark,
  History,
  Crown,
  Gem,
  Award,
  Globe
} from 'lucide-react';

// ==========================================
// ELEGANT BESPOKE BRAND MONOGRAM
// ==========================================

function BrandMonogram({ className = "w-7 h-7 text-[#9A6B2F]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <path d="M12 28L20 12L28 28" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 23H25" strokeLinecap="round" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

// ==========================================
// TYPES & DATA DEFINITIONS
// ==========================================

type TabType = 'home' | 'projects' | 'services' | 'materials' | 'team' | 'contact';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

interface Project {
  id: number;
  title: string;
  category: 'terraces' | 'pools' | 'courtyards' | 'heritage';
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  materials: string[];
  scope: string;
  timeline: string;
  year: string;
}

interface LuxuryMaterial {
  name: string;
  category: 'marble' | 'travertine' | 'inlay' | 'granite';
  provenance: string;
  description: string;
  characteristics: string[];
  applications: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterialCategory, setSelectedMaterialCategory] = useState<string>('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Sovereign Estate Terracing & Retaining Bastions',
    location: '',
    timeline: '3 - 6 Months',
    message: ''
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setActiveTab('home');
    setModalProject(null);
    setSelectedCategory('all');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Team Members with compact circular avatars
  // Names updated: Peter Van Hoff -> Fahad Al-Sabah (Kuwaiti), Gabriel Derrickson -> Gabriel Chen (Chinese)
  const team: TeamMember[] = [
    {
      id: "fahad",
      name: "Fahad Al-Sabah",
      role: "Principal & Managing Director",
      specialty: "Sovereign master planning, royal palace grounds & clifftop estates",
      bio: "Over three decades directing monumental architectural commissions, royal courtyard masterworks, and private island sanctuaries across Europe, the Middle East, the Americas, and Asia.",
      image: "/images/portrait_arab_prince_director_1794441904418.jpg"
    },
    {
      id: "corinne",
      name: "Corinne W. Smith",
      role: "Structural & Geotechnical Director",
      specialty: "Slope retention, bedrock micropiling & subterranean hydro-engineering",
      bio: "Specializes in deep bedrock anchoring, seismic soil retention, and concealed hydrostatic drainage systems for monumental hillside estates, marine bluffs, and coastal ramparts globally.",
      image: "/images/portrait_corinne_w_smith_passport_1794441905659.jpg"
    },
    {
      id: "jefferey",
      name: "Jefferey T. Montgomery",
      role: "Director of Sovereign Commissions & Private Estates",
      specialty: "Client liaison, estate development & fiduciary oversight",
      bio: "Liaises with private family offices, sovereign trusts, and luxury estate developments worldwide, guaranteeing absolute discretion, rigorous timeline control, and bespoke execution.",
      image: "/images/portrait_black_american_director_1794441904183.jpg"
    },
    {
      id: "gabriel",
      name: "Gabriel Chen",
      role: "Master Stonemason & Materials Director",
      specialty: "Quarry provenance, imperial stonecutting & heritage conservation",
      bio: "Directs international quarry provenance verification, traditional lime mortar synthesis, and artisanal stone masonry for luxury private estates, museum atriums, and ancient archaeological monuments worldwide.",
      image: "/images/portrait_chinese_director_1794441906290.jpg"
    }
  ];

  // 12 Curated Hardscaping & Monument Projects Worldwide
  const projects: Project[] = [
    {
      id: 1,
      title: "Villa Medicea Clifftop Terraces",
      category: "terraces",
      categoryLabel: "Clifftop & Estate Terraces",
      location: "Cap d'Ail · French Riviera",
      image: "/images/new_cliffside_villa_terrace_1794441906830.jpg",
      description: "Four-tier dry-stack natural limestone retaining terraces with cascading infinity reflection basins and integrated granite outdoor stairs anchored into steep coastal dolomite cliffs.",
      materials: ["Natural Istrian Limestone", "Basalt Sub-base Matrix", "Titanium Bedrock Tiebacks", "Concealed Siphon Drains"],
      scope: "14,500 sq.ft.",
      timeline: "16 Weeks",
      year: "2025"
    },
    {
      id: 2,
      title: "Sultan Qaboos Royal Colonnade Courtyard",
      category: "courtyards",
      categoryLabel: "Grand Courtyards & Palaces",
      location: "Muscat Governorate · Sultanate of Oman",
      image: "/images/mosque_courtyard_marble_1794058073956.jpg",
      description: "Hand-dressed Thassos crystalline white marble colonnades, monumental minarets, multi-layered reflective courtyard pools, and intricate lapis and gold Islamic geometric inlays.",
      materials: ["Greek Thassos Pure White Marble", "Omani Desert Rose Travertine", "Afghan Lapis Lazuli Inlays", "24-Karat Gold Mosaic Leaf"],
      scope: "485,000 sq.ft.",
      timeline: "28 Months",
      year: "2026"
    },
    {
      id: 3,
      title: "Grand Belvedere Palace Water Amphitheater",
      category: "pools",
      categoryLabel: "Royal Water & Pool Decks",
      location: "Vienna Royal Precinct · Austria",
      image: "/images/grand_palace_hardscaping_1794058074270.jpg",
      description: "Tiered travertine water stairways, cascading fountains, ornate stone balustrades, and restored imperial parterre gardens for a baroque royal residence.",
      materials: ["Austrian St. Margarethen Calcarenite", "Adnet Limestone Flagstones", "Cast Bronze Fountain Nozzles", "Lead-Capped Coping Stones"],
      scope: "64,000 sq.ft.",
      timeline: "18 Months",
      year: "2025"
    },
    {
      id: 4,
      title: "National Antiquities Museum Atrium Modernization",
      category: "heritage",
      categoryLabel: "Museum & Heritage Sites",
      location: "Ringstraße · Vienna, Austria",
      image: "/images/museum_atrium_marble_1794056502385.jpg",
      description: "Zero-vibration micro-trenching, climate-regulated structural stone, fiber-optic antiquities illumination, and Adnet honey marble galleries safeguarding irreplaceable Hellenistic collections.",
      materials: ["Austrian Adnet Honey Marble", "Ultra-Clear Low-Iron Structural Glass", "Patinated Architectural Bronze", "Seismic Base Isolators"],
      scope: "26,000 sq.ft.",
      timeline: "14 Months",
      year: "2026"
    },
    {
      id: 5,
      title: "Aegina Acropolis Ashlar Wall Stabilization",
      category: "heritage",
      categoryLabel: "Museum & Heritage Sites",
      location: "Saronic Gulf · Aegina, Greece",
      image: "/images/acropolis_stone_wall_1794056512464.jpg",
      description: "Non-invasive structural pozzolanic grouting, seismic isolation joints, and traditional mortar replication to secure 4th-century BCE ashlar fortifications against coastal erosion.",
      materials: ["Santorini Volcanic Pozzolan", "Pure Air Lime CL-90", "Marine-Grade 316L Stainless Tendons", "Parian Marble Inlays"],
      scope: "18,200 sq.ft.",
      timeline: "24 Months",
      year: "2025"
    },
    {
      id: 6,
      title: "Kyoto Daitoku-ji Imperial Sanctuary Hardscaping",
      category: "courtyards",
      categoryLabel: "Grand Courtyards & Palaces",
      location: "Kita Ward · Kyoto, Japan",
      image: "/images/kyoto_zen_garden_1794056511443.jpg",
      description: "Restoration of a Muromachi-period sanctuary garden featuring raked Shirakawa granitic gravel, hand-positioned Kurama volcanic boulders, and cedar verandas with subterranean typhoon runoff control.",
      materials: ["Kyoto Shirakawa Granitic Gravel", "Kurama Natural Volcanic Stone", "Hinoki Cypress Timbers", "Charcoal Filtration Base"],
      scope: "16,000 sq.ft.",
      timeline: "12 Months",
      year: "2025"
    },
    {
      id: 7,
      title: "Sheikh Zayed Grand Pavilion Reflective Hardscaping",
      category: "pools",
      categoryLabel: "Royal Water & Pool Decks",
      location: "Abu Dhabi Emirate · United Arab Emirates",
      image: "/images/sheikh_zayed_courtyard_1794312369396.jpg",
      description: "Expansion of monumental water basins, Macedonian Sivec white marble arcades, subterranean radiant cooling, and inlaid semiprecious lapis floral courtyards.",
      materials: ["Macedonian Sivec White Marble", "Italian Lasa Bianco Floor Pavers", "Mother of Pearl Floral Inlays", "Titanium Expansion Joint Strips"],
      scope: "115,000 sq.ft.",
      timeline: "20 Months",
      year: "2025"
    },
    {
      id: 8,
      title: "Promontory Belvedere Cliffside Estate",
      category: "terraces",
      categoryLabel: "Clifftop & Estate Terraces",
      location: "Amalfi Coast · Campania, Italy",
      image: "/images/amalfi_cliff_terrace_1794312370486.jpg",
      description: "Three-tier cantilevered terraces anchored into volcanic tuff sea cliffs with integrated infinity plunge pools and bespoke Roman travertine lounge pavilions.",
      materials: ["Tivoli Vein-Cut Roman Travertine", "Campanian Tuff Stone Core", "Post-Tensioned Carbon Fiber Tendons", "Hand-Forged Bronze Railings"],
      scope: "18,500 sq.ft.",
      timeline: "18 Weeks",
      year: "2025"
    },
    {
      id: 9,
      title: "Alpine Stone Ramparts & Estate Bastion",
      category: "terraces",
      categoryLabel: "Clifftop & Estate Terraces",
      location: "Engadin Valley · Swiss Alps",
      image: "/images/alpine_stone_fortress_1794312371092.jpg",
      description: "Heavy granite boulder retaining bastions engineered for high-altitude thermal cycling, extreme freeze-thaw resilience, and severe avalanche load dissipation.",
      materials: ["Glacial Granite Boulders", "Crushed Basalt Drainage Backfill", "Chiseled Stone Lintels", "Stainless Tieback Rock Anchors"],
      scope: "22,000 sq.ft.",
      timeline: "20 Weeks",
      year: "2024"
    },
    {
      id: 10,
      title: "Monemvasia Citadel Sea Cliff Ramparts",
      category: "heritage",
      categoryLabel: "Museum & Heritage Sites",
      location: "Peloponnese Maritime Bluff · Greece",
      image: "/images/monemvasia_citadel_cliff_1794312400083.jpg",
      description: "Ancient sea-bluff pedestrian ramparts and stone parapet preservation utilizing non-destructive consolidation grouting against Mediterranean wave spray and salt aerosol.",
      materials: ["Marine-Grade Limestone", "Dolomite Rubble Core", "Silicic Acid Consolidant", "Bronze Structural Clamps"],
      scope: "31,000 sq.ft.",
      timeline: "16 Months",
      year: "2025"
    },
    {
      id: 11,
      title: "Florence Uffizi Historic Loggia Hardscaping",
      category: "heritage",
      categoryLabel: "Museum & Heritage Sites",
      location: "Piazza degli Uffizi · Florence, Italy",
      image: "/images/florence_uffizi_loggia_1794312385726.jpg",
      description: "Subsurface drainage re-engineering, pietra serena stone arcade leveling, and non-invasive floor consolidation for high-traffic Renaissance public loggias.",
      materials: ["Firenzuola Pietra Serena Sandstone", "Porphyry Cobblestones", "Natural Hydraulic Lime Grout"],
      scope: "28,000 sq.ft.",
      timeline: "12 Months",
      year: "2025"
    },
    {
      id: 12,
      title: "Villa Balbianello Lakeside Terraces",
      category: "terraces",
      categoryLabel: "Clifftop & Estate Terraces",
      location: "Lake Como Promontory · Italy",
      image: "/images/lake_como_villa_terrace_1794312399785.jpg",
      description: "Stepped lakeside retaining stonework, classical stone balustrades, and geometric flagstone pathways leading to private yacht moorings.",
      materials: ["Lombard Grey Granite", "Hand-Hewn Coping Stone", "Permeable Sand Joints", "Dolomite Core"],
      scope: "12,200 sq.ft.",
      timeline: "14 Weeks",
      year: "2025"
    }
  ];

  // Comprehensive Catalog of Luxury & Royal Materials
  const luxuryMaterials: LuxuryMaterial[] = [
    {
      name: "Greek Thassos Pure White Marble",
      category: "marble",
      provenance: "Island of Thassos, Greece",
      description: "Renowned as the whitest stone on earth. A 99% pure crystalline dolomite matrix with virtually zero porosity and specular solar reflectivity. Remains cool under desert sun.",
      characteristics: ["99% Calcite & Dolomite Purity", "Specular Solar Reflectance", "Zero Surface Micro-porosity", "Imperial Crystalline Luster"],
      applications: "Monumental sacred courtyards, reflective basin copings, luxury grand atriums."
    },
    {
      name: "Macedonian Sivec Imperial Marble",
      category: "marble",
      provenance: "Prilep Quarry, North Macedonia",
      description: "Favored by emperors and classical architects for over two millennia. An extraordinarily fine-grained calcitic marble offering warm luminescence and flawless honed finishing.",
      characteristics: ["Ultra-fine Microscopic Grain", "High Compressive Strength (145 MPa)", "Frost & Thermal Shock Resistant", "Uniform Crystalline White"],
      applications: "Monumental peristyles, grand colonnade arcades, high-traffic palace courtyards."
    },
    {
      name: "Austrian Adnet Honey Marble",
      category: "marble",
      provenance: "Salzburg Limestone Basin, Austria",
      description: "Fossil-bearing limestone marble famous in central European palaces and cathedral atriums. Warm caramel and honey amber veins punctuated by prehistoric ammonite inclusions.",
      characteristics: ["Dense Microcrystalline Limestone", "Rich Golden Amber Tones", "Exceptional Abrasion Resistance", "Historic Museum Provenance"],
      applications: "Museum gallery flooring, interior-exterior loggia transitions, luxury wall veneers."
    },
    {
      name: "Tivoli Vein-Cut Roman Travertine",
      category: "travertine",
      provenance: "Tivoli Basin, Rome, Italy",
      description: "The definitive architectural stone of classical Rome. Sedimentary travertine with warm alabaster, ivory, and biscuit banding that stays naturally cool under direct summer sunlight.",
      characteristics: ["Natural Heat Dissipation", "Non-Slip Honed Texture", "Vein-Cut Linear Stratification", "Centuries of Proven Longevity"],
      applications: "Luxury pool surrounds, cantilevered estate terraces, outdoor dining loggias."
    },
    {
      name: "Omani Desert Rose Travertine",
      category: "travertine",
      provenance: "Dhofar Mountains, Sultanate of Oman",
      description: "Rare desert stone displaying sunset blush, terracotta, and golden dunes in deep sedimented strata. Engineered to withstand extreme desert heat cycles without surface flaking.",
      characteristics: ["Extreme Thermal Cyclic Stability", "Warm Desert Rose Color Palette", "High Density (2,680 kg/m³)", "Radiant Sub-Cooling Compatible"],
      applications: "Grand mosque plazas, estate driveway courtyards, private sanctuary water walls."
    },
    {
      name: "Hand-Dressed Istrian Limestone",
      category: "travertine",
      provenance: "Istrian Peninsula, Adriatic Coast",
      description: "Dense, marine-hardened calcarenite that has protected Venetian palaces from Adriatic waves for 800 years. Develops a self-healing protective patina upon exposure to sea spray.",
      characteristics: ["Impermeable to Salt Aerosol", "Marine Hardening Matrix", "Hand-Dressed Chiseled Face", "Exceptional Tensile Cohesion"],
      applications: "Clifftop sea-retaining bastions, shoreline terraces, coastal infinity plunge pools."
    },
    {
      name: "French Pierre de Bourgogne",
      category: "travertine",
      provenance: "Burgundy, France",
      description: "Historic noble limestone sourced from centuries-old French quarries. Exhibits subtle ochre, beige, and sea-fossil accents that lend aristocratic warmth to estate promenades.",
      characteristics: ["Authentic French Chateau Provenance", "Velvety Sawn & Honed Texture", "Freeze-Thaw Certified", "Soft Natural Patina"],
      applications: "Grand parterre walkways, pool terraces, formal courtyard gardens, classical steps."
    },
    {
      name: "Afghan Lapis Lazuli Semiprecious Inlays",
      category: "inlay",
      provenance: "Badakhshan Province, Afghanistan",
      description: "Genuine celestial-blue lapis lazuli stone speckled with golden pyrite veins. Precision water-jet sliced and hand-inlaid into crystalline white marble for royal emblems and sacred geometry.",
      characteristics: ["Natural Ultramarine Pigment", "Golden Pyrite Crystal Inclusions", "Water-Jet Micron Precision", "Timeless Royal Prestige"],
      applications: "Sacred courtyard floral mosaics, reflection basin medallions, VIP estate entries."
    },
    {
      name: "24-Karat Gold Mosaic Tesserae",
      category: "inlay",
      provenance: "Venetian Artisanal Foundries, Italy",
      description: "Hand-pulled glass smalti sandwiching genuine 24-karat gold leaf. Permanently sealed to resist chlorine, saltwater, and direct sunlight without tarnishing or delaminating.",
      characteristics: ["24-Karat Pure Gold Leaf", "Impervious Double-Fused Glass", "Reflective Water Surface Sparkle", "Zero Chlorine Corrosion"],
      applications: "Pool spillway weirs, water amphitheater fountains, mosaic accent bands."
    },
    {
      name: "Natural Iridescent Mother-of-Pearl",
      category: "inlay",
      provenance: "Persian Gulf & Red Sea Pearlshell Grounds",
      description: "Hand-harvested oceanic nacre polished to high iridescence. Inlaid into stone paving to catch ambient moonlight and submerged underwater LED illumination.",
      characteristics: ["Natural Rainbow Iridescence", "Precision Hand-Fitted Nacre", "Specular Water Reflection", "Exquisite Royal Craftsmanship"],
      applications: "Courtyard fountain rims, reflecting pool floor mosaics, bespoke entry threshold crests."
    },
    {
      name: "Imperial Charcoal Basalt & Obsidian Fieldstone",
      category: "granite",
      provenance: "Volcanic Basalt Belts",
      description: "Ultra-dense volcanic igneous rock with deep charcoal and obsidian coloration. Diamond-sawn to clean geometric lines for dramatic contrast against pure white marbles.",
      characteristics: ["Zero Absorption (<0.2%)", "Deep Obsidian Charcoal Tone", "High Slip Resistance (R11)", "Extreme Compressive Strength (220 MPa)"],
      applications: "Negative-edge water weir walls, contemporary stepping pads, reflection pool bases."
    },
    {
      name: "European Porphyry & Belgian Blue Stone",
      category: "granite",
      provenance: "Trentino, Italy & Soignies, Belgium",
      description: "Legendary European paving stones featuring fossilized crinoid matrix (Belgian Blue) and purple-red volcanic quartz (Porphyry). Unmatched resistance to heavy vehicular weight.",
      characteristics: ["Immense Load Bearing Capacity", "Centuries of European Street Provenance", "Naturally Non-Slip", "Impervious to Road Salts & Ice"],
      applications: "Monumental entrance motor courts, estate driveways, formal carriage courtyards."
    },
    {
      name: "Glacial Granite Boulders & Megaliths",
      category: "granite",
      provenance: "Alpine & Nordic Glacial Moraines",
      description: "Colossal multi-ton natural fieldstone boulders weathered over 10,000 years by glacial ice sheets. Each stone is individually selected and crane-positioned for massive slope retention.",
      characteristics: ["Mass Retaining Capacity (5–25 Tons)", "Ancient Weathered Character", "Deep Iron & Lichen Patina", "Zero Maintenance Structural Barrier"],
      applications: "Hillside estate retention bastions, alpine rockeries, natural waterfall cascades."
    },
    {
      name: "Shirakawa Granitic Sands & Kurama Volcanic Boulders",
      category: "granite",
      provenance: "Kyoto Basin, Japan",
      description: "Authentic Imperial temple stones. High-feldspar sparkling granitic gravels designed for crisp rake patterns, paired with iron-oxidized rust-red volcanic boulders.",
      characteristics: ["Natural High-Silica Sparkle", "Rake Line Retention", "Warm Rust-Brown Oxidized Skin", "Centuries of Zen Mastercraft"],
      applications: "Zen sanctuary courtyards, minimalist estate gardens, luxury wellness courtyards."
    }
  ];

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory, projects]);

  // Filtered materials
  const filteredMaterials = useMemo(() => {
    if (selectedMaterialCategory === 'all') return luxuryMaterials;
    return luxuryMaterials.filter(m => m.category === selectedMaterialCategory);
  }, [selectedMaterialCategory, luxuryMaterials]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      showToast('Please enter your name and email address.');
      return;
    }
    setFormSubmitted(true);
    showToast('Consultation brief received! A principal will initiate contact within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#18181B] flex flex-col selection:bg-[#9A6B2F]/20 selection:text-[#18181B]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#18181B] text-white px-5 py-3 rounded-lg shadow-xl border border-stone-800 text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-[#C59B58]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ======================================================== */}
      {/* TOP BAR HEADER (NO CITY AT THE TOP, CLEAN BRAND LOGO) */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Wordmark & Monogram -> Takes user directly to Homepage */}
          <button 
            type="button"
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="Aureus & Monument Home"
          >
            <BrandMonogram className="w-8 h-8 text-[#9A6B2F] group-hover:scale-105 transition-transform duration-300" />
            <div>
              <span className="text-lg sm:text-xl font-serif-luxury font-medium tracking-wide text-[#18181B] block">
                AUREUS & MONUMENT
              </span>
              <span className="text-xs text-stone-500 font-sans tracking-normal block">
                Architectural Hardscaping & Monument Preservation
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-600">
            <button 
              type="button"
              onClick={() => handleNavigate('home')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'home' ? 'text-[#9A6B2F] font-semibold' : 'hover:text-[#18181B]'
              }`}
            >
              Home
              {activeTab === 'home' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9A6B2F]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('projects')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'projects' ? 'text-[#9A6B2F] font-semibold' : 'hover:text-[#18181B]'
              }`}
            >
              Projects
              {activeTab === 'projects' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9A6B2F]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('services')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'services' ? 'text-[#9A6B2F] font-semibold' : 'hover:text-[#18181B]'
              }`}
            >
              Services
              {activeTab === 'services' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9A6B2F]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('materials')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'materials' ? 'text-[#9A6B2F] font-semibold' : 'hover:text-[#18181B]'
              }`}
            >
              Materials & Craft
              {activeTab === 'materials' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9A6B2F]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('team')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'team' ? 'text-[#9A6B2F] font-semibold' : 'hover:text-[#18181B]'
              }`}
            >
              Our Team
              {activeTab === 'team' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9A6B2F]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('contact')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'contact' ? 'text-[#9A6B2F] font-semibold' : 'hover:text-[#18181B]'
              }`}
            >
              Contact
              {activeTab === 'contact' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9A6B2F]" />}
            </button>
          </nav>

          {/* Action Trigger with previous phone number +1 (867) 988-1524 */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:+18679881524" 
              className="hidden xl:flex items-center gap-2 text-xs font-mono text-stone-600 hover:text-[#9A6B2F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#9A6B2F]" />
              <span>+1 (867) 988-1524</span>
            </a>
            <button 
              type="button"
              onClick={() => handleNavigate('contact')}
              className="px-5 py-2.5 bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-medium tracking-wide rounded-md transition-colors shadow-xs cursor-pointer"
            >
              Request a Consultation
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 border border-stone-200 rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <div className="space-y-1 w-5"><div className="h-0.5 bg-current w-full" /><div className="h-0.5 bg-current w-full" /><div className="h-0.5 bg-current w-full" /></div>}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
            <button 
              type="button" 
              onClick={() => handleNavigate('home')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'home' ? 'text-[#9A6B2F] font-semibold' : 'text-stone-700'}`}
            >
              Home
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('projects')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'projects' ? 'text-[#9A6B2F] font-semibold' : 'text-stone-700'}`}
            >
              Projects
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('services')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'services' ? 'text-[#9A6B2F] font-semibold' : 'text-stone-700'}`}
            >
              Services & Heritage Conservation
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('materials')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'materials' ? 'text-[#9A6B2F] font-semibold' : 'text-stone-700'}`}
            >
              Materials & Royal Craft
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('team')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'team' ? 'text-[#9A6B2F] font-semibold' : 'text-stone-700'}`}
            >
              Our Team
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('contact')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'contact' ? 'text-[#9A6B2F] font-semibold' : 'text-stone-700'}`}
            >
              Contact & Inquiries
            </button>
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-[#9A6B2F]" /> Global Commissions</span>
              <a href="tel:+18679881524" className="text-[#9A6B2F] font-medium">+1 (867) 988-1524</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* ======================================================== */}
        {/* TAB: HOME PAGE */}
        {/* ======================================================== */}
        {activeTab === 'home' && (
          <div className="space-y-16 sm:space-y-24">
            
            {/* 1. HERO SECTION (Global scope, no Canada restriction, no meet directorate button at top, no city at top) */}
            <section className="bg-white border border-stone-200 rounded-xl p-8 sm:p-12 lg:p-16 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-[#9A6B2F] rounded-full text-xs font-medium">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Master Hardscaping, Royal Courtyards & Heritage Conservation</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#18181B] leading-[1.15] font-normal">
                    Architectural Hardscaping & Master Stonework
                  </h1>

                  {/* General, global description as requested */}
                  <p className="text-base text-stone-600 leading-relaxed max-w-lg">
                    We design, engineer, and construct bespoke stone terraces, monumental courtyards, luxury pool surrounds, and heritage stonework for private estates and institutions worldwide.
                  </p>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleNavigate('projects')}
                      className="px-6 py-3.5 bg-[#9A6B2F] hover:bg-[#835923] text-white text-xs font-medium tracking-wide rounded-md transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Our Projects</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavigate('contact')}
                      className="px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-[#18181B] text-xs font-medium tracking-wide rounded-md transition-colors cursor-pointer"
                    >
                      Request a Consultation
                    </button>
                  </div>

                  {/* Trust Highlights */}
                  <div className="pt-4 grid grid-cols-3 gap-4 border-t border-stone-100 text-stone-600">
                    <div>
                      <div className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#18181B]">30+</div>
                      <div className="text-xs text-stone-500">Years of Global Practice</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#18181B]">12</div>
                      <div className="text-xs text-stone-500">Countries with Completed Works</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#18181B]">100%</div>
                      <div className="text-xs text-stone-500">Quarried Natural Stone</div>
                    </div>
                  </div>
                </div>

                {/* Right Hero Visual Plate */}
                <div 
                  className="lg:col-span-6 relative aspect-4/3 rounded-lg overflow-hidden bg-stone-900 border border-stone-200 shadow-md group cursor-pointer"
                  onClick={() => setModalProject(projects[0])}
                >
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="text-xs font-medium text-[#E5C38E]">Featured Sovereign Commission</span>
                      <h3 className="text-xl font-serif-luxury font-normal">{projects[0].title}</h3>
                      <p className="text-xs text-stone-300">{projects[0].location} · {projects[0].scope}</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 2. SERVICES PREVIEW (Restored luxury, museum, and heritage services) */}
            <section className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-medium text-[#9A6B2F]">Global Disciplines</span>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#18181B] font-normal">
                  Comprehensive Architectural & Heritage Services
                </h2>
                <p className="text-sm text-stone-600">
                  From multi-tier clifftop bastions to museum atrium modernizations and UNESCO-standard monument preservation, our expertise spans ancient stone craft and advanced geotechnical engineering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Landmark,
                    title: "Museum Atrium Modernization",
                    desc: "Zero-vibration micro-trenching, climate-regulated structural stone, acoustic honey marble galleries, and flush museum flooring."
                  },
                  {
                    icon: History,
                    title: "Archaeological Monument Conservation",
                    desc: "Non-invasive pozzolanic grouting, reversible stainless-steel tiebacks, ancient ashlar wall stabilization, and ruin parterre restoration."
                  },
                  {
                    icon: Crown,
                    title: "Monumental Sacred Courtyards",
                    desc: "Hand-dressed Greek Thassos marble arcades, subterranean radiant sub-cooling, and precision water-jet lapis lazuli inlays."
                  },
                  {
                    icon: Layers,
                    title: "Clifftop & Private Island Terraces",
                    desc: "Multi-tier dry-stack Istrian limestone retaining bastions, post-tensioned cantilevered platforms, and bedrock anchoring."
                  },
                  {
                    icon: Droplets,
                    title: "Palace Water Amphitheaters",
                    desc: "Tiered travertine water stairways, closed-loop hydraulic cascades, parterres, and classical carved stone balustrades."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Heritage Maintenance Charters",
                    desc: "Microclimatic stone consolidation, non-destructive laser patina cleaning, biological biocide regimens, and cyclic inspection."
                  },
                  {
                    icon: Flame,
                    title: "Luxury Pool Surrounds & Thermal Decks",
                    desc: "Bespoke bullnose pool coping, vein-cut Roman travertine decks, negative-edge overflow spillways, and sunken fire lounges."
                  },
                  {
                    icon: Compass,
                    title: "Driveway Courtyards & Permeable Pavers",
                    desc: "Hand-set European porphyry cobblestone motor courts, monumental entry gate pillars, and vehicular stone paving."
                  }
                ].map((s, idx) => (
                  <div key={idx} className="bg-white border border-stone-200 rounded-lg p-6 space-y-3 hover:border-[#9A6B2F]/60 transition-colors shadow-2xs">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF5EE] text-[#9A6B2F] flex items-center justify-center">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-serif-luxury font-medium text-[#18181B]">{s.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. FEATURED PROJECTS PREVIEW */}
            <section className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-medium text-[#9A6B2F]">Portfolio</span>
                  <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#18181B] font-normal">
                    Featured International Commissions
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigate('projects')}
                  className="text-xs font-medium text-[#9A6B2F] hover:text-[#835923] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View All Projects ({projects.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Curated Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setModalProject(p)}
                    className="group bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs hover:border-[#9A6B2F] transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-stone-700 shadow-xs">
                        {p.scope}
                      </div>
                    </div>
                    <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-[#9A6B2F] font-medium">{p.categoryLabel}</span>
                        <h3 className="text-base font-serif-luxury text-[#18181B] font-medium group-hover:text-[#9A6B2F] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                          {p.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                        <span>{p.location.split('·')[0].trim()}</span>
                        <span className="text-[#9A6B2F] font-medium group-hover:translate-x-0.5 transition-transform">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. OUR TEAM / CRAFTSMEN (Fahad Al-Sabah & Gabriel Chen, small circular avatars) */}
            <section className="bg-white border border-stone-200 rounded-xl p-8 sm:p-10 space-y-8 shadow-xs">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-medium text-[#9A6B2F]">Global Leadership</span>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#18181B] font-normal">
                  Our Team of Master Stonemasons & Directors
                </h2>
                <p className="text-sm text-stone-600">
                  Every commission is governed directly by our four senior principals with decades of experience in structural retention, quarry provenance, and historic conservation.
                </p>
              </div>

              {/* 4 Small Circular Thumbnails */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member) => (
                  <div key={member.id} className="bg-stone-50 border border-stone-200 rounded-lg p-5 text-center space-y-3 hover:border-stone-300 transition-colors">
                    {/* Compact Circular Canvas Avatar */}
                    <div className="w-20 h-20 rounded-full mx-auto overflow-hidden ring-3 ring-stone-200 shadow-xs bg-stone-200">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif-luxury text-lg text-[#18181B] font-medium">{member.name}</h4>
                      <p className="text-xs text-[#9A6B2F] font-medium">{member.role}</p>
                      <p className="text-[11px] text-stone-500 font-sans italic">{member.specialty}</p>
                      <p className="text-xs text-stone-600 pt-1 line-clamp-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. CALL TO ACTION STRIP */}
            <section className="bg-[#18181B] text-white rounded-xl p-8 sm:p-12 text-center space-y-4">
              <span className="text-xs text-[#E5C38E] font-medium">Global Commissions & Consultations</span>
              <h2 className="text-2xl sm:text-4xl font-serif-luxury font-normal max-w-2xl mx-auto">
                Commission an enduring architectural masterwork
              </h2>
              <p className="text-sm text-stone-300 max-w-lg mx-auto">
                Our principals evaluate site geology, structural load specifications, and quarry selections for distinguished estate and public commissions worldwide.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNavigate('contact')}
                  className="px-6 py-3 bg-[#9A6B2F] hover:bg-[#B2803C] text-white text-xs font-medium rounded-md transition-colors shadow-sm cursor-pointer"
                >
                  Initiate Commission Brief
                </button>
              </div>
            </section>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: PROJECTS / PORTFOLIO */}
        {/* ======================================================== */}
        {activeTab === 'projects' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-5">
              <div>
                <span className="text-xs font-medium text-[#9A6B2F]">Portfolio</span>
                <h1 className="text-2xl sm:text-4xl font-serif-luxury text-[#18181B] font-normal">
                  International Masterworks
                </h1>
                <p className="text-sm text-stone-600 mt-1">
                  Explore completed clifftop terraces, royal courtyards, palace water amphitheatres, and archaeological conservations worldwide.
                </p>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'terraces', label: 'Clifftop & Terraces' },
                  { id: 'pools', label: 'Royal Water & Pools' },
                  { id: 'courtyards', label: 'Courtyards & Palaces' },
                  { id: 'heritage', label: 'Museum & Heritage' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#18181B] text-white font-medium'
                        : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setModalProject(project)}
                  className="group bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs hover:border-[#9A6B2F] transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-stone-700 shadow-xs">
                      {project.scope}
                    </div>
                  </div>

                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-[#9A6B2F] font-medium">{project.categoryLabel}</span>
                      <h3 className="text-base font-serif-luxury text-[#18181B] font-medium group-hover:text-[#9A6B2F] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span>{project.location.split('·')[0].trim()}</span>
                      <span className="text-[#9A6B2F] font-medium group-hover:translate-x-0.5 transition-transform">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: SERVICES (RESTORED MUSEUM, ARCHAEOLOGICAL, HERITAGE) */}
        {/* ======================================================== */}
        {activeTab === 'services' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-medium text-[#9A6B2F]">Global Disciplines</span>
              <h1 className="text-2xl sm:text-4xl font-serif-luxury text-[#18181B] font-normal">
                Master Hardscaping, Museum Modernization & Heritage Preservation
              </h1>
              <p className="text-sm text-stone-600">
                A world-class suite of architectural stone disciplines serving royal trusts, cultural ministries, private family offices, and monumental estates worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Landmark,
                  title: "Museum Atrium Modernization & Cultural Hardscaping",
                  points: [
                    "Zero-vibration micro-trenching for subterranean HVAC, climate conduits, and concealed fiber optics",
                    "Non-percussive core extraction safeguarding priceless classical Hellenistic and Roman sculptures",
                    "Polished honey marble and crystalline white flagstone galleries with seismic base isolation",
                    "Structural glass lantern integration and hand-patinated architectural bronze expansion channels"
                  ]
                },
                {
                  icon: History,
                  title: "Archaeological Monument & Heritage Site Conservation",
                  points: [
                    "Non-invasive structural grouting matching the chemical fingerprint of historical pozzolanic mortars",
                    "Reversible marine-grade stainless steel 316L and titanium tension tiebacks for leaning ancient ashlar walls",
                    "Seismic slope stabilization, deep bedrock anchoring, and photogrammetric sub-millimeter stone realignment",
                    "Restoration of classical parterres, dry-stone ruin ramparts, and historic masonry defenses"
                  ]
                },
                {
                  icon: Crown,
                  title: "Monumental Sacred Architecture & Grand Courtyards",
                  points: [
                    "Hand-dressed Greek Thassos crystalline white marble and Macedonian Sivec colonnades",
                    "Subterranean radiant thermal sub-cooling systems for grand congregational plazas and walkways",
                    "Expansive zero-edge reflective water basins with calibrated specular water tension",
                    "Intricate water-jet floor inlays featuring Afghan lapis lazuli, desert rose travertine, and 24K gold tesserae"
                  ]
                },
                {
                  icon: Layers,
                  title: "Clifftop & Private Island Estate Terracing",
                  points: [
                    "Multi-tier dry-stack Istrian limestone retaining bastions anchored into coastal dolomite cliffs",
                    "Post-tensioned cantilevered stone slabs and infinity plunge pools overhanging ocean promontories",
                    "Hydrostatic subsurface drainage relief channels and marine saline corrosion barriers",
                    "Stepped stone amphitheaters, grand hillside transitions, and panoramic sea-terrace lounging platforms"
                  ]
                },
                {
                  icon: Droplets,
                  title: "Royal Palaces & Baroque Water Amphitheaters",
                  points: [
                    "Tiered travertine water stairways, cascading stone spillways, and ornamental fountain balustrades",
                    "Closed-loop subterranean hydraulic recirculation with variable-frequency water velocity controls",
                    "Restoration of 18th-century royal parterres and hand-carved calcarenite stone coping",
                    "Sunken geometric reflection courtyards and illuminated classical water features"
                  ]
                },
                {
                  icon: ShieldCheck,
                  title: "Heritage Stone Maintenance & Preservation Charters",
                  points: [
                    "Periodic microclimatic stone consolidation and cyclic ultrasonic resonance structural audits",
                    "Non-destructive pulsed laser stone cleaning restoring original quarry patina without surface abrasion",
                    "Targeted biological biocide regimens removing lichen and cyanobacterial growth safely",
                    "Annual inspection charters, joint re-pointing with air-lime CL-90, and breathable hydrophobic sealants"
                  ]
                },
                {
                  icon: Flame,
                  title: "Luxury Pool Surrounds & Thermal Stone Decks",
                  points: [
                    "Bespoke bullnose and chiseled pool coping with zero-edge perimeter wet-deck transitions",
                    "Vein-cut Roman travertine and flamed granite decks engineered to remain cool under direct sunlight",
                    "Integrated stone fire features, Rumford fireplaces, and sunken outdoor conversation pavilions",
                    "Freeze-thaw resistant sub-base matrix engineered for multi-climate thermal stability"
                  ]
                },
                {
                  icon: Compass,
                  title: "Grand Entrance Courtyards & Cobblestone Promenades",
                  points: [
                    "Hand-set European porphyry and granite cobblestone motor courts for high-load vehicular traffic",
                    "Monumental monolithic limestone entrance pillars, estate walls, and hand-forged bronze gates",
                    "Permeable stone paving matrices with high-capacity underground stormwater retention",
                    "Solid stone slab staircases, integrated step illumination channels, and architectural curbing"
                  ]
                }
              ].map((svc, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-8 space-y-4 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF5EE] text-[#9A6B2F] flex items-center justify-center shrink-0">
                      <svc.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif-luxury font-medium text-[#18181B]">{svc.title}</h3>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 pt-2">
                    {svc.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#9A6B2F] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-stone-100 rounded-xl p-8 text-center space-y-4">
              <h3 className="text-xl font-serif-luxury text-[#18181B]">Commission an Architectural Feasibility Study</h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
                Our directors personally review geotechnical terrain studies, structural loads, and historical preservation requirements for landmark commissions worldwide.
              </p>
              <button
                type="button"
                onClick={() => handleNavigate('contact')}
                className="px-6 py-3 bg-[#18181B] hover:bg-stone-800 text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
              >
                Discuss Your Scope with Our Directors
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: MATERIALS & ROYAL CRAFT (DEDICATED LUXURY PAGE) */}
        {/* ======================================================== */}
        {activeTab === 'materials' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-medium text-[#9A6B2F] flex items-center justify-center gap-1.5">
                <Gem className="w-4 h-4" />
                <span>Quarry Provenance & Imperial Artisanship</span>
              </span>
              <h1 className="text-2xl sm:text-4xl font-serif-luxury text-[#18181B] font-normal">
                Rare, Luxury & Royal Materials
              </h1>
              <p className="text-sm text-stone-600">
                A dedicated archive of certified quarried natural stones, crystalline marbles, historic travertines, and semiprecious inlays curated for royal palaces, museums, and clifftop estates.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-stone-200 pb-5 text-xs">
              {[
                { id: 'all', label: `All Materials (${luxuryMaterials.length})` },
                { id: 'marble', label: 'Imperial & Sacred Marbles' },
                { id: 'travertine', label: 'Royal Travertines & Limestones' },
                { id: 'inlay', label: 'Precious Inlays & Gold Mosaics' },
                { id: 'granite', label: 'Volcanic Basalts & Granites' }
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedMaterialCategory(c.id)}
                  className={`px-4 py-2 rounded-md transition-all cursor-pointer ${
                    selectedMaterialCategory === c.id
                      ? 'bg-[#18181B] text-white font-medium shadow-xs'
                      : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((mat, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-[#9A6B2F] transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-medium text-[#9A6B2F] bg-[#FAF5EE] px-2.5 py-1 rounded">
                        {mat.provenance}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif-luxury font-medium text-[#18181B]">
                      {mat.name}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {mat.description}
                    </p>

                    {/* Characteristics */}
                    <div className="pt-2 space-y-1.5 border-t border-stone-100">
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">
                        Structural & Aesthetic Traits
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {mat.characteristics.map((c, i) => (
                          <span key={i} className="text-[11px] bg-stone-100 px-2 py-0.5 rounded text-stone-700">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block mb-0.5">
                      Primary Application
                    </span>
                    <p className="text-xs text-stone-700 font-medium">
                      {mat.applications}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Provenance Assurance Banner */}
            <div className="bg-[#18181B] text-white rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs text-[#E5C38E] font-medium flex items-center gap-1.5 justify-center md:justify-start">
                  <Award className="w-4 h-4" />
                  <span>Certified Quarry Provenance</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury">Direct Sourcing from Historic Primary Quarries</h3>
                <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
                  Every consignment of Thassos marble, Istrian limestone, Adnet calcarenite, and Roman travertine is personally inspected at the quarry source by Gabriel Chen to ensure geological purity and compressive density.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleNavigate('contact')}
                className="px-6 py-3 bg-[#9A6B2F] hover:bg-[#B2803C] text-white text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer"
              >
                Inquire on Material Sourcing
              </button>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: OUR TEAM (Fahad Al-Sabah & Gabriel Chen) */}
        {/* ======================================================== */}
        {activeTab === 'team' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-medium text-[#9A6B2F]">Global Leadership</span>
              <h1 className="text-2xl sm:text-4xl font-serif-luxury text-[#18181B] font-normal">
                Master Craftsmen & Project Directors
              </h1>
              <p className="text-sm text-stone-600">
                Our leadership team unites licensed structural and geotechnical engineering with multi-generational royal stonemasonry artistry.
              </p>
            </div>

            {/* 4 Cards with Compact Circular Avatars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div key={member.id} className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xs">
                  {/* Circular Canvas Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 ring-3 ring-stone-200 shadow-xs bg-stone-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <div>
                      <h3 className="text-xl font-serif-luxury font-medium text-[#18181B]">{member.name}</h3>
                      <p className="text-xs font-medium text-[#9A6B2F]">{member.role}</p>
                      <p className="text-xs text-stone-500 italic mt-0.5">{member.specialty}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-8 text-center space-y-4">
              <h3 className="text-xl font-serif-luxury text-[#18181B]">Direct Principal Oversight</h3>
              <p className="text-sm text-stone-600 max-w-xl mx-auto">
                Every project is supervised directly by our principals on-site, ensuring absolute quality control, accurate terrain grading, and meticulous stone jointing across all jurisdictions.
              </p>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: CONTACT & INQUIRIES (PREVIOUS PHONE & EMAIL RESTORED) */}
        {/* ======================================================== */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-200">
            <div className="text-center space-y-2">
              <span className="text-xs font-medium text-[#9A6B2F]">Global Inquiries</span>
              <h1 className="text-2xl sm:text-4xl font-serif-luxury text-[#18181B] font-normal">
                Consult With Our Atelier Principals
              </h1>
              <p className="text-sm text-stone-600 max-w-xl mx-auto">
                Share details regarding your upcoming estate commission, museum project, or heritage site conservation. We review briefs across all continents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Global Studio Info */}
              <div className="md:col-span-5 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
                <div>
                  <h3 className="text-lg font-serif-luxury font-medium text-[#18181B]">Global Headquarters</h3>
                  <p className="text-xs text-stone-500 mt-1">Central Atelier & Project Directorate</p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#9A6B2F] shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-[#18181B]">100 King Street West, Suite 5600</div>
                      <div>Toronto, ON M5X 1C9, Canada</div>
                    </div>
                  </div>

                  {/* Restored Phone Number: +1 (867) 988-1524 */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#9A6B2F] shrink-0" />
                    <div>
                      <a href="tel:+18679881524" className="hover:text-[#9A6B2F] transition-colors font-mono">
                        +1 (867) 988-1524
                      </a>
                    </div>
                  </div>

                  {/* Restored Email: aureusmonument@email.com */}
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#9A6B2F] shrink-0" />
                    <div>
                      <a href="mailto:aureusmonument@email.com" className="hover:text-[#9A6B2F] transition-colors">
                        aureusmonument@email.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#9A6B2F] shrink-0 mt-1" />
                    <div>
                      <div>Monday – Friday: 8:00 AM – 6:00 PM EST</div>
                      <div className="text-stone-400">Private Consultations: By advance appointment</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <span className="text-xs font-medium text-stone-700 block mb-1">Global Coverage:</span>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Commissions executed worldwide across North America, Europe, the Mediterranean, the Arabian Gulf, and East Asia.
                  </p>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="md:col-span-7 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif-luxury text-[#18181B]">Thank you for reaching out</h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                      Your consultation brief has been transmitted to our principals. A director will review your project requirements and initiate contact within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-md transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-stone-700">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Lord Harrington / Dr. Elena Rostova"
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-[#9A6B2F]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-stone-700">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@fiduciary.com"
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-[#9A6B2F]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-stone-700">Direct Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (867) 988-1524"
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-[#9A6B2F]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-stone-700">Primary Commission Typology</label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-[#9A6B2F]"
                        >
                          <option>Sovereign Estate Terracing & Retaining Bastions</option>
                          <option>Museum Atrium Modernization & Cultural Hardscaping</option>
                          <option>Archaeological Monument Conservation & Grouting</option>
                          <option>Monumental Sacred Architecture & Reflection Basins</option>
                          <option>Royal Palace Water Cascades & Amphitheaters</option>
                          <option>Long-Term Heritage Maintenance Charter</option>
                          <option>Luxury Pool Surround & Thermal Stone Decks</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-stone-700">Project Geographic Location</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Monaco, Kyoto, London, Aspen, Dubai"
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-[#9A6B2F]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-stone-700">Anticipated Timeframe</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-[#9A6B2F]"
                        >
                          <option>Immediate / Next Quarter</option>
                          <option>3 - 6 Months</option>
                          <option>6 - 12 Months</option>
                          <option>Multi-Year Master Plan</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-stone-700">Commission Scope & Requirements</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail the site geology, historical context, preferred stone varieties (Thassos, travertine, limestone), and scope parameters..."
                        className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-[#9A6B2F]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#9A6B2F] hover:bg-[#835923] text-white text-xs sm:text-sm font-medium rounded-md transition-colors shadow-xs cursor-pointer"
                    >
                      Transmit Consultation Brief
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ======================================================== */}
      {/* CLEAN PROJECT DETAILS MODAL */}
      {/* ======================================================== */}
      {modalProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-stone-300 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150 my-8">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-medium text-[#9A6B2F]">{modalProject.categoryLabel}</span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#18181B]">
                  {modalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalProject(null)}
                className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Project Image */}
              <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                <img 
                  src={modalProject.image} 
                  alt={modalProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Location & Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-[#9A6B2F] font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{modalProject.location}</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {modalProject.description}
                </p>
              </div>

              {/* Stone Materials Specified */}
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200 space-y-2">
                <h5 className="text-xs font-medium text-stone-900">Quarried Natural Stone & Structural Matrix</h5>
                <div className="flex flex-wrap gap-2">
                  {modalProject.materials.map((mat, i) => (
                    <span key={i} className="text-xs bg-white border border-stone-200 px-3 py-1 rounded text-stone-800">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Specs */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-stone-50 rounded border border-stone-200">
                  <span className="text-[11px] text-stone-500 block">Commission Scope</span>
                  <span className="text-sm font-medium text-stone-900">{modalProject.scope}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded border border-stone-200">
                  <span className="text-[11px] text-stone-500 block">Execution Window</span>
                  <span className="text-sm font-medium text-stone-900">{modalProject.timeline}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded border border-stone-200">
                  <span className="text-[11px] text-stone-500 block">Year Completed</span>
                  <span className="text-sm font-medium text-stone-900">{modalProject.year}</span>
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="px-4 py-2 border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-medium rounded-md transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setModalProject(null);
                    handleNavigate('contact');
                  }}
                  className="px-4 py-2 bg-[#9A6B2F] hover:bg-[#835923] text-white text-xs font-medium rounded-md transition-colors"
                >
                  Inquire on Similar Commission
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* FOOTER (GLOBAL HEADQUARTERS IN CANADA, RESTORED EMAIL & PHONE) */}
      {/* ======================================================== */}
      <footer className="bg-white border-t border-stone-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand Col */}
            <div className="space-y-3 md:col-span-1">
              <button
                type="button"
                onClick={handleLogoClick}
                className="flex items-center gap-2.5 text-left cursor-pointer group focus:outline-none"
              >
                <BrandMonogram className="w-6 h-6 text-[#9A6B2F]" />
                <span className="font-serif-luxury text-lg font-medium text-[#18181B]">
                  AUREUS & MONUMENT
                </span>
              </button>
              <p className="text-xs text-stone-500 leading-relaxed">
                Architectural hardscaping, monumental courtyards, palace water amphitheatres, and archaeological heritage preservation worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-stone-900">Explore</h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                <li><button type="button" onClick={() => handleNavigate('home')} className="hover:text-[#9A6B2F] transition-colors cursor-pointer">Home</button></li>
                <li><button type="button" onClick={() => handleNavigate('projects')} className="hover:text-[#9A6B2F] transition-colors cursor-pointer">International Projects</button></li>
                <li><button type="button" onClick={() => handleNavigate('services')} className="hover:text-[#9A6B2F] transition-colors cursor-pointer">Services & Heritage</button></li>
                <li><button type="button" onClick={() => handleNavigate('materials')} className="hover:text-[#9A6B2F] transition-colors cursor-pointer">Royal Materials & Craft</button></li>
                <li><button type="button" onClick={() => handleNavigate('team')} className="hover:text-[#9A6B2F] transition-colors cursor-pointer">Our Team</button></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-stone-900">Disciplines</h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                <li>Museum Atrium Modernization</li>
                <li>Archaeological Site Conservation</li>
                <li>Monumental Sacred Courtyards</li>
                <li>Clifftop & Estate Bastions</li>
                <li>Palace Water Amphitheaters</li>
              </ul>
            </div>

            {/* Studio Address in Canada with Restored Email and Phone */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-stone-900">Global Headquarters</h4>
              <div className="text-xs text-stone-600 space-y-1.5">
                <div>100 King Street West, Suite 5600</div>
                <div>Toronto, ON M5X 1C9, Canada</div>
                <div className="pt-1">
                  <a href="tel:+18679881524" className="text-[#9A6B2F] hover:underline font-mono">
                    +1 (867) 988-1524
                  </a>
                </div>
                <div>
                  <a href="mailto:aureusmonument@email.com" className="hover:text-[#9A6B2F] transition-colors">
                    aureusmonument@email.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 mt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
            <div>
              © 2026 Aureus & Monument Atelier. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-stone-500">
              <button type="button" onClick={() => handleNavigate('contact')} className="hover:text-stone-800">Global Charter</button>
              <span>·</span>
              <button type="button" onClick={() => handleNavigate('contact')} className="hover:text-stone-800">Privacy Policy</button>
              <span>·</span>
              <button type="button" onClick={() => handleNavigate('contact')} className="hover:text-stone-800">Terms of Engagement</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
