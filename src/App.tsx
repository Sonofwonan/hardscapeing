import React, { useState, useMemo, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Check, 
  X, 
  ChevronRight, 
  Globe,
  Clock,
  ArrowUpRight
} from 'lucide-react';

// ==========================================
// BESPOKE ARCHITECTURAL MONOGRAM LOGO
// ==========================================

export function BespokeLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A860" />
          <stop offset="50%" stopColor="#A87A38" />
          <stop offset="100%" stopColor="#75501C" />
        </linearGradient>
      </defs>
      
      {/* Outer Circle with Fine Tick Marks */}
      <circle cx="32" cy="32" r="29" stroke="url(#goldGradientMain)" strokeWidth="1" strokeDasharray="1 3" opacity="0.6" />
      <circle cx="32" cy="32" r="26" stroke="url(#goldGradientMain)" strokeWidth="1.2" />

      {/* Upright Monogram Structure */}
      <path d="M19 44V24L32 37L45 24V44" stroke="url(#goldGradientMain)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 44L32 18L41 44" stroke="url(#goldGradientMain)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 36H38" stroke="url(#goldGradientMain)" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Keystone Diamond Accent */}
      <polygon points="32,15 34.5,19 32,23 29.5,19" fill="#A87A38" />
      <path d="M16 46H48" stroke="url(#goldGradientMain)" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const [homeServiceSector, setHomeServiceSector] = useState<'all' | 'estates' | 'heritage' | 'courtyards'>('all');

  // Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

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

  // TEAM MEMBERS ARRANGED STRICTLY BY HIERARCHY ACCORDING TO POSITION
  // 1. Fahad Al-Sabah: Principal & Managing Director
  // 2. Gabriel Chen: Structural & Geotechnical Director
  // 3. Jefferey T. Montgomery: Director of Sovereign Commissions & Private Estates
  // 4. Corinne W. Smith: Master Stonemason & Materials Director
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
      id: "gabriel",
      name: "Gabriel Chen",
      role: "Structural & Geotechnical Director",
      specialty: "Slope retention, bedrock micropiling & subterranean hydro-engineering",
      bio: "Specializes in deep bedrock anchoring, seismic soil retention, and concealed hydrostatic drainage systems for monumental hillside estates, marine bluffs, and coastal ramparts globally.",
      image: "/images/portrait_chinese_director_1794441906290.jpg"
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
      id: "corinne",
      name: "Corinne W. Smith",
      role: "Master Stonemason & Materials Director",
      specialty: "Quarry provenance, imperial stonecutting & heritage conservation",
      bio: "Directs international quarry provenance verification, traditional lime mortar synthesis, and artisanal stone masonry for luxury private estates, museum atriums, and ancient archaeological monuments worldwide.",
      image: "/images/portrait_corinne_w_smith_passport_1794441905659.jpg"
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

  // 8 Human Master Disciplines Categorized & Organized
  const servicesList = [
    {
      number: "01",
      category: "estates" as const,
      categoryLabel: "Sovereign Estates",
      title: "Clifftop & Private Island Terraces",
      subtitle: "Bedrock Micropiling & Sea Bastions",
      director: "Gabriel Chen",
      directorRole: "Geotechnical Director",
      description: "Multi-tier dry-stack Istrian limestone retaining bastions anchored into coastal dolomite cliffs. Integrated cantilevered stone platforms and infinity plunge pools overhanging ocean promontories.",
      image: "/images/new_cliffside_villa_terrace_1794441906830.jpg",
      materials: ["Istrian Limestone", "Titanium Tiebacks", "Dolomite Stone"],
      leadTime: "14 – 24 Weeks",
      scopeTarget: "terraces" as const
    },
    {
      number: "02",
      category: "heritage" as const,
      categoryLabel: "Museum & Heritage",
      title: "Museum Atrium Modernization",
      subtitle: "Zero-Vibration Cultural Hardscaping",
      director: "Corinne W. Smith",
      directorRole: "Master Stonemason & Materials Director",
      description: "Non-percussive micro-trenching for climate conduits and fiber optics safeguarding priceless Hellenistic antiquities. Honey marble and crystalline flagstone galleries with seismic base isolation.",
      image: "/images/museum_atrium_marble_1794056502385.jpg",
      materials: ["Adnet Honey Marble", "Architectural Bronze", "Base Isolators"],
      leadTime: "12 – 18 Months",
      scopeTarget: "heritage" as const
    },
    {
      number: "03",
      category: "heritage" as const,
      categoryLabel: "Museum & Heritage",
      title: "Archaeological Monument Conservation",
      subtitle: "Reversible Pozzolanic Grouting",
      director: "Corinne W. Smith",
      directorRole: "Master Stonemason & Materials Director",
      description: "Stabilization of ancient ashlar fortifications using custom pozzolanic mortars matching classical chemical fingerprints. Reversible marine-grade stainless tendons without piercing historic stone.",
      image: "/images/acropolis_stone_wall_1794056512464.jpg",
      materials: ["Volcanic Pozzolan", "Air Lime CL-90", "316L Stainless"],
      leadTime: "18 – 36 Months",
      scopeTarget: "heritage" as const
    },
    {
      number: "04",
      category: "courtyards" as const,
      categoryLabel: "Sacred & Palaces",
      title: "Monumental Sacred Courtyards",
      subtitle: "Thermal Sub-cooling & Crystalline Marble",
      director: "Fahad Al-Sabah",
      directorRole: "Principal Director",
      description: "Hand-dressed Greek Thassos and Macedonian Sivec white marble arcades framing expansive reflection basins. Subterranean radiant sub-cooling and intricate lapis lazuli floral inlays.",
      image: "/images/sheikh_zayed_courtyard_1794312369396.jpg",
      materials: ["Thassos White Marble", "Lapis Lazuli Inlays", "24K Gold Leaf"],
      leadTime: "16 – 28 Months",
      scopeTarget: "courtyards" as const
    },
    {
      number: "05",
      category: "courtyards" as const,
      categoryLabel: "Sacred & Palaces",
      title: "Palace Water Amphitheaters",
      subtitle: "Closed-Loop Hydraulic Cascades",
      director: "Gabriel Chen",
      directorRole: "Geotechnical Director",
      description: "Tiered travertine water stairways, cascading stone spillways, and restored royal parterre promenades. Concealed variable-velocity hydraulic pumps with classical carved stone balustrades.",
      image: "/images/grand_palace_hardscaping_1794058074270.jpg",
      materials: ["Roman Travertine", "Cast Bronze Spouts", "Austrian Calcarenite"],
      leadTime: "16 – 24 Months",
      scopeTarget: "pools" as const
    },
    {
      number: "06",
      category: "estates" as const,
      categoryLabel: "Sovereign Estates",
      title: "Luxury Pool Surrounds & Thermal Decks",
      subtitle: "Bespoke Coping & Heated Stone",
      director: "Corinne W. Smith",
      directorRole: "Master Stonemason & Materials Director",
      description: "Zero-edge travertine wet-decks that stay naturally cool under intense sunlight. Flush coping transitions, integrated stone fire features, and sunken outdoor conversation lounges.",
      image: "/images/amalfi_cliff_terrace_1794312370486.jpg",
      materials: ["Vein-Cut Travertine", "Flamed Granite", "Bronze Handrails"],
      leadTime: "10 – 16 Weeks",
      scopeTarget: "pools" as const
    },
    {
      number: "07",
      category: "heritage" as const,
      categoryLabel: "Museum & Heritage",
      title: "Heritage Maintenance Charters",
      subtitle: "Laser Stone Cleaning & Preservation",
      director: "Corinne W. Smith",
      directorRole: "Master Stonemason & Materials Director",
      description: "Cyclic microclimatic stone consolidation, non-destructive pulsed laser patina cleaning, and biological biocide regimens to protect irreplaceable historical masonry against weathering.",
      image: "/images/monemvasia_citadel_cliff_1794312400083.jpg",
      materials: ["Silicic Acid Consolidant", "Pure Lime Mortar", "Hydrophobic Seal"],
      leadTime: "Annual / Multi-Year",
      scopeTarget: "heritage" as const
    },
    {
      number: "08",
      category: "estates" as const,
      categoryLabel: "Sovereign Estates",
      title: "Driveway Courtyards & Permeable Pavers",
      subtitle: "Hand-Set European Porphyry & Granite",
      director: "Gabriel Chen",
      directorRole: "Geotechnical Director",
      description: "European porphyry and granite cobblestone motor courts engineered for high-load vehicular traffic. Monolithic limestone entrance pillars and subterranean stormwater retention chambers.",
      image: "/images/florence_uffizi_loggia_1794312385726.jpg",
      materials: ["Porphyry Pavers", "Belgian Blue Stone", "Limestone Pillars"],
      leadTime: "8 – 14 Weeks",
      scopeTarget: "courtyards" as const
    }
  ];

  // Filtered home services by practice sector
  const filteredHomeServices = useMemo(() => {
    if (homeServiceSector === 'all') return servicesList;
    return servicesList.filter(s => s.category === homeServiceSector);
  }, [homeServiceSector, servicesList]);

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
    showToast('Consultation brief received! A director will initiate contact within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1C18] flex flex-col selection:bg-[#967241]/20 selection:text-[#1F1C18]">
      
      {/* ======================================================== */}
      {/* SERENE GALLERY LOADING SCREEN */}
      {/* ======================================================== */}
      <div 
        className={`fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col items-center justify-center transition-opacity duration-700 ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsLoading(false)}
      >
        <div className="flex flex-col items-center space-y-4 text-center px-6 animate-in fade-in duration-500">
          <BespokeLogo className="w-16 h-16 drop-shadow-sm" />
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-serif-luxury tracking-widest text-[#1F1C18]">
              AUREUS & MONUMENT
            </h2>
            <p className="text-xs text-[#8E795B] tracking-wider uppercase font-medium">
              Architectural Hardscaping & Monument Preservation
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F1C18] text-[#FAF8F5] px-5 py-3 rounded-md shadow-2xl text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-[#D4A860]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ======================================================== */}
      {/* EDITORIAL HEADER (SEAMLESS, BORDERLESS LUXURY) */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE5DB] transition-all">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 h-20 sm:h-22 flex items-center justify-between gap-6">
          
          {/* Brand Wordmark & Bespoke Logo */}
          <button 
            type="button"
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
            aria-label="Aureus & Monument Home"
          >
            <BespokeLogo className="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform duration-300 shrink-0" />
            <div>
              <span className="text-lg sm:text-2xl font-serif-luxury font-medium tracking-wide text-[#1F1C18] block leading-tight">
                AUREUS & MONUMENT
              </span>
              <span className="text-[11px] text-[#787168] font-sans tracking-normal block">
                Architectural Hardscaping & Monument Preservation
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium text-[#5A5247]">
            <button 
              type="button"
              onClick={() => handleNavigate('home')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'home' ? 'text-[#1F1C18] font-semibold' : 'hover:text-[#1F1C18]'
              }`}
            >
              Home
              {activeTab === 'home' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#967241]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('projects')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'projects' ? 'text-[#1F1C18] font-semibold' : 'hover:text-[#1F1C18]'
              }`}
            >
              Projects
              {activeTab === 'projects' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#967241]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('services')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'services' ? 'text-[#1F1C18] font-semibold' : 'hover:text-[#1F1C18]'
              }`}
            >
              Services
              {activeTab === 'services' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#967241]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('materials')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'materials' ? 'text-[#1F1C18] font-semibold' : 'hover:text-[#1F1C18]'
              }`}
            >
              Materials & Craft
              {activeTab === 'materials' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#967241]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('team')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'team' ? 'text-[#1F1C18] font-semibold' : 'hover:text-[#1F1C18]'
              }`}
            >
              Our Team
              {activeTab === 'team' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#967241]" />}
            </button>
            <button 
              type="button"
              onClick={() => handleNavigate('contact')}
              className={`py-2 transition-colors relative cursor-pointer ${
                activeTab === 'contact' ? 'text-[#1F1C18] font-semibold' : 'hover:text-[#1F1C18]'
              }`}
            >
              Contact
              {activeTab === 'contact' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#967241]" />}
            </button>
          </nav>

          {/* Action Trigger */}
          <div className="flex items-center gap-5">
            <a 
              href="tel:+18679881524" 
              className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#787168] hover:text-[#1F1C18] transition-colors"
            >
              <span>+1 (867) 988-1524</span>
            </a>
            <button 
              type="button"
              onClick={() => handleNavigate('contact')}
              className="px-5 py-2.5 bg-[#1F1C18] hover:bg-[#38332B] text-[#FAF8F5] text-xs font-medium tracking-wide rounded-sm transition-colors cursor-pointer"
            >
              Request a Consultation
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1F1C18] hover:bg-[#EAE5DB] rounded-sm transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <div className="space-y-1 w-5"><div className="h-0.5 bg-current w-full" /><div className="h-0.5 bg-current w-full" /><div className="h-0.5 bg-current w-full" /></div>}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE5DB] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
            <button 
              type="button" 
              onClick={() => handleNavigate('home')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'home' ? 'text-[#967241] font-semibold' : 'text-[#1F1C18]'}`}
            >
              Home
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('projects')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'projects' ? 'text-[#967241] font-semibold' : 'text-[#1F1C18]'}`}
            >
              Projects
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('services')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'services' ? 'text-[#967241] font-semibold' : 'text-[#1F1C18]'}`}
            >
              Services & Heritage Conservation
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('materials')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'materials' ? 'text-[#967241] font-semibold' : 'text-[#1F1C18]'}`}
            >
              Materials & Royal Craft
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('team')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'team' ? 'text-[#967241] font-semibold' : 'text-[#1F1C18]'}`}
            >
              Our Team
            </button>
            <button 
              type="button" 
              onClick={() => handleNavigate('contact')} 
              className={`block w-full text-left py-2 text-sm ${activeTab === 'contact' ? 'text-[#967241] font-semibold' : 'text-[#1F1C18]'}`}
            >
              Contact & Inquiries
            </button>
            <div className="pt-3 border-t border-[#EAE5DB] flex items-center justify-between text-xs text-[#787168]">
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#967241]" /> Worldwide Practice</span>
              <a href="tel:+18679881524" className="text-[#1F1C18] font-mono font-medium">+1 (867) 988-1524</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        
        {/* ======================================================== */}
        {/* TAB: HOME PAGE */}
        {/* ======================================================== */}
        {activeTab === 'home' && (
          <div className="w-full flex flex-col">
            
            {/* 1. SEAMLESS FULL-BLEED CINEMATIC HERO (ENLARGED IMAGE, NO CARD BORDER, ONLY TITLE & 2 BUTTONS) */}
            <section className="relative w-full h-[82vh] sm:h-[88vh] min-h-[560px] max-h-[920px] overflow-hidden">
              
              {/* Full Bleed Image Filling the Entire Width */}
              <img 
                src="/images/new_cliffside_villa_terrace_1794441906830.jpg"
                alt="Architectural Hardscaping & Master Stonework"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Gentle Natural Film Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />

              {/* Foreground: ONLY Title and the Two Action Buttons */}
              <div className="relative w-full max-w-[1720px] mx-auto h-full px-6 sm:px-12 lg:px-16 flex flex-col justify-end pb-16 sm:pb-20 max-w-5xl">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury text-white font-normal leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-4xl">
                    Architectural Hardscaping & Master Stonework
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => handleNavigate('projects')}
                      className="px-7 py-4 bg-[#FAF8F5] hover:bg-white text-[#1F1C18] text-xs sm:text-sm font-medium tracking-wide rounded-sm transition-all shadow-xl flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Our Projects</span>
                      <ArrowRight className="w-4 h-4 text-[#967241]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavigate('contact')}
                      className="px-7 py-4 bg-black/40 hover:bg-black/60 text-white text-xs sm:text-sm font-medium tracking-wide rounded-sm transition-all border border-white/50 backdrop-blur-md cursor-pointer"
                    >
                      Request a Consultation
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. HUMAN EDITORIAL INTRO STRIP (SEAMLESSLY BLENDED, NO FLOATING BOXES) */}
            <section className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#EAE5DB]">
              <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  
                  <div className="lg:col-span-4 space-y-3">
                    <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">
                      The Atelier Ethos
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#1F1C18] leading-tight">
                      Where geology meets classical proportion
                    </h2>
                  </div>

                  <div className="lg:col-span-8 space-y-6 text-[#5A5247] text-base sm:text-lg leading-relaxed font-light">
                    <p>
                      We work with raw, honest materials drawn from the earth: crystalline marbles, porous travertines, volcanic basalts, and glacial boulders. Every commission begins with the terrain itself—its natural contours, subterranean aquifers, and sun angles.
                    </p>
                    <p className="text-sm sm:text-base text-[#787168]">
                      Our team pairs deep geotechnical engineering—micropiles, bedrock ties, concealed hydrostatic drainage—with the patience of master stonemasons who hand-dress each block to endure generations of weather and human life.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* 3. REFACTORED & HIGHLY ORGANIZED ARCHITECTURAL DISCIPLINES (SEAMLESS HAIRLINE GRID, NO FLOATING CARDS) */}
            <section className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#EAE5DB]">
              <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
                
                {/* Header & Sector Navigation */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#EAE5DB] pb-8">
                  <div className="max-w-3xl space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">
                        Disciplines of Practice
                      </span>
                      <span className="h-px w-8 bg-[#DFD9CD]" />
                      <span className="text-[11px] font-mono text-[#787168]">8 Global Specializations</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1F1C18] font-normal leading-tight">
                      Comprehensive Architectural & Heritage Services
                    </h2>
                    <p className="text-sm sm:text-base text-[#5A5247] font-light leading-relaxed">
                      Structured across three foundational sectors: deep bedrock slope retention, museum climate galleries, and imperial white marble courtyards worldwide.
                    </p>
                  </div>

                  {/* Clean Minimal Sector Filter Tabs */}
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { id: 'all', label: 'All Disciplines (8)' },
                      { id: 'estates', label: 'Sovereign Estates & Terracing (3)' },
                      { id: 'heritage', label: 'Museum & Heritage Sites (3)' },
                      { id: 'courtyards', label: 'Royal Courtyards & Waters (2)' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setHomeServiceSector(tab.id as 'all' | 'estates' | 'heritage' | 'courtyards')}
                        className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-all cursor-pointer ${
                          homeServiceSector === tab.id
                            ? 'bg-[#1F1C18] text-[#FAF8F5] shadow-xs'
                            : 'bg-[#F5F2EC] text-[#5A5247] hover:bg-[#EAE5DB] hover:text-[#1F1C18]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clean, Simple Architectural Grid (Clean Images, No Image Wordings, Few Words, No Floating Buttons) */}
                <div className="border border-[#DFD9CD] bg-[#DFD9CD] gap-px grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                  {filteredHomeServices.map((service) => (
                    <div 
                      key={service.number}
                      onClick={() => {
                        setSelectedCategory(service.scopeTarget);
                        handleNavigate('projects');
                      }}
                      className="bg-[#FAF8F5] p-6 sm:p-7 flex flex-col justify-between hover:bg-[#F7F4EE] transition-colors group cursor-pointer"
                    >
                      <div className="space-y-3.5">
                        
                        {/* Pure Clean Photographic Plate (Zero Wordings on Image) */}
                        <div className="relative aspect-16/10 overflow-hidden rounded-xs bg-stone-200">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                          />
                        </div>

                        {/* Category Label */}
                        <div className="flex items-center justify-between text-xs pt-0.5">
                          <span className="text-[11px] uppercase tracking-wider text-[#8E795B] font-semibold">
                            {service.categoryLabel}
                          </span>
                          <span className="text-[11px] text-[#8E795B] font-mono">
                            {service.number}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-0.5">
                          <h3 className="text-xl font-serif-luxury text-[#1F1C18] group-hover:text-[#967241] transition-colors leading-snug font-medium">
                            {service.title}
                          </h3>
                          <p className="text-xs text-[#8E795B] font-medium">
                            {service.subtitle}
                          </p>
                        </div>

                        {/* Concise Few Words Description */}
                        <p className="text-xs text-[#5A5247] leading-relaxed line-clamp-2 font-light">
                          {service.description}
                        </p>

                        {/* Clean Materials Label */}
                        <div className="pt-1.5 text-[11px] text-[#787168] border-t border-[#EAE5DB]">
                          <span>{service.materials.join(' · ')}</span>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 4. GALLERY SHOWCASE (FRAMLESS PHOTOGRAPHY, NATURAL MONOGRAPH RHYTHM) */}
            <section className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#EAE5DB]">
              <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAE5DB] pb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">
                      Selected Works
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1F1C18] font-normal mt-1">
                      International Portfolio
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavigate('projects')}
                    className="text-xs font-semibold text-[#8E795B] hover:text-[#1F1C18] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View All Works ({projects.length})</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 3 Large Frameless Project Showcases */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                  {projects.slice(0, 3).map((p) => (
                    <article 
                      key={p.id}
                      onClick={() => setModalProject(p)}
                      className="group cursor-pointer space-y-4"
                    >
                      <div className="relative aspect-16/11 overflow-hidden rounded-sm bg-stone-200">
                        <img 
                          src={p.image} 
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#1F1C18]">
                          {p.year}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-xs text-[#8E795B] font-medium tracking-wide">
                          {p.categoryLabel} · {p.location.split('·')[0].trim()}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#1F1C18] group-hover:text-[#967241] transition-colors font-medium leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5A5247] line-clamp-2 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. HUMAN CRAFTSMEN SECTION (WARM, AUTHENTIC, REVERENT TO STONE) */}
            <section className="w-full bg-[#F5F2EC] py-20 sm:py-28 border-b border-[#EAE5DB]">
              <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 space-y-14">
                
                <div className="max-w-2xl space-y-2 border-b border-[#DFD9CD] pb-6">
                  <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">
                    The Directorate & Guild
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1F1C18] font-normal">
                    Master Craftsmen & Engineers
                  </h2>
                  <p className="text-sm text-[#5A5247]">
                    Governed by four senior principals who personally oversee bedrock analysis, quarry extraction, and stone jointing on-site.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {team.map((member) => (
                    <div key={member.id} className="space-y-4">
                      {/* Human Circular Portrait */}
                      <div className="w-24 h-24 rounded-full overflow-hidden shadow-xs ring-2 ring-[#DFD9CD] bg-stone-200">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-serif-luxury text-[#1F1C18] font-medium">{member.name}</h3>
                        <p className="text-xs font-semibold text-[#8E795B]">{member.role}</p>
                        <p className="text-xs text-[#787168] italic">{member.specialty}</p>
                        <p className="text-xs text-[#5A5247] pt-2 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. CONVERSATION STRIP (INVITING, CALM, UNRUSHED) */}
            <section className="w-full bg-[#FAF8F5] py-20 sm:py-24">
              <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 text-center space-y-6 max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">
                  Global Inquiries
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#1F1C18]">
                  Commission an architectural dialogue
                </h2>
                <p className="text-sm sm:text-base text-[#5A5247] leading-relaxed">
                  Whether establishing a new clifftop terrace, revitalizing an imperial parterre, or preserving an archaeological landmark, our principals are available for initial site studies.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleNavigate('contact')}
                    className="px-8 py-4 bg-[#1F1C18] hover:bg-[#38332B] text-[#FAF8F5] text-xs font-medium tracking-wide rounded-sm transition-colors cursor-pointer"
                  >
                    Initiate Private Commission Brief
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: PROJECTS / PORTFOLIO */}
        {/* ======================================================== */}
        {activeTab === 'projects' && (
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-16 space-y-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#EAE5DB] pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">Archive</span>
                <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#1F1C18] font-normal mt-1">
                  International Masterworks
                </h1>
                <p className="text-sm text-[#5A5247] mt-1">
                  Explore completed clifftop terraces, royal courtyards, palace water amphitheatres, and archaeological conservations worldwide.
                </p>
              </div>

              {/* Minimal Category Tabs */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {[
                  { id: 'all', label: 'All Works' },
                  { id: 'terraces', label: 'Clifftop & Terraces' },
                  { id: 'pools', label: 'Royal Water & Pools' },
                  { id: 'courtyards', label: 'Courtyards & Palaces' },
                  { id: 'heritage', label: 'Museum & Heritage' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-sm transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#1F1C18] text-[#FAF8F5] font-medium'
                        : 'bg-[#F5F2EC] text-[#5A5247] hover:bg-[#EAE5DB]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Frameless Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setModalProject(project)}
                  className="group cursor-pointer space-y-3"
                >
                  <div className="relative aspect-16/11 overflow-hidden rounded-sm bg-stone-200">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#1F1C18]">
                      {project.scope}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-[#8E795B] font-medium">{project.categoryLabel}</span>
                    <h3 className="text-xl font-serif-luxury text-[#1F1C18] group-hover:text-[#967241] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#5A5247] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-2 text-xs text-[#787168] flex items-center justify-between">
                      <span>{project.location.split('·')[0].trim()}</span>
                      <span className="text-[#1F1C18] font-medium group-hover:translate-x-0.5 transition-transform">View Dossier →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: SERVICES */}
        {/* ======================================================== */}
        {activeTab === 'services' && (
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-16 space-y-16">
            
            <div className="max-w-3xl space-y-2 border-b border-[#EAE5DB] pb-6">
              <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">Disciplines</span>
              <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#1F1C18] font-normal">
                Master Hardscaping, Museum Modernization & Heritage Preservation
              </h1>
              <p className="text-sm text-[#5A5247]">
                A world-class suite of architectural stone disciplines serving royal trusts, cultural ministries, private family offices, and monumental estates worldwide.
              </p>
            </div>

            <div className="divide-y divide-[#EAE5DB]">
              {servicesList.map((svc) => (
                <div key={svc.number} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-mono text-xl text-[#8E795B]">{svc.number}</span>
                    <h3 className="text-2xl font-serif-luxury font-medium text-[#1F1C18] leading-tight">
                      {svc.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-sm text-[#5A5247] leading-relaxed">
                      {svc.description}
                    </p>
                    <div className="space-y-1 text-xs text-[#787168]">
                      <span className="font-medium text-[#1F1C18] block">Primary Materials:</span>
                      <p>{svc.materials.join(' · ')}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-4 aspect-16/10 rounded-sm overflow-hidden bg-stone-200">
                    <img 
                      src={svc.image} 
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: MATERIALS & ROYAL CRAFT */}
        {/* ======================================================== */}
        {activeTab === 'materials' && (
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-16 space-y-14">
            
            <div className="max-w-3xl space-y-2 border-b border-[#EAE5DB] pb-6">
              <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">Provenance</span>
              <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#1F1C18] font-normal">
                Rare, Luxury & Royal Materials
              </h1>
              <p className="text-sm text-[#5A5247]">
                Certified quarried natural stones, crystalline marbles, historic travertines, and semiprecious inlays curated for royal palaces, museums, and clifftop estates.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 text-xs border-b border-[#EAE5DB] pb-5">
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
                  className={`px-3.5 py-1.5 rounded-sm transition-all cursor-pointer ${
                    selectedMaterialCategory === c.id
                      ? 'bg-[#1F1C18] text-[#FAF8F5] font-medium'
                      : 'bg-[#F5F2EC] text-[#5A5247] hover:bg-[#EAE5DB]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMaterials.map((mat, idx) => (
                <div key={idx} className="border-t border-[#DFD9CD] pt-6 space-y-3">
                  <span className="text-[11px] font-mono text-[#8E795B] uppercase tracking-wider block">
                    {mat.provenance}
                  </span>

                  <h3 className="text-xl font-serif-luxury font-medium text-[#1F1C18]">
                    {mat.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A5247] leading-relaxed">
                    {mat.description}
                  </p>

                  <div className="pt-2 text-xs space-y-1">
                    <span className="text-[11px] font-medium text-[#1F1C18] block">Characteristics:</span>
                    <p className="text-[#787168]">{mat.characteristics.join(' · ')}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Provenance Banner */}
            <div className="bg-[#F5F2EC] p-8 sm:p-12 border-l-2 border-[#967241] space-y-3">
              <h3 className="text-2xl font-serif-luxury text-[#1F1C18]">Quarry Provenance Guarantee</h3>
              <p className="text-sm text-[#5A5247] max-w-2xl leading-relaxed">
                Every consignment of Thassos marble, Istrian limestone, Adnet calcarenite, and Roman travertine is personally verified at the quarry source by Corinne W. Smith to ensure geological purity and compressive density.
              </p>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: OUR TEAM */}
        {/* ======================================================== */}
        {activeTab === 'team' && (
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-16 space-y-14">
            
            <div className="max-w-2xl space-y-2 border-b border-[#EAE5DB] pb-6">
              <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">Leadership</span>
              <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#1F1C18] font-normal">
                Master Craftsmen & Project Directors
              </h1>
              <p className="text-sm text-[#5A5247]">
                Uniting licensed structural and geotechnical engineering with multi-generational royal stonemasonry artistry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {team.map((member) => (
                <div key={member.id} className="flex flex-col sm:flex-row items-start gap-6 border-t border-[#DFD9CD] pt-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-[#DFD9CD] bg-stone-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-2xl font-serif-luxury font-medium text-[#1F1C18]">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#8E795B]">{member.role}</p>
                    <p className="text-xs text-[#787168] italic">{member.specialty}</p>
                    <p className="text-xs sm:text-sm text-[#5A5247] leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: CONTACT */}
        {/* ======================================================== */}
        {activeTab === 'contact' && (
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-16 space-y-14">
            
            <div className="max-w-2xl space-y-2 border-b border-[#EAE5DB] pb-6">
              <span className="text-xs uppercase tracking-widest text-[#8E795B] font-semibold">Dialogue</span>
              <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#1F1C18] font-normal">
                Consult With Our Atelier Principals
              </h1>
              <p className="text-sm text-[#5A5247]">
                Share details regarding your upcoming estate commission, museum project, or heritage site conservation. We review briefs across all continents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              
              {/* Studio Info */}
              <div className="md:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-serif-luxury text-[#1F1C18]">Global Headquarters</h3>
                  <p className="text-xs text-[#787168] mt-0.5">Central Atelier & Directorate</p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#5A5247]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#8E795B] shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-[#1F1C18]">100 King Street West, Suite 5600</div>
                      <div>Toronto, ON M5X 1C9, Canada</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#8E795B] shrink-0" />
                    <div>
                      <a href="tel:+18679881524" className="hover:text-[#1F1C18] transition-colors font-mono font-medium">
                        +1 (867) 988-1524
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#8E795B] shrink-0" />
                    <div>
                      <a href="mailto:aureusmonument@email.com" className="hover:text-[#1F1C18] transition-colors">
                        aureusmonument@email.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#8E795B] shrink-0 mt-1" />
                    <div>
                      <div>Monday – Friday: 8:00 AM – 6:00 PM EST</div>
                      <div className="text-[#787168]">Private Consultations: By advance appointment</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAE5DB]">
                  <span className="text-xs font-semibold text-[#1F1C18] block mb-1">Global Commissions:</span>
                  <p className="text-xs text-[#787168] leading-relaxed">
                    Commissions executed worldwide across North America, Europe, the Mediterranean, the Arabian Gulf, and East Asia.
                  </p>
                </div>
              </div>

              {/* Seamless Form */}
              <div className="md:col-span-7 bg-[#F5F2EC] p-8 sm:p-10 rounded-sm">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#EAE5DB] text-[#1F1C18] mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif-luxury text-[#1F1C18]">Thank you for reaching out</h3>
                    <p className="text-xs sm:text-sm text-[#5A5247] max-w-md mx-auto">
                      Your consultation brief has been transmitted to our principals. A director will review your project requirements and initiate contact within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 bg-[#1F1C18] text-[#FAF8F5] text-xs font-medium rounded-sm transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-[#1F1C18]">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Lord Harrington / Dr. Elena Rostova"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DFD9CD] rounded-sm text-xs sm:text-sm text-[#1F1C18] focus:outline-none focus:border-[#1F1C18]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-[#1F1C18]">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@fiduciary.com"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DFD9CD] rounded-sm text-xs sm:text-sm text-[#1F1C18] focus:outline-none focus:border-[#1F1C18]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-[#1F1C18]">Direct Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (867) 988-1524"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DFD9CD] rounded-sm text-xs sm:text-sm text-[#1F1C18] focus:outline-none focus:border-[#1F1C18]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-[#1F1C18]">Primary Typology</label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DFD9CD] rounded-sm text-xs sm:text-sm text-[#1F1C18] focus:outline-none focus:border-[#1F1C18]"
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
                        <label className="text-xs font-medium text-[#1F1C18]">Project Geographic Location</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Monaco, Kyoto, London, Aspen, Dubai"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DFD9CD] rounded-sm text-xs sm:text-sm text-[#1F1C18] focus:outline-none focus:border-[#1F1C18]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-[#1F1C18]">Anticipated Timeframe</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DFD9CD] rounded-sm text-xs sm:text-sm text-[#1F1C18] focus:outline-none focus:border-[#1F1C18]"
                        >
                          <option>Immediate / Next Quarter</option>
                          <option>3 - 6 Months</option>
                          <option>6 - 12 Months</option>
                          <option>Multi-Year Master Plan</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#1F1C18]">Commission Scope & Requirements</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail the site geology, historical context, preferred stone varieties (Thassos, travertine, limestone), and scope parameters..."
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DFD9CD] rounded-sm text-xs sm:text-sm text-[#1F1C18] focus:outline-none focus:border-[#1F1C18]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#1F1C18] hover:bg-[#38332B] text-[#FAF8F5] text-xs sm:text-sm font-medium rounded-sm transition-colors cursor-pointer"
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
          <div className="bg-[#FAF8F5] border border-[#EAE5DB] rounded-sm max-w-3xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150 my-8">
            
            <div className="px-6 py-5 border-b border-[#EAE5DB] flex items-center justify-between">
              <div>
                <span className="text-xs font-medium text-[#8E795B] uppercase tracking-wider">{modalProject.categoryLabel}</span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#1F1C18]">
                  {modalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalProject(null)}
                className="p-1.5 text-[#787168] hover:text-[#1F1C18] rounded-sm hover:bg-[#EAE5DB] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="relative aspect-16/10 rounded-sm overflow-hidden bg-stone-200">
                <img 
                  src={modalProject.image} 
                  alt={modalProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-[#8E795B] font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{modalProject.location}</span>
                </div>
                <p className="text-sm text-[#5A5247] leading-relaxed">
                  {modalProject.description}
                </p>
              </div>

              <div className="bg-[#F5F2EC] rounded-sm p-4 space-y-2">
                <h5 className="text-xs font-medium text-[#1F1C18]">Quarried Natural Stone & Structural Matrix</h5>
                <div className="flex flex-wrap gap-2">
                  {modalProject.materials.map((mat, i) => (
                    <span key={i} className="text-xs bg-[#FAF8F5] border border-[#DFD9CD] px-3 py-1 rounded-sm text-[#1F1C18]">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-[#F5F2EC] rounded-sm">
                  <span className="text-[11px] text-[#787168] block">Commission Scope</span>
                  <span className="text-sm font-medium text-[#1F1C18]">{modalProject.scope}</span>
                </div>
                <div className="p-3 bg-[#F5F2EC] rounded-sm">
                  <span className="text-[11px] text-[#787168] block">Execution Window</span>
                  <span className="text-sm font-medium text-[#1F1C18]">{modalProject.timeline}</span>
                </div>
                <div className="p-3 bg-[#F5F2EC] rounded-sm">
                  <span className="text-[11px] text-[#787168] block">Year Completed</span>
                  <span className="text-sm font-medium text-[#1F1C18]">{modalProject.year}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#EAE5DB]">
                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="px-4 py-2 border border-[#DFD9CD] text-[#5A5247] hover:bg-[#F5F2EC] hover:text-[#1F1C18] text-xs font-medium rounded-sm transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setModalProject(null);
                    handleNavigate('contact');
                  }}
                  className="px-5 py-2.5 bg-[#1F1C18] hover:bg-[#38332B] text-[#FAF8F5] text-xs font-medium rounded-sm transition-colors"
                >
                  Inquire on Similar Commission
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SEAMLESS ARCHITECTURAL FOOTER */}
      {/* ======================================================== */}
      <footer className="bg-[#FAF8F5] border-t border-[#EAE5DB] py-16 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            <div className="space-y-3.5 md:col-span-1">
              <button
                type="button"
                onClick={handleLogoClick}
                className="flex items-center gap-3 text-left cursor-pointer group focus:outline-none"
              >
                <BespokeLogo className="w-8 h-8 shrink-0" />
                <span className="font-serif-luxury text-lg font-medium text-[#1F1C18]">
                  AUREUS & MONUMENT
                </span>
              </button>
              <p className="text-xs text-[#787168] leading-relaxed">
                Architectural hardscaping, monumental courtyards, palace water amphitheatres, and archaeological heritage preservation worldwide.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-[#1F1C18] uppercase tracking-wider">Explore</h4>
              <ul className="space-y-1.5 text-xs text-[#5A5247]">
                <li><button type="button" onClick={() => handleNavigate('home')} className="hover:text-[#1F1C18] transition-colors cursor-pointer">Home</button></li>
                <li><button type="button" onClick={() => handleNavigate('projects')} className="hover:text-[#1F1C18] transition-colors cursor-pointer">International Projects</button></li>
                <li><button type="button" onClick={() => handleNavigate('services')} className="hover:text-[#1F1C18] transition-colors cursor-pointer">Services & Heritage</button></li>
                <li><button type="button" onClick={() => handleNavigate('materials')} className="hover:text-[#1F1C18] transition-colors cursor-pointer">Royal Materials & Craft</button></li>
                <li><button type="button" onClick={() => handleNavigate('team')} className="hover:text-[#1F1C18] transition-colors cursor-pointer">Our Team</button></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-[#1F1C18] uppercase tracking-wider">Disciplines</h4>
              <ul className="space-y-1.5 text-xs text-[#5A5247]">
                <li>Museum Atrium Modernization</li>
                <li>Archaeological Site Conservation</li>
                <li>Monumental Sacred Courtyards</li>
                <li>Clifftop & Estate Bastions</li>
                <li>Palace Water Amphitheaters</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-[#1F1C18] uppercase tracking-wider">Global Headquarters</h4>
              <div className="text-xs text-[#5A5247] space-y-1.5">
                <div className="text-[#1F1C18] font-medium">100 King Street West, Suite 5600</div>
                <div>Toronto, ON M5X 1C9, Canada</div>
                <div className="pt-1">
                  <a href="tel:+18679881524" className="text-[#1F1C18] hover:underline font-mono font-medium">
                    +1 (867) 988-1524
                  </a>
                </div>
                <div>
                  <a href="mailto:aureusmonument@email.com" className="hover:text-[#1F1C18] transition-colors">
                    aureusmonument@email.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 mt-12 border-t border-[#EAE5DB] flex flex-col sm:flex-row items-center justify-between text-xs text-[#787168] gap-4">
            <div>
              © 2026 Aureus & Monument Atelier. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[#787168]">
              <button type="button" onClick={() => handleNavigate('contact')} className="hover:text-[#1F1C18]">Global Charter</button>
              <span>·</span>
              <button type="button" onClick={() => handleNavigate('contact')} className="hover:text-[#1F1C18]">Privacy Policy</button>
              <span>·</span>
              <button type="button" onClick={() => handleNavigate('contact')} className="hover:text-[#1F1C18]">Terms of Engagement</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
