import React, { useState, useMemo, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowUp,
  Menu,
  ShieldCheck,
  Users,
  Layers,
  Landmark,
  History,
  Crown,
  Droplets,
  Flame,
  Compass,
  Award,
  Globe,
  Building2,
  Hammer,
  Star,
  Gem,
  Maximize2
} from 'lucide-react';
import { BespokeLogo } from './components/BespokeLogo';
import {
  TabType,
  Project,
  ServiceItem,
  ProcessGalleryItem,
  LuxuryMaterial,
  TeamMember,
  GENERATED_ASSETS,
  PROCESS_GALLERY,
  HERO_SLIDES,
  TEAM_MEMBERS,
  PROJECTS,
  SERVICES_LIST,
  LUXURY_MATERIALS,
  CLIENT_REVIEWS
} from './data/atelierData';

type DetailViewState =
  | { kind: 'project'; item: Project }
  | { kind: 'service'; item: ServiceItem }
  | { kind: 'process'; item: ProcessGalleryItem }
  | { kind: 'material'; item: LuxuryMaterial }
  | { kind: 'team'; item: TeamMember }
  | null;

function renderServiceIcon(iconKey: ServiceItem['iconKey'], className = 'w-7 h-7') {
  switch (iconKey) {
    case 'layers':
      return <Layers className={className} />;
    case 'landmark':
      return <Landmark className={className} />;
    case 'history':
      return <History className={className} />;
    case 'crown':
      return <Crown className={className} />;
    case 'droplets':
      return <Droplets className={className} />;
    case 'flame':
      return <Flame className={className} />;
    case 'shield':
      return <ShieldCheck className={className} />;
    case 'compass':
    default:
      return <Compass className={className} />;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [detailView, setDetailView] = useState<DetailViewState>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterialCategory, setSelectedMaterialCategory] = useState<string>('all');
  const [processFilter, setProcessFilter] = useState<'all' | 'quarry' | 'studio' | 'plans' | 'macro'>('all');
  const [homeServiceSector, setHomeServiceSector] = useState<'all' | 'estates' | 'heritage' | 'courtyards'>('all');

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState<boolean>(false);
  const [reviewOffset, setReviewOffset] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');

  // Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Clifftop & Island Terraces',
    location: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeTab !== 'home' || detailView !== null || isCarouselPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [activeTab, detailView, isCarouselPaused]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    setDetailView(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDetail = (nextDetail: Exclude<DetailViewState, null>, parentTab?: TabType) => {
    if (parentTab) {
      setActiveTab(parentTab);
    }
    setDetailView(nextDetail);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const requestInquiryWithContext = (projectTypeLabel: string, notePrefix?: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: projectTypeLabel,
      message: notePrefix ? `${notePrefix}\n` : prev.message
    }));
    setFormSubmitted(false);
    handleNavigate('contact');
  };

  const handleLogoClick = () => {
    setActiveTab('home');
    setDetailView(null);
    setSelectedCategory('all');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredHomeServices = useMemo(() => {
    if (homeServiceSector === 'all') return SERVICES_LIST.slice(0, 6);
    return SERVICES_LIST.filter((s) => s.category === homeServiceSector);
  }, [homeServiceSector]);

  const filteredAllServices = useMemo(() => {
    if (homeServiceSector === 'all') return SERVICES_LIST;
    return SERVICES_LIST.filter((s) => s.category === homeServiceSector);
  }, [homeServiceSector]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const filteredMaterials = useMemo(() => {
    if (selectedMaterialCategory === 'all') return LUXURY_MATERIALS;
    return LUXURY_MATERIALS.filter((m) => m.category === selectedMaterialCategory);
  }, [selectedMaterialCategory]);

  const filteredProcesses = useMemo(() => {
    if (processFilter === 'all') return PROCESS_GALLERY;
    return PROCESS_GALLERY.filter((item) => item.category === processFilter);
  }, [processFilter]);

  const homeFeaturedProcesses = useMemo(() => {
    if (processFilter === 'all') {
      return [PROCESS_GALLERY[0], PROCESS_GALLERY[1], PROCESS_GALLERY[2], PROCESS_GALLERY[3], PROCESS_GALLERY[4], PROCESS_GALLERY[5]].slice(0, 3);
    }
    return PROCESS_GALLERY.filter((item) => item.category === processFilter);
  }, [processFilter]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      showToast('Please enter your name and email address.');
      return;
    }
    setFormSubmitted(true);
    showToast('Inquiry received. Our Toronto office will reply within one business day.');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setNewsletterEmail('');
    showToast('Subscribed to quarterly quarry and project dispatches.');
  };

  const visibleReviews = [
    CLIENT_REVIEWS[reviewOffset % CLIENT_REVIEWS.length],
    CLIENT_REVIEWS[(reviewOffset + 1) % CLIENT_REVIEWS.length],
    CLIENT_REVIEWS[(reviewOffset + 2) % CLIENT_REVIEWS.length]
  ];

  const navLinks: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'materials', label: 'Materials' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderPageBanner = (title: string, breadcrumbLabel: string, parentLabel?: string, onParentClick?: () => void) => (
    <section
      className="relative w-full py-12 sm:py-16 bg-cover bg-center border-b-4 border-[#135D54]"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 17, 21, 0.84), rgba(14, 17, 21, 0.88)), url('/images/grand_palace_hardscaping_1794058074270.jpg')`
      }}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 text-center space-y-2.5">
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display-constra tracking-tight">
          {title}
        </h1>
        <nav className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="text-white/90 hover:text-[#4DB6A8] transition-colors cursor-pointer"
          >
            Home
          </button>
          {parentLabel && onParentClick && (
            <>
              <span className="text-white/50">/</span>
              <button
                type="button"
                onClick={onParentClick}
                className="text-white/90 hover:text-[#4DB6A8] transition-colors cursor-pointer"
              >
                {parentLabel}
              </button>
            </>
          )}
          <span className="text-white/50">/</span>
          <span className="text-[#4DB6A8] font-semibold">{breadcrumbLabel}</span>
        </nav>
      </div>
    </section>
  );

  const renderDetailView = () => {
    if (!detailView) return null;

    if (detailView.kind === 'project') {
      const project = detailView.item;
      const director = TEAM_MEMBERS.find((m) => m.id === project.leadDirectorId) || TEAM_MEMBERS[0];
      const relatedProjects = PROJECTS.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

      return (
        <div>
          {renderPageBanner(project.title, project.title, 'Projects', () => handleNavigate('projects'))}

          <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <button
                type="button"
                onClick={() => handleNavigate('projects')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#15181C] hover:text-[#135D54] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </button>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54]">
                {project.categoryLabel} · {project.year}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <button
                  type="button"
                  onClick={() => setZoomImage({ src: project.image, title: project.title })}
                  className="group relative w-full aspect-16/9 overflow-hidden bg-slate-200 border border-slate-200 cursor-zoom-in block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#15181C]/90 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#4DB6A8]" />
                    Enlarge View
                  </span>
                </button>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#135D54]">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0E1115] font-display-constra">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="bg-[#F4F6F7] p-4 sm:p-5 space-y-2 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E1115]">
                    Site Engineering Notes
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {project.engineeringNote}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-[#15181C] text-white">
                    <span className="text-[11px] text-white/75 block">Area</span>
                    <span className="text-sm font-bold text-[#4DB6A8] tabular-nums">{project.scope}</span>
                  </div>
                  <div className="p-3 bg-[#15181C] text-white">
                    <span className="text-[11px] text-white/75 block">Duration</span>
                    <span className="text-sm font-bold text-[#4DB6A8] tabular-nums">{project.timeline}</span>
                  </div>
                  <div className="p-3 bg-[#15181C] text-white">
                    <span className="text-[11px] text-white/75 block">Completed</span>
                    <span className="text-sm font-bold text-[#4DB6A8] tabular-nums">{project.year}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1115]">
                    Stone & Structural Matrix
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563]">
                    {project.materials.join(' · ')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openDetail({ kind: 'team', item: director }, 'team')}
                  className="w-full flex items-center gap-3.5 p-3.5 bg-[#F4F6F7] hover:bg-white border border-slate-200 hover:border-[#135D54] transition-colors text-left cursor-pointer"
                >
                  <img
                    src={director.image}
                    alt={director.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover object-top border-2 border-[#135D54] shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-[#135D54] block">Project Lead</span>
                    <span className="text-sm font-bold text-[#0E1115] font-display-constra block truncate">{director.name}</span>
                    <span className="text-xs text-[#4B5563] block truncate">{director.role}</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => requestInquiryWithContext(project.categoryLabel, `Regarding a commission similar to ${project.title}.`)}
                  className="w-full py-3.5 bg-[#135D54] hover:bg-[#15181C] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div className="pt-8 border-t border-slate-200 space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0E1115] font-display-constra">
                  Related Commissions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProjects.map((rel) => (
                    <article
                      key={rel.id}
                      onClick={() => openDetail({ kind: 'project', item: rel }, 'projects')}
                      className="group bg-white border border-slate-200 hover:border-[#135D54] overflow-hidden cursor-pointer transition-colors"
                    >
                      <div className="aspect-16/10 overflow-hidden bg-slate-200">
                        <img
                          src={rel.image}
                          alt={rel.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 space-y-1">
                        <span className="text-[11px] font-semibold text-[#135D54]">{rel.location.split('·')[0].trim()}</span>
                        <h4 className="text-base font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra">
                          {rel.title}
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      );
    }

    if (detailView.kind === 'service') {
      const svc = detailView.item;
      const director = TEAM_MEMBERS.find((m) => m.id === svc.directorId) || TEAM_MEMBERS[0];
      const relatedProjects = PROJECTS.filter((p) => p.category === svc.scopeTarget).slice(0, 3);

      return (
        <div>
          {renderPageBanner(svc.title, svc.title, 'Services', () => handleNavigate('services'))}

          <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <button
                type="button"
                onClick={() => handleNavigate('services')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#15181C] hover:text-[#135D54] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Services</span>
              </button>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54]">
                Discipline {svc.number} · {svc.categoryLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <button
                  type="button"
                  onClick={() => setZoomImage({ src: svc.image, title: svc.title })}
                  className="group relative w-full aspect-16/9 overflow-hidden bg-slate-200 border border-slate-200 cursor-zoom-in block"
                >
                  <img
                    src={svc.image}
                    alt={svc.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#15181C]/90 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#4DB6A8]" />
                    Enlarge View
                  </span>
                </button>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54] block">
                    {svc.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0E1115] font-display-constra">
                    {svc.title}
                  </h2>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="bg-[#F4F6F7] p-5 border border-slate-200 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E1115]">
                    Scope Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {svc.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B5563]">
                        <Check className="w-4 h-4 text-[#135D54] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-[#15181C] text-white">
                    <span className="text-[11px] text-white/75 block">Typical Schedule</span>
                    <span className="text-sm font-bold text-[#4DB6A8] tabular-nums">{svc.leadTime}</span>
                  </div>
                  <div className="p-3 bg-[#15181C] text-white">
                    <span className="text-[11px] text-white/75 block">Primary Stone</span>
                    <span className="text-sm font-bold text-[#4DB6A8] truncate block">{svc.materials[0]}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openDetail({ kind: 'team', item: director }, 'team')}
                  className="w-full flex items-center gap-3.5 p-3.5 bg-[#F4F6F7] hover:bg-white border border-slate-200 hover:border-[#135D54] transition-colors text-left cursor-pointer"
                >
                  <img
                    src={director.image}
                    alt={director.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover object-top border-2 border-[#135D54] shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-[#135D54] block">Directing Lead</span>
                    <span className="text-sm font-bold text-[#0E1115] font-display-constra block truncate">{director.name}</span>
                    <span className="text-xs text-[#4B5563] block truncate">{director.role}</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => requestInquiryWithContext(svc.title)}
                  className="w-full py-3.5 bg-[#135D54] hover:bg-[#15181C] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Request Discipline Consultation
                </button>
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div className="pt-8 border-t border-slate-200 space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0E1115] font-display-constra">
                  Built Examples
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProjects.map((rel) => (
                    <article
                      key={rel.id}
                      onClick={() => openDetail({ kind: 'project', item: rel }, 'projects')}
                      className="group bg-white border border-slate-200 hover:border-[#135D54] overflow-hidden cursor-pointer transition-colors"
                    >
                      <div className="aspect-16/10 overflow-hidden bg-slate-200">
                        <img
                          src={rel.image}
                          alt={rel.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 space-y-1">
                        <span className="text-[11px] font-semibold text-[#135D54]">{rel.location.split('·')[0].trim()}</span>
                        <h4 className="text-base font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra">
                          {rel.title}
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      );
    }

    if (detailView.kind === 'process') {
      const item = detailView.item;
      const otherItems = PROCESS_GALLERY.filter((p) => p.id !== item.id).slice(0, 3);

      return (
        <div>
          {renderPageBanner(item.title, item.title, 'Materials & Craft', () => handleNavigate('materials'))}

          <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <button
                type="button"
                onClick={() => handleNavigate('materials')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#15181C] hover:text-[#135D54] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Samples & Materials</span>
              </button>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54]">
                {item.stage} · {item.categoryLabel}
              </span>
            </div>

            <div className="space-y-8">
              <button
                type="button"
                onClick={() => setZoomImage({ src: item.image, title: item.title })}
                className="group relative w-full overflow-hidden bg-[#0E1115] border border-slate-200 cursor-zoom-in block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[72vh] object-contain mx-auto"
                />
                <span className="absolute bottom-4 right-4 px-3.5 py-2 bg-[#15181C]/90 text-white text-xs font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#4DB6A8]" />
                  View Full Scale Plate
                </span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54] block">
                    {item.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {item.technicalNotes}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-4 bg-[#F4F6F7] p-6 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E1115]">
                    Specification Summary
                  </h3>
                  <div className="space-y-2.5">
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="p-3 bg-white border border-slate-200 text-xs sm:text-sm font-medium text-[#0E1115] flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#135D54] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => requestInquiryWithContext('Stone Sample Box Request', `Requesting physical sample specifications for: ${item.title}.`)}
                    className="w-full py-3.5 bg-[#135D54] hover:bg-[#15181C] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Request Physical Sample Kit
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0E1115] font-display-constra">
                Additional Samples & Plans
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherItems.map((rel) => (
                  <article
                    key={rel.id}
                    onClick={() => openDetail({ kind: 'process', item: rel }, 'materials')}
                    className="group bg-white border border-slate-200 hover:border-[#135D54] overflow-hidden cursor-pointer transition-colors"
                  >
                    <div className="aspect-16/10 overflow-hidden bg-slate-200">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <span className="text-[11px] font-semibold text-[#135D54]">{rel.stage}</span>
                      <h4 className="text-base font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra">
                        {rel.title}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }

    if (detailView.kind === 'material') {
      const mat = detailView.item;
      const relatedMaterials = LUXURY_MATERIALS.filter((m) => m.id !== mat.id && m.category === mat.category).slice(0, 3);

      return (
        <div>
          {renderPageBanner(mat.name, mat.name, 'Materials & Craft', () => handleNavigate('materials'))}

          <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <button
                type="button"
                onClick={() => handleNavigate('materials')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#15181C] hover:text-[#135D54] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Material Catalog</span>
              </button>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54]">
                {mat.provenance}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <button
                  type="button"
                  onClick={() => setZoomImage({ src: mat.image, title: mat.name })}
                  className="group relative w-full aspect-16/9 overflow-hidden bg-slate-200 border border-slate-200 cursor-zoom-in block"
                >
                  <img
                    src={mat.image}
                    alt={mat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#15181C]/90 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#4DB6A8]" />
                    Inspect Slab Detail
                  </span>
                </button>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54] block">
                    Quarry Provenance: {mat.provenance}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0E1115] font-display-constra">
                    {mat.name}
                  </h2>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {mat.description}
                  </p>
                </div>

                <div className="bg-[#F4F6F7] p-5 border border-slate-200 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E1115]">
                    Physical Characteristics
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {mat.characteristics.map((char, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#0E1115] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#135D54] shrink-0" />
                        <span>{char}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1115]">
                    Primary Applications
                  </h4>
                  <p className="text-sm text-[#4B5563]">{mat.applications}</p>
                </div>

                <button
                  type="button"
                  onClick={() => requestInquiryWithContext('Stone Sample Box Request', `Requesting cut specimen and quarry lead time for ${mat.name}.`)}
                  className="w-full py-3.5 bg-[#135D54] hover:bg-[#15181C] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Order Quarry Specimen
                </button>
              </div>
            </div>

            {relatedMaterials.length > 0 && (
              <div className="pt-8 border-t border-slate-200 space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0E1115] font-display-constra">
                  Related Quarry Stones
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedMaterials.map((rel) => (
                    <article
                      key={rel.id}
                      onClick={() => openDetail({ kind: 'material', item: rel }, 'materials')}
                      className="group bg-white border border-slate-200 hover:border-[#135D54] overflow-hidden cursor-pointer transition-colors"
                    >
                      <div className="aspect-16/9 overflow-hidden bg-slate-200">
                        <img
                          src={rel.image}
                          alt={rel.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 space-y-1">
                        <span className="text-[11px] font-semibold text-[#135D54]">{rel.provenance}</span>
                        <h4 className="text-base font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra">
                          {rel.name}
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      );
    }

    // Team Member Dedicated Detail Page
    const member = detailView.item;
    const memberIndex = TEAM_MEMBERS.findIndex((m) => m.id === member.id);
    const overseenServices = SERVICES_LIST.filter((s) => s.directorId === member.id);
    const overseenProjects = PROJECTS.filter((p) => p.leadDirectorId === member.id);

    return (
      <div>
        {renderPageBanner(member.name, member.name, 'Team', () => handleNavigate('team'))}

        <section className="max-w-[1140px] mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <button
              type="button"
              onClick={() => handleNavigate('team')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#15181C] hover:text-[#135D54] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Leadership</span>
            </button>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54]">
              0{memberIndex + 1} · {member.role}
            </span>
          </div>

          <div className="bg-[#F4F6F7] border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#135D54] ring-4 ring-white shrink-0 bg-slate-200 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-4 flex-1 text-center md:text-left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54] block">
                  {member.role}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#0E1115] font-display-constra mt-1">
                  {member.name}
                </h2>
                <p className="text-sm font-medium text-[#15181C] italic mt-1">
                  {member.specialty}
                </p>
              </div>

              <p className="text-sm text-[#4B5563] leading-relaxed">
                {member.bio}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-1">
                {member.credentials.map((cred, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E1115]">
                    <Check className="w-3.5 h-3.5 text-[#135D54]" />
                    <span>{cred}</span>
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => requestInquiryWithContext('Clifftop & Island Terraces', `Attention: ${member.name}`)}
                  className="px-6 py-3 bg-[#135D54] hover:bg-[#15181C] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Schedule Briefing with {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>

          {overseenServices.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0E1115] font-display-constra">
                Directed Disciplines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {overseenServices.map((svc) => (
                  <article
                    key={svc.number}
                    onClick={() => openDetail({ kind: 'service', item: svc }, 'services')}
                    className="group bg-white border border-slate-200 hover:border-[#135D54] overflow-hidden cursor-pointer transition-colors"
                  >
                    <div className="aspect-16/10 overflow-hidden bg-slate-200">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <span className="text-[11px] font-semibold text-[#135D54]">{svc.categoryLabel}</span>
                      <h4 className="text-base font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra">
                        {svc.title}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {overseenProjects.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-bold text-[#0E1115] font-display-constra">
                Signature Commissions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {overseenProjects.map((proj) => (
                  <article
                    key={proj.id}
                    onClick={() => openDetail({ kind: 'project', item: proj }, 'projects')}
                    className="group bg-white border border-slate-200 hover:border-[#135D54] overflow-hidden cursor-pointer transition-colors"
                  >
                    <div className="aspect-16/10 overflow-hidden bg-slate-200">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <span className="text-[11px] font-semibold text-[#135D54]">{proj.location.split('·')[0].trim()}</span>
                      <h4 className="text-base font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra">
                        {proj.title}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#4B5563] flex flex-col font-sans-constra selection:bg-[#135D54]/20 selection:text-[#0E1115]">
      {/* LOADING SCREEN */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsLoading(false)}
      >
        <div className="flex flex-col items-center space-y-3 text-center px-6">
          <BespokeLogo className="w-14 h-14" variant="default" />
          <h2 className="text-2xl font-bold text-[#15181C] font-display-constra tracking-wide">
            AUREUS & MONUMENT
          </h2>
          <div className="w-7 h-7 border-2 border-[#15181C] border-t-[#135D54] rounded-full animate-spin mt-1" />
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 bg-[#15181C] text-white border border-[#135D54] px-5 py-3.5 shadow-xl text-xs sm:text-sm flex items-center gap-3 max-w-md">
          <Check className="w-4 h-4 text-[#4DB6A8] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOPBAR */}
      <div className="hidden xl:block w-full bg-[#15181C] text-white/85 border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-6 h-[42px] flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => handleNavigate('contact')}
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-[#4DB6A8]" />
              <span>Worldwide Commissions</span>
            </button>
            <a
              href="tel:+18679881524"
              className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#4DB6A8]" />
              <span>+1 (867) 988 1524</span>
            </a>
            <a
              href="mailto:aureusmonument@email.com"
              className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#4DB6A8]" />
              <span>aureusmonument@email.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-white/80 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-[#4DB6A8]" />
            <span>Mon to Fri, 8:00 to 18:00 EST</span>
          </div>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-[#F4F6F7] border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-16 lg:h-[74px] flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
            aria-label="Aureus & Monument Home"
          >
            <BespokeLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 group-hover:scale-105 transition-transform" variant="default" />
            <span className="text-lg sm:text-2xl font-bold font-display-constra text-[#135D54] tracking-tight whitespace-nowrap">
              AUREUS & MONUMENT
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigate(link.id)}
                  className={`constra-nav-item px-3 py-2 font-display-constra text-[16px] font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive ? 'active text-[#135D54]' : 'text-[#0E1115] hover:text-[#135D54]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => handleNavigate('contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#135D54] hover:bg-[#15181C] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Consultation
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden px-3 py-2 bg-[#135D54] text-white hover:bg-[#15181C] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F4F6F7] border-t border-slate-200 px-4 py-4 space-y-2 shadow-md">
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigate(link.id)}
                  className={`text-left px-3 py-2.5 font-display-constra text-sm font-semibold transition-colors border ${
                    activeTab === link.id
                      ? 'border-[#135D54] bg-white text-[#135D54]'
                      : 'border-transparent text-[#0E1115] hover:bg-white hover:text-[#135D54]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-[#0E1115] px-1">
              <a href="tel:+18679881524" className="font-semibold flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#135D54]" /> +1 (867) 988 1524
              </a>
              <a href="mailto:aureusmonument@email.com" className="truncate">
                aureusmonument@email.com
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full">
        {detailView ? (
          renderDetailView()
        ) : (
          <>
            {/* ======================================================== */}
            {/* HOME PAGE */}
            {/* ======================================================== */}
            {activeTab === 'home' && (
              <div>
                {/* 1. HERO CAROUSEL */}
                <section
                  className="relative w-full h-[460px] sm:h-[560px] lg:h-[calc(100vh-120px)] min-h-[450px] max-h-[760px] overflow-hidden bg-[#0E1115]"
                  onMouseEnter={() => setIsCarouselPaused(true)}
                  onMouseLeave={() => setIsCarouselPaused(false)}
                >
                  {HERO_SLIDES.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/55" />

                      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-16">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#4DB6A8]">
                            {slide.kicker}
                          </p>
                          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-display-constra leading-[1.12] text-balance">
                            {slide.title}
                          </h1>
                          <p className="text-xs sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
                            {slide.subtitle}
                          </p>
                          <div className="pt-1">
                            <button
                              type="button"
                              onClick={() => handleNavigate(slide.cta.target)}
                              className="px-7 py-3.5 bg-[#135D54] hover:bg-[#15181C] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                            >
                              {slide.cta.label}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                    aria-label="Previous Slide"
                    className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-13 bg-[#15181C] hover:bg-[#135D54] text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                    aria-label="Next Slide"
                    className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-13 bg-[#15181C] hover:bg-[#135D54] text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3.5">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        className={`transition-all cursor-pointer bg-white ${
                          currentSlide === idx
                            ? 'w-4 h-4 border-[4px] border-[#15181C]'
                            : 'w-3.5 h-3.5 border-[3px] border-[#135D54] hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                </section>

                {/* 2. ABOUT SECTION */}
                <section className="w-full bg-white py-12 sm:py-16">
                  <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      <div className="lg:col-span-6">
                        <div className="constra-about-collage relative bg-[#F4F6F7] p-4 sm:p-6 flex items-stretch gap-3 sm:gap-4 min-h-[320px] sm:min-h-[420px]">
                          <div className="w-1/2 pb-16 sm:pb-28 relative z-10">
                            <div className="h-full border-4 border-t-[#135D54] border-l-[#135D54] border-r-[#F4F6F7] border-b-[#F4F6F7] overflow-hidden bg-slate-200">
                              <img
                                src="/assets/aistudio/image_86ba6c3e.png"
                                alt="Mason setting stone tread"
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover min-h-[180px] sm:min-h-[240px]"
                              />
                            </div>
                          </div>

                          <div className="w-1/2 pt-16 sm:pt-28 relative z-10">
                            <div className="h-full border-4 border-r-[#135D54] border-b-[#135D54] border-t-[#F4F6F7] border-l-[#F4F6F7] overflow-hidden bg-slate-200">
                              <img
                                src="/assets/aistudio/image_c68744d5.png"
                                alt="Leveling charcoal stone wall courses"
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover min-h-[180px] sm:min-h-[240px]"
                              />
                            </div>
                          </div>

                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54%] h-[54%] z-20 bg-[#135D54] border-4 border-[#15181C] p-1 shadow-xl">
                            <img
                              src="/assets/aistudio/image_cbcf01ad.png"
                              alt="Rigging retaining stone boulders"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6 space-y-5">
                        <div>
                          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                            Global Stone Craft
                          </p>
                          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1115] font-display-constra leading-tight mt-1">
                            Built On Bedrock Foundations Worldwide.
                          </h2>
                        </div>

                        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                          We pair structural rock engineering with traditional quarried stone craft for coastal estates, royal courtyards, and museum landmarks.
                        </p>

                        <div className="py-4 border-y border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                          <div className="sm:col-span-4">
                            <button
                              type="button"
                              onClick={() => openDetail({ kind: 'process', item: PROCESS_GALLERY[1] }, 'materials')}
                              className="w-full block border-4 border-t-[#135D54] border-l-[#135D54] border-r-[#15181C] border-b-[#15181C] overflow-hidden aspect-4/3 cursor-pointer group"
                              title="Open Preservation Plan Details"
                            >
                              <img
                                src={GENERATED_ASSETS.monumentPlanImg}
                                alt="Monument Preservation Plan"
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </button>
                          </div>
                          <div className="sm:col-span-8 space-y-3.5">
                            <div className="flex items-start gap-3">
                              <ShieldCheck className="w-7 h-7 text-[#135D54] shrink-0" />
                              <div>
                                <h4 className="text-base font-bold text-[#0E1115] font-display-constra">
                                  Quarry Tested Stone
                                </h4>
                                <p className="text-xs text-[#4B5563]">
                                  Every marble block and limestone slab is vetted at source.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Users className="w-7 h-7 text-[#135D54] shrink-0" />
                              <div>
                                <h4 className="text-base font-bold text-[#0E1115] font-display-constra">
                                  Direct Site Supervision
                                </h4>
                                <p className="text-xs text-[#4B5563]">
                                  Licensed geotechnical engineers and master masons on site.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-[#0E1115]">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#135D54] shrink-0" />
                            <span>Natural Quarried Stone</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#135D54] shrink-0" />
                            <span>Heritage Charters</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#135D54] shrink-0" />
                            <span>Master Stonemasons</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#135D54] shrink-0" />
                            <span>Global Site Delivery</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. WHY CHOOSE US */}
                <section className="w-full bg-[#F4F6F7] py-12 sm:py-16">
                  <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-8">
                    <div className="text-center max-w-xl mx-auto space-y-1.5">
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        Standards
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                        Engineering & Stone Permanence
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: <Building2 className="w-9 h-9 text-white" />,
                          title: 'Geotechnical Command',
                          desc: 'Bedrock micropiling, retaining walls, and concealed site drainage for steep terrain.'
                        },
                        {
                          icon: <Award className="w-9 h-9 text-white" />,
                          title: 'Premier Quarries',
                          desc: 'Direct blocks from Thassos, Tivoli, Istria, and Burgundy with gold and lapis inlay.'
                        },
                        {
                          icon: <Hammer className="w-9 h-9 text-white" />,
                          title: 'Museum Precision',
                          desc: 'Silent channeling and pozzolanic lime grouting built for protected historic structures.'
                        }
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="group bg-[#F4F6F7] hover:bg-white border border-slate-300/80 hover:border-transparent hover:shadow-xl p-7 sm:p-8 text-center transition-all duration-300 space-y-4"
                        >
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#135D54]">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 4. SERVICES SECTION */}
                <section className="w-full bg-white py-12 sm:py-16">
                  <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-8">
                    <div className="text-center max-w-2xl mx-auto space-y-1.5">
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        Disciplines
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                        Architectural & Heritage Services
                      </h2>
                    </div>

                    <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-1 whitespace-nowrap">
                      {[
                        { id: 'all', label: 'All Disciplines' },
                        { id: 'estates', label: 'Private Estates' },
                        { id: 'heritage', label: 'Museum & Heritage' },
                        { id: 'courtyards', label: 'Palaces & Sacred' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setHomeServiceSector(tab.id as typeof homeServiceSector)}
                          className={`px-4 py-2 text-xs sm:text-sm font-semibold shrink-0 transition-colors cursor-pointer ${
                            homeServiceSector === tab.id
                              ? 'bg-[#15181C] text-white'
                              : 'bg-[#F4F6F7] text-[#0E1115] hover:bg-[#135D54] hover:text-white'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredHomeServices.map((svc) => (
                        <div
                          key={svc.number}
                          onClick={() => openDetail({ kind: 'service', item: svc }, 'services')}
                          className="group relative h-[280px] sm:h-[300px] overflow-hidden bg-[#0E1115] cursor-pointer"
                        >
                          <img
                            src={svc.image}
                            alt={svc.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 transition-colors duration-300 z-10" />

                          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-14 h-14 bg-[#135D54] flex items-center justify-center mb-3">
                              {renderServiceIcon(svc.iconKey, 'w-7 h-7 text-white')}
                            </div>
                            <h3 className="text-xl font-bold text-white font-display-constra mb-1.5">
                              {svc.title}
                            </h3>
                            <p className="text-xs text-white/90 line-clamp-2 max-w-xs">
                              {svc.description}
                            </p>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 h-[68px] bg-[#F4F6F7] flex items-center justify-between z-20 transition-transform duration-300 group-hover:translate-x-full">
                            <div className="pl-5 pr-3 min-w-0">
                              <h4 className="text-base sm:text-lg font-bold text-[#0E1115] font-display-constra truncate">
                                {svc.title}
                              </h4>
                              <span className="text-[11px] font-medium text-[#135D54] block truncate">
                                {svc.categoryLabel}
                              </span>
                            </div>
                            <div className="w-[68px] h-[68px] shrink-0 bg-[#135D54] flex items-center justify-center">
                              {renderServiceIcon(svc.iconKey, 'w-6 h-6 text-white')}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-1">
                      <button
                        type="button"
                        onClick={() => handleNavigate('services')}
                        className="px-7 py-3 bg-[#15181C] hover:bg-[#135D54] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        All 8 Disciplines
                      </button>
                    </div>
                  </div>
                </section>

                {/* 5. FACTS BAND */}
                <section className="w-full bg-[#15181C] py-10 sm:py-14">
                  <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      {[
                        { icon: <Clock className="w-7 h-7 text-[#135D54]" />, label: 'Years Experience', value: '30+' },
                        { icon: <Building2 className="w-7 h-7 text-[#135D54]" />, label: 'Completed Works', value: '180+' },
                        { icon: <Users className="w-7 h-7 text-[#135D54]" />, label: 'Master Craftsmen', value: '64+' },
                        { icon: <Globe className="w-7 h-7 text-[#135D54]" />, label: 'Countries Served', value: '12+' }
                      ].map((stat, idx) => (
                        <div key={idx} className="bg-[#135D54] p-1.5">
                          <div className="bg-white p-5 text-center space-y-3">
                            <div className="flex justify-center">{stat.icon}</div>
                            <h3 className="text-sm sm:text-base font-bold text-[#0E1115] font-display-constra">
                              {stat.label}
                            </h3>
                            <div className="bg-[#15181C] py-2 px-3">
                              <span className="text-2xl sm:text-3xl font-bold text-[#4DB6A8] tabular-nums font-display-constra">
                                {stat.value}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 6. RECENT COMPLETED PROJECTS */}
                <section className="w-full bg-white py-12 sm:py-16">
                  <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-8">
                    <div className="text-center max-w-2xl mx-auto space-y-1.5">
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        Portfolio
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                        Recent Completed Projects
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {PROJECTS.slice(0, 4).map((project) => (
                        <article
                          key={project.id}
                          onClick={() => openDetail({ kind: 'project', item: project }, 'projects')}
                          className="group bg-white border border-slate-200 hover:border-[#135D54] hover:shadow-lg transition-all grid grid-cols-1 sm:grid-cols-12 overflow-hidden cursor-pointer"
                        >
                          <div className="sm:col-span-5 aspect-16/10 sm:aspect-auto sm:h-full overflow-hidden bg-slate-200">
                            <img
                              src={project.image}
                              alt={project.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="sm:col-span-7 p-5 flex flex-col justify-between space-y-3">
                            <div className="space-y-1.5">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#135D54] block">
                                {project.categoryLabel} · {project.year}
                              </span>
                              <h3 className="text-lg sm:text-xl font-bold text-[#0E1115] group-hover:text-[#135D54] transition-colors font-display-constra">
                                {project.title}
                              </h3>
                              <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-medium text-[#4B5563]">
                              <span>{project.location.split('·')[0].trim()}</span>
                              <span className="text-[#135D54] font-semibold">{project.scope}</span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => handleNavigate('projects')}
                        className="px-7 py-3 bg-[#15181C] hover:bg-[#135D54] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        Full Portfolio
                      </button>
                    </div>
                  </div>
                </section>

                {/* 7. MOVED UP BEFORE TEAM: STONE SAMPLES, SITE PLANS & MACRO DETAIL */}
                <section className="w-full bg-[#F4F6F7] py-12 sm:py-16">
                  <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-8">
                    <div className="text-center max-w-2xl mx-auto space-y-1.5">
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        Stone Library & Plans
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                        Quarrying, Site Plans & Specimen Detail
                      </h2>
                    </div>

                    <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-1 whitespace-nowrap">
                      {[
                        { id: 'all', label: 'Highlights' },
                        { id: 'studio', label: 'Studio Samples' },
                        { id: 'plans', label: 'Monument Plans' },
                        { id: 'macro', label: 'Macro Detail' },
                        { id: 'quarry', label: 'Quarry & Sawing' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setProcessFilter(tab.id as typeof processFilter)}
                          className={`px-4 py-2 text-xs sm:text-sm font-semibold shrink-0 transition-colors cursor-pointer ${
                            processFilter === tab.id
                              ? 'bg-[#15181C] text-white'
                              : 'bg-white text-[#0E1115] hover:bg-[#135D54] hover:text-white'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {homeFeaturedProcesses.map((item) => (
                        <article
                          key={item.id}
                          onClick={() => openDetail({ kind: 'process', item }, 'materials')}
                          className="group bg-white shadow-sm hover:shadow-xl border border-slate-200 hover:border-[#135D54] transition-all flex flex-col overflow-hidden cursor-pointer"
                        >
                          <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                            <img
                              src={item.image}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 w-8 h-8 bg-[#15181C]/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-[11px] font-semibold">
                                <span className="text-[#135D54]">{item.stage}</span>
                                <span className="uppercase text-[#15181C]">{item.categoryLabel}</span>
                              </div>
                              <h3 className="text-lg sm:text-xl font-bold text-[#0E1115] group-hover:text-[#135D54] transition-colors font-display-constra">
                                {item.title}
                              </h3>
                              <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="pt-2.5 border-t border-slate-100 text-[11px] font-medium text-[#0E1115] flex items-center justify-between">
                              <span>{item.specs[0]}</span>
                              <span className="text-[#135D54] font-semibold">Inspect Plate</span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>

                    <div className="text-center pt-1">
                      <button
                        type="button"
                        onClick={() => handleNavigate('materials')}
                        className="px-7 py-3 bg-[#15181C] hover:bg-[#135D54] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        All Samples & Materials
                      </button>
                    </div>
                  </div>
                </section>

                {/* 8. OUR TEAM (COMPACT + ROUND PORTRAITS + STRICT HIERARCHY ORDER) */}
                <section className="w-full bg-white py-8 sm:py-11">
                  <div className="max-w-[1140px] mx-auto px-4 sm:px-8 space-y-6">
                    <div className="text-center max-w-xl mx-auto space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        Leadership
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0E1115] font-display-constra">
                        Our Team
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                      {TEAM_MEMBERS.map((member) => (
                        <div
                          key={member.id}
                          onClick={() => openDetail({ kind: 'team', item: member }, 'team')}
                          className="group bg-[#F4F6F7] border border-slate-200 hover:border-[#135D54] hover:bg-white transition-all cursor-pointer p-4 text-center shadow-xs hover:shadow-md flex flex-col items-center"
                        >
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-[3px] border-[#135D54] ring-4 ring-white bg-slate-200 shrink-0 shadow-xs">
                            <img
                              src={member.image}
                              alt={member.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="mt-3 space-y-0.5">
                            <h3 className="text-sm sm:text-base font-bold text-[#0E1115] font-display-constra group-hover:text-[#135D54] transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-[11px] font-semibold text-[#135D54] leading-snug">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 9. COMPACT TESTIMONIALS (6 REVIEWS TOTAL, 3 VISIBLE PER PAGE) */}
                <section className="w-full bg-[#F4F6F7] py-7 sm:py-9 border-t border-slate-200/70">
                  <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                          Client Endorsements
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E1115] font-display-constra">
                          Testimonials
                        </h2>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#4B5563] mr-1 tabular-nums">
                          {Math.floor(reviewOffset / 3) + 1} / {Math.ceil(CLIENT_REVIEWS.length / 3)}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setReviewOffset((prev) => (prev - 3 + CLIENT_REVIEWS.length) % CLIENT_REVIEWS.length)
                          }
                          aria-label="Previous Testimonials"
                          className="w-8 h-8 bg-white border border-slate-300 hover:bg-[#135D54] hover:border-[#135D54] text-[#15181C] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setReviewOffset((prev) => (prev + 3) % CLIENT_REVIEWS.length)}
                          aria-label="Next Testimonials"
                          className="w-8 h-8 bg-white border border-slate-300 hover:bg-[#135D54] hover:border-[#135D54] text-[#15181C] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {visibleReviews.map((rev, idx) => (
                        <div key={`${reviewOffset}-${idx}`} className="bg-white p-4 sm:p-5 border border-slate-200 flex flex-col justify-between space-y-3 shadow-xs">
                          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed italic line-clamp-3">
                            "{rev.quote}"
                          </p>
                          <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-slate-100">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <img
                                src={rev.image}
                                alt={rev.organization}
                                referrerPolicy="no-referrer"
                                className="w-9 h-9 rounded-full object-cover border border-[#135D54] shrink-0"
                              />
                              <div className="min-w-0">
                                <h4 className="text-xs sm:text-sm font-bold text-[#0E1115] font-display-constra truncate">
                                  {rev.author}
                                </h4>
                                <p className="text-[11px] text-[#4B5563] truncate">
                                  {rev.organization}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-0.5 text-[#135D54] shrink-0">
                              {Array.from({ length: 5 }).map((_, starIdx) => (
                                <Star key={starIdx} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* ======================================================== */}
            {/* SUBPAGE: ABOUT */}
            {/* ======================================================== */}
            {activeTab === 'about' && (
              <div>
                {renderPageBanner('About Our Practice', 'About')}

                <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6">
                      <div className="constra-about-collage relative bg-[#F4F6F7] p-6 flex items-stretch gap-4 min-h-[360px] sm:min-h-[440px]">
                        <div className="w-1/2 pb-20 sm:pb-28 relative z-10">
                          <div className="h-full border-4 border-t-[#135D54] border-l-[#135D54] border-r-[#F4F6F7] border-b-[#F4F6F7] overflow-hidden">
                            <img
                              src="/assets/aistudio/image_7b5ac5d9.png"
                              alt="Natural quarry slabs yard"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover min-h-[200px]"
                            />
                          </div>
                        </div>
                        <div className="w-1/2 pt-20 sm:pt-28 relative z-10">
                          <div className="h-full border-4 border-r-[#135D54] border-b-[#135D54] border-t-[#F4F6F7] border-l-[#F4F6F7] overflow-hidden">
                            <img
                              src="/assets/aistudio/image_fa96adeb.png"
                              alt="Estate pool surround and stone wall"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover min-h-[200px]"
                            />
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54%] h-[54%] z-20 bg-[#135D54] border-4 border-[#15181C] p-1 shadow-xl">
                          <img
                            src={GENERATED_ASSETS.monumentPlanImg}
                            alt="Monument Preservation Plan"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-5">
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        Heritage & Engineering
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1115] font-display-constra leading-tight">
                        Monumental Stonework Across Continents
                      </h2>
                      <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        From coastal dolomite cliffs and historic European loggias to museum galleries and sacred courtyards, we partner with estates and cultural boards worldwide.
                      </p>
                      <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                        Licensed structural engineers work alongside master stonemasons on every project, vetting quarry consignments and bedrock foundations personally.
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => handleNavigate('projects')}
                          className="px-6 py-3 bg-[#135D54] hover:bg-[#15181C] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                        >
                          View Selected Works
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* ======================================================== */}
            {/* SUBPAGE: SERVICES */}
            {/* ======================================================== */}
            {activeTab === 'services' && (
              <div>
                {renderPageBanner('Architectural & Heritage Services', 'Services')}

                <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-12 sm:py-14 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
                    <div className="max-w-2xl space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        8 Core Disciplines
                      </p>
                      <h2 className="text-2xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                        Hardscaping, Museums & Conservation
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1">
                      {[
                        { id: 'all', label: 'All (8)' },
                        { id: 'estates', label: 'Private Estates' },
                        { id: 'heritage', label: 'Museum & Heritage' },
                        { id: 'courtyards', label: 'Palaces & Sacred' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setHomeServiceSector(tab.id as typeof homeServiceSector)}
                          className={`px-4 py-2 text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                            homeServiceSector === tab.id
                              ? 'bg-[#15181C] text-white'
                              : 'bg-[#F4F6F7] text-[#0E1115] hover:bg-[#135D54] hover:text-white'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredAllServices.map((svc) => (
                      <article
                        key={svc.number}
                        onClick={() => openDetail({ kind: 'service', item: svc }, 'services')}
                        className="group bg-white border border-slate-200 hover:border-[#135D54] hover:shadow-md transition-all grid grid-cols-1 sm:grid-cols-12 overflow-hidden cursor-pointer"
                      >
                        <div className="sm:col-span-5 relative aspect-16/10 sm:aspect-auto bg-slate-200">
                          <img
                            src={svc.image}
                            alt={svc.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-0 left-0 w-10 h-10 bg-[#135D54] flex items-center justify-center">
                            {renderServiceIcon(svc.iconKey, 'w-5 h-5 text-white')}
                          </div>
                        </div>

                        <div className="sm:col-span-7 p-5 flex flex-col justify-between space-y-3">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
                              <span className="text-[#135D54]">{svc.categoryLabel}</span>
                              <span className="text-[#15181C] tabular-nums">{svc.number}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra transition-colors">
                              {svc.title}
                            </h3>
                            <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                              {svc.description}
                            </p>
                          </div>

                          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-[#4B5563]">
                              Lead: <strong className="text-[#0E1115]">{svc.director}</strong>
                            </span>
                            <span className="text-[#135D54] font-semibold">{svc.leadTime}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ======================================================== */}
            {/* SUBPAGE: PROJECTS */}
            {/* ======================================================== */}
            {activeTab === 'projects' && (
              <div>
                {renderPageBanner('International Commissions', 'Projects')}

                <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-12 sm:py-14 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        Portfolio
                      </p>
                      <h2 className="text-2xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                        Selected Global Stonework
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1">
                      {[
                        { id: 'all', label: 'All Works' },
                        { id: 'terraces', label: 'Clifftop & Terraces' },
                        { id: 'pools', label: 'Water & Pools' },
                        { id: 'courtyards', label: 'Courtyards' },
                        { id: 'heritage', label: 'Museum & Heritage' }
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`px-4 py-2 text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                            selectedCategory === cat.id
                              ? 'bg-[#15181C] text-white'
                              : 'bg-[#F4F6F7] text-[#0E1115] hover:bg-[#135D54] hover:text-white'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                      <article
                        key={project.id}
                        onClick={() => openDetail({ kind: 'project', item: project }, 'projects')}
                        className="group bg-white border border-slate-200 hover:border-[#135D54] hover:shadow-lg transition-all flex flex-col overflow-hidden cursor-pointer"
                      >
                        <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                          <img
                            src={project.image}
                            alt={project.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-[#15181C] text-white px-2.5 py-1 text-[11px] font-semibold tabular-nums">
                            {project.scope}
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                          <div className="space-y-1.5">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#135D54] block">
                              {project.categoryLabel}
                            </span>
                            <h3 className="text-xl font-bold text-[#0E1115] group-hover:text-[#135D54] transition-colors font-display-constra">
                              {project.title}
                            </h3>
                            <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-[#4B5563]">{project.location.split('·')[0].trim()}</span>
                            <span className="text-[#135D54] font-semibold">{project.year}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ======================================================== */}
            {/* SUBPAGE: MATERIALS, QUARRY PROCESSES & PLANS */}
            {/* ======================================================== */}
            {activeTab === 'materials' && (
              <div>
                {renderPageBanner('Materials, Stone Samples & Plans', 'Materials & Craft')}

                <section className="w-full bg-[#F4F6F7] py-12 sm:py-14 border-b border-slate-200">
                  <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-300/70 pb-5">
                      <div className="max-w-2xl space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                          Sample Plates & Drawings
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                          Specimens, Site Plans & Craft Detail
                        </h2>
                      </div>

                      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1">
                        {[
                          { id: 'all', label: `All (${PROCESS_GALLERY.length})` },
                          { id: 'studio', label: 'Studio Samples' },
                          { id: 'plans', label: 'Site Plans' },
                          { id: 'macro', label: 'Macro Detail' },
                          { id: 'quarry', label: 'Quarry & Sawing' }
                        ].map((f) => (
                          <button
                            key={f.id}
                            type="button"
                            onClick={() => setProcessFilter(f.id as typeof processFilter)}
                            className={`px-4 py-2 text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                              processFilter === f.id
                                ? 'bg-[#15181C] text-white'
                                : 'bg-white text-[#0E1115] hover:bg-[#135D54] hover:text-white'
                            }`}
                          >
                            {f.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProcesses.map((item) => (
                        <article
                          key={item.id}
                          onClick={() => openDetail({ kind: 'process', item }, 'materials')}
                          className="group bg-white border border-slate-200 hover:border-[#135D54] hover:shadow-xl transition-all flex flex-col overflow-hidden cursor-pointer"
                        >
                          <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                            <img
                              src={item.image}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 bg-[#15181C] text-white px-2.5 py-1 text-[11px] font-semibold">
                              {item.stage}
                            </div>
                          </div>
                          <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                            <div className="space-y-1.5">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#135D54] block">
                                {item.subtitle}
                              </span>
                              <h3 className="text-xl font-bold text-[#0E1115] group-hover:text-[#135D54] transition-colors font-display-constra">
                                {item.title}
                              </h3>
                              <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                              <span className="text-[#0E1115] font-medium truncate max-w-[190px]">
                                {item.specs[0]}
                              </span>
                              <span className="text-[#135D54] font-semibold">Inspect Plate</span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-12 sm:py-14 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
                    <div className="max-w-2xl space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                        Certified Quarries
                      </p>
                      <h2 className="text-2xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                        Imperial Stone & Inlay Catalog
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1">
                      {[
                        { id: 'all', label: `All (${LUXURY_MATERIALS.length})` },
                        { id: 'marble', label: 'Marbles' },
                        { id: 'travertine', label: 'Travertines & Limestone' },
                        { id: 'inlay', label: 'Inlays & Gold' },
                        { id: 'granite', label: 'Basalt & Granite' }
                      ].map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedMaterialCategory(c.id)}
                          className={`px-4 py-2 text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                            selectedMaterialCategory === c.id
                              ? 'bg-[#15181C] text-white'
                              : 'bg-[#F4F6F7] text-[#0E1115] hover:bg-[#135D54] hover:text-white'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMaterials.map((mat) => (
                      <article
                        key={mat.id}
                        onClick={() => openDetail({ kind: 'material', item: mat }, 'materials')}
                        className="group bg-white border border-slate-200 hover:border-[#135D54] hover:shadow-lg transition-all flex flex-col overflow-hidden cursor-pointer"
                      >
                        <div className="aspect-16/9 overflow-hidden bg-slate-200">
                          <img
                            src={mat.image}
                            alt={mat.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] font-semibold">
                              <span className="text-[#135D54] uppercase tracking-wider">{mat.provenance}</span>
                              <span className="text-[#15181C] uppercase">{mat.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra transition-colors">
                              {mat.name}
                            </h3>
                            <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                              {mat.description}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-slate-100 text-[11px] text-[#4B5563] truncate">
                            {mat.characteristics.slice(0, 3).join(' · ')}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ======================================================== */}
            {/* SUBPAGE: TEAM */}
            {/* ======================================================== */}
            {activeTab === 'team' && (
              <div>
                {renderPageBanner('Directorate & Master Craftsmen', 'Our Team')}

                <section className="max-w-[1140px] mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-6">
                  <div className="max-w-2xl space-y-1 border-b border-slate-200 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                      Executive Leadership
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0E1115] font-display-constra">
                      Principals & Technical Directors
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {TEAM_MEMBERS.map((member, index) => (
                      <article
                        key={member.id}
                        onClick={() => openDetail({ kind: 'team', item: member }, 'team')}
                        className="group bg-white border border-slate-200 p-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-xs hover:border-[#135D54] hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-full overflow-hidden border-[3px] border-[#135D54] ring-4 ring-[#F4F6F7] bg-slate-200">
                          <img
                            src={member.image}
                            alt={member.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="space-y-1 flex-1">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#135D54] block">
                            0{index + 1} · {member.role}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-[#0E1115] group-hover:text-[#135D54] font-display-constra transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-xs font-medium text-[#15181C] italic">
                            {member.specialty}
                          </p>
                          <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2 pt-0.5">
                            {member.bio}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ======================================================== */}
            {/* SUBPAGE: CONTACT */}
            {/* ======================================================== */}
            {activeTab === 'contact' && (
              <div>
                {renderPageBanner('Global Inquiries', 'Contact')}

                <section className="max-w-[1320px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    <div className="lg:col-span-6 space-y-5">
                      <div className="space-y-1.5">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#135D54]">
                          Direct Consultation
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1115] font-display-constra">
                          Project Inquiry
                        </h2>
                        <p className="text-xs sm:text-sm text-[#4B5563]">
                          For private estates, museum modernization, and monument preservation worldwide.
                        </p>
                      </div>

                      {formSubmitted ? (
                        <div className="bg-[#F4F6F7] border-2 border-[#135D54] p-8 text-center space-y-4">
                          <div className="w-12 h-12 bg-[#15181C] text-[#4DB6A8] mx-auto flex items-center justify-center">
                            <Check className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#0E1115] font-display-constra">
                            Inquiry Sent
                          </h3>
                          <p className="text-sm text-[#4B5563] max-w-md mx-auto">
                            Your note has been routed to our Toronto office for review within one business day.
                          </p>
                          <button
                            type="button"
                            onClick={() => setFormSubmitted(false)}
                            className="px-6 py-2.5 bg-[#15181C] hover:bg-[#135D54] text-white text-xs font-semibold transition-colors cursor-pointer"
                          >
                            New Inquiry
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                              type="text"
                              required
                              placeholder="Full Name *"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3.5 bg-white border border-[#135D54] text-sm text-[#0E1115] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#15181C]"
                            />
                            <input
                              type="email"
                              required
                              placeholder="Email Address *"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3.5 bg-white border border-[#135D54] text-sm text-[#0E1115] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#15181C]"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3.5 bg-white border border-[#135D54] text-sm text-[#0E1115] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#15181C]"
                            />
                            <select
                              value={formData.projectType}
                              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                              className="w-full px-4 py-3.5 bg-white border border-[#135D54] text-sm text-[#0E1115] focus:outline-none focus:ring-1 focus:ring-[#15181C]"
                            >
                              <option>Clifftop & Island Terraces</option>
                              <option>Museum Atrium Modernization</option>
                              <option>Monument Preservation</option>
                              <option>Sacred & Royal Courtyards</option>
                              <option>Palace Water Amphitheaters</option>
                              <option>Stone Sample Box Request</option>
                            </select>
                          </div>

                          <input
                            type="text"
                            placeholder="Site City & Country"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-4 py-3.5 bg-white border border-[#135D54] text-sm text-[#0E1115] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#15181C]"
                          />

                          <textarea
                            rows={4}
                            placeholder="Brief outline of site conditions, preferred stone, and timeline..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3.5 bg-white border border-[#135D54] text-sm text-[#0E1115] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#15181C]"
                          />

                          <button
                            type="submit"
                            className="w-full py-3.5 bg-[#15181C] hover:bg-[#135D54] text-white text-sm font-semibold transition-colors cursor-pointer"
                          >
                            Send Inquiry
                          </button>
                        </form>
                      )}
                    </div>

                    <div className="lg:col-span-6 flex items-stretch">
                      <div className="constra-corner-frame w-full flex flex-col">
                        <div className="bg-white p-6 flex-1 flex flex-col justify-between space-y-5 border border-slate-200">
                          <div className="space-y-4">
                            <div>
                              <span className="text-xs font-semibold uppercase tracking-wider text-[#135D54]">
                                Headquarters
                              </span>
                              <h3 className="text-2xl font-bold text-[#0E1115] font-display-constra mt-1">
                                Toronto Central Directorate
                              </h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                              <div className="bg-[#F4F6F7] p-4 space-y-1">
                                <div className="flex items-center gap-2 font-semibold text-[#0E1115]">
                                  <MapPin className="w-4 h-4 text-[#135D54]" />
                                  <span>Office</span>
                                </div>
                                <p className="text-[#4B5563]">100 King Street West, Suite 5600</p>
                                <p className="text-[#4B5563]">Toronto, ON M5X 1C9, Canada</p>
                              </div>

                              <div className="bg-[#F4F6F7] p-4 space-y-1">
                                <div className="flex items-center gap-2 font-semibold text-[#0E1115]">
                                  <Phone className="w-4 h-4 text-[#135D54]" />
                                  <span>Direct Line</span>
                                </div>
                                <a
                                  href="tel:+18679881524"
                                  className="text-[#15181C] font-semibold hover:text-[#135D54] block"
                                >
                                  +1 (867) 988 1524
                                </a>
                                <a
                                  href="mailto:aureusmonument@email.com"
                                  className="text-[#4B5563] hover:text-[#135D54] block truncate"
                                >
                                  aureusmonument@email.com
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="w-full h-[250px] sm:h-[280px] bg-slate-200 overflow-hidden border border-slate-200">
                            <iframe
                              title="Toronto Global Headquarters Map"
                              className="w-full h-full border-0"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              src="https://www.openstreetmap.org/export/embed.html?bbox=-79.3871%2C43.6458%2C-79.3765%2C43.6512&layer=mapnik&marker=43.6485%2C-79.3818"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </>
        )}
      </main>

      {/* FULL SCALE IMAGE LIGHTBOX (ONLY WHEN EXPANDING A SAMPLE OR PROJECT PHOTO) */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-6xl w-full flex flex-col items-center space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between text-white">
              <span className="text-sm sm:text-base font-display-constra font-semibold">{zoomImage.title}</span>
              <button
                type="button"
                onClick={() => setZoomImage(null)}
                aria-label="Close expanded plate"
                className="w-9 h-9 bg-[#135D54] hover:bg-white text-white hover:text-[#15181C] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={zoomImage.src}
              alt={zoomImage.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[82vh] object-contain bg-[#0E1115]"
            />
          </div>
        </div>
      )}

      {/* COMPACT FOOTER */}
      <footer className="w-full bg-[#15181C] text-white/80 py-7 sm:py-9 border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleLogoClick}
                className="flex items-center gap-2 text-left cursor-pointer focus:outline-none"
              >
                <BespokeLogo className="w-7 h-7 shrink-0" variant="light" />
                <span className="text-base sm:text-lg font-bold text-white font-display-constra tracking-tight">
                  AUREUS & MONUMENT
                </span>
              </button>
              <p className="text-xs text-white/70 leading-relaxed">
                Quarry availability bulletins and seasonal architectural notes.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="relative flex">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full py-2 pl-3 pr-20 bg-white text-xs text-[#0E1115] focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#135D54] hover:bg-[#15181C] text-white text-[11px] font-semibold transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white font-display-constra">Explore</h4>
              <ul className="space-y-1.5 text-xs">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'materials', label: 'Materials & Plans' },
                  { id: 'team', label: 'Our Team' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(item.id as TabType)}
                      className="flex items-center gap-1.5 text-white/75 hover:text-[#4DB6A8] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-3 h-3 text-[#4DB6A8]" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white font-display-constra">Disciplines</h4>
              <ul className="space-y-1.5 text-xs">
                {SERVICES_LIST.slice(0, 4).map((svc) => (
                  <li key={svc.number}>
                    <button
                      type="button"
                      onClick={() => openDetail({ kind: 'service', item: svc }, 'services')}
                      className="flex items-center gap-1.5 text-white/75 hover:text-[#4DB6A8] transition-colors text-left cursor-pointer"
                    >
                      <ChevronRight className="w-3 h-3 text-[#4DB6A8] shrink-0" />
                      <span className="truncate">{svc.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 text-xs text-white/75">
              <h4 className="text-sm font-bold text-white font-display-constra">Toronto Office</h4>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4DB6A8] shrink-0 mt-0.5" />
                <span>100 King Street West, Suite 5600, Toronto, ON M5X 1C9</span>
              </div>
              <a
                href="mailto:aureusmonument@email.com"
                className="flex items-center gap-2 hover:text-[#4DB6A8] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#4DB6A8] shrink-0" />
                <span>aureusmonument@email.com</span>
              </a>
              <a
                href="tel:+18679881524"
                className="flex items-center gap-2 hover:text-[#4DB6A8] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#4DB6A8] shrink-0" />
                <span>+1 (867) 988 1524</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* SLIM COPYRIGHT BAR */}
      <div className="w-full bg-[#0E1115] border-t border-white/10 py-3 text-[11px] text-white/70">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            © 2026 <strong className="text-white">Aureus & Monument Atelier</strong>.
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavigate('materials')}
              className="hover:text-[#4DB6A8] transition-colors cursor-pointer"
            >
              Quarry Provenance
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => handleNavigate('contact')}
              className="hover:text-[#4DB6A8] transition-colors cursor-pointer"
            >
              Consultation Desk
            </button>
          </div>
        </div>
      </div>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-10 h-10 bg-[#135D54] hover:bg-[#15181C] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
