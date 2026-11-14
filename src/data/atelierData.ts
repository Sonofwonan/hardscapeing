import quarryMarbleImg from '../assets/images/quarry_marble_extraction_1794627974657.jpg';
import artisanWorkshopImg from '../assets/images/artisan_stonecutting_workshop_1794627976277.jpg';
import sampleBoardRareImg from '../assets/images/sample_board_rare_stones_1794630928995.jpg';
import monumentSitePlanImg from '../assets/images/monument_topographic_site_plan_1794630930552.jpg';
import macroLapisGoldImg from '../assets/images/macro_lapis_gold_inlay_sharp_1794630928612.jpg';
import macroTravertineImg from '../assets/images/macro_travertine_limestone_sharp_1794630928378.jpg';
import macroBasaltPorphyryImg from '../assets/images/macro_basalt_porphyry_stone_1794630928955.jpg';

export type TabType = 'home' | 'about' | 'services' | 'projects' | 'materials' | 'team' | 'contact';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  credentials: string[];
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'terraces' | 'pools' | 'courtyards' | 'heritage';
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  engineeringNote: string;
  materials: string[];
  leadDirectorId: string;
  scope: string;
  timeline: string;
  year: string;
}

export interface ServiceItem {
  number: string;
  category: 'estates' | 'heritage' | 'courtyards';
  categoryLabel: string;
  title: string;
  subtitle: string;
  directorId: string;
  director: string;
  directorRole: string;
  description: string;
  deliverables: string[];
  image: string;
  materials: string[];
  leadTime: string;
  scopeTarget: 'terraces' | 'pools' | 'courtyards' | 'heritage';
  iconKey: 'layers' | 'landmark' | 'history' | 'crown' | 'droplets' | 'flame' | 'shield' | 'compass';
}

export interface LuxuryMaterial {
  id: string;
  name: string;
  category: 'marble' | 'travertine' | 'inlay' | 'granite';
  provenance: string;
  description: string;
  characteristics: string[];
  applications: string;
  image: string;
}

export interface ProcessGalleryItem {
  id: string;
  stage: string;
  category: 'quarry' | 'studio' | 'plans' | 'macro';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  technicalNotes: string;
  specs: string[];
  image: string;
}

export interface HeroSlide {
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
  cta: { label: string; target: TabType };
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  image: string;
}

export const GENERATED_ASSETS = {
  quarryMarbleImg,
  artisanWorkshopImg,
  studioSamplesImg: sampleBoardRareImg,
  monumentPlanImg: monumentSitePlanImg,
  closeupLapisImg: macroLapisGoldImg,
  closeupTravertineImg: macroTravertineImg,
  macroBasaltPorphyryImg
};

export const PROCESS_GALLERY: ProcessGalleryItem[] = [
  {
    id: 'studio-samples',
    stage: '01 · Studio Samples',
    category: 'studio',
    categoryLabel: 'Rare Stone Library',
    title: 'Quarry Sample Specification Board',
    subtitle: 'Thassos Marble · Adnet Fossil · Travertine · Belgian Blue · Lapis',
    description:
      'Side by side studio inspection comparing pure Greek marble, golden ammonite limestone, Roman travertine, Belgian blue stone, and Afghan lapis lazuli.',
    technicalNotes:
      'Every architectural commission starts at our drafting table with physical slabs tested for solar reflection, slip friction, and cyclic freeze resilience.',
    specs: ['Compressive Rating: 138 MPa', 'Batch Matched Vein Sets', 'Weather Cycling Certified'],
    image: sampleBoardRareImg
  },
  {
    id: 'geographical-plan',
    stage: '02 · Preservation Plan',
    category: 'plans',
    categoryLabel: 'Site Engineering',
    title: 'Monument Elevation & Clifftop Site Plan',
    subtitle: 'Topographic Contours, Granite Steps & Core Samples',
    description:
      'Geodetic vellum drawings mapping slope contour elevations, stepped granite terrace footings, bronze anchor weep drains, and drilled stone core records.',
    technicalNotes:
      'Prepared jointly by geotechnical engineers and restoration masons to document bedrock depth, rainwater diversion, and anchor placement before cutting begins.',
    specs: ['Scale 1:100 Site Drafting', 'Core Verified Footings', 'Subsurface Siphon Drainage'],
    image: monumentSitePlanImg
  },
  {
    id: 'macro-lapis-inlay',
    stage: '03 · Macro Inlay Detail',
    category: 'macro',
    categoryLabel: 'Inlay Craft',
    title: 'Lapis Lazuli, 24K Gold Smalti & Pearl Inlay',
    subtitle: 'Flush Threshold Work in White Crystalline Marble',
    description:
      'Fine close inspection of natural Badakhshan lapis flecked with pyrite, hammered 24 karat gold glass tesserae, and oceanic nacre bedded into marble.',
    technicalNotes:
      'Water jet slicing and hand lapping bring dissimilar stone hardnesses to a flush satin plane resistant to pool chlorine, sun exposure, and heavy foot traffic.',
    specs: ['Flush Hairline Stone Joints', '24K Double Fused Gold Leaf', 'Natural Pyrite Matrix'],
    image: macroLapisGoldImg
  },
  {
    id: 'macro-stone-strata',
    stage: '04 · Macro Masonry Detail',
    category: 'macro',
    categoryLabel: 'Masonry Texture',
    title: 'Roman Travertine & Hand Chiseled Istrian Stone',
    subtitle: 'Natural Pores, Tool Marks & Breathable Lime Joints',
    description:
      'Close inspection of honed Tivoli travertine strata joining hand dressed pale Adriatic limestone ashlar blocks with narrow weatherproof lime mortar joints.',
    technicalNotes:
      'Tool dressing opens the crystalline surface grain while hydraulic lime joints allow capillary vapor release, preventing spalling near saltwater and coastal spray.',
    specs: ['Hand Chiseled Ashlar Face', 'Natural Air Lime CL 90 Mortar', 'Salt Aerosol Resistant'],
    image: macroTravertineImg
  },
  {
    id: 'macro-basalt-porphyry',
    stage: '05 · Macro Structural Stone',
    category: 'macro',
    categoryLabel: 'Heavy Paving',
    title: 'Split Charcoal Basalt, Flamed Granite & Porphyry',
    subtitle: 'High Load Retaining Masonry & Courtyard Cobbles',
    description:
      'Close view of split volcanic basalt blocks, thermal flamed silver granite terrace slabs, and hand split purple porphyry pavers locked in angular granite grit.',
    technicalNotes:
      'Specified for steep retaining courses and vehicle motor courts where dense volcanic stone structure prevents shifting, salt scaling, and tire polish.',
    specs: ['Basalt Rating: 220 MPa', 'Thermal Non Slip Flamed Finish', 'Open Graded Grit Bedding'],
    image: macroBasaltPorphyryImg
  },
  {
    id: 'quarry-cutting',
    stage: '06 · Quarry & Sawing',
    category: 'quarry',
    categoryLabel: 'Extraction & Milling',
    title: 'Open Bench Extraction & Bridge Saw Dressing',
    subtitle: 'From Island Marble Benches to Finished Cornices',
    description:
      'Diamond wire extraction isolates clean monolithic blocks free of fractures before wet bridge saws mill slabs to architectural tolerances.',
    technicalNotes:
      'Blocks are ultrasonically screened on the quarry bench and crated in timber frameworks sorted by vein direction for seamless field installation.',
    specs: ['Tolerance: Plus or Minus 0.5 mm', 'Ultrasonic Soundness Check', 'Wet Honed Satin Finish'],
    image: quarryMarbleImg
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    kicker: 'Architectural Hardscaping & Monument Preservation',
    title: 'Monumental Stonework Built For Centuries.',
    subtitle:
      'Clifftop terraces, royal marble courtyards, and heritage conservation engineered across all continents.',
    image: '/images/new_cliffside_villa_terrace_1794441906830.jpg',
    cta: { label: 'Explore Projects', target: 'projects' }
  },
  {
    kicker: 'Quarry Provenance & Studio Samples',
    title: 'Rare Quarried Stone Cut To Architectural Precision.',
    subtitle:
      'From Thassos marble benches and wet saw ateliers to site preservation plans and mineral inlays.',
    image: sampleBoardRareImg,
    cta: { label: 'Materials & Craft', target: 'materials' }
  },
  {
    kicker: 'Museum & Heritage Conservation',
    title: 'Preserving Historic Landmarks Without Vibration.',
    subtitle:
      'Reversible pozzolanic grouting, base isolation, and verified quarry matching for cultural institutions.',
    image: '/images/museum_atrium_marble_1794056502385.jpg',
    cta: { label: 'View Disciplines', target: 'services' }
  }
];

// TEAM MEMBERS ARRANGED STRICTLY BY HIERARCHY ACCORDING TO POSITION
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'fahad',
    name: 'Fahad Al Sabah',
    role: 'Principal & Managing Director',
    specialty: 'Sovereign master planning, palace grounds & coastal estates',
    bio: 'Over thirty years leading architectural stone commissions, royal courtyard complexes, and private island sanctuaries across Europe, the Middle East, the Americas, and Asia.',
    credentials: ['30+ Years Executive Direction', 'Royal Palace & Sanctuary Commissions', 'Global Quarry Oversight'],
    image: '/images/portrait_arab_prince_director_1794441904418.jpg'
  },
  {
    id: 'gabriel',
    name: 'Gabriel Chen',
    role: 'Structural & Geotechnical Director',
    specialty: 'Slope retention, bedrock anchoring & concealed drainage',
    bio: 'Directs deep bedrock micropiling, seismic slope stabilization, and hidden hydrostatic drainage networks for coastal cliffs, alpine estates, and hillside ramparts.',
    credentials: ['Licensed Geotechnical Engineer', 'Marine Cliff & Alpine Retention', 'Hydraulic Cascade Engineering'],
    image: '/images/portrait_chinese_director_1794441906290.jpg'
  },
  {
    id: 'jefferey',
    name: 'Jefferey T. Montgomery',
    role: 'Director of Private Estates',
    specialty: 'Family office liaison, estate planning & schedule delivery',
    bio: 'Coordinates private family offices, cultural boards, and international estate trusts with clear scheduling, transparent sourcing, and quiet on site execution.',
    credentials: ['International Estate Coordination', 'Museum Trust Liaison', 'Turnkey Schedule Control'],
    image: '/images/portrait_black_american_director_1794441904183.jpg'
  },
  {
    id: 'corinne',
    name: 'Corinne W. Smith',
    role: 'Master Stonemason & Materials Director',
    specialty: 'Quarry certification, hand stonecutting & heritage preservation',
    bio: 'Leads international quarry inspection, traditional lime mortar formulation, and museum stone conservation for private residences and historical monuments worldwide.',
    credentials: ['Master Artisan Stonemason', 'Quarry Vein Certification', 'UNESCO Charter Conservation'],
    image: '/images/portrait_corinne_w_smith_passport_1794441905659.jpg'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Villa Medicea Clifftop Terraces',
    category: 'terraces',
    categoryLabel: 'Clifftop & Terraces',
    location: "Cap d'Ail · French Riviera",
    image: '/images/new_cliffside_villa_terrace_1794441906830.jpg',
    description:
      'Four dry stack limestone retaining terraces with infinity reflection basins and granite stairs anchored into coastal dolomite cliffs.',
    engineeringNote:
      'Titanium bedrock tiebacks and concealed siphon drains relieve coastal storm uplift without breaking the dry stack limestone facade.',
    materials: ['Hand Dressed Istrian Limestone', 'Basalt Subbase Matrix', 'Titanium Bedrock Tiebacks', 'Concealed Siphon Drains'],
    leadDirectorId: 'gabriel',
    scope: '14,500 sq.ft.',
    timeline: '16 Weeks',
    year: '2025'
  },
  {
    id: 2,
    title: 'Sultan Qaboos Colonnade Courtyard',
    category: 'courtyards',
    categoryLabel: 'Courtyards & Palaces',
    location: 'Muscat Governorate · Oman',
    image: '/images/mosque_courtyard_marble_1794058073956.jpg',
    description:
      'Hand dressed Thassos marble colonnades, reflective courtyard pools, and geometric lapis lazuli and 24 karat gold stone inlays.',
    engineeringNote:
      'Subterranean chilled water loops circulate directly under thick Thassos pavers, lowering summer walking surface temperatures by 18 degrees Celsius.',
    materials: ['Greek Thassos Pure White Marble', 'Omani Desert Rose Travertine', 'Afghan Lapis Lazuli Inlays', '24 Karat Gold Leaf Mosaic'],
    leadDirectorId: 'fahad',
    scope: '485,000 sq.ft.',
    timeline: '28 Months',
    year: '2026'
  },
  {
    id: 3,
    title: 'Belvedere Palace Water Amphitheater',
    category: 'pools',
    categoryLabel: 'Water & Pool Decks',
    location: 'Vienna Precinct · Austria',
    image: '/images/grand_palace_hardscaping_1794058074270.jpg',
    description:
      'Tiered travertine water stairways, cascading fountains, carved stone balustrades, and restored baroque parterre promenades.',
    engineeringNote:
      'Variable speed submerged hydraulic pumps drive balanced spillway sheets across hand carved bronze weirs with minimal water loss.',
    materials: ['Austrian Calcarenite', 'Adnet Limestone Flagstones', 'Cast Bronze Spouts', 'Lead Capped Coping'],
    leadDirectorId: 'gabriel',
    scope: '64,000 sq.ft.',
    timeline: '18 Months',
    year: '2025'
  },
  {
    id: 4,
    title: 'National Antiquities Museum Atrium',
    category: 'heritage',
    categoryLabel: 'Museum & Heritage',
    location: 'Ringstrasse · Vienna, Austria',
    image: '/images/museum_atrium_marble_1794056502385.jpg',
    description:
      'Low vibration floor channeling, climate regulated Adnet honey marble galleries, and seismic mounts protecting ancient sculptures.',
    engineeringNote:
      'Whisper quiet diamond wire saws installed beneath suspended containment tents allowed adjacent antiquity halls to remain open daily.',
    materials: ['Austrian Adnet Honey Marble', 'Low Iron Structural Glass', 'Patinated Bronze Trim', 'Seismic Base Isolators'],
    leadDirectorId: 'corinne',
    scope: '26,000 sq.ft.',
    timeline: '14 Months',
    year: '2026'
  },
  {
    id: 5,
    title: 'Aegina Acropolis Wall Stabilization',
    category: 'heritage',
    categoryLabel: 'Museum & Heritage',
    location: 'Saronic Gulf · Greece',
    image: '/images/acropolis_stone_wall_1794056512464.jpg',
    description:
      'Reversible pozzolanic lime grouting and hidden stainless ties securing classical ashlar fortifications against maritime erosion.',
    engineeringNote:
      'Laboratory mortar analysis matched volcanic Santorini pozzolan and pure air lime to the exact chemical fingerprint of the original wall.',
    materials: ['Santorini Volcanic Pozzolan', 'Pure Air Lime CL 90', 'Marine Stainless Tendons', 'Parian Marble Shims'],
    leadDirectorId: 'corinne',
    scope: '18,200 sq.ft.',
    timeline: '24 Months',
    year: '2025'
  },
  {
    id: 6,
    title: 'Kyoto Daitokuji Sanctuary Hardscaping',
    category: 'courtyards',
    categoryLabel: 'Courtyards & Palaces',
    location: 'Kita Ward · Kyoto, Japan',
    image: '/images/kyoto_zen_garden_1794056511443.jpg',
    description:
      'Restored temple courtyard featuring raked Shirakawa granitic gravel, Kurama volcanic boulders, and hidden storm runoff channels.',
    engineeringNote:
      'Deep charcoal and graded stone subbases absorb seasonal typhoon rainfall invisibly without disturbing delicate surface gravel patterns.',
    materials: ['Shirakawa Granitic Gravel', 'Kurama Volcanic Boulders', 'Hinoki Cypress Framing', 'Charcoal Drainage Bed'],
    leadDirectorId: 'fahad',
    scope: '16,000 sq.ft.',
    timeline: '12 Months',
    year: '2025'
  },
  {
    id: 7,
    title: 'Sheikh Zayed Reflective Courtyard',
    category: 'pools',
    categoryLabel: 'Water & Pool Decks',
    location: 'Abu Dhabi · United Arab Emirates',
    image: '/images/sheikh_zayed_courtyard_1794312369396.jpg',
    description:
      'Expansive reflective water basins, Macedonian Sivec white marble arcades, floral stone inlays, and radiant floor cooling.',
    engineeringNote:
      'Precision titanium expansion strips sit flush within floral medallions to accommodate seasonal desert thermal expansion.',
    materials: ['Macedonian Sivec White Marble', 'Italian Lasa Pavers', 'Mother of Pearl Inlays', 'Titanium Expansion Strips'],
    leadDirectorId: 'fahad',
    scope: '115,000 sq.ft.',
    timeline: '20 Months',
    year: '2025'
  },
  {
    id: 8,
    title: 'Amalfi Belvedere Cliffside Estate',
    category: 'terraces',
    categoryLabel: 'Clifftop & Terraces',
    location: 'Amalfi Coast · Italy',
    image: '/images/amalfi_cliff_terrace_1794312370486.jpg',
    description:
      'Cantilevered Roman travertine terraces and infinity plunge pools anchored directly into vertical coastal tuff cliffs.',
    engineeringNote:
      'Post tensioned rock tendons transfer cantilevered pool loads four meters deep into solid coastal stone strata.',
    materials: ['Tivoli Vein Cut Roman Travertine', 'Campanian Tuff Core', 'Carbon Fiber Tendons', 'Forged Bronze Railings'],
    leadDirectorId: 'gabriel',
    scope: '18,500 sq.ft.',
    timeline: '18 Weeks',
    year: '2025'
  },
  {
    id: 9,
    title: 'Engadin Alpine Stone Bastions',
    category: 'terraces',
    categoryLabel: 'Clifftop & Terraces',
    location: 'Engadin Valley · Swiss Alps',
    image: '/images/alpine_stone_fortress_1794312371092.jpg',
    description:
      'Multi ton glacial granite boulder walls engineered for severe alpine freeze cycles and steep mountain slope retention.',
    engineeringNote:
      'Every granite megalith is keyed with crushed basalt filter backfill to guarantee free drainage during rapid spring snowmelt.',
    materials: ['Glacial Granite Boulders', 'Crushed Basalt Backfill', 'Chiseled Stone Lintels', 'Stainless Tieback Anchors'],
    leadDirectorId: 'gabriel',
    scope: '22,000 sq.ft.',
    timeline: '20 Weeks',
    year: '2024'
  },
  {
    id: 10,
    title: 'Monemvasia Citadel Sea Ramparts',
    category: 'heritage',
    categoryLabel: 'Museum & Heritage',
    location: 'Peloponnese Coast · Greece',
    image: '/images/monemvasia_citadel_cliff_1794312400083.jpg',
    description:
      'Preservation of coastal stone walkways and cliff parapets using breathable consolidation against heavy salt wave spray.',
    engineeringNote:
      'Silicic consolidation strengthens weathered limestone grains internally while keeping every surface pore open for natural evaporation.',
    materials: ['Marine Limestone', 'Dolomite Rubble Core', 'Silicic Consolidant', 'Bronze Structural Clamps'],
    leadDirectorId: 'corinne',
    scope: '31,000 sq.ft.',
    timeline: '16 Months',
    year: '2025'
  },
  {
    id: 11,
    title: 'Florence Historic Loggia Paving',
    category: 'heritage',
    categoryLabel: 'Museum & Heritage',
    location: 'Florence · Italy',
    image: '/images/florence_uffizi_loggia_1794312385726.jpg',
    description:
      'Subsurface drainage renewal and pietra serena stone paving restoration across high traffic historic Renaissance walkways.',
    engineeringNote:
      'Each historic flagstone was cataloged by laser coordinates, lifted for drainage stabilization, and reset onto hydraulic lime beds.',
    materials: ['Firenzuola Pietra Serena', 'European Porphyry Cobbles', 'Natural Hydraulic Lime Grout'],
    leadDirectorId: 'corinne',
    scope: '28,000 sq.ft.',
    timeline: '12 Months',
    year: '2025'
  },
  {
    id: 12,
    title: 'Villa Balbianello Lake Terraces',
    category: 'terraces',
    categoryLabel: 'Clifftop & Terraces',
    location: 'Lake Como · Italy',
    image: '/images/lake_como_villa_terrace_1794312399785.jpg',
    description:
      'Stepped lakeside granite terraces, carved stone balustrades, and geometric pathways descending to private yacht landings.',
    engineeringNote:
      'Permeable joints and shoreline stone riprap dampen wave surge while preserving classical lakeside garden proportions.',
    materials: ['Lombard Grey Granite', 'Hand Hewn Coping Stone', 'Permeable Sand Joints', 'Dolomite Subbase'],
    leadDirectorId: 'jefferey',
    scope: '12,200 sq.ft.',
    timeline: '14 Weeks',
    year: '2025'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    category: 'estates',
    categoryLabel: 'Private Estates',
    title: 'Clifftop & Island Terraces',
    subtitle: 'Bedrock Micropiling & Sea Bastions',
    directorId: 'gabriel',
    director: 'Gabriel Chen',
    directorRole: 'Structural Director',
    description:
      'Dry stack limestone retaining bastions anchored into coastal rock, paired with cantilevered terraces and cliffside plunge pools.',
    deliverables: ['Geodetic slope stability survey', 'Titanium bedrock rock tiebacks', 'Subsurface storm siphon channels', 'Custom dry stack stone walls'],
    image: '/images/new_cliffside_villa_terrace_1794441906830.jpg',
    materials: ['Istrian Limestone', 'Titanium Tiebacks', 'Dolomite Stone'],
    leadTime: '14 to 24 Weeks',
    scopeTarget: 'terraces',
    iconKey: 'layers'
  },
  {
    number: '02',
    category: 'heritage',
    categoryLabel: 'Museum & Heritage',
    title: 'Museum Atrium Modernization',
    subtitle: 'Low Vibration Cultural Stonework',
    directorId: 'corinne',
    director: 'Corinne W. Smith',
    directorRole: 'Master Stonemason',
    description:
      'Precision gallery flooring in Adnet honey marble with silent conduit trenching and seismic mounts protecting rare antiquities.',
    deliverables: ['Low vibration diamond channeling', 'Quarry matched marble replacement slabs', 'Concealed bronze floor access hatches', 'Seismic plinth base isolation'],
    image: '/images/museum_atrium_marble_1794056502385.jpg',
    materials: ['Adnet Honey Marble', 'Architectural Bronze', 'Seismic Isolators'],
    leadTime: '12 to 18 Months',
    scopeTarget: 'heritage',
    iconKey: 'landmark'
  },
  {
    number: '03',
    category: 'heritage',
    categoryLabel: 'Museum & Heritage',
    title: 'Monument Preservation',
    subtitle: 'Reversible Pozzolanic Grouting',
    directorId: 'corinne',
    director: 'Corinne W. Smith',
    directorRole: 'Master Stonemason',
    description:
      'Structural stabilization of ancient walls using custom volcanic lime mortars and stainless ties matching classical stone chemistry.',
    deliverables: ['Petrographic mortar replication', 'Laser patina surface cleaning', 'Reversible marine stainless pinning', 'Salt aerosol barrier consolidation'],
    image: '/images/acropolis_stone_wall_1794056512464.jpg',
    materials: ['Volcanic Pozzolan', 'Air Lime CL 90', '316L Stainless'],
    leadTime: '18 to 36 Months',
    scopeTarget: 'heritage',
    iconKey: 'history'
  },
  {
    number: '04',
    category: 'courtyards',
    categoryLabel: 'Palaces & Sacred',
    title: 'Sacred & Royal Courtyards',
    subtitle: 'Cool Stone & Crystalline Marble',
    directorId: 'fahad',
    director: 'Fahad Al Sabah',
    directorRole: 'Managing Director',
    description:
      'Hand dressed Thassos marble colonnades framing mirror reflection pools, chilled stone promenades, and lapis lazuli floral inlays.',
    deliverables: ['Batch matched white marble paving', 'Subterranean surface chilled water loops', 'Water jet semiprecious stone inlays', 'Acoustic courtyard fountain channels'],
    image: '/images/sheikh_zayed_courtyard_1794312369396.jpg',
    materials: ['Thassos White Marble', 'Lapis Lazuli Inlays', '24K Gold Leaf'],
    leadTime: '16 to 28 Months',
    scopeTarget: 'courtyards',
    iconKey: 'crown'
  },
  {
    number: '05',
    category: 'courtyards',
    categoryLabel: 'Palaces & Sacred',
    title: 'Palace Water Amphitheaters',
    subtitle: 'Closed Loop Stone Cascades',
    directorId: 'gabriel',
    director: 'Gabriel Chen',
    directorRole: 'Structural Director',
    description:
      'Tiered Roman travertine water stairways, bronze spillway fountains, and carved balustrades built for historic residence grounds.',
    deliverables: ['Closed loop pump vaults', 'Hand carved limestone balustrades', 'Bronze weir nozzle engineering', 'Lead weatherproof stone copings'],
    image: '/images/grand_palace_hardscaping_1794058074270.jpg',
    materials: ['Roman Travertine', 'Cast Bronze Spouts', 'Austrian Calcarenite'],
    leadTime: '16 to 24 Months',
    scopeTarget: 'pools',
    iconKey: 'droplets'
  },
  {
    number: '06',
    category: 'estates',
    categoryLabel: 'Private Estates',
    title: 'Pool Surrounds & Thermal Decks',
    subtitle: 'Hand Fitted Fieldstone & Flamed Granite',
    directorId: 'corinne',
    director: 'Corinne W. Smith',
    directorRole: 'Master Stonemason',
    description:
      'Thermal flamed silver granite pool decks with custom split fieldstone spa walls, solid stone steps, and monolithic coping.',
    deliverables: ['Flamed non slip granite decks', 'Hand fitted split fieldstone spa walls', 'Bullnose & thermal coping stones', 'Subsurface perimeter deck drains'],
    image: '/assets/aistudio/image_fa96adeb.png',
    materials: ['Flamed Silver Granite', 'Natural Fieldstone', 'Roman Travertine'],
    leadTime: '10 to 16 Weeks',
    scopeTarget: 'pools',
    iconKey: 'flame'
  },
  {
    number: '07',
    category: 'heritage',
    categoryLabel: 'Museum & Heritage',
    title: 'Heritage Maintenance Charters',
    subtitle: 'Scheduled Care & Stone Consolidation',
    directorId: 'corinne',
    director: 'Corinne W. Smith',
    directorRole: 'Master Stonemason',
    description:
      'Annual conservation audits, non abrasive laser cleaning, and breathable mineral treatments guarding exposed masonry from weathering.',
    deliverables: ['Annual moisture & salt mapping', 'Non abrasive laser surface cleaning', 'Lime joint repointing cycles', 'Winter freeze shield protection'],
    image: '/images/monemvasia_citadel_cliff_1794312400083.jpg',
    materials: ['Silicic Consolidant', 'Pure Lime Mortar', 'Mineral Sealer'],
    leadTime: 'Annual Charter',
    scopeTarget: 'heritage',
    iconKey: 'shield'
  },
  {
    number: '08',
    category: 'estates',
    categoryLabel: 'Private Estates',
    title: 'Driveways & Permeable Courtyards',
    subtitle: 'Porphyry Cobbles & Belgian Blue Stone',
    directorId: 'gabriel',
    director: 'Gabriel Chen',
    directorRole: 'Structural Director',
    description:
      'Hand set charcoal porphyry pavers over open graded aggregate beds paired with travertine curb borders and hidden storm drains.',
    deliverables: ['Open graded angular stone subbase', 'Heavy load porphyry & basalt cobbles', 'Flush travertine drainage channels', 'Belgian blue stone entrance curbs'],
    image: '/assets/aistudio/image_1c0af022.png',
    materials: ['Charcoal Porphyry Pavers', 'Belgian Blue Stone', 'Crushed Granite Base'],
    leadTime: '8 to 14 Weeks',
    scopeTarget: 'courtyards',
    iconKey: 'compass'
  }
];

export const LUXURY_MATERIALS: LuxuryMaterial[] = [
  {
    id: 'thassos-marble',
    name: 'Greek Thassos White Marble',
    category: 'marble',
    provenance: 'Thassos, Greece',
    description:
      'Dense pure white crystalline dolomite marble with near zero water absorption that stays noticeably cool under direct summer sun.',
    characteristics: ['99% Dolomite Purity', 'High Solar Reflectance', '0.14% Absorption', 'Fine Crystalline Luster'],
    applications: 'Sacred courtyards, reflective pool copings, grand entrance halls.',
    image: quarryMarbleImg
  },
  {
    id: 'sivec-marble',
    name: 'Macedonian Sivec Marble',
    category: 'marble',
    provenance: 'Prilep, North Macedonia',
    description:
      'Fine grained white marble prized across classical colonnades for uniform luminescence, crisp carving edges, and deep frost durability.',
    characteristics: ['Fine Uniform Grain', '145 MPa Compression', 'Frost Resistant', 'Warm Satin Honing'],
    applications: 'Monumental arcades, peristyles, high traffic palace courtyards.',
    image: '/images/sheikh_zayed_courtyard_1794312369396.jpg'
  },
  {
    id: 'adnet-marble',
    name: 'Austrian Adnet Honey Marble',
    category: 'marble',
    provenance: 'Salzburg Basin, Austria',
    description:
      'Fossil bearing caramel and amber marble celebrated in European museums and cathedral floors for dense wear resistance.',
    characteristics: ['Fossil Ammonite Matrix', 'Warm Amber Veining', 'High Abrasion Resistance', 'Museum Floor Provenance'],
    applications: 'Museum galleries, covered loggias, tailored stone wall paneling.',
    image: sampleBoardRareImg
  },
  {
    id: 'tivoli-travertine',
    name: 'Tivoli Roman Travertine',
    category: 'travertine',
    provenance: 'Tivoli, Italy',
    description:
      'Linear banded warm ivory sedimentary stone delivering natural barefoot grip and cooling ventilation across sunlit pool terraces.',
    characteristics: ['Natural Heat Dispersion', 'R11 Honed Wet Grip', 'Linear Vein Bedding', 'Proven Outdoor Longevity'],
    applications: 'Pool decks, cantilevered estate terraces, shaded dining pavilions.',
    image: macroTravertineImg
  },
  {
    id: 'omani-travertine',
    name: 'Omani Desert Rose Travertine',
    category: 'travertine',
    provenance: 'Dhofar, Oman',
    description:
      'Dense rose and sand toned desert limestone engineered to endure high heat swings without delamination or color fading.',
    characteristics: ['Thermal Cycle Stability', 'Warm Sunset Strata', '2,680 kg/m3 Density', 'Cool Subgrade Pairing'],
    applications: 'Grand civic plazas, driveway courts, garden water walls.',
    image: '/images/petra_sandstone_monument_1794312385963.jpg'
  },
  {
    id: 'istrian-limestone',
    name: 'Hand Dressed Istrian Limestone',
    category: 'travertine',
    provenance: 'Istria, Adriatic Coast',
    description:
      'Marine hardened pale limestone trusted around Venetian lagoons for eight centuries, developing a protective patina near sea spray.',
    characteristics: ['Salt Spray Impervious', 'Hand Chiseled Face', 'Dense Calcarenite Core', 'High Tensile Cohesion'],
    applications: 'Coastal retaining walls, solid monolithic treads, sea cliffs.',
    image: '/assets/aistudio/image_7b5ac5d9.png'
  },
  {
    id: 'pierre-bourgogne',
    name: 'French Pierre de Bourgogne',
    category: 'travertine',
    provenance: 'Burgundy, France',
    description:
      'Historic pale ochre and beige limestone with subtle shell fossils, bringing quiet warmth to chateau promenades and steps.',
    characteristics: ['Classic Estate Patina', 'Velvet Honed Surface', 'Freeze Thaw Certified', 'Subtle Fossil Detail'],
    applications: 'Parterre walkways, pool surrounds, formal garden stairways.',
    image: '/images/grand_palace_hardscaping_1794058074270.jpg'
  },
  {
    id: 'afghan-lapis',
    name: 'Afghan Lapis Lazuli Inlay',
    category: 'inlay',
    provenance: 'Badakhshan, Afghanistan',
    description:
      'Deep cobalt blue lapis stone veined with bright golden pyrite, precision cut and bedded flush into white marble thresholds.',
    characteristics: ['Natural Ultramarine Hue', 'Golden Pyrite Flecks', 'Flush Water Jet Cutting', 'UV Permanent Color'],
    applications: 'Courtyard floral medallions, fountain borders, entry crests.',
    image: macroLapisGoldImg
  },
  {
    id: 'gold-smalti',
    name: 'Venetian 24K Gold Smalti',
    category: 'inlay',
    provenance: 'Venice, Italy',
    description:
      'Hand cut glass mosaic tesserae sealing pure 24 karat gold leaf between impervious glass layers unaffected by pool water or sun.',
    characteristics: ['24 Karat Gold Leaf', 'Double Fused Glass Seal', 'Zero Chlorine Tarnish', 'Crisp Underwater Sparkle'],
    applications: 'Pool spillways, fountain basins, architectural inlaid bands.',
    image: macroLapisGoldImg
  },
  {
    id: 'mother-of-pearl',
    name: 'Iridescent Mother of Pearl',
    category: 'inlay',
    provenance: 'Red Sea & Gulf Waters',
    description:
      'Hand selected oceanic shell nacre shaped into botanical inlay motifs that catch daylight and underwater basin lighting.',
    characteristics: ['Natural Prism Iridescence', 'Flush Hand Fitting', 'Water Safe Mineral Body', 'Bespoke Threshold Detail'],
    applications: 'Fountain rims, reflecting basin floors, entry court crests.',
    image: '/images/sheikh_zayed_courtyard_1794312369396.jpg'
  },
  {
    id: 'charcoal-basalt',
    name: 'Volcanic Charcoal Basalt',
    category: 'granite',
    provenance: 'European Basalt Quarries',
    description:
      'Dense volcanic stone offering crisp dark charcoal geometry and extreme compressive rating against heavy moisture and frost.',
    characteristics: ['220 MPa Strength', 'Under 0.2% Absorption', 'Deep Charcoal Color', 'Slip Safe R11 Finish'],
    applications: 'Retaining walls, architectural steps, dark mirror reflecting pools.',
    image: '/assets/aistudio/image_c68744d5.png'
  },
  {
    id: 'porphyry-belgian',
    name: 'European Porphyry & Belgian Blue',
    category: 'granite',
    provenance: 'Trentino & Soignies',
    description:
      'Violet grey volcanic porphyry and fossil crinoid blue limestone built for intense vehicular load and icy winter road salts.',
    characteristics: ['Heavy Axle Load Rated', 'Crinoid Fossil Pattern', 'Natural Split Traction', 'Salt & Deicer Safe'],
    applications: 'Estate motor courts, carriageway drives, civic forecourts.',
    image: macroBasaltPorphyryImg
  },
  {
    id: 'glacial-boulders',
    name: 'Glacial Granite Megaliths',
    category: 'granite',
    provenance: 'Alpine Moraines',
    description:
      'Massive five to twenty five ton granite boulders weathered across millennia and crane positioned for natural slope retention.',
    characteristics: ['5 to 25 Ton Units', 'Natural Lichen Skin', 'Deep Slope Stability', 'Zero Mortar Maintenance'],
    applications: 'Hillside retaining bastions, waterfall cascades, estate borders.',
    image: '/assets/aistudio/image_cbcf01ad.png'
  },
  {
    id: 'kyoto-shirakawa',
    name: 'Shirakawa Sand & Kurama Stone',
    category: 'granite',
    provenance: 'Kyoto, Japan',
    description:
      'Traditional high feldspar granitic gravel holding crisp rake patterns alongside warm iron oxidized volcanic garden stones.',
    characteristics: ['Crisp Rake Retention', 'Feldspar Crystal Sparkle', 'Warm Iron Patina', 'Temple Grade Sourcing'],
    applications: 'Contemplative courtyards, minimalist estates, wellness gardens.',
    image: '/images/kyoto_zen_garden_1794056511443.jpg'
  }
];

export const CLIENT_REVIEWS: TestimonialItem[] = [
  {
    quote:
      'Their silent floor channeling let us renew three Hellenistic galleries with Adnet honey marble without closing adjacent rooms.',
    author: 'Dr. Heinrich von Berg',
    role: 'Infrastructure Director',
    organization: 'Vienna Antiquities Trust',
    image: '/images/museum_atrium_marble_1794056502385.jpg'
  },
  {
    quote:
      'Anchoring four tiers of dry stack Istrian stone into our Cap d’Ail cliff required genuine rock engineering and patient hand craft.',
    author: 'Contessa Sofia Moretti',
    role: 'Estate Trustee',
    organization: 'Villa Medicea Office',
    image: '/images/new_cliffside_villa_terrace_1794441906830.jpg'
  },
  {
    quote:
      'Every slab of Thassos marble arrived quarry matched, and the underfloor cooling keeps our courtyard calm through July heat.',
    author: 'H.E. Tariq Al Harthy',
    role: 'Commission Overseer',
    organization: 'Muscat Colonnade Trust',
    image: '/images/mosque_courtyard_marble_1794058073956.jpg'
  },
  {
    quote:
      'By matching ancient volcanic lime mortar without scarring exposed blocks, they stabilized our coastal bastion for generations.',
    author: 'Dimitris Papadopoulos',
    role: 'Conservation Architect',
    organization: 'Saronic Heritage Board',
    image: '/images/acropolis_stone_wall_1794056512464.jpg'
  },
  {
    quote:
      'Their team restored our temple gravel and volcanic boulder drainage so heavy autumn typhoons clear cleanly overnight.',
    author: 'Kenji Takahashi',
    role: 'Estate Steward',
    organization: 'Daitokuji Preservation Board',
    image: '/images/kyoto_zen_garden_1794056511443.jpg'
  },
  {
    quote:
      'From quarry slab selection in Salzburg to setting our lakeside granite steps, schedule discipline and detailing were exemplary.',
    author: 'Marcus Vance',
    role: 'Family Office Principal',
    organization: 'Lake Como Holdings',
    image: '/images/lake_como_villa_terrace_1794312399785.jpg'
  }
];
